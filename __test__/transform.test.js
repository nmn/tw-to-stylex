/**
 * @flow strict
 */

"use strict";

import fs from "fs";
import path from "path";

jest.autoMockOff();

import { tailwindToStylex } from "../src/index";

const fixturesPath = path.join(__dirname, "__fixtures__");
const fixtures = fs.readdirSync(fixturesPath).map((fixture) => {
  return [fixture, fs.readFileSync(path.join(fixturesPath, fixture), "utf-8")];
});

describe("tailwind-to-stylex - fixtures", () => {
  fixtures.forEach(([fileName, fixture]) => {
    test(`transforms ${fileName}`, async () => {
      const result = await tailwindToStylex(fixture);
      expect(result).toMatchSnapshot();
    });
  });
});
