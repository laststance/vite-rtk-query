/**
 * ESLint Flat Configuration
 * @see https://eslint.org/docs/latest/use/configure/configuration-files
 *
 * Migrated from .eslintrc.cjs to ESLint v9 flat config format.
 */
import tsPrefixer from 'eslint-config-ts-prefixer'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import reactHooks from 'eslint-plugin-react-hooks'

export default [
  // ─────────────────────────────────────────────────────────────
  // Global ignores (migrated from .eslintignore)
  // ─────────────────────────────────────────────────────────────
  {
    ignores: [
      '.vscode/**',
      '.github/**',
      // Note: node_modules, build, dist, .git, .idea are already ignored by ts-prefixer
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // Base configuration from eslint-config-ts-prefixer
  // Includes: TypeScript parser/plugin, eslint-plugin-import, projectService
  // ─────────────────────────────────────────────────────────────
  ...tsPrefixer,

  // ─────────────────────────────────────────────────────────────
  // Accessibility rules (jsx-a11y)
  // ─────────────────────────────────────────────────────────────
  jsxA11y.flatConfigs.recommended,

  // ─────────────────────────────────────────────────────────────
  // React Hooks rules
  // ─────────────────────────────────────────────────────────────
  reactHooks.configs.flat['recommended-latest'],
]
