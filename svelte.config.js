import adapter from '@sveltejs/adapter-vercel';
import preprocess from "svelte-preprocess";

/** @type {{preprocess: (PreprocessorGroup & {defaultLanguages: Readonly<{markup: string; style: string; script: string}>})[], kit: {methodOverride: {allowed: string[]}, adapter: Adapter}}} */
const config = {
	preprocess: [
		preprocess({
			postcss: true,
		}),
		preprocess({
			scss: {
				includePaths: ['theme'],
			},
		})
	],
	kit: {
		prerender: {
			handleMissingId: 'warn'
		},
		adapter: adapter({
			runtime: 'nodejs22.x',
		}),
	},
};

export default config;
