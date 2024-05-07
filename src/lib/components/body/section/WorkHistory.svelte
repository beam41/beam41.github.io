<script lang="ts">
	import dayjs from 'dayjs';
	import { durationToString } from '$lib/utils/date';
	import SkillPills from '$lib/components/body/section/SkillPills.svelte';
	import { type WorkPlace, works } from '$lib/components/body/section/workSkill';

	function sortWorkSkill(work: WorkPlace) {
		return [...work.skillsLang.toSorted(), ...work.skillsFramework.toSorted()];
	}
</script>

<div class="workWrapper">
	{#each works as work}
		<div>
			<h2 class="head place">{work.place}</h2>
			<div class="head skill">
				<SkillPills small skills={sortWorkSkill(work)} />
			</div>
			<div class="head totalTime">
				{durationToString(work.title.at(-1)?.start ?? dayjs(), work.title.at(0)?.end ?? dayjs())}
			</div>
			<div class="titleWrap">
				{#each work.title as title}
					<h3 class="title">
						<span class="name">
							{title.name} &centerdot; {title.type}
						</span>
						<span class="date">
							{title.start.format('MMM YYYY')} &#8211;
							{title.end ? title.end.format('MMM YYYY') : 'Present'}
							&centerdot; {durationToString(title.start, title.end)}
						</span>
					</h3>
				{/each}
			</div>
		</div>
	{/each}
</div>

<style lang="scss">
	.workWrapper {
		margin-top: -32px;
	}

	.head {
		margin: 0 0 8px;
	}

	.place {
		margin-top: 32px;
	}

	.totalTime {
		font-size: 0.9rem;
	}

	.title {
		font-weight: normal;
		font-size: 1rem;
		margin: 16px 0 0;

		& > span {
			display: block;
		}

		.name {
			margin-bottom: 2px;
		}

		.date {
			font-weight: bold;
			font-size: 0.8rem;
		}
	}
</style>
