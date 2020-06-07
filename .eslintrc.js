module.exports = {
  extends: ['airbnb', 'plugin:prettier/recommended', 'airbnb/hooks'],
  parser: 'babel-eslint',
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/react-in-jsx-scope': 'off',
  },
  globals: {
    React: 'writable',
  },
  parser: 'babel-eslint',
};
