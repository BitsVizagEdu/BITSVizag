import { sveltekit } from '@sveltejs/kit/vite';

/** @type {{ssr: string[], plugins: *[]}} */
const config = {
	plugins: [sveltekit()],
	// ssr: ['svelte-motion', 'svelte-materialify']
};

export default config;

