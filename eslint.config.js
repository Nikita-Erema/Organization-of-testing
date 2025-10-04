import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    // Для всех JS файлов
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      'no-unused-vars': 'warn',
      'no-console': 'off',
      'no-useless-escape': 'off',
    },
  },
  {
    // Для тестов (Jest)
    files: ['**/*.test.js', '**/e2e/**/*.js'],
    languageOptions: {
      globals: {
        ...globals.jest, // Добавляет describe, test, expect, etc.
      },
    },
  },
  {
    // Игнорируем папки
    ignores: [
      'dist/**',
      'coverage/**',
      'node_modules/**',
      '**/coverage/**'
    ],
  },
];