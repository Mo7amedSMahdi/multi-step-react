module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    'linebreak-style': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'import/prefer-default-export': 'off',
    'jsx-quotes': ['error', 'prefer-double'],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'max-len': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'func-names': 'off',
    'default-case': 'off',
    'no-unused-vars': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react/destructuring-assignment': 'off',
    'react-hooks/rules-of-hooks': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'react/no-array-index-key': 'off',
    'consistent-return': 'off',
    'no-unsafe-optional-chaining': 'off',
    'no-param-reassign': 'off',
    'no-restricted-syntax': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    camelcase: 'off',
    'no-await-in-loop': 'off',
    'react/jsx-no-useless-fragment': 'off',
    '@typescript-eslint/ban-types': 'off',
    'no-empty-pattern': 'off',
    'no-alert': 'off',
    'no-undef': 'off',
    'object-curly-newline': 'off',
    'operator-linebreak': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'comma-dangle': 'off',
    'react/function-component-definition': 'off',
    'arrow-body-style': 'off',
    'no-restricted-globals': 'off',
    'no-continue': 'off',
    'no-unused-expressions': 'off',
    'no-use-before-define': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
