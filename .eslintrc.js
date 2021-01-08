module.exports = {
  env: {
    commonjs: true,
    node: true,
    jest: true,
    es6: true
  },
  extends: [
    'eslint:recommended'
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    requireConfigFile: false,
    allowImportExportEverywhere: true,
    strictMode: true,
    babelOptions: {
      presets: [
        '@babel/preset-env'
      ],
      plugins: [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-syntax-class-properties',
        '@babel/plugin-proposal-private-methods'
      ],
      parserOpts: {
        plugins: [
          'classPrivateMethods',
          'classPrivateProperties',
          'classProperties',
          'nullishCoalescingOperator',
          'optionalChaining',
          'dynamicImport'
        ]
      }
    },
  },
  rules: {
    'new-cap': 'off',
    'no-console': 'off',
    'no-debugger': 'off',
    'linebreak-style': [
      'error',
      'unix'
    ],
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_'
      }
    ],
    'quote-props': [
      'error',
      'as-needed'
    ],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true
      }
    ],
    indent: [
      'error',
      2
    ],
    semi: [
      'error',
      'never'
    ],
    '@babel/new-cap': 'off',
    '@babel/no-invalid-this': 'off',
    '@babel/no-unused-expressions': 'off',
    '@babel/object-curly-spacing': 'off',
    '@babel/semi': 'off'
  },
  plugins: [
    '@babel'
  ],
  ignorePatterns: [
    '**/node_modules/**'
  ]
}
