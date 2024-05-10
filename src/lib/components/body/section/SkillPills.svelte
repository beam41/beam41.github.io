<script lang="ts">
	import clsx from 'clsx';
	import { SkillsName, type Skils } from '$lib/components/body/section/workSkill';
	export let small: boolean | undefined = undefined;

	export let skills: readonly Skils[];
</script>

<div class={clsx('skills', { skillsSmall: small })}>
	{#each skills as skill}
		<span class={skill}>{SkillsName[skill]}</span>
	{/each}
</div>

<style lang="scss">
	@use 'sass:math';
	@use '../../../assets/styles/apca';

	@mixin gen-color-background($bg-color) {
		$bg-color-y: apca.sRGBtoY($bg-color);
		$black-text-contrast: apca.APCAcontrast(apca.sRGBtoY(black), $bg-color-y);
		$white-text-contrast: apca.APCAcontrast(apca.sRGBtoY(white), $bg-color-y);
		@if (math.abs($black-text-contrast) > math.abs($white-text-contrast)) {
			background: $bg-color;
			color: black;
		} @else {
			background: $bg-color;
			color: white;
		}
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

		& > span {
			white-space: nowrap;
			margin: 4px 4px;
			padding: 4px 18px;
			border-radius: 100px;
			background: rgb(240, 240, 240);

			&:hover {
				//&.js {
				//	@include gen-color-background(#f0db4f);
				//}
				//
				//&.ts {
				//	@include gen-color-background(#007acc);
				//}
				//
				//&.html {
				//	@include gen-color-background(#e34c26);
				//}
				//
				//&.css {
				//	@include gen-color-background(#563d7c);
				//}
				//
				//&.scss {
				//	@include gen-color-background(#c6538c);
				//}
				//
				//&.cs {
				//	@include gen-color-background(#68217a);
				//}
				//
				//&.sql {
				//	@include gen-color-background(#cca454);
				//}
				//
				//&.rust {
				//	@include gen-color-background(#000000);
				//}
				//
				//&.go {
				//	@include gen-color-background(#00add8);
				//}
				//
				//&.py {
				//	@include gen-color-background(#3572a5);
				//}
				//
				//&.dart {
				//	@include gen-color-background(#0175c2);
				//}
				//
				//&.cpp {
				//	@include gen-color-background(#00599c);
				//}
				//
				//&.react {
				//	@include gen-color-background(#61dbfb);
				//}
				//
				//&.netcore {
				//	@include gen-color-background(#512bd4);
				//}
				//
				//&.angular {
				//	@include gen-color-background(#b52e31);
				//}
				//
				//&.vue {
				//	@include gen-color-background(#4fc08d);
				//}
				//
				//&.svelte {
				//	@include gen-color-background(#ff3e00);
				//}
				//
				//&.solid {
				//	@include gen-color-background(#4738ca);
				//}
				//
				//&.express {
				//	@include gen-color-background(#000000);
				//}
				//
				//&.graphql {
				//	@include gen-color-background(#e10098);
				//}
				//
				//&.adonis {
				//	@include gen-color-background(#220052);
				//}
				//
				//&.sqlserver {
				//	@include gen-color-background(#cc2927);
				//}
				//
				//&.mongo {
				//	@include gen-color-background(#4db33d);
				//}
				//
				//&.docker {
				//	@include gen-color-background(#0db7ed);
				//}
				//
				//&.flask {
				//	@include gen-color-background(#000000);
				//}
				//
				//&.opencv {
				//	@include gen-color-background(#5c3ee8);
				//}
				//
				//&.flutter {
				//	@include gen-color-background(#02569b);
				//}
				//
				//&.unity {
				//	@include gen-color-background(#222c37);
				//}
				//
				//&.gin {
				//	@include gen-color-background(#222c37);
				//}
				//
				//&.actix {
				//	@include gen-color-background(#222c37);
				//}
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
