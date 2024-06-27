import { readFile } from 'fs/promises';
import { transformWithEsbuild } from 'vite';
import mime from 'mime';

export default function hexLoader() {
	return {
		name: 'hex-loader',
		async transform(code, id) {
			const [path, query] = id.split('?');
			if (query !== 'raw-hex') return;

			const data = await readFile(path);
			const mimeType = mime.getType(path);
			const hex = data.toString('base64');

			return transformWithEsbuild(`data:${mimeType};base64,${hex}`, id, {
				loader: 'text',
				format: 'esm',
			});
		},
	};
}
