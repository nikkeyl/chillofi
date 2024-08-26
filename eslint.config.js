import { defineFlatConfig } from 'eslint-define-config';
import { extend, plugins } from '@archoleat/eslint-flat-compatibility';

import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import globals from 'globals';
import typescriptParser from '@typescript-eslint/parser';

export default defineFlatConfig([
  ...extend(
    'airbnb',
    'airbnb-typescript',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ),
  ...plugins('@next/eslint-plugin-next'),
  eslintPluginUnicorn.configs['flat/recommended'],
  {
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.browser,
      },
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
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
    rules: {
      'func-style': ['error', 'expression'],
      'import/exports-last': 'error',
      'import/extensions': ['error', { ts: 'never', tsx: 'never' }],
      'import/group-exports': 'error',
      'import/no-commonjs': 'error',
      'import/no-default-export': 'error',
      'import/no-namespace': 'error',
      'import/no-unassigned-import': 'warn',
      'import/prefer-default-export': 'off',
      'jsx-a11y/media-has-caption': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
      'unicorn/no-unused-properties': 'error',
      'unicorn/string-content': 'error',
    },
  },
  eslintConfigPrettier,
]);
