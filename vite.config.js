import { sveltekit } from '@sveltejs/kit/vite';

export default {
	plugins: [sveltekit()],
	server: {
		port: 5173,
		strictPort: true
	},
	build: {
		rollupOptions: {
			output: {
				manualChunks: (id) => {
					if (id.includes('node_modules')) {
						// Animation libraries in a separate lazy chunk
						if (id.includes('gsap') || id.includes('locomotive-scroll')) {
							return 'animation';
						}
						if (id.includes('aos')) {
							return 'aos';
						}
						// Scroll library in its own chunk (loaded async)
						if (id.includes('lenis')) {
							return 'scroll';
						}
						// Splide carousel
						if (id.includes('splide')) {
							return 'carousel';
						}
						return 'vendor';
					}
				}
			}
		},
		cssCodeSplit: true,
		reportCompressedSize: false,
		// Minify for production
		minify: 'esbuild',
		target: 'es2020'
	},
	optimizeDeps: {
		include: [
			'aos',
			'gsap',
			'swiper',
			'lenis',
			'@splidejs/splide',
			'@splidejs/svelte-splide',
			'flowbite-svelte',
			'motion',
			'tailwind-merge'
		]
	}
};
