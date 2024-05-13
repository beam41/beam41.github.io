<header class="header">
	<svg viewBox="0 0 22 5">
		<text>
			<tspan dominant-baseline="middle" font-size="5" text-anchor="middle" x="50%" y="50%">
				Phumdol
			</tspan>
		</text>
	</svg>
</header>

<style lang="scss">
	@use './shared';

	.header {
		@extend %header-svg;

		& > svg {
			text {
				fill: gray;
			}
		}
	}
</style>
