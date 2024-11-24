/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 */

"use strict";

import { makeCompiler } from "../src/classes-to-css";
import { convertFromCssToJss } from "../src/helpers";

jest.autoMockOff();

describe("tailwind-to-stylex converting individual classnames", () => {
  let convert;
  beforeAll(async () => {
    const compile = await makeCompiler();

    convert = (classNames: string) => {
      let resultCss, resultJSS;
      try {
        resultCss = compile(classNames);
        resultJSS = convertFromCssToJss(classNames, resultCss);
        return resultJSS;
      } catch {
        console.log("Error converting", classNames);
        console.log("CSS Result:", resultCss);
        console.log("JSS Result:", resultJSS, "\n\n\n\n");
        return null;
      }
    };
  });

  test("converts simple classnames", () => {
    expect(convert("p-4 bg-gray-100 text-gray-800")).toMatchInlineSnapshot(`
     {
       "backgroundColor": "#f3f4f6",
       "color": "#1f2937",
       "padding": "1rem",
     }
    `);
    expect(convert("m-2 border rounded-lg shadow")).toMatchInlineSnapshot(`
     {
       "--tw-shadow": "0 1px 3px 0 #0000001a, 0 1px 2px -1px #0000001a",
       "--tw-shadow-colored": "0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color)",
       "borderRadius": ".5rem",
       "borderStyle": "var(--tw-border-style)",
       "borderWidth": "1px",
       "boxShadow": "var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)",
       "margin": ".5rem",
     }
    `);
    expect(convert("w-1/2 mx-auto text-center text-lg font-bold"))
      .toMatchInlineSnapshot(`
     {
       "fontSize": "1.125rem",
       "fontWeight": "700",
       "lineHeight": "1.75rem",
       "marginInline": "auto",
       "textAlign": "center",
       "width": "50%",
     }
    `);
    expect(convert("flex items-center justify-between gap-4"))
      .toMatchInlineSnapshot(`
     {
       "alignItems": "center",
       "display": "flex",
       "gap": "1rem",
       "justifyContent": "space-between",
     }
    `);
    expect(
      convert("absolute top-0 left-0 h-full w-full bg-opacity-50 bg-black")
    ).toMatchInlineSnapshot(`
     {
       "backgroundColor": "#000",
       "height": "100%",
       "left": "0",
       "position": "absolute",
       "top": "0",
       "width": "100%",
     }
    `);
    expect(convert("text-4xl font-extrabold text-blue-600 mb-4"))
      .toMatchInlineSnapshot(`
     {
       "color": "#2563eb",
       "fontSize": "2.25rem",
       "fontWeight": "800",
       "lineHeight": "2.5rem",
       "marginBottom": "1rem",
     }
    `);
    expect(convert("text-sm leading-relaxed text-gray-700"))
      .toMatchInlineSnapshot(`
     {
       "color": "#374151",
       "fontSize": ".875rem",
       "lineHeight": "1.625",
     }
    `);
    expect(convert("uppercase tracking-wide text-xs text-red-500"))
      .toMatchInlineSnapshot(`
     {
       "color": "#ef4444",
       "fontSize": ".75rem",
       "letterSpacing": ".025em",
       "lineHeight": "1rem",
       "textTransform": "uppercase",
     }
    `);
    expect(convert("italic border-l-4 pl-4 text-gray-500"))
      .toMatchInlineSnapshot(`
     {
       "borderLeftStyle": "var(--tw-border-style)",
       "borderLeftWidth": "4px",
       "color": "#6b7280",
       "fontStyle": "italic",
       "paddingLeft": "1rem",
     }
    `);
    expect(convert("bg-gray-200 px-2 py-1 rounded text-xs font-mono"))
      .toMatchInlineSnapshot(`
     {
       "backgroundColor": "#e5e7eb",
       "borderRadius": ".25rem",
       "fontFamily": "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
       "fontSize": ".75rem",
       "lineHeight": "1rem",
       "paddingBlock": ".25rem",
       "paddingInline": ".5rem",
     }
    `);
    expect(convert("flex flex-col items-center justify-center h-screen"))
      .toMatchInlineSnapshot(`
     {
       "alignItems": "center",
       "display": "flex",
       "flexDirection": "column",
       "height": "100vh",
       "justifyContent": "center",
     }
    `);
    expect(convert("grid grid-cols-3 gap-4")).toMatchInlineSnapshot(`
     {
       "display": "grid",
       "gap": "1rem",
       "gridTemplateColumns": "repeat(3, minmax(0, 1fr))",
     }
    `);
    expect(convert("absolute bottom-0 right-0 p-2 bg-red-500"))
      .toMatchInlineSnapshot(`
     {
       "backgroundColor": "#ef4444",
       "bottom": "0",
       "padding": ".5rem",
       "position": "absolute",
       "right": "0",
     }
    `);
    expect(convert("relative overflow-hidden rounded-md shadow-lg"))
      .toMatchInlineSnapshot(`
     {
       "--tw-shadow": "0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a",
       "--tw-shadow-colored": "0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color)",
       "borderRadius": ".375rem",
       "boxShadow": "var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)",
       "overflow": "hidden",
       "position": "relative",
     }
    `);
    expect(convert("sticky top-0 bg-white z-10 shadow-sm"))
      .toMatchInlineSnapshot(`
     {
       "--tw-shadow": "0 1px 2px 0 #0000000d",
       "--tw-shadow-colored": "0 1px 2px 0 var(--tw-shadow-color)",
       "backgroundColor": "#fff",
       "boxShadow": "var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)",
       "position": "sticky",
       "top": "0",
       "zIndex": "10",
     }
    `);
    expect(convert("px-4 py-2 bg-blue-500 text-white rounded"))
      .toMatchInlineSnapshot(`
     {
       "backgroundColor": "#3b82f6",
       "borderRadius": ".25rem",
       "color": "#fff",
       "paddingBlock": ".5rem",
       "paddingInline": "1rem",
     }
    `);
    expect(convert("text-center text-gray-600")).toMatchInlineSnapshot(`
     {
       "color": "#4b5563",
       "textAlign": "center",
     }
    `);
    expect(
      convert("inline-block bg-green-500 text-white py-1 px-3 rounded-full")
    ).toMatchInlineSnapshot(`
     {
       "backgroundColor": "#22c55e",
       "borderRadius": "3.40282e38px",
       "color": "#fff",
       "display": "inline-block",
       "paddingBlock": ".25rem",
       "paddingInline": ".75rem",
     }
    `);
    expect(convert("hover:bg-indigo-600 transition duration-300"))
      .toMatchInlineSnapshot(`
     {
       "backgroundColor": {
         ":hover": "#4f46e5",
         "default": null,
       },
       "transitionDuration": ".3s",
       "transitionProperty": "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, -webkit-backdrop-filter, backdrop-filter",
       "transitionTimingFunction": "cubic-bezier(.4, 0, .2, 1)",
     }
    `);
    expect(convert("focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"))
      .toMatchInlineSnapshot(`
     {
       "--tw-ring-color": {
         ":focus": "#3b82f6",
         "default": null,
       },
       "--tw-ring-offset-shadow": {
         ":focus": "var(--tw-ring-inset, ) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
         "default": null,
       },
       "--tw-ring-offset-width": {
         ":focus": "2px",
         "default": null,
       },
       "--tw-ring-shadow": {
         ":focus": "var(--tw-ring-inset, ) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentColor)",
         "default": null,
       },
       "boxShadow": {
         ":focus": "var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)",
         "default": null,
       },
     }
    `);
    expect(convert("rounded-lg shadow-md bg-white p-6")).toMatchInlineSnapshot(`
     {
       "--tw-shadow": "0 4px 6px -1px #0000001a, 0 2px 4px -2px #0000001a",
       "--tw-shadow-colored": "0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color)",
       "backgroundColor": "#fff",
       "borderRadius": ".5rem",
       "boxShadow": "var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)",
       "padding": "1.5rem",
     }
    `);
    expect(convert("overflow-hidden border border-gray-300 rounded"))
      .toMatchInlineSnapshot(`
     {
       "borderColor": "#d1d5db",
       "borderRadius": ".25rem",
       "borderStyle": "var(--tw-border-style)",
       "borderWidth": "1px",
       "overflow": "hidden",
     }
    `);
    expect(
      convert(
        "h-10 w-10 bg-gray-200 flex items-center justify-center rounded-full"
      )
    ).toMatchInlineSnapshot(`
     {
       "alignItems": "center",
       "backgroundColor": "#e5e7eb",
       "borderRadius": "3.40282e38px",
       "display": "flex",
       "height": "2.5rem",
       "justifyContent": "center",
       "width": "2.5rem",
     }
    `);
    expect(convert("text-xl font-semibold text-purple-700"))
      .toMatchInlineSnapshot(`
     {
       "color": "#7e22ce",
       "fontSize": "1.25rem",
       "fontWeight": "600",
       "lineHeight": "1.75rem",
     }
    `);
    expect(convert("hover:underline text-red-400")).toMatchInlineSnapshot(`
     {
       "color": "#f87171",
       "textDecorationLine": {
         ":hover": "underline",
         "default": null,
       },
     }
    `);
    expect(convert("mt-4 mb-8 mx-auto max-w-2xl")).toMatchInlineSnapshot(`
     {
       "marginBottom": "2rem",
       "marginInline": "auto",
       "marginTop": "1rem",
       "maxWidth": "42rem",
     }
    `);
    expect(convert("lg:grid lg:grid-cols-2 lg:gap-6")).toMatchInlineSnapshot(`
     {
       "display": {
         "@media (width >= 64rem)": "grid",
         "default": null,
       },
       "gap": {
         "@media (width >= 64rem)": "1.5rem",
         "default": null,
       },
       "gridTemplateColumns": {
         "@media (width >= 64rem)": "repeat(2, minmax(0, 1fr))",
         "default": null,
       },
     }
    `);
    expect(convert("sm:rounded-md sm:border sm:p-4")).toMatchInlineSnapshot(`
     {
       "borderRadius": {
         "@media (width >= 40rem)": ".375rem",
         "default": null,
       },
       "borderStyle": {
         "@media (width >= 40rem)": "var(--tw-border-style)",
         "default": null,
       },
       "borderWidth": {
         "@media (width >= 40rem)": "1px",
         "default": null,
       },
       "padding": {
         "@media (width >= 40rem)": "1rem",
         "default": null,
       },
     }
    `);
    expect(convert("hidden md:block lg:flex")).toMatchInlineSnapshot(`
     {
       "display": {
         "@media (width >= 48rem)": "block",
         "@media (width >= 64rem)": "flex",
         "default": "none",
       },
     }
    `);
    expect(convert("animate-spin text-blue-400")).toMatchInlineSnapshot(`
     {
       "animation": "1s linear infinite spin",
       "color": "#60a5fa",
     }
    `);
    expect(convert("shadow-lg border-t-4 border-blue-500"))
      .toMatchInlineSnapshot(`
     {
       "--tw-shadow": "0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a",
       "--tw-shadow-colored": "0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color)",
       "borderColor": "#3b82f6",
       "borderTopStyle": "var(--tw-border-style)",
       "borderTopWidth": "4px",
       "boxShadow": "var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)",
     }
    `);
    expect(convert("rounded-full h-16 w-16 bg-yellow-300"))
      .toMatchInlineSnapshot(`
     {
       "backgroundColor": "#fde047",
       "borderRadius": "3.40282e38px",
       "height": "4rem",
       "width": "4rem",
     }
    `);
    expect(convert("flex-grow bg-gray-50 text-gray-700"))
      .toMatchInlineSnapshot(`
     {
       "backgroundColor": "#f9fafb",
       "color": "#374151",
     }
    `);
    expect(convert("cursor-pointer hover:bg-gray-200")).toMatchInlineSnapshot(`
     {
       "backgroundColor": {
         ":hover": "#e5e7eb",
         "default": null,
       },
       "cursor": "pointer",
     }
    `);
    expect(convert("bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"))
      .toMatchInlineSnapshot(`
     {
       "--tw-gradient-from": "#c084fc",
       "--tw-gradient-stops": "var(--tw-gradient-via-stops, var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))",
       "--tw-gradient-to": "#ef4444",
       "--tw-gradient-via": "#ec4899",
       "--tw-gradient-via-stops": "var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position)",
       "backgroundImage": "linear-gradient(to right, var(--tw-gradient-stops, ))",
     }
    `);
    expect(convert("text-left font-light text-sm")).toMatchInlineSnapshot(`
     {
       "fontSize": ".875rem",
       "fontWeight": "300",
       "lineHeight": "1.25rem",
       "textAlign": "left",
     }
    `);
    expect(convert("uppercase text-xs tracking-wider text-gray-600"))
      .toMatchInlineSnapshot(`
     {
       "color": "#4b5563",
       "fontSize": ".75rem",
       "letterSpacing": ".05em",
       "lineHeight": "1rem",
       "textTransform": "uppercase",
     }
    `);
    expect(convert("border-b-2 border-dotted border-gray-400"))
      .toMatchInlineSnapshot(`
     {
       "--tw-border-style": "dotted",
       "borderBottomStyle": "var(--tw-border-style)",
       "borderBottomWidth": "2px",
       "borderColor": "#9ca3af",
       "borderStyle": "dotted",
     }
    `);
    expect(convert("ring-1 ring-gray-200 focus:ring-indigo-500"))
      .toMatchInlineSnapshot(`
     {
       "--tw-ring-color": {
         ":focus": "#6366f1",
         "default": "#e5e7eb",
       },
       "--tw-ring-shadow": "var(--tw-ring-inset, ) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentColor)",
       "boxShadow": "var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)",
     }
    `);
    expect(convert("hover:scale-105 transform transition ease-in-out"))
      .toMatchInlineSnapshot(`
     {
       "--tw-scale-x": {
         ":hover": "105%",
         "default": null,
       },
       "--tw-scale-y": {
         ":hover": "105%",
         "default": null,
       },
       "--tw-scale-z": {
         ":hover": "105%",
         "default": null,
       },
       "scale": {
         ":hover": "var(--tw-scale-x) var(--tw-scale-y)",
         "default": null,
       },
       "transform": "var(--tw-rotate-x) var(--tw-rotate-y) var(--tw-rotate-z) var(--tw-skew-x) var(--tw-skew-y)",
       "transitionDuration": ".15s",
       "transitionProperty": "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, -webkit-backdrop-filter, backdrop-filter",
       "transitionTimingFunction": "cubic-bezier(.4, 0, .2, 1)",
     }
    `);
    expect(convert("inline-flex items-center justify-between space-x-2"))
      .toMatchInlineSnapshot(`
     {
       "alignItems": "center",
       "display": "inline-flex",
       "justifyContent": "space-between",
     }
    `);
    expect(convert("w-3/4 bg-opacity-90 text-opacity-80"))
      .toMatchInlineSnapshot(`
     {
       "width": "75%",
     }
    `);
    expect(convert("min-h-screen bg-gray-50")).toMatchInlineSnapshot(`
     {
       "backgroundColor": "#f9fafb",
       "minHeight": "100vh",
     }
    `);
    expect(convert("pl-6 text-base font-medium leading-6 text-green-600"))
      .toMatchInlineSnapshot(`
     {
       "color": "#16a34a",
       "fontSize": "1rem",
       "fontWeight": "500",
       "lineHeight": "1.5rem",
       "paddingLeft": "1.5rem",
     }
    `);
    expect(convert("rounded-lg bg-blue-50 px-3 py-2 text-blue-700"))
      .toMatchInlineSnapshot(`
     {
       "backgroundColor": "#eff6ff",
       "borderRadius": ".5rem",
       "color": "#1d4ed8",
       "paddingBlock": ".5rem",
       "paddingInline": ".75rem",
     }
    `);
    expect(convert("fixed inset-0 flex items-center justify-center"))
      .toMatchInlineSnapshot(`
     {
       "alignItems": "center",
       "display": "flex",
       "inset": "0",
       "justifyContent": "center",
       "position": "fixed",
     }
    `);
    expect(convert("z-50 bg-opacity-75 backdrop-blur-sm"))
      .toMatchInlineSnapshot(`
     {
       "--tw-backdrop-blur": "blur(4px)",
       "WebkitBackdropFilter": "var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, )",
       "backdropFilter": "var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, )",
       "zIndex": "50",
     }
    `);
    expect(convert("flex-shrink-0 text-gray-500")).toMatchInlineSnapshot(`
     {
       "color": "#6b7280",
     }
    `);
    expect(convert("xl:py-8 xl:px-12 xl:max-w-6xl")).toMatchInlineSnapshot(`
     {
       "maxWidth": {
         "@media (width >= 80rem)": "72rem",
         "default": null,
       },
       "paddingBlock": {
         "@media (width >= 80rem)": "2rem",
         "default": null,
       },
       "paddingInline": {
         "@media (width >= 80rem)": "3rem",
         "default": null,
       },
     }
    `);
    expect(convert("overflow-x-auto whitespace-nowrap")).toMatchInlineSnapshot(`
     {
       "overflowX": "auto",
       "whiteSpace": "nowrap",
     }
    `);
    expect(convert("grid-cols-12 gap-x-4")).toMatchInlineSnapshot(`
     {
       "columnGap": "1rem",
       "gridTemplateColumns": "repeat(12, minmax(0, 1fr))",
     }
    `);
    expect(convert("border-2 border-gray-300 rounded-md"))
      .toMatchInlineSnapshot(`
     {
       "borderColor": "#d1d5db",
       "borderRadius": ".375rem",
       "borderStyle": "var(--tw-border-style)",
       "borderWidth": "2px",
     }
    `);
    expect(convert("py-2 px-4 font-semibold text-white bg-teal-500"))
      .toMatchInlineSnapshot(`
     {
       "backgroundColor": "#14b8a6",
       "color": "#fff",
       "fontWeight": "600",
       "paddingBlock": ".5rem",
       "paddingInline": "1rem",
     }
    `);
    expect(
      convert("hover:bg-opacity-80 active:bg-opacity-60")
    ).toMatchInlineSnapshot(`{}`);
  });

  test("converts more complex classnames", () => {
    expect(
      convert(
        "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white"
      )
    ).toMatchInlineSnapshot(`
     {
       "--tw-gradient-from": "#6366f1",
       "--tw-gradient-stops": "var(--tw-gradient-via-stops, var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))",
       "--tw-gradient-to": "#ec4899",
       "--tw-gradient-via": "#a855f7",
       "--tw-gradient-via-stops": "var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position)",
       "backgroundImage": "linear-gradient(to bottom right, var(--tw-gradient-stops, ))",
       "color": "#fff",
     }
    `);
    expect(convert("shadow-lg shadow-indigo-500/50")).toMatchInlineSnapshot(`
     {
       "--tw-shadow": "var(--tw-shadow-colored)",
       "--tw-shadow-color": "#6366f180",
       "--tw-shadow-colored": "0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color)",
       "boxShadow": "var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)",
     }
    `);
    expect(
      convert(
        "md:hover:shadow-2xl md:hover:scale-105 transition-all duration-500"
      )
    ).toMatchInlineSnapshot(`
     {
       "transitionDuration": ".5s",
       "transitionProperty": "all",
       "transitionTimingFunction": "cubic-bezier(.4, 0, .2, 1)",
     }
    `);
    expect(convert("sm:bg-gradient-to-r sm:from-green-400 sm:to-blue-500"))
      .toMatchInlineSnapshot(`
     {
       "--tw-gradient-from": {
         "@media (width >= 40rem)": "#4ade80",
         "default": null,
       },
       "--tw-gradient-stops": {
         "@media (width >= 40rem)": "var(--tw-gradient-via-stops, var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))",
         "default": null,
       },
       "--tw-gradient-to": {
         "@media (width >= 40rem)": "#3b82f6",
         "default": null,
       },
       "backgroundImage": {
         "@media (width >= 40rem)": "linear-gradient(to right, var(--tw-gradient-stops, ))",
         "default": null,
       },
     }
    `);
    expect(convert("container mx-auto sm:px-4 md:px-8 lg:px-16"))
      .toMatchInlineSnapshot(`
     {
       "marginInline": "auto",
       "paddingInline": {
         "@media (width >= 40rem)": "1rem",
         "@media (width >= 48rem)": "2rem",
         "@media (width >= 64rem)": "4rem",
         "default": null,
       },
     }
    `);
    expect(convert("aspect-w-16 aspect-h-9")).toMatchInlineSnapshot(`{}`);
    expect(
      convert(
        "lg:shadow-inner lg:bg-gradient-to-t from-yellow-300 to-orange-600"
      )
    ).toMatchInlineSnapshot(`
     {
       "--tw-gradient-from": "#fde047",
       "--tw-gradient-stops": "var(--tw-gradient-via-stops, var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))",
       "--tw-gradient-to": "#ea580c",
       "--tw-shadow": {
         "@media (width >= 64rem)": "inset 0 2px 4px 0 #0000000d",
         "default": null,
       },
       "--tw-shadow-colored": {
         "@media (width >= 64rem)": "inset 0 2px 4px 0 var(--tw-shadow-color)",
         "default": null,
       },
       "backgroundImage": {
         "@media (width >= 64rem)": "linear-gradient(to top, var(--tw-gradient-stops, ))",
         "default": null,
       },
       "boxShadow": {
         "@media (width >= 64rem)": "var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)",
         "default": null,
       },
     }
    `);
    expect(
      convert("motion-safe:transition-transform motion-reduce:animate-none")
    ).toMatchInlineSnapshot(`
     {
       "animation": {
         "@media (prefers-reduced-motion: reduce)": "none",
         "default": null,
       },
       "transitionDuration": {
         "@media (prefers-reduced-motion: no-preference)": ".15s",
         "default": null,
       },
       "transitionProperty": {
         "@media (prefers-reduced-motion: no-preference)": "transform, translate, scale, rotate",
         "default": null,
       },
       "transitionTimingFunction": {
         "@media (prefers-reduced-motion: no-preference)": "cubic-bezier(.4, 0, .2, 1)",
         "default": null,
       },
     }
    `);
    expect(convert("sm:container md:max-w-3xl lg:max-w-5xl"))
      .toMatchInlineSnapshot(`
     {
       "maxWidth": {
         "@media (width >= 48rem)": "48rem",
         "@media (width >= 64rem)": "64rem",
         "default": null,
       },
     }
    `);
    expect(convert("drop-shadow-xl filter brightness-110"))
      .toMatchInlineSnapshot(`
     {
       "--tw-brightness": "brightness(110%)",
       "--tw-drop-shadow": "drop-shadow(0 20px 13px #00000008) drop-shadow(0 8px 5px #00000014)",
       "filter": "var(--tw-blur, ) var(--tw-brightness, ) var(--tw-contrast, ) var(--tw-grayscale, ) var(--tw-hue-rotate, ) var(--tw-invert, ) var(--tw-saturate, ) var(--tw-sepia, ) var(--tw-drop-shadow, )",
     }
    `);
    expect(
      convert(
        "bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-600"
      )
    ).toMatchInlineSnapshot(`
     {
       "--tw-gradient-from": "#4ade80",
       "--tw-gradient-stops": "var(--tw-gradient-via-stops, var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))",
       "--tw-gradient-to": "#2563eb",
       "backgroundClip": "text",
       "backgroundImage": "linear-gradient(to right, var(--tw-gradient-stops, ))",
       "color": "#0000",
     }
    `);
    expect(convert("lg:place-self-center xl:place-self-end"))
      .toMatchInlineSnapshot(`
     {
       "placeSelf": {
         "@media (width >= 64rem)": "center",
         "@media (width >= 80rem)": "end",
         "default": null,
       },
     }
    `);
    expect(convert("contrast-125 grayscale hover:grayscale-0"))
      .toMatchInlineSnapshot(`
     {
       "--tw-contrast": "contrast(125%)",
       "--tw-grayscale": {
         ":hover": "grayscale(0%)",
         "default": "grayscale(100%)",
       },
       "filter": {
         ":hover": "var(--tw-blur, ) var(--tw-brightness, ) var(--tw-contrast, ) var(--tw-grayscale, ) var(--tw-hue-rotate, ) var(--tw-invert, ) var(--tw-saturate, ) var(--tw-sepia, ) var(--tw-drop-shadow, )",
         "default": "var(--tw-blur, ) var(--tw-brightness, ) var(--tw-contrast, ) var(--tw-grayscale, ) var(--tw-hue-rotate, ) var(--tw-invert, ) var(--tw-saturate, ) var(--tw-sepia, ) var(--tw-drop-shadow, )",
       },
     }
    `);
    expect(
      convert("ring-offset-4 ring-indigo-300 focus:ring-offset-indigo-500")
    ).toMatchInlineSnapshot(`
     {
       "--tw-ring-color": "#a5b4fc",
       "--tw-ring-offset-color": {
         ":focus": "#6366f1",
         "default": null,
       },
       "--tw-ring-offset-shadow": "var(--tw-ring-inset, ) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
       "--tw-ring-offset-width": "4px",
     }
    `);
    expect(convert("prose prose-lg prose-blue")).toMatchInlineSnapshot(`{}`);
    expect(convert("backdrop-filter backdrop-blur-lg bg-opacity-80"))
      .toMatchInlineSnapshot(`
     {
       "--tw-backdrop-blur": "blur(16px)",
       "WebkitBackdropFilter": "var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, )",
       "backdropFilter": "var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, )",
     }
    `);
    expect(convert("hover:backdrop-brightness-125")).toMatchInlineSnapshot(`
     {
       "--tw-backdrop-brightness": {
         ":hover": "brightness(125%)",
         "default": null,
       },
       "WebkitBackdropFilter": {
         ":hover": "var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, )",
         "default": null,
       },
       "backdropFilter": {
         ":hover": "var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, )",
         "default": null,
       },
     }
    `);
    expect(convert("dark:bg-gray-800 dark:text-gray-100"))
      .toMatchInlineSnapshot(`
     {
       "backgroundColor": {
         "@media (prefers-color-scheme: dark)": "#1f2937",
         "default": null,
       },
       "color": {
         "@media (prefers-color-scheme: dark)": "#f3f4f6",
         "default": null,
       },
     }
    `);
    expect(convert("peer-checked:bg-green-500")).toMatchInlineSnapshot(`
     {
       "backgroundColor": {
         ":is(:where(.peer):checked ~ *)": "#22c55e",
         "default": null,
       },
     }
    `);
    expect(
      convert("sm:focus-within:shadow-lg sm:focus-within:border-blue-500")
    ).toMatchInlineSnapshot(`{}`);
    expect(
      convert(
        "container:sm:grid container:sm:grid-cols-3 container:md:flex container:lg:block"
      )
    ).toMatchInlineSnapshot(`{}`);
    expect(convert("lg:shadow-outline lg:shadow-md")).toMatchInlineSnapshot(`
     {
       "--tw-shadow": {
         "@media (width >= 64rem)": "0 4px 6px -1px #0000001a, 0 2px 4px -2px #0000001a",
         "default": null,
       },
       "--tw-shadow-colored": {
         "@media (width >= 64rem)": "0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color)",
         "default": null,
       },
       "boxShadow": {
         "@media (width >= 64rem)": "var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)",
         "default": null,
       },
     }
    `);
    expect(convert("hover:translate-x-2 hover:translate-y-2"))
      .toMatchInlineSnapshot(`
     {
       "--tw-translate-x": {
         ":hover": ".5rem",
         "default": null,
       },
       "--tw-translate-y": {
         ":hover": ".5rem",
         "default": null,
       },
       "translate": {
         ":hover": "var(--tw-translate-x) var(--tw-translate-y)",
         "default": null,
       },
     }
    `);
    expect(
      convert("bg-gradient-conic from-blue-400 via-purple-500 to-pink-600")
    ).toMatchInlineSnapshot(`
     {
       "--tw-gradient-from": "#60a5fa",
       "--tw-gradient-stops": "var(--tw-gradient-via-stops, var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position))",
       "--tw-gradient-to": "#db2777",
       "--tw-gradient-via": "#a855f7",
       "--tw-gradient-via-stops": "var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position)",
     }
    `);
    expect(convert("2xl:text-6xl sm:text-4xl xs:text-sm"))
      .toMatchInlineSnapshot(`
     {
       "fontSize": {
         "@media (width >= 40rem)": "2.25rem",
         "default": null,
       },
       "lineHeight": {
         "@media (width >= 40rem)": "2.5rem",
         "default": null,
       },
     }
    `);
    expect(convert("max-w-prose overflow-hidden")).toMatchInlineSnapshot(`
     {
       "maxWidth": "65ch",
       "overflow": "hidden",
     }
    `);
    expect(convert("print:text-black print:bg-white")).toMatchInlineSnapshot(`
     {
       "backgroundColor": {
         "@media print": "#fff",
         "default": null,
       },
       "color": {
         "@media print": "#000",
         "default": null,
       },
     }
    `);
    expect(convert("hover:motion-safe:scale-110 hover:motion-safe:rotate-12"))
      .toMatchInlineSnapshot(`
     {
       "--tw-scale-x": {
         "@media (prefers-reduced-motion: no-preference)": {
           ":hover": "110%",
           "default": null,
         },
         "default": null,
       },
       "--tw-scale-y": {
         "@media (prefers-reduced-motion: no-preference)": {
           ":hover": "110%",
           "default": null,
         },
         "default": null,
       },
       "--tw-scale-z": {
         "@media (prefers-reduced-motion: no-preference)": {
           ":hover": "110%",
           "default": null,
         },
         "default": null,
       },
       "rotate": {
         "@media (prefers-reduced-motion: no-preference)": {
           ":hover": "12deg",
           "default": null,
         },
         "default": null,
       },
       "scale": {
         "@media (prefers-reduced-motion: no-preference)": {
           ":hover": "var(--tw-scale-x) var(--tw-scale-y)",
           "default": null,
         },
         "default": null,
       },
     }
    `);
    expect(convert("border-4 border-dashed border-yellow-300"))
      .toMatchInlineSnapshot(`
     {
       "--tw-border-style": "dashed",
       "borderColor": "#fde047",
       "borderStyle": "dashed",
       "borderWidth": "4px",
     }
    `);
    expect(convert("flex flex-wrap-reverse items-stretch gap-y-6 lg:gap-x-12"))
      .toMatchInlineSnapshot(`
     {
       "alignItems": "stretch",
       "columnGap": {
         "@media (width >= 64rem)": "3rem",
         "default": null,
       },
       "display": "flex",
       "flexWrap": "wrap-reverse",
       "rowGap": "1.5rem",
     }
    `);
    expect(convert("scroll-auto snap-mandatory snap-y")).toMatchInlineSnapshot(`
     {
       "--tw-scroll-snap-strictness": "mandatory",
       "scrollBehavior": "auto",
       "scrollSnapType": "y var(--tw-scroll-snap-strictness)",
     }
    `);
    expect(convert("scroll-smooth hover:scroll-snap-stop"))
      .toMatchInlineSnapshot(`
     {
       "scrollBehavior": "smooth",
     }
    `);
    expect(convert("lg:bg-cover md:bg-contain sm:bg-fixed"))
      .toMatchInlineSnapshot(`
     {
       "backgroundAttachment": {
         "@media (width >= 40rem)": "fixed",
         "default": null,
       },
       "backgroundSize": {
         "@media (width >= 48rem)": "contain",
         "@media (width >= 64rem)": "cover",
         "default": null,
       },
     }
    `);
    expect(convert("pointer-events-none md:pointer-events-auto"))
      .toMatchInlineSnapshot(`
     {
       "pointerEvents": {
         "@media (width >= 48rem)": "auto",
         "default": "none",
       },
     }
    `);
    expect(convert("content-['*'] before:content-['']")).toMatchInlineSnapshot(`
     {
       "--tw-content": {
         ":before": """",
         "default": ""*"",
       },
       "content": {
         ":before": "var(--tw-content)",
         "default": "var(--tw-content)",
       },
     }
    `);
    expect(
      convert("child:bg-red-400 child:m-4 child:flex child:h-16")
    ).toMatchInlineSnapshot(`{}`);
    expect(
      convert("only:child:border-2 only:child:border-gray-500")
    ).toMatchInlineSnapshot(`{}`);
    expect(
      convert(
        "hover:before:bg-gradient-to-t hover:before:from-green-400 hover:before:to-blue-400"
      )
    ).toMatchInlineSnapshot(`{}`);
    expect(convert("animate-bounce delay-200 motion-safe:animate-none"))
      .toMatchInlineSnapshot(`
     {
       "animation": {
         "@media (prefers-reduced-motion: no-preference)": "none",
         "default": "1s infinite bounce",
       },
       "transitionDelay": ".2s",
     }
    `);
    expect(
      convert("aria-checked:bg-blue-600 aria-disabled:opacity-50")
    ).toMatchInlineSnapshot(`{}`);
    expect(
      convert("@supports:bg-blend-multiply blend-multiply")
    ).toMatchInlineSnapshot(`{}`);
    expect(
      convert("sm:text-opacity-75 md:text-opacity-50 lg:text-opacity-25")
    ).toMatchInlineSnapshot(`{}`);
    expect(
      convert("outline-4 outline-offset-8 outline-dashed outline-gray-700")
    ).toMatchInlineSnapshot(`
     {
       "--tw-outline-style": "dashed",
       "outlineColor": "#374151",
       "outlineOffset": "8px",
       "outlineStyle": "dashed",
       "outlineWidth": "4px",
     }
    `);
    expect(convert("first:rounded-t-lg last:rounded-b-lg"))
      .toMatchInlineSnapshot(`
     {
       "borderBottomLeftRadius": {
         ":last-child": ".5rem",
         "default": null,
       },
       "borderBottomRightRadius": {
         ":last-child": ".5rem",
         "default": null,
       },
       "borderTopLeftRadius": {
         ":first-child": ".5rem",
         "default": null,
       },
       "borderTopRightRadius": {
         ":first-child": ".5rem",
         "default": null,
       },
     }
    `);
    expect(
      convert("marker:text-pink-500 marker:font-extrabold")
    ).toMatchInlineSnapshot(`{}`);
    expect(convert("select-none hover:select-auto")).toMatchInlineSnapshot(`
     {
       "WebkitUserSelect": {
         ":hover": "auto",
         "default": "none",
       },
       "userSelect": {
         ":hover": "auto",
         "default": "none",
       },
     }
    `);
    expect(convert("line-clamp-3 lg:line-clamp-none")).toMatchInlineSnapshot(`
     {
       "WebkitBoxOrient": {
         "@media (width >= 64rem)": "horizontal",
         "default": "vertical",
       },
       "WebkitLineClamp": {
         "@media (width >= 64rem)": "unset",
         "default": "3",
       },
       "display": {
         "@media (width >= 64rem)": "block",
         "default": "-webkit-box",
       },
       "overflow": {
         "@media (width >= 64rem)": "visible",
         "default": "hidden",
       },
     }
    `);
    expect(convert("tabular-nums oldstyle-nums")).toMatchInlineSnapshot(`
     {
       "--tw-numeric-figure": "oldstyle-nums",
       "--tw-numeric-spacing": "tabular-nums",
       "fontVariantNumeric": "var(--tw-ordinal, ) var(--tw-slashed-zero, ) var(--tw-numeric-figure, ) var(--tw-numeric-spacing, ) var(--tw-numeric-fraction, )",
     }
    `);
    expect(convert("visible sm:invisible lg:visible")).toMatchInlineSnapshot(`
     {
       "visibility": {
         "@media (width >= 40rem)": "hidden",
         "@media (width >= 64rem)": "visible",
         "default": "visible",
       },
     }
    `);
    expect(convert("group-hover:rotate-45 group-focus:scale-110"))
      .toMatchInlineSnapshot(`
     {
       "--tw-scale-x": {
         ":is(:where(.group):focus *)": "110%",
         "default": null,
       },
       "--tw-scale-y": {
         ":is(:where(.group):focus *)": "110%",
         "default": null,
       },
       "--tw-scale-z": {
         ":is(:where(.group):focus *)": "110%",
         "default": null,
       },
       "rotate": {
         ":is(:where(.group):hover *)": "45deg",
         "default": null,
       },
       "scale": {
         ":is(:where(.group):focus *)": "var(--tw-scale-x) var(--tw-scale-y)",
         "default": null,
       },
     }
    `);
    expect(convert("hover:bg-none focus:bg-gradient-to-tl"))
      .toMatchInlineSnapshot(`
     {
       "backgroundImage": {
         ":focus": "linear-gradient(to top left, var(--tw-gradient-stops, ))",
         ":hover": "none",
         "default": null,
       },
     }
    `);
    expect(convert("flex-grow-0 flex-shrink hover:grow hover:shrink-0"))
      .toMatchInlineSnapshot(`
     {
       "flexGrow": {
         ":hover": "1",
         "default": null,
       },
       "flexShrink": {
         ":hover": "0",
         "default": null,
       },
     }
    `);
    expect(convert("border-spacing-4 border-collapse")).toMatchInlineSnapshot(`
     {
       "--tw-border-spacing-x": "1rem",
       "--tw-border-spacing-y": "1rem",
       "borderCollapse": "collapse",
       "borderSpacing": "var(--tw-border-spacing-x) var(--tw-border-spacing-y)",
     }
    `);
    expect(convert("touch-auto sm:touch-manipulation")).toMatchInlineSnapshot(`
     {
       "touchAction": {
         "@media (width >= 40rem)": "manipulation",
         "default": "auto",
       },
     }
    `);
    expect(convert("overflow-clip break-all")).toMatchInlineSnapshot(`
     {
       "overflow": "clip",
       "wordBreak": "break-all",
     }
    `);
    expect(convert("transition-transform duration-700 ease-in-out"))
      .toMatchInlineSnapshot(`
     {
       "transitionDuration": ".7s",
       "transitionProperty": "transform, translate, scale, rotate",
       "transitionTimingFunction": "cubic-bezier(.4, 0, .2, 1)",
     }
    `);
    expect(convert("hover:skew-x-6 hover:skew-y-6")).toMatchInlineSnapshot(`
     {
       "--tw-skew-x": {
         ":hover": "skewX(6deg)",
         "default": null,
       },
       "--tw-skew-y": {
         ":hover": "skewY(6deg)",
         "default": null,
       },
       "transform": {
         ":hover": "var(--tw-rotate-x) var(--tw-rotate-y) var(--tw-rotate-z) var(--tw-skew-x) var(--tw-skew-y)",
         "default": null,
       },
     }
    `);
    expect(
      convert("md:hover:translate-x-2 lg:hover:translate-y-2")
    ).toMatchInlineSnapshot(`{}`);
    expect(convert("peer-focus:border-blue-500 peer-invalid:border-red-500"))
      .toMatchInlineSnapshot(`
     {
       "borderColor": {
         ":is(:where(.peer):focus ~ *)": "#3b82f6",
         ":is(:where(.peer):invalid ~ *)": "#ef4444",
         "default": null,
       },
     }
    `);
    expect(
      convert("dark:group-hover:text-white dark:group-active:text-gray-300")
    ).toMatchInlineSnapshot(`
     {
       "color": {
         "@media (prefers-color-scheme: dark)": {
           ":is(:where(.group):active *)": "#d1d5db",
           ":is(:where(.group):hover *)": "#fff",
           "default": null,
         },
         "default": null,
       },
     }
    `);
    expect(convert("xs:w-auto sm:w-1/2 md:w-full lg:w-screen"))
      .toMatchInlineSnapshot(`
     {
       "width": {
         "@media (width >= 40rem)": "50%",
         "@media (width >= 48rem)": "100%",
         "@media (width >= 64rem)": "100vw",
         "default": null,
       },
     }
    `);
    expect(convert("grid-cols-none auto-cols-max auto-rows-fr"))
      .toMatchInlineSnapshot(`
     {
       "gridAutoColumns": "max-content",
       "gridAutoRows": "minmax(0, 1fr)",
       "gridTemplateColumns": "none",
     }
    `);
  });
});
