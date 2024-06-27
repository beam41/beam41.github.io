import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import minGlsl from './plugins/minGlsl';
import hexLoader from './plugins/hexLoader';

export default defineConfig({
	plugins: [
		sveltekit(),
		hexLoader(),
		minGlsl({
			noRenaming: true,
		}),
	],
});
