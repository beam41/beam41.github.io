export function compileShader(
	gl: WebGLRenderingContext,
	shaderSource: string,
	shaderType: WebGLRenderingContext['FRAGMENT_SHADER'] | WebGLRenderingContext['VERTEX_SHADER'],
	mobileFlag = false,
) {
	const shader = gl.createShader(shaderType);

	if (!shader) {
		console.error('Cannot create shader', shaderSource);
		throw new Error('Cannot create shader');
	}

	gl.shaderSource(shader, (mobileFlag ? '#define MOBILE\n' : '') + shaderSource);
	gl.compileShader(shader);

	if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
		console.error('Shader compile failed', gl.getShaderInfoLog(shader));
		throw new Error('Shader compile failed');
	}

	return shader;
}

export function getAttribLocation(gl: WebGLRenderingContext, program: WebGLProgram, name: string) {
	const attributeLocation = gl.getAttribLocation(program, name);
	if (attributeLocation === -1) {
		console.error('Cannot find attribute', name);
		throw new Error('Cannot find attribute');
	}
	return attributeLocation;
}

export function getUniformLocation(gl: WebGLRenderingContext, program: WebGLProgram, name: string) {
	const attributeLocation = gl.getUniformLocation(program, name);
	if (attributeLocation === null) {
		console.error('Cannot find uniform', name);
		throw new Error('Cannot find uniform');
	}
	return attributeLocation;
}
