import { defineConfig } from '@archoleat/prettier-define-config';

export default defineConfig({
  overrides: [
    {
      files: ['*.js', '*.ts', '*.tsx', '*.yaml'],
      options: {
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
