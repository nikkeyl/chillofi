import { defineConfig } from '@archoleat/prettier-define-config';

export default defineConfig({
  overrides: [
    {
      files: ['*.js', '*.tsx', '*.ts', '*.yaml'],
      options: {
        jsxSingleQuote: true,
        singleQuote: true,
      },
    },
    {
      files: ['*.json'],
      options: {
        trailingComma: 'none',
      },
    },
  ],
});
