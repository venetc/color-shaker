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
