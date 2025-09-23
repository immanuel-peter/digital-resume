// @ts-check
import js from '@eslint/js'
import reactHooks from 'eslint-plugin-react-hooks'
import importPlugin from 'eslint-plugin-import'
import tseslint from 'typescript-eslint'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  { ignores: ['.next/**', 'node_modules/**', 'dist/**', 'build/**'] },
  // Base globals/env for both browser and node code found in Next apps
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        // Allow common globals used across server and client without no-undef noise
        window: 'readonly',
        document: 'readonly',
        localStorage: 'readonly',
        fetch: 'readonly',
        console: 'readonly',
        process: 'readonly',
        require: 'readonly',
        module: 'readonly',
        __dirname: 'readonly',
      },
    },
  },
  // Apply core JS recommendations first
  js.configs.recommended,
  // Then apply TypeScript recommendations so TS-specific overrides win for TS files
  ...tseslint.configs.recommended,
  // Project rules and plugins
  {
    settings: { react: { version: 'detect' } },
    plugins: {
      'react-hooks': reactHooks,
      import: importPlugin,
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'no-console': ['warn', { allow: ['error', 'warn'] }],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      'import/no-anonymous-default-export': 'off',
    },
  },
  // Config files run in Node and may use require()
  {
    files: [
      '**/*.config.{js,cjs,mjs,ts}',
      'postcss.config.*',
      'eslint.config.*',
      'tailwind.config.*',
    ],
    languageOptions: {
      globals: {
        require: 'readonly',
        module: 'readonly',
        __dirname: 'readonly',
        process: 'readonly',
      },
    },
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
      'no-undef': 'off',
    },
  },
]
