/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 */

export declare const getConvertedClasses: (input: string) => string;
export type JssValue =
  | string
  | null
  | { default: JssValue; [$$Key$$: string]: JssValue };
export type Jss = { [$$Key$$: string]: JssValue };
export declare const convertFromCssToJss: (css: string) => null | Jss;
