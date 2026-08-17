const { getJestPreprocessor } = require('@stencil/core/testing');

const stencilPreprocessor = getJestPreprocessor();

module.exports = {
  ...stencilPreprocessor,
  process(sourceText, sourcePath, transformOptions) {
    const result = stencilPreprocessor.process(
      sourceText,
      sourcePath,
      transformOptions
    );
    return typeof result === 'string' ? { code: result } : result;
  },
};
