/**
 * @flow strict
 */

"use strict";

jest.autoMockOff();

import { tailwindToStylex } from "../src/index";

describe("tailwind-to-stylex small examples", () => {
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
           default: "#22c55e",
           ":hover": "#ef4444"
         }
       }
     });"
    `);
  });

  test("transforms simple example", async () => {
    const input = `
    function Component() {
      return <div className="relative w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64" />
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
         position: "relative",
         width: {
           default: "100%",
           "@media (width >= 48rem)": "10rem",
           "@media (width >= 64rem)": "16rem"
         },
         justifyContent: "flex-start",
         fontSize: ".875rem",
         lineHeight: "1.25rem",
         paddingRight: {
           default: null,
           "@media (width >= 40rem)": "3rem"
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
         inset: "0",
         zIndex: "50",
         backgroundColor: "#09090b99"
       },
       $2: {
         insetInline: "0",
         position: "fixed",
         bottom: "0",
         zIndex: "50",
         marginTop: "6rem",
         height: "96%",
         borderTopLeftRadius: "10px",
         borderTopRightRadius: "10px"
       },
       $3: {
         position: "absolute",
         top: ".75rem",
         left: "50%",
         height: ".5rem",
         width: "100px",
         "--tw-translate-x": "-50%",
         translate: "var(--tw-translate-x) var(--tw-translate-y)",
         borderRadius: "3.40282e38px"
       }
     });"
    `);
  });
});
