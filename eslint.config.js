// @ts-check
const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');
const _import = require('eslint-plugin-import');
const pluginUnusedImports = require('eslint-plugin-unused-imports');
const pluginSimpleImportSort = require('eslint-plugin-simple-import-sort');

module.exports = tseslint.config(
  {
    ignores: [
      'dist/', // Ignore distribution folder
      '**/node_modules/*', // Ignore node_modules
      'package.json', // Ignore package.json file
      'package-lock.json', // Ignore package-lock.json
      '**/.angular/*', // Ignore Angular-specific files
      '**/public/*', // Ignore public assets folder
    ],
  },
  {
    extends: [eslintPluginPrettierRecommended],
    rules: {
      'prettier/prettier': 'error',
    },
  },
  {
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    plugins: {
      import: _import,
      'unused-imports': pluginUnusedImports, // Clean up unused imports
      'simple-import-sort': pluginSimpleImportSort, // Automatically sort imports
    },
    processor: angular.processInlineTemplates,
    rules: {
      // Angular recommended rules
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],
      '@angular-eslint/no-input-rename': 'error', // Disallow renaming of input bindings
      '@angular-eslint/no-output-on-prefix': 'error', // Disallow output bindings with 'on' prefix
      '@angular-eslint/no-output-rename': 'error', // Disallow renaming of output bindings

      // TypeScript recommended rules
      '@typescript-eslint/explicit-module-boundary-types': 'warn', // Warn when module boundary types are not explicitly declared
      '@typescript-eslint/explicit-function-return-type': 'warn', // Warn when function return types are not declared
      '@typescript-eslint/no-explicit-any': 'error', // Throw error when using `any` type
      '@typescript-eslint/ban-ts-comment': 'off', // Allow `ts-ignore` comments
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { vars: 'all', args: 'after-used', argsIgnorePattern: '^_' }, // Warn about unused variables, except when arguments start with an underscore
      ],
      '@typescript-eslint/no-inferrable-types': 'warn', // Warn about explicit type annotations that can be inferred

      // Prettier formatting rules
      'prettier/prettier': [
        'error',
        {
          trailingComma: 'all', // Enforce trailing commas in objects and arrays
        },
      ],

      // Import rules
      'import/order': ['error', { alphabetize: { order: 'asc' } }], // Enforce alphabetical ordering of imports
      'import/no-duplicates': 'error', // Prevent duplicate imports
      'import/no-extraneous-dependencies': 'error', // Disallow importing from unnecessary dependencies
      'import/newline-after-import': ['error', { count: 1 }], // Enforce a newline after imports

      // Unused import cleanup
      'unused-imports/no-unused-imports': 'error', // Remove unused imports automatically
      'unused-imports/no-unused-vars': [
        'warn',
        { vars: 'all', args: 'after-used', argsIgnorePattern: '^_' }, // Warn about unused variables, except when arguments start with an underscore
      ],

      // Sort imports automatically
      'simple-import-sort/imports': 'error', // Automatically sort imports
      'simple-import-sort/exports': 'error', // Automatically sort export statements

      // Best practices
      eqeqeq: ['error', 'always'], // Require strict equality (`===` / `!==`)
      curly: ['error', 'all'], // Enforce curly braces for multi-line statements
      'no-console': ['warn', { allow: ['warn', 'error'] }], // Allow `console.warn` and `console.error` but warn on other console methods
      'no-debugger': 'error', // Disallow `debugger` statements
      'no-var': 'error', // Disallow `var` (use `let` or `const` instead)
      'prefer-const': 'error', // Require `const` when variables are not reassigned
      'no-implicit-coercion': 'error', // Disallow implicit type coercion
      'no-restricted-syntax': ['error', 'WithStatement'], // Disallow `with` statements
      'no-duplicate-imports': 'error', // Disallow duplicate imports
      'no-underscore-dangle': 'warn', // Warn about identifiers with leading/trailing underscores
      'no-useless-constructor': 'error', // Disallow useless constructor methods
      'prefer-template': 'error', // Require template literals instead of string concatenation
      'object-shorthand': ['error', 'always'], // Enforce shorthand notation for object propertie
    },
  },
  {
    files: ['**/*.html'],
    extends: [...angular.configs.templateRecommended, ...angular.configs.templateAccessibility],
    rules: {},
  },
);
