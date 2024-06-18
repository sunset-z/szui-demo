module.exports = function () {
  return {
    visitor: {
      ImportDeclaration(path) {
        const importPath = path.node.source.value;
        if (importPath.endsWith('.less')) {
          path.node.source.value = importPath.replace('.less', '.css');
        }
      }
    }
  };
};
