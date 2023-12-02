"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = tailwindToStylex;
var t = _interopRequireWildcard(require("@babel/types"));
var _core = require("@babel/core");
var _helpers = require("./helpers");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const rebaseJss = jss => {
  const result = {};
  const baseKeys = Object.keys(jss).filter(key => !key.startsWith(':') && !key.startsWith('@'));
  const otherKeys = Object.keys(jss).filter(key => key.startsWith(':') || key.startsWith('@'));
  for (const key of baseKeys) {
    result[key] = jss[key];
  }
  for (const key of otherKeys) {
    const value = jss[key];
    if (typeof value !== 'object' || value == null) {
      throw new Error(`Expected object for ${key}`);
    }
    for (const subKey of Object.keys(value)) {
      const subValue = typeof value[subKey] === 'object' && value[subKey] != null ? rebaseJss(value[subKey]) : value[subKey];
      result[subKey] = {
        default: result[subKey] ?? null,
        [key]: subValue
      };
    }
  }
  return result;
};
const convertTwToJs = classNames => {
  let resultCss, resultJSS;
  try {
    resultCss = (0, _helpers.getConvertedClasses)(classNames);
    resultJSS = (0, _helpers.convertFromCssToJss)(resultCss);
    return resultJSS && rebaseJss(resultJSS);
  } catch {
    console.log('Error converting', classNames);
    console.log('CSS Result:', resultCss);
    console.log('JSS Result:', resultJSS, '\n\n\n\n');
    return null;
  }
};
const canBeIdentifier = value => {
  if (value.length === 0) {
    return false;
  }
  if (!/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(value)) {
    return false;
  }
  if (value === 'undefined') {
    return false;
  }
  return true;
};
const convertToAst = value => {
  if (typeof value === 'string') {
    return t.stringLiteral(value);
  }
  if (typeof value === 'number') {
    return t.numericLiteral(value);
  }
  if (typeof value === 'boolean') {
    return t.booleanLiteral(value);
  }
  if (value === null) {
    return t.nullLiteral();
  }
  if (value === undefined) {
    return t.identifier('undefined');
  }
  if (Array.isArray(value)) {
    return t.arrayExpression(value.map(convertToAst));
  }
  if (typeof value === 'object' && value != null) {
    return t.objectExpression(Object.keys(value).map(key => t.objectProperty(canBeIdentifier(key) ? t.identifier(key) : t.stringLiteral(key), convertToAst(value[key]))));
  }
  throw new Error(`Cannot convert value to AST: ${String(value)}`);
};
const customBabelPlugin = () => {
  let count = 0;
  const cnMap = {};
  const styleMap = {};
  let stylex;
  let styles;
  return {
    name: 'tailwind-to-stylex',
    visitor: {
      Program: {
        enter: path => {
          stylex = path.scope.generateUidIdentifier('stylex');
          styles = path.scope.generateUidIdentifier('styles');
          const firstStatement = path.get('body');
          const firstStatementNode = firstStatement[0];
          firstStatementNode.insertBefore(t.importDeclaration([t.importNamespaceSpecifier(stylex)], t.stringLiteral('@stylexjs/stylex')));
        },
        exit: path => {
          const statments = path.get('body');
          const lastStatement = statments[statments.length - 1];
          lastStatement.insertAfter(t.variableDeclaration('const', [t.variableDeclarator(styles, t.callExpression(t.memberExpression(stylex, t.identifier('create')), [convertToAst(styleMap)]))]));
        }
      },
      JSXAttribute(path) {
        const jsxOpeningElement = path.parentPath.node;
        if (jsxOpeningElement.type !== 'JSXOpeningElement') {
          return;
        }
        const name = jsxOpeningElement.name;
        const isHTML = name.type === 'JSXIdentifier' && name.name[0].toLocaleLowerCase() === name.name[0];
        const node = path.node;
        if (node.name.name !== 'className') {
          return;
        }
        let valuePath = path.get('value');
        if (valuePath.isJSXExpressionContainer()) {
          valuePath = valuePath.get('expression');
        }
        if (valuePath.isCallExpression() && valuePath.get('callee').isIdentifier() && valuePath.get('callee').node.name === 'cn' && valuePath.get('arguments')[0].isStringLiteral() && valuePath.get('arguments').slice(1).every(arg => arg.isIdentifier())) {
          const input = valuePath.get('arguments')[0].node.value;
          let keyName;
          if (cnMap[input]) {
            keyName = cnMap[input];
          } else {
            const styleObject = convertTwToJs(input);
            if (styleObject == null) {
              return;
            }
            keyName = `$${++count}`;
            styleMap[keyName] = styleObject;
            cnMap[input] = keyName;
          }
          valuePath.get('arguments')[0].replaceWith(t.memberExpression(styles, t.identifier(keyName)));
          if (isHTML) {
            path.replaceWith(t.jsxSpreadAttribute(t.callExpression(t.memberExpression(stylex, t.identifier('props')), valuePath.get('arguments').map(arg => arg.node))));
          } else {
            valuePath.replaceWith(t.arrayExpression(valuePath.get('arguments').map(arg => arg.node)));
          }
          return;
        }
        const result = valuePath.evaluate();
        const {
          confident,
          value: existingValue
        } = result;
        if (!confident) {
          return;
        }
        if (typeof existingValue !== 'string') {
          return;
        }
        let keyName;
        if (cnMap[existingValue]) {
          keyName = cnMap[existingValue];
        } else {
          const styleObject = convertTwToJs(existingValue);
          if (styleObject == null) {
            return;
          }
          keyName = `$${++count}`;
          styleMap[keyName] = styleObject;
          cnMap[existingValue] = keyName;
        }
        if (isHTML) {
          path.replaceWith(t.jsxSpreadAttribute(t.callExpression(t.memberExpression(stylex, t.identifier('props')), [t.memberExpression(styles, t.identifier(keyName))])));
        } else {
          valuePath.replaceWith(t.jsxExpressionContainer(t.memberExpression(styles, t.identifier(keyName))));
        }
      }
    }
  };
};
async function tailwindToStylex(source) {
  const isFlow = source.includes('@flow');
  const result = await (0, _core.transformAsync)(source, {
    plugins: [...(isFlow ? ['babel-plugin-syntax-hermes-parser'] : [['@babel/syntax-typescript', {
      isTSX: true
    }], '@babel/syntax-jsx']), customBabelPlugin]
  });
  if (result == null || result.code == null) {
    return source;
  }
  return result.code;
}