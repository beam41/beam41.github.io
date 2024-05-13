import { createFilter } from '@rollup/pluginutils';
import { transformWithEsbuild } from 'vite';
import { exec as _exec } from 'node:child_process';
import { promisify } from 'node:util';
import path from 'node:path';
import os from 'node:os';

const exec = promisify(_exec);

const INCLUDE_DEFAULT = ['**/*.vert', '**/*.frag'];

/**
 * Need to include https://github.com/laurentlb/shader-minifier exe file in plugins folder
 *
 * Also needs mono on linux
 *
 * @returns {import('vite').Plugin}
 */
export default function minGlsl({
	include = INCLUDE_DEFAULT,
	exclude = undefined,
	preserveExternals = true,
	noRenaming = false,
} = {}) {
	const isWindows = os.platform() === 'win32';
	const filter = createFilter(include, exclude);

	return {
		enforce: 'pre',
		name: 'min-glsl',

		async transform(src, id) {
			if (!filter(id)) return;

			let command = [path.join(__dirname, 'shader_minifier.exe'), id, '--format text', '-o -'];

			if (!isWindows) {
				command.unshift('mono');
			}

			if (preserveExternals) {
				command.push('--preserve-externals');
			}

			if (noRenaming) {
				command.push('--no-renaming');
			}

			const { stdout } = await exec(command.join(' '));

			return transformWithEsbuild(stdout, id, {
				loader: 'text',
				format: 'esm',
			});
		},
	};
}
