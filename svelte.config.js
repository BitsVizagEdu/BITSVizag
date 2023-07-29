import adapter from '@sveltejs/adapter-vercel';
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
		}),
	},preprocess: vitePreprocess()
};

export default config;