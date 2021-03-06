module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  extends: 'eslint:recommended',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018
  },
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'no-console': ['off'],
    'no-unused-vars': ['off'],
    quotes: ['error', 'single'],
    semi: ['error', 'always']
  }
};
