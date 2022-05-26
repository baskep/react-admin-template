module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'import',
  ],
  rules: {
    semi: ['error', 'never'],
    indent: ['error', 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      FunctionDeclaration: {
        parameters: 1,
        body: 1,
      },
      FunctionExpression: {
        parameters: 1,
        body: 1,
      },
      CallExpression: {
        arguments: 1,
      },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      ignoreComments: false,
    }],
    'no-var': 'error',
    // 'no-console': 'error',
    'prefer-template': 'error',
    'no-multi-assign': 'error',
    'no-case-declarations': 'error',
    'no-else-return': 'error',
    'newline-per-chained-call': 'error',
    'import/no-mutable-exports': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'function-paren-newline': ['error', 'consistent'],
    'object-shorthand': [
      'error',
      'methods',
      {
        avoidExplicitReturnArrows: true,
      },
    ],
    'arrow-parens': ['error', 'as-needed', {
      requireForBlockBody: true,
    }],
    'no-confusing-arrow': 'error',
    'quotes': ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-double'],
    'no-param-reassign': 'warn',
    'space-infix-ops': ['error', { 'int32Hint': false }],
    'max-len': ['error', 120, {
      ignoreComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
    }],
    'no-unused-vars': ['error', {
      args: 'after-used',
      ignoreRestSiblings: true,
      argsIgnorePattern: '^_',
    }],
    eqeqeq: ['error', 'smart'],
    'arrow-spacing': [2, {
      before: true,
      after: true,
    }],
    'block-spacing': [2, 'always'],
    'comma-spacing': [2, {
      before: false,
      after: true,
    }],
    'key-spacing': [2, {
      beforeColon: false,
      afterColon: true,
    }],
    'keyword-spacing': [2, {
      before: true,
      after: true,
    }],
    'no-multi-spaces': 2,
    'no-multiple-empty-lines': [2, {
      max: 1,
    }],
    'no-unneeded-ternary': [2, {
      defaultAssignment: false,
    }],
    'operator-linebreak': [2, 'after', {
      overrides: {
        '?': 'before',
        ':': 'before',
      },
    }],
    'semi-spacing': [2, {
      before: false,
      after: true,
    }],
    'space-before-blocks': [2, 'always'],
    'no-trailing-spaces': 2,
    'object-curly-spacing': [2, 'always', {
      objectsInObjects: false,
    }],
    'camelcase': 'off',
    'no-mixed-operators': 'off',
    'jsx-a11y/alt-text': 'off',
    'react/prop-types': ['warn', {
      skipUndeclared: true,
    }],
    'react/jsx-handler-names': ['off', {
      eventHandlerPrefix: '(handle|on|set)',
      checkLocalVariables: true,
    }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',
    'react/jsx-closing-tag-location': [2],
    'react/jsx-closing-bracket-location': [1, 'line-aligned'],
    'react/jsx-key': 'error',
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-wrap-multilines': [
      'error',
      {
        'declaration': 'parens-new-line',
        'assignment': 'parens-new-line',
        'return': 'parens-new-line',
        'arrow': 'parens-new-line',
        'condition': 'parens-new-line',
        'logical': 'parens-new-line',
        'prop': 'ignore',
      },
    ],
    'react/self-closing-comp': ['error', {
      'component': true,
      'html': true,
    }],
  },
}