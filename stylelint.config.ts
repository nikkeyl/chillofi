import { defineConfig } from 'stylelint-define-config';

export default defineConfig({
  extends: ['@archoleat/stylelint-config-extended-scss'],
  rules: {
    'selector-class-pattern': null,
  },
});
