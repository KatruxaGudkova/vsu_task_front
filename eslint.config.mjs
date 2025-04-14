import pluginJs from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { files: ['**/*.js'], languageOptions: { sourceType: 'script' } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,

  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      'import/order': [
        'warn',
        {
          groups: [
            'builtin', // Node "fs", "path" и т.д.
            'external', // пакеты из node_modules
            'internal', // @/ или алиасы
            'parent', // ../
            'sibling', // ./
            'index', // index.ts
            'object', // import * as Foo from 'foo';
            'type', // import type {...}
          ],
          pathGroups: [
            {
              pattern: '@/**', // если ты используешь alias @
              group: 'internal',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          'newlines-between': 'always', // ⬅️ пустая строка между группами
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
  },
];
