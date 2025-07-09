module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: [
      './tsconfig.json',
      './packages/core/chat-service/tsconfig.json',
      './packages/core/api/tsconfig.json',
      './packages/core/auth-service/tsconfig.json',
      './packages/core/user-service/tsconfig.json',
      './packages/core/frontend/tsconfig.app.json',
    ],
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  rules: {
    '@typescript-eslint/no-unused-vars': ['error', { 
      argsIgnorePattern: '^_', 
      varsIgnorePattern: '^_', 
      caughtErrorsIgnorePattern: '^_' 
    }],
  },
  ignorePatterns: ['.eslintrc.cjs'],
};
