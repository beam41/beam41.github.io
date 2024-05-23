import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import minGlsl from './plugins/minGlsl';

export default defineConfig({
	plugins: [
		sveltekit(),
		minGlsl({
			noRenaming: true,
		}),
	],
});
