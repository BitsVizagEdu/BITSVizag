import { sveltekit } from '@sveltejs/kit/vite';

export default {
	plugins: [sveltekit()],
	server: {
		port: 5173,
		strictPort: true,
		// Windows file-watcher: use polling so HMR doesn't miss saves
		watch: {
			usePolling: true,
			interval: 100
		},
		warmup: {
			clientFiles: [
				'./src/routes/+page.svelte',
				'./src/routes/+layout.svelte',
				'./src/lib/components/navbar.svelte',
				'./src/lib/components/middlenav.svelte',
				'./src/lib/components/footer.svelte',
				'./src/lib/components/MobileHeader.svelte'
			]
		},
		hmr: {
			// Show build errors as an overlay in the browser
			overlay: true
		},
		// Avoids spurious "file not found" errors on Windows
		fs: {
			strict: false
		}
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
						// Flowbite & UI utilities
						if (id.includes('flowbite')) {
							return 'ui';
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
		target: 'es2020',
		sourcemap: false
	},
	optimizeDeps: {
		// Pre-bundle heavy CJS deps so first-load is instant
		include: [
			'aos',
			'gsap',
			'swiper',
			'lenis',
			'@studio-freight/lenis',
			'@splidejs/splide',
			'tailwind-merge',
			'cookie'
		],
		// Don't re-scan on every server restart
		force: false
	},
	// Faster CSS processing in dev
	css: {
		devSourcemap: false
	}
};
