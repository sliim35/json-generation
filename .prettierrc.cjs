/** @type {import('prettier').Config} */
module.exports = {
  printWidth: 120,
  semi: true,
  singleQuote: true,
  tabWidth: 4,
  trailingComma: 'always',
  useTabs: false,

  plugins: [require.resolve('prettier-plugin-astro')],

  overrides: [{ files: '*.astro', options: { parser: 'astro' } }],
};
