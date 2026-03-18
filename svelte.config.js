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
			isr: {
				// Cache static routes for 3600 seconds (1 hour)
				expiration: 3600,
				bypassToken: process.env.VERCEL_AUTOMATION_BYPASS_TOKEN
			}
		}),
		// Optimize client-side bundle
		splitter: 'sequential',
		env: {
			publicPrefix: 'PUBLIC_'
		}
	},
	compilerOptions: {
		dev: false,
		// Enable performance optimizations
		immutable: false,
		legacy: false,
		accessors: false,
		customElement: false,
		preserveComments: false,
		preserveWhitespace: false
	}
};

export default config;
