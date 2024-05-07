<script lang="ts">
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
				threshold: 0,
			},
		);
		observer.observe(contentObserver);

		const overrideVisibleUpdate = () => {
			overrideVisible = window.scrollY > 32;
		};

		overrideVisibleUpdate();
		window.addEventListener('scroll', overrideVisibleUpdate, true);

		return () => {
			observer.disconnect();
			window.removeEventListener('scroll', overrideVisibleUpdate, true);
		};
	});
</script>

<hr class="divider" />

<section
	class="content"
	class:hidden={!visible}
	class:overriddenHidden={visible && !overrideVisible}
	bind:this={contentObserver}
>
	<h1 class="contentHeader">
		<span>{title}</span>
	</h1>
	<div class="contentBodyWrapper">
		<div class="contentBody">
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
		.contentHeader {
			box-sizing: border-box;
			margin: 0;
			padding: 0 16px;
			position: absolute;
			width: 100%;
			text-align: center;
			transform: translateY(calc(-50% - 4px));
			color: rgb(66, 66, 66);
			& > span {
				background: white;
				padding: 0 2px;
			}
		}
		.contentBodyWrapper {
			box-sizing: border-box;
			padding: 48px 16px 80px;
			text-align: center;

			.contentBody {
				margin: auto;
				max-width: 600px;
			}
		}

		&.hidden {
			opacity: 0;
			transform: translateY(25px);
		}

		&.overriddenHidden {
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
</style>
