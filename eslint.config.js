import { defineFlatConfig } from 'eslint-define-config';
import { extend } from '@archoleat/eslint-flat-compatibility';
import globals from 'globals';
import importSortPlugin from 'eslint-plugin-simple-import-sort';
import nextPlugin from '@next/eslint-plugin-next';
import parser from '@typescript-eslint/parser';
import prettierConfig from 'eslint-config-prettier';
import sortDestructureKeysPlugin from 'eslint-plugin-sort-destructure-keys';
import unicornPlugin from 'eslint-plugin-unicorn';

export default defineFlatConfig([
  ...extend('airbnb', 'airbnb-typescript', 'plugin:react/jsx-runtime'),
  {
    files: ['src/**/*.tsx', 'src/**/*.ts'],
    languageOptions: {
      parser,
      globals: {
        ...globals.browser,
        ...globals.es2015,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        project: 'tsconfig.json',
      },
      sourceType: 'module',
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: 'tsconfig.json',
        },
      },
    },
    plugins: {
      'simple-import-sort': importSortPlugin,
      'sort-destructure-keys': sortDestructureKeysPlugin,
      next: nextPlugin,
      unicorn: unicornPlugin,
    },
    rules: {
      'func-style': ['error', 'expression'],
      'import/exports-last': 'error',
      'import/group-exports': 'error',
      'import/no-commonjs': 'error',
      'import/no-default-export': 'off',
      'import/no-namespace': 'error',
      'import/no-unassigned-import': 'off',
      'import/prefer-default-export': 'off',
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
      'react/jsx-sort-props': 'warn',
      'simple-import-sort/exports': 'warn',
      'simple-import-sort/imports': 'warn',
      'sort-destructure-keys/sort-destructure-keys': 'warn',
      'unicorn/no-unused-properties': 'warn',
      'unicorn/string-content': 'warn',
    },
  },
  prettierConfig,
]);
