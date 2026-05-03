import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import typescriptEslintEslintPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

const eslintConfig = defineConfig([
  // ESLint JS
  {
    plugins: { js },
    extends: ['js/recommended'],
    rules: {
      // Possible Problems
      'array-callback-return': ['error'],
      'no-await-in-loop': ['error'],
      'no-constructor-return': ['error'],
      'no-duplicate-imports': ['error'],
      'no-inner-declarations': ['error'],
      'no-promise-executor-return': ['error'],
      'no-self-compare': ['error'],
      'no-template-curly-in-string': ['error'],
      'no-unassigned-vars': ['error'],
      'no-unmodified-loop-condition': ['error'],
      'no-unreachable-loop': ['error'],
      'no-use-before-define': ['error'],
      'no-useless-assignment': ['error'],
      'require-atomic-updates': ['error'],
      // Suggestions
      'arrow-body-style': ['error', 'always'],
      'block-scoped-var': ['error'],
      camelcase: ['error', { properties: 'always' }],
      complexity: ['warn', { max: 10 }],
      'consistent-return': ['error'],
      'consistent-this': ['error'],
      curly: ['error'],
      'default-case': ['error'],
      'default-case-last': ['error'],
      'default-param-last': ['error'],
      'dot-notation': ['error'],
      eqeqeq: ['error'],
      'func-name-matching': ['error'],
      'func-style': ['error', 'declaration'],
      // 'new-cap': ['error'],
      'no-alert': ['warn'],
      'no-array-constructor': ['error'],
      'no-bitwise': ['error'],
      'no-caller': ['error'],
      'no-console': ['warn'],
      'no-div-regex': ['error'],
      'no-else-return': ['error'],
      'no-eq-null': ['error'],
      'no-eval': ['error'],
      'no-extend-native': ['error'],
      'no-extra-bind': ['error'],
      'no-extra-label': ['error'],
      'no-implicit-coercion': ['error'],
      'no-implied-eval': ['error'],
      'no-inline-comments': ['error'],
      'no-invalid-this': ['error'],
      'no-iterator': ['error'],
      'no-label-var': ['error'],
      'no-labels': ['error'],
      'no-lone-blocks': ['error'],
      'no-lonely-if': ['error'],
      'no-loop-func': ['error'],
      'no-multi-assign': ['error'],
      'no-nested-ternary': ['warn'],
      'no-new': ['error'],
      'no-new-func': ['error'],
      'no-object-constructor': ['error'],
      'no-octal-escape': ['error'],
      'no-param-reassign': ['error'],
      'no-proto': ['error'],
      'no-return-assign': ['error'],
      'no-script-url': ['error'],
      'no-sequences': ['error'],
      'no-shadow': ['error'],
      'no-throw-literal': ['error'],
      'no-undef-init': ['error'],
      'no-undefined': ['error'],
      'no-underscore-dangle': ['error'],
      'no-unneeded-ternary': ['error'],
      'no-unused-expressions': ['error'],
      'no-useless-call': ['error'],
      'no-useless-computed-key': ['error'],
      'no-useless-concat': ['error'],
      'no-useless-constructor': ['error'],
      'no-useless-rename': ['error'],
      'no-useless-return': ['error'],
      'no-var': ['error'],
      'no-void': ['error'],
      'prefer-const': ['error'],
      'prefer-object-spread': ['error'],
      'prefer-regex-literals': ['error'],
      'prefer-rest-params': ['error'],
      'prefer-spread': ['error'],
      'prefer-template': ['error'],
      yoda: ['error']
    }
  },
  // TypeScript ESLint
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: { '@typescript-eslint': typescriptEslintEslintPlugin },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname
      }
    },
    extends: [
      '@typescript-eslint/strict-type-checked',
      '@typescript-eslint/stylistic-type-checked'
    ],
    rules: {
      '@typescript-eslint/require-await': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true }]
    }
  },
  // Prettier
  eslintPluginPrettierRecommended,
  eslintConfigPrettier
]);

export default eslintConfig;
