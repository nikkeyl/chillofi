import { defineConfig } from 'stylelint-define-config';

export default defineConfig({
  extends: ['@archoleat/stylelint-config-extended-scss'],
  rules: {
    'plugin/no-low-performance-animation-properties': null,
    'selector-class-pattern': null,
  },
});
