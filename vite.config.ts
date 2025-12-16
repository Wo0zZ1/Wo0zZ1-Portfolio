import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import react from '@vitejs/plugin-react'
import imageOptimizer from 'vite-plugin-imagemin'

export default defineConfig({
	plugins: [react(), svgr(), imageOptimizer()],
})
