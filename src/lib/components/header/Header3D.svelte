<script lang="ts">
	import { onMount, createEventDispatcher } from 'svelte';
	import MainVertShader from '$lib/assets/shader/main.vert';
	import RayMarchFragShader from '$lib/assets/shader/march.frag';
	import NameImg from '$lib/assets/image/name.png';
	import { compileShader, getAttribLocation, getUniformLocation } from '$lib/utils/shader';
	import { clamp } from '$lib/utils/number';
	import { debounce } from '$lib/utils/debounce';
	import { easeInOutSine, pingpongLoop } from '$lib/utils/tween';
	import { isMobileAndTablet } from '$lib/utils/userAgent';

	const MOUSE_ROTATE_STRENGTH = 0.5 as const;

	const dispatch = createEventDispatcher<{ glFailed: undefined }>();

	let canvas: HTMLCanvasElement;
	let measureScreen: HTMLElement;

	let onScreen = false;

	let glResize: (() => void) | undefined;

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
			const fragmentShader = compileShader(
				gl,
				RayMarchFragShader,
				gl.FRAGMENT_SHADER,
				isMobileAndTablet(),
			);

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

			const mouseRotateStrengthHandle = getUniformLocation(gl, program, 'mouseRotateStrength');
			gl.uniform1f(mouseRotateStrengthHandle, MOUSE_ROTATE_STRENGTH);

			const rotateCameraHandle = getUniformLocation(gl, program, 'rotateCamera');

			const rotateYValueHandle = getUniformLocation(gl, program, 'rotateYValue');

			glResize = () => {
				gl.viewport(0, 0, canvas.width, canvas.height);
				gl.uniform2f(resolutionHandle, canvas.width, canvas.height);
			};

			let updateFrame = true;
			const run = (timestamp: number) => {
				if (onScreen && updateFrame) {
					const rotateY = pingpongLoop(-0.5, 0.5, 0, 40000, 0, timestamp, easeInOutSine);
					gl.uniform1f(rotateYValueHandle, rotateY);

					gl.uniform2f(rotateCameraHandle, mousePosNormX, mousePosNormY);
					gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
				}
				updateFrame = !updateFrame;

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

	const detectMouseMove = (event: PointerEvent) => {
		if (event.pointerType !== 'mouse') return;

		const centerX = document.body.clientWidth / 2;
		const centerY = window.innerHeight / 2;

		const pageX = event.pageX;
		const pageY = event.pageY;

		mousePosNormX = clamp(-1, 1, (centerX - pageX) / centerX);
		mousePosNormY = clamp(-1, 1, (centerY - pageY) / centerY);
	};

	onMount(() => {
		addEventListener('pointermove', detectMouseMove, true);

		return () => {
			removeEventListener('pointermove', detectMouseMove, true);
		};
	});

	const resizeCanvas = () => {
		let scale = window.devicePixelRatio;

		canvas.width = measureScreen.clientWidth * scale;
		canvas.height = measureScreen.clientHeight * scale;

		glResize?.();
	};

	onMount(() => {
		resizeCanvas();

		const resizeCanvasDebounce = debounce(resizeCanvas, 300);

		addEventListener('resize', resizeCanvasDebounce, true);

		return () => {
			removeEventListener('resize', resizeCanvasDebounce, true);
		};
	});
</script>

<div bind:this={measureScreen} class="measureScreen"></div>
<canvas bind:this={canvas} class="logo" />

<style lang="scss">
	@use './shared';

	.logo,
	.measureScreen {
		@extend %header;
	}

	.measureScreen {
		position: fixed;
		z-index: -1;
	}
</style>
