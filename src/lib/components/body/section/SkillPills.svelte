<script lang="ts">
	import clsx from 'clsx';
	import { SkillsName, type Skils } from '$lib/components/body/section/workSkill';
	export let small: boolean | undefined = undefined;

	export let skills: readonly Skils[];
</script>

<div class={clsx('skills', { skillsSmall: small })}>
	{#each skills as skill}
		<span class={clsx('skillPill', skill)}>{SkillsName[skill]}</span>
	{/each}
</div>

<style lang="scss">
	@use 'sass:math';
	@use 'sass:color';
	@use '$lib/assets/styles/apca';

	@mixin gen-color-background($bg-color) {
		$bg-color-y: apca.srgb-to-y($bg-color);
		$black-text-contrast: apca.apca-contrast(apca.srgb-to-y(black), $bg-color-y);
		$white-text-contrast: apca.apca-contrast(apca.srgb-to-y(white), $bg-color-y);
		@if (math.abs($black-text-contrast) > math.abs($white-text-contrast)) {
			background: $bg-color;
			color: black;
		} @else {
			background: $bg-color;
			color: white;
		}
	}

	%no-color {
		@include gen-color-background(color.invert(mix(black, white, 5%)));
	}

	.skills {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		margin: -4px -4px;
		font: {
			size: 0.8em;
			weight: bold;
		}

		.skillPill {
			white-space: nowrap;
			margin: 4px 4px;
			padding: 4px 18px;
			border-radius: 100px;
			background: mix(black, white, 5%);
			transition: background 250ms ease-in-out;

			&:hover {
				transition: background 0s;

				&.js {
					@include gen-color-background(#f0db4f);
				}

				&.ts {
					@include gen-color-background(#3178c6);
				}

				&.html {
					@include gen-color-background(#e44d26);
				}

				&.css {
					@include gen-color-background(#264de4);
				}

				&.scss {
					@include gen-color-background(#c69);
				}

				&.cs {
					@include gen-color-background(#512bd4);
				}

				&.sql {
					@extend %no-color;
				}

				&.rust {
					@include gen-color-background(rgb(247, 76, 0));
				}

				&.go {
					@include gen-color-background(#5dc9e1);
				}

				&.py {
					@include gen-color-background(#2b5b8a);
				}

				&.dart {
					@include gen-color-background(#0175c2);
				}

				&.cpp {
					@include gen-color-background(#00599c);
				}

				&.react {
					@include gen-color-background(#61dafb);
				}

				&.netcore {
					@include gen-color-background(rgb(81, 43, 212));
				}

				&.angular {
					@include gen-color-background(#c3002f);
				}

				&.vue {
					@include gen-color-background(#42b883);
				}

				&.svelte {
					@include gen-color-background(#ff3e00);
				}

				&.express {
					@extend %no-color;
				}

				&.graphql {
					@include gen-color-background(#e10098);
				}

				&.adonis {
					@include gen-color-background(rgb(90, 69, 255));
				}

				&.sqlserver {
					@include gen-color-background(#a91d22);
				}

				&.mongo {
					@include gen-color-background(#00684a);
				}

				&.docker {
					@include gen-color-background(#1d63ed);
				}

				&.flask {
					@include gen-color-background(rgb(59, 171, 195));
				}

				&.opencv {
					@include gen-color-background(#128dff);
				}

				&.flutter {
					@include gen-color-background(#0553b1);
				}

				&.unity {
					@extend %no-color;
				}

				&.gin {
					@include gen-color-background(#008ecf);
				}

				&.actix {
					@extend %no-color;
				}
			}
		}

		&.skillsSmall {
			margin: -2px -2px;
			font-size: 0.6em;

			& > span {
				margin: 2px 2px;
				padding: 4px 10px;
			}
		}
	}
</style>
