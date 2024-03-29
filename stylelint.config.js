module.exports = {
  customSyntax: 'postcss-html',
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-vue',
    'stylelint-config-prettier',
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    "selector-id-pattern": "^[a-z_-][a-z0-9_-]+$",
    "color-function-notation": "legacy",
    "alpha-value-notation": "number"
  },
}
