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
		cssCodeSplit: true,
		reportCompressedSize: true
	},
	optimizeDeps: {
		include: ['aos', 'gsap', 'swiper']
	}
};
