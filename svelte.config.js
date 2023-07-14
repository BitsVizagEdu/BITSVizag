import adapter from '@sveltejs/adapter-auto';
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
		adapter: adapter(),
	}
};

export default config;
