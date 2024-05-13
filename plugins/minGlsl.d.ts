import type { Plugin } from 'vite';

/**
 * Need to include https://github.com/laurentlb/shader-minifier exe file in plugins
 *
 * Also needs mono on linux
 *
 * @returns {import('vite').Plugin}
 */
export default function (options?: {
	include?: string[];
	exclude?: string[];
	preserveExternals?: boolean;
	noRenaming?: boolean;
}): Plugin;
