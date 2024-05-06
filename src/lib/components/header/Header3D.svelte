<script lang="ts">
	import { onMount, createEventDispatcher } from 'svelte';
	import MainVertShader from '$lib/assets/shader/main.vert';
	import RayMarchFragShader from '$lib/assets/shader/march.frag';
	import NameImg from '$lib/assets/image/name.png';
	import { compileShader, getAttribLocation, getUniformLocation } from '$lib/utils/shader';
	import { clamp } from '$lib/utils/number';
	import { debounce } from '$lib/utils/debounce';

	const acceptableFramerate = 60 as const;

	const dispatch = createEventDispatcher<{ glFailed: undefined }>();

	let scale = 1;

	let canvas: HTMLCanvasElement;

	let onScreen = false;

	onMount(() => {
		let observer = new IntersectionObserver((entries) => {
			onScreen = entries[0].isIntersecting;
		});
		observer.observe(canvas);

		return () => {
			observer.disconnect();
		};
	});

	let mousePosNormX = 0;
	let mousePosNormY = 0;
	const rotateStrength = 1 as const;

	onMount(() => {
		let runId: number;
		try {
			const gl = canvas.getContext('webgl', {
				alpha: false,
				antialias: false,
				depth: false,
				stencil: false,
				preserveDrawingBuffer: false,
				failIfMajorPerformanceCaveat: true,
			});
			if (!gl) {
				console.error('webgl not supported');
				dispatch('glFailed');
				return;
			}

			const vertexShader = compileShader(gl, MainVertShader, gl.VERTEX_SHADER);
			const fragmentShader = compileShader(gl, RayMarchFragShader, gl.FRAGMENT_SHADER);

			const program = gl.createProgram();
			if (!program) {
				console.error('Cannot create webgl program');
				dispatch('glFailed');
				return;
			}

			gl.attachShader(program, vertexShader);
			gl.attachShader(program, fragmentShader);
			gl.linkProgram(program);
			gl.useProgram(program);

			// a quad cover entries canvas
			const vertexData = new Float32Array([-1.0, 1.0, -1.0, -1.0, 1.0, 1.0, 1.0, -1.0]);
			const vertexDataBuffer = gl.createBuffer();
			if (!vertexDataBuffer) {
				console.error('Cannot create buffer');
				dispatch('glFailed');
				return;
			}

			gl.bindBuffer(gl.ARRAY_BUFFER, vertexDataBuffer);
			gl.bufferData(gl.ARRAY_BUFFER, vertexData, gl.STATIC_DRAW);

			const positionHandle = getAttribLocation(gl, program, 'position');
			gl.enableVertexAttribArray(positionHandle);
			gl.vertexAttribPointer(positionHandle, 2, gl.FLOAT, false, 2 * 4, 0);

			const texture = gl.createTexture();
			if (!texture) {
				console.error('Cannot create texture');
				dispatch('glFailed');
				return;
			}
			gl.bindTexture(gl.TEXTURE_2D, texture);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
			gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);

			const nameTextureSizeHandle = getUniformLocation(gl, program, 'nameTextureSize');

			const image = new Image();
			image.onload = function () {
				gl.bindTexture(gl.TEXTURE_2D, texture);
				gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);
				gl.pixelStorei(gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, gl.NONE);
				gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
				gl.uniform2f(nameTextureSizeHandle, image.width, image.height);
			};
			image.src = NameImg;

			const resolutionHandle = getUniformLocation(gl, program, 'resolution');

			const rotateStrengthHandle = getUniformLocation(gl, program, 'rotateStrength');
			gl.uniform1f(rotateStrengthHandle, rotateStrength);

			const rotateCameraHandle = getUniformLocation(gl, program, 'rotateCamera');

			const run = () => {
				if (onScreen) {
					gl.viewport(0, 0, canvas.width, canvas.height);
					gl.uniform2f(resolutionHandle, canvas.width, canvas.height);

					gl.uniform2f(rotateCameraHandle, mousePosNormX, mousePosNormY);
					gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
				}

				runId = requestAnimationFrame(run);
			};

			runId = requestAnimationFrame(run);
		} catch {
			dispatch('glFailed');
		}

		return () => {
			cancelAnimationFrame(runId);
		};
	});

	const detectMouseMove = (event: MouseEvent | TouchEvent) => {
		const centerX = document.body.clientWidth / 2;
		const centerY = window.innerHeight / 2;

		const pageX = (event as MouseEvent).pageX ?? (event as TouchEvent).touches[0]?.pageX;
		const pageY = (event as MouseEvent).pageY ?? (event as TouchEvent).touches[0]?.pageY;

		mousePosNormX = clamp(-1, 1, (centerX - pageX) / centerX);
		mousePosNormY = clamp(-1, 1, (centerY - pageY) / centerY);
	};

	onMount(() => {
		addEventListener('mousemove', detectMouseMove, true);
		addEventListener('touchmove', detectMouseMove, true);

		return () => {
			removeEventListener('mousemove', detectMouseMove, true);
			removeEventListener('touchmove', detectMouseMove, true);
		};
	});

	const resizeCanvas = () => {
		canvas.width = document.body.clientWidth * scale;
		canvas.height = window.innerHeight * scale;
	};

	onMount(() => {
		resizeCanvas();
		const debouncedResize = debounce(resizeCanvas, 200);

		addEventListener('resize', debouncedResize, true);

		return () => {
			removeEventListener('resize', debouncedResize, true);
		};
	});

	onMount(() => {
		let animId: number;
		let timeLastFrame: number;
		const run = (timeStamp: number) => {
			if (timeLastFrame) {
				if (timeStamp - timeLastFrame > (1 / acceptableFramerate) * 1000) {
					console.log('framedrop', timeStamp - timeLastFrame);
					scale = 1;
				} else {
					scale = window?.devicePixelRatio;
				}
				resizeCanvas();
			}
			timeLastFrame = timeStamp;
			animId = requestAnimationFrame(run);
		};

		animId = requestAnimationFrame(run);

		return () => {
			cancelAnimationFrame(animId);
		};
	});
</script>

<canvas bind:this={canvas} class="logo" />

<style lang="scss">
	.logo {
		width: 100%;
		height: 100vh;
	}
</style>
