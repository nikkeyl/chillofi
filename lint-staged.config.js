export default {
  '**/*.md': 'remark --quiet --frail',
  '**/*': 'prettier --write',
  'src/**/*.{ts,tsx}': 'eslint --fix',
};
