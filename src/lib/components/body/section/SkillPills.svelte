<script lang="ts">
	import clsx from 'clsx';
	export let small: boolean | undefined = undefined;

	export let skills: readonly string[];
</script>

<div class={clsx('skills', { skillsSmall: small })}>
	{#each skills as skill}
		<span>{skill}</span>
	{/each}
</div>

<style lang="scss">
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

			.js {
			}
			.ts {
			}
			.html {
			}
			.css {
			}
			.scss {
			}
			.cs {
			}
			.sql {
			}
			.rust {
			}
			.go {
			}
			.py {
			}
			.dart {
			}
			.cpp {
			}
			.react {
			}
			.netcore {
			}
			.angular {
			}
			.vue {
			}
			.svelte {
			}
			.solid {
			}
			.express {
			}
			.graphql {
			}
			.adonis {
			}
			.sqlserver {
			}
			.mongo {
			}
			.docker {
			}
			.flask {
			}
			.opencv {
			}
			.flutter {
			}
			.unity {
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
