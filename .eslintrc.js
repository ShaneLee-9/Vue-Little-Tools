module.exports = {
  root: true,
  env: {
    node: true,
    es6: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 6
  },
  rules: {
    'semi': ['error', 'always'],
    'semi-spacing': 'error',
    'semi-style': ['error', 'last'],
    'quotes': ['error', 'single'],
    'no-extra-parens': 'error',
    'no-console': 0,
    'no-empty': [2, { 'allowEmptyCatch': true }],
    'no-empty-function': 'error',
    'no-empty-pattern': 'error',
    'no-multi-spaces': 'error',
    'array-bracket-spacing': 'error',
    'block-spacing': 'error',
    'comma-dangle': 'error',
    'comma-spacing': 'error',
    'comma-style': 'error',
    'computed-property-spacing': 'error',
    'func-call-spacing': 'error',
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'multiline-comment-style': 'error',
    'no-multiple-empty-lines': 'error',
    'no-whitespace-before-property': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': 'error',
    'switch-colon-spacing': 'error',
    'template-tag-spacing': 'error',
    'arrow-body-style': 'error',
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': 'error',
    'no-duplicate-imports': 'error',
    'no-var': 'error',
    'vue/script-indent': [
      'error',
      4,
      {
        'baseIndent': 1
      }
    ],
    'vue/order-in-components': 2
  }
};
