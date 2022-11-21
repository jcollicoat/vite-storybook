import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsConfigPaths from 'vite-tsconfig-paths'
import { EsLinter, linterPlugin } from 'vite-plugin-linter'
import svgrPlugin from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig(configEnv => ({
  // In dev, all of these are available. In build, none are available
  define: {
    'import.meta.env.STORYBOOK_VITECONFIG_DEFINE': JSON.stringify('StorybookViteConfigDefine'),
    'import.meta.env.VITE_VITECONFIG_DEFINE': JSON.stringify('ViteViteConfigDefine'),
    'import.meta.env.OTHER_VITECONFIG_DEFINE': JSON.stringify('OtherViteConfigDefine'),
  },
  plugins: [
    react(),
    tsConfigPaths(),
    linterPlugin({
      include: ['./src/**/*.{ts,tsx}'],
      linters: [new EsLinter({ configEnv })],
    }),
    svgrPlugin(),
  ],
}))
