const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generator = require('@babel/generator').default;
const t = require('@babel/types');

const { getOptions } = require('loader-utils');

module.exports = function (source) {
  const options = getOptions(this);
  // console.log(this.resourcePath);
  const self = this;

  const ast = parser.parse(source, { sourceType: 'module' });
  traverse(ast, {
    CallExpression(path) {
      if (
        t.isMemberExpression(path.node.callee) &&
        t.isIdentifier(path.node.callee.object, { name: 'console' })
      ) {
        const { line, column } = path.node.loc.start;
        // console.log(line, column);
        // console.log(path.parentPath.scope.path.container.id.name); // sum

        // console.log(this);

        // console.log(self.resourcePath);
        const fname = self.resourcePath.split('/').slice(-3).join('/');
        const funcName = path.parentPath.scope.path.container.id.name;
        path.node.arguments.unshift(
          t.stringLiteral(`[${fname}, ${funcName}, ${line}]`),
        );
        // console.log(path);
        // path.remove();
      }
    },
  });
  const output = generator(ast, {}, source);
  return output.code;
};
