import pluginJs from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },

  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,

  // React 권장 규칙
  {
    ...pluginReact.configs.flat.recommended,
    // React 17 + : 버전을 자동 감지 후 불필요한 경고 방지
    settings: {
      react: {
        version: 'detect',
      },
    },
    // React 17 + : import 문 없이도 JSX 사용 가능
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
  },

  // Prettier 과 ESLint 충돌 시 Prettier 우선 적용
  prettierConfig,
];
