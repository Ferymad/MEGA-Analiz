module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true, // Add this line to include Node.js environment
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
    ecmaVersion: 2021, // Update to match 'es2021'
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off', // Turn off the rule requiring React to be in scope
    'react/prop-types': 'off', // Turn off prop-types rule if you're not using prop-types
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['.eslintrc.js', 'vite.config.js'],
      env: {
        node: true,
      },
    },
  ],
};
