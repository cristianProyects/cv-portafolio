// Configuración de ESLint (flat): Vue + TypeScript + límites entre módulos (mismo esquema que el
// proyecto de la agencia de tours).
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import prettier from 'eslint-config-prettier'
import pluginVue from 'eslint-plugin-vue'

export default defineConfigWithVueTs(
  { ignores: ['dist', 'coverage', 'node_modules', 'public'] },
  pluginVue.configs['flat/recommended'],
  vueTsConfigs.strict,
  {
    rules: {
      'vue/multi-word-component-names': 'error',
      'vue/require-default-prop': 'off',
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      'no-console': ['error', { allow: ['warn', 'error'] }],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
    },
  },
  {
    files: ['src/modules/**/*.{ts,vue}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@/modules/*/*'],
              message: 'Usa la API pública del módulo: "@/modules/<módulo>".',
            },
          ],
        },
      ],
    },
  },
  {
    files: ['src/shared/**/*.{ts,vue}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            { group: ['@/modules/**', '@/app/**'], message: 'shared/ es agnóstico de dominio.' },
          ],
        },
      ],
    },
  },
  prettier,
)
