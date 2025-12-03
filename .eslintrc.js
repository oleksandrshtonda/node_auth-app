module.exports = {
  parser: "@typescript-eslint/parser",
  extends: 'plugin:@typescript-eslint/recommended',
  env: {
    jest: true,
  },
  rules: {
    'no-proto': 0,
  },
  plugins: ['jest'],
};
