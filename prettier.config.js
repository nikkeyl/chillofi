export default {
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
};
