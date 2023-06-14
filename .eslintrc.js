/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
// ESLint configuration
// http://eslint.org/docs/user-guide/configuring
module.exports = {
  parserOptions: {
    ecmaVersion: 6,
  },
  parser: '@babel/eslint-parser',
  extends: ['airbnb', 'plugin:flowtype/recommended', 'prettier'],
  plugins: ['flowtype', 'prettier'],
  globals: {
    __DEV__: true,
    toastr: true,
    workbox: true,
  },
  env: {
    browser: true,
    jasmine: true,
  },
  rules: {
    // `js` and `jsx` are common extensions
    // `mjs` is for `universal-router` only, for now
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        jsx: 'never',
        mjs: 'never',
      },
    ],
    // Not supporting nested package.json yet
    // https://github.com/benmosher/eslint-plugin-import/issues/458
    'import/no-extraneous-dependencies': 'off',
    // Recommend not to leave any console.log in your code
    // Use console.error, console.warn and console.info instead
    // 'no-console': [
    //   'error',
    //   {
    //     allow: ['warn', 'error', 'info'],
    //   },
    // ],
    // a11y removed rule, ignore them
    'jsx-a11y/href-no-hash': 'off',
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/issues/308#issuecomment-322954274
    // Allow js files to use jsx syntax, too
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    // Automatically convert pure class to function by
    // babel-plugin-transform-react-pure-class-to-function
    // https://github.com/kriasoft/react-starter-kit/pull/961
    'react/prefer-stateless-function': 'off',
    // ESLint plugin for prettier formatting
    // https://github.com/prettier/eslint-plugin-prettier
    'prettier/prettier': [
      'error',
      {
        "endOfLine": "auto",
        // https://github.com/prettier/prettier#options
        printWidth: 120,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    'max-len': [
      'error',
      {
        code: 120,
        tabWidth: 2,
      },
    ],
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'react/jsx-no-target-blank': 'off',
    'react/forbid-prop-types': 'off',
    'no-console': 'off',
    'import/prefer-default-export': 'off',
    'no-plusplus': 'off',
    'func-names': 'off',
    'no-param-reassign': 'off',
    'react/no-array-index-key': 'off',
    'no-use-before-define': 'off',
  },
  settings: {
    // Allow absolute paths in imports, e.g. import Button from 'components/Button'
    // https://github.com/benmosher/eslint-plugin-import/tree/master/resolvers
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },
};
