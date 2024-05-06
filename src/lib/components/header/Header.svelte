<script lang="ts">
	import { onMount } from 'svelte';
	import HeaderSvg from '$lib/components/header/HeaderSvg.svelte';
	import Header3D from '$lib/components/header/Header3D.svelte';

	let use3dHeader = true;

	onMount(() => {
		if (!window.WebGLRenderingContext) {
			use3dHeader = false;
		}
	});

	function useFallback() {
		use3dHeader = false;
	}
</script>

{#if use3dHeader}
	<Header3D on:glFailed={useFallback} />
{:else}
	<HeaderSvg />
{/if}
