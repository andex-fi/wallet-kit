import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgrPlugin from 'vite-plugin-svgr'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => ({
  plugins: [react(), svgrPlugin()],
  esbuild: {
    target: "es2020",
    pure: mode === 'production' ? ['console.log', 'debugger'] : [],
  },
  optimizeDeps: {
    esbuildOptions : {
      target: "es2020"
    }
  },
  build: {
    target: 'es2020',
    lib: {
      entry: path.resolve(__dirname, './src/index.ts'),
      fileName: 'index',
      name: 'andexWalletKit'
    },
    emptyOutDir: false,
    rollupOptions: {
      external: ['react', 'react-dom', 'cross-fetch'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps.
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'cross-fetch': 'crossFetch'
        },
      },
    },
  },
}));
