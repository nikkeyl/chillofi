export default {
  '**/*.md': 'remark --quiet --frail',
  '**/*': 'prettier --write',
  'src/**/*.{tsx,ts}': 'eslint --fix',
  'src/**/*.scss': 'stylelint --fix',
};
