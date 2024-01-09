/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 */

"use strict";

import fs from "fs";
import path from "path";

jest.autoMockOff();

import tailwindToStylex from "../src/index";

const fixturesPath = path.join(__dirname, "__fixtures__");
const fixtures = fs.readdirSync(fixturesPath).map((fixture) => {
  return [fixture, fs.readFileSync(path.join(fixturesPath, fixture), "utf-8")];
});

describe("tailwind-to-stylex", () => {
  test("transforms simple example", async () => {
    const input = `
    function Component() {
      return <div className="flex bg-green-500 hover:bg-red-500 other" />
    }
    `;

    const result = await tailwindToStylex(input);
    expect(result).toMatchInlineSnapshot(`
      "import * as _stylex from "@stylexjs/stylex";
      function Component() {
        return <div {..._stylex.props(_styles.$1)} />;
      }
      const _styles = _stylex.create({
        $1: {
          display: "flex",
          backgroundColor: {
            default: "#10B981",
            ":hover": "#EF4444"
          }
        }
      });"
    `);
  });

  test("transforms tailwind being used and merged on custom components", async () => {
    const input = `
      const DrawerContent = ({ className, children, ...props }) => (
        <DrawerPrimitive.Portal>
          <DrawerPrimitive.Overlay className="fixed inset-0 z-50 bg-zinc-950/60" />
          <DrawerPrimitive.Content
            ref={ref}
            className={cn(
              "fixed inset-x-0 bottom-0 z-50 mt-24 h-[96%] rounded-t-[10px] bg-background",
              className
            )}
            {...props}
          >
            <div className="absolute left-1/2 top-3 h-2 w-[100px] translate-x-[-50%] rounded-full bg-muted" />
            {children}
          </DrawerPrimitive.Content>
        </DrawerPrimitive.Portal>
      );
    `;
    const result = await tailwindToStylex(input);
    expect(result).toMatchInlineSnapshot(`
     "import * as _stylex from "@stylexjs/stylex";
     const DrawerContent = ({
       className,
       children,
       ...props
     }) => <DrawerPrimitive.Portal>
               <DrawerPrimitive.Overlay className={_styles.$1} />
               <DrawerPrimitive.Content ref={ref} className={[_styles.$2, className]} {...props}>
                 <div {..._stylex.props(_styles.$3)} />
                 {children}
               </DrawerPrimitive.Content>
             </DrawerPrimitive.Portal>;
     const _styles = _stylex.create({
       $1: {
         position: "fixed",
         top: "0",
         right: "0",
         bottom: "0",
         left: "0",
         zIndex: 50
       },
       $2: {
         position: "fixed",
         right: "0",
         left: "0",
         bottom: "0",
         zIndex: 50,
         marginTop: "6rem",
         height: "96%"
       },
       $3: {
         position: "absolute",
         top: "0.75rem",
         left: "50%",
         borderRadius: "9999px",
         height: "0.5rem",
         width: "100px"
       }
     });"
    `);
  });

  fixtures.forEach(([fileName, fixture]) => {
    test(`transforms ${fileName}`, async () => {
      const result = await tailwindToStylex(fixture);
      expect(result).toMatchSnapshot();
    });
  });
});
