#!/usr/bin/env node
"use strict";

var _ = _interopRequireDefault(require("."));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const processStdin = () => {
  let input = '';
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', chunk => {
    input += chunk;
  });
  process.stdin.on('end', async () => {
    const result = await (0, _.default)(input);
    process.stdout.write(result);
  });
};
processStdin();