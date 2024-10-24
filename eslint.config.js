import { defineFlatConfig } from 'eslint-define-config';
import { extend } from '@archoleat/eslint-flat-compatibility';

import globals from 'globals';

import prettierConfig from 'eslint-config-prettier';
import importSortPlugin from 'eslint-plugin-simple-import-sort';
import nextPlugin from '@next/eslint-plugin-next';
import unicornPlugin from 'eslint-plugin-unicorn';

import parser from '@typescript-eslint/parser';

export default defineFlatConfig([
  ...extend(
    'airbnb',
    'airbnb-typescript',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ),
  {
    files: ['src/**/*.tsx', 'src/**/*.ts'],
    languageOptions: {
      parser,
      globals: {
        ...globals.browser,
        ...globals.es2015,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
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
      next: nextPlugin,
      unicorn: unicornPlugin,
    },
    rules: {
      'func-style': ['error', 'expression'],
      'simple-import-sort/imports': 'warn',
      'simple-import-sort/exports': 'error',
      'import/exports-last': 'error',
      'import/extensions': ['error', { ts: 'never', tsx: 'never' }],
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
      'react/react-in-jsx-scope': 'off',
      'unicorn/no-null': 'off',
      'unicorn/no-unused-properties': 'error',
      'unicorn/string-content': 'error',
    },
  },
  prettierConfig,
]);
