<script lang="ts">
	import { onMount } from 'svelte';
	import HeaderPlain from '$lib/components/header/HeaderPlain.svelte';

	let lazyHeader: Promise<typeof import('./Header3D.svelte') | typeof import('./HeaderSvg.svelte')>;

	onMount(() => {
		if (!window.WebGLRenderingContext) {
			useFallback();
		} else {
			lazyHeader = import('./Header3D.svelte');
		}
	});

	function useFallback() {
		lazyHeader = import('./HeaderSvg.svelte');
	}
</script>

{#if lazyHeader}
	{#await lazyHeader}
		<HeaderPlain />
	{:then { default: LazyHeader }}
		<LazyHeader on:glFailed={useFallback} />
	{/await}
{:else}
	<HeaderPlain />
{/if}
