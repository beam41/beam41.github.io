<script lang="ts" setup>
	import { onMount } from 'svelte';

	export let title: string;

	let contentObserver: Element;
	let visible = false;
	let overrideVisible = false;

	onMount(() => {
		let observer = new IntersectionObserver(
			(entries, currObserver) => {
				if (!visible) {
					visible = entries[0].isIntersecting;
					if (visible) {
						currObserver.disconnect();
					}
				}
			},
			{
				rootMargin: '-20% 0px',
				threshold: 0
			}
		);
		observer.observe(contentObserver!);

		overrideVisible = window.scrollY > 32;
		window.addEventListener('scroll', () => {
			overrideVisible = window.scrollY > 32;
		});
	});
</script>

<hr class="divider" />

<section
	class="content"
	class:hidden={!visible}
	class:overridden-hidden={visible && !overrideVisible}
	bind:this={contentObserver}
>
	<h1 class="content-header">
		<span>{title}</span>
	</h1>
	<div class="content-body-wrapper">
		<div class="content-body">
			<slot />
		</div>
	</div>
</section>

<style lang="scss">
	.divider {
		height: 2px;
		border-width: 0;
		background-color: rgb(207, 207, 207);
		margin: 0 auto;
		width: 50%;
		min-width: 400px;
	}
	.content {
		width: 50%;
		min-width: 400px;
		margin: 0 auto;

		position: relative;
		transition: all 250ms ease-in;
		.content-header {
			margin: 0;
			position: absolute;
			width: 100%;
			text-align: center;
			transform: translateY(calc(-50% - 4px));
			color: rgb(71, 71, 71);
			& > span {
				background: white;
				padding: 0 2px;
			}
		}
		.content-body-wrapper {
			box-sizing: border-box;
			padding: 48px 16px 80px;
			text-align: center;

			.content-body {
				margin: auto;
				max-width: 600px;
			}
		}

		&.hidden {
			opacity: 0;
			transform: translateY(25px);
		}

		&.overridden-hidden {
			opacity: 0;
			transition: all 125ms ease-out;
		}
	}

	@media screen and (max-width: 400px) {
		.divider {
			width: 100%;
			min-width: 0;
		}
		.content {
			width: 100%;
			min-width: 0;
		}
	}

	@media print {
		.divider {
			width: 100% !important;
		}

		.content {
			width: 100% !important;
			opacity: 1 !important;
			transform: translateY(0) !important;

			.content-body {
				max-width: 100% !important;
			}

			&:last-child {
				.content-body-wrapper {
					padding: 48px 16px 0 !important;
				}
			}
		}
	}
</style>
