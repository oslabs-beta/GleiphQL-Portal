import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
		port: 3000,
		proxy: {
			'/api': 'http://localhost:3500'
		}
	},
  build: {
    outDir: '../../dist/client', // Replace with the actual path
    assetsInlineLimit: 0, // To prevent small assets from being inlined
  },
})
