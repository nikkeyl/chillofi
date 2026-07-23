import { defineFlatConfig } from 'eslint-define-config';
import { fixupPluginRules } from '@eslint/compat';
import eslintPluginReactHooksPlugin from 'eslint-plugin-react-hooks';
import globals from 'globals';
import importPlugin from 'eslint-plugin-import';
import importSortPlugin from 'eslint-plugin-simple-import-sort';
import nextPlugin from '@next/eslint-plugin-next';
import prettierConfig from 'eslint-config-prettier';
import reactPlugin from 'eslint-plugin-react';
import sortDestructureKeysPlugin from 'eslint-plugin-sort-destructure-keys';
import typeScriptParser from '@typescript-eslint/parser';
import typeScriptPlugin from '@typescript-eslint/eslint-plugin';
import unicornPlugin from 'eslint-plugin-unicorn';

export default defineFlatConfig([
  {
    files: ['src/**/*.tsx', 'src/**/*.ts'],
    languageOptions: {
      parser: typeScriptParser,
      globals: {
        ...globals.browser,
        ...globals.es2015,
      },
      parserOptions: {
        ecmaVersion: 'latest',
      },
      sourceType: 'module',
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: 'tsconfig.json',
        },
      },
      react: {
        version: 'detect',
      },
    },
    plugins: {
      '@typescript-eslint': typeScriptPlugin,
      'react-hooks': fixupPluginRules(eslintPluginReactHooksPlugin),
      'simple-import-sort': importSortPlugin,
      'sort-destructure-keys': sortDestructureKeysPlugin,
      import: fixupPluginRules(importPlugin),
      next: fixupPluginRules(nextPlugin),
      react: fixupPluginRules(reactPlugin),
      unicorn: unicornPlugin,
    },
    rules: {
      '@typescript-eslint/ban-ts-comment': 'error',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variableLike',
          format: ['snake_case', 'camelCase', 'PascalCase', 'UPPER_CASE'],
          filter: {
            regex: '^_',
            match: false,
          },
        },
      ],
      '@typescript-eslint/no-explicit-any': 'error',
      'comma-dangle': ['warn', 'only-multiline'],
      'func-style': ['error', 'expression'],
      'object-shorthand': ['warn', 'always'],
      'import/default': 'error',
      'import/export': 'error',
      'import/exports-last': 'error',
      'import/group-exports': 'error',
      'import/named': 'error',
      'import/namespace': 'error',
      'import/no-commonjs': 'error',
      'import/no-default-export': 'off',
      'import/no-namespace': 'error',
      'import/no-unassigned-import': 'off',
      'import/no-unresolved': ['error', { commonjs: true, amd: true }],
      'import/prefer-default-export': 'off',
      'react/destructuring-assignment': ['error', 'always'],
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react/jsx-curly-brace-presence': 'warn',
      'react/jsx-sort-props': 'warn',
      'react/self-closing-comp': [
        'error',
        {
          component: true,
          html: true,
        },
      ],
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': 'warn',
      'sort-destructure-keys/sort-destructure-keys': 'warn',
      'unicorn/no-unused-properties': 'warn',
      'unicorn/string-content': 'warn',
    },
  },
  prettierConfig,
]);
