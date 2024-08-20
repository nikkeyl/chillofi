import { defineConfig } from 'stylelint-define-config';

export default defineConfig({
  extends: '@archoleat/stylelint-config-extended-scss',
  rules: {
    'declaration-empty-line-before': null,
    'selector-class-pattern': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
    'scss/no-global-function-names': null,
  },
});
