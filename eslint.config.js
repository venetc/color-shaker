import antfu from '@antfu/eslint-config'

export default antfu({
  solid: true,
  jsonc: false,
  rules: {
    'style/semi': 'off',
    'style/brace-style': 'off',
    'antfu/if-newline': 'off',
    'curly': ['off', 'multi', 'consistent'],
    'no-console': 'off',
    'node/prefer-global/process': 'off',
    'ts/prefer-ts-expect-error': 'off',
    'style/jsx-max-props-per-line': [
      'warn',
      {
        maximum: {
          single: 1,
          multi: 1,
        },
      },
    ],
    'style/jsx-first-prop-new-line': ['warn', 'multiline-multiprop'],
    'import/order': [
      'warn',
      {
        'newlines-between': 'never',
        'groups': [
          'index',
          'sibling',
          'parent',
          'internal',
          'external',
          'builtin',
          'object',
          'type',
        ],
      },
    ],
  },
})
