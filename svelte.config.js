import adapter from '@sveltejs/adapter-static';
import preprocess from "svelte-preprocess";
import { vitePreprocess } from '@sveltejs/kit/vite';

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
		adapter: adapter({
			runtime: 'nodejs18.x',
			strict: false,
		}),
	},
};

export default config;
