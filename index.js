module.exports = {
  extends: [
    '@antfu/eslint-config',
  ],
  rules: {
    'no-console': 'off',
    'no-mixed-operators': 'off',
    "vue/custom-event-name-casing": ["error", "camelCase" | "kebab-case", { "ignores": [] }]
  }
}
