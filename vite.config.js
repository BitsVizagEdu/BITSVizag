import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		// Rollup output configuration
		rollupOptions: {
			output: {
				// Code splitting strategy - each route gets its own chunk
				manualChunks: (id) => {
					if (id.includes('node_modules')) {
						if (id.includes('gsap') || id.includes('locomotion')) {
							return 'animation';
						}
						if (id.includes('aos')) {
							return 'aos';
						}
						return 'vendor';
					}
				}
			}
		},
		// Minify CSS and JS
		minify: 'terser',
		terserOptions: {
			compress: {
				drop_console: false
			}
		},
		// Create small CSS chunks
		cssCodeSplit: true,
		// Report compressed size
		reportCompressedSize: true
	},
	// Optimization hints
	optimizeDeps: {
		include: ['aos', 'gsap', 'swiper']
	}
});
