module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'jest/globals': true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'svelte3',
    '@typescript-eslint',
    'jest',
  ],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
  ignorePatterns: [
    'public/build/*',
  ],
  settings: {
    'svelte3/typescript': require('typescript'), // eslint-disable-line global-require
    'svelte3/ignore-styles': (attributes) => attributes.lang && attributes.lang === 'sass',
  },
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/no-mutable-exports': 'off',
    'import/prefer-default-export': 'off',
  },
};
