<script lang="ts">
	import dayjs from 'dayjs';
	import { durationToString } from '$lib/utils/date';

	type WorkType = 'Full-time' | 'Intern';
	type Title = {
		readonly name: string;
		readonly type: WorkType;
		readonly start: dayjs.Dayjs;
		readonly end?: dayjs.Dayjs;
	};
	type WorkPlace = {
		readonly place: string;
		readonly title: Title[];
		readonly desc?: string;
	};

	const works: readonly WorkPlace[] = [
		{
			place: 'EveryMatrix',
			title: [
				{
					name: 'Middle Frontend Developer',
					type: 'Full-time',
					start: dayjs('2023-09'),
				},
			],
			desc: 'Worked on project using React',
		},
		{
			place: 'Manao Software',
			title: [
				{
					name: 'Mid-Level Web Developer',
					type: 'Full-time',
					start: dayjs('2022-04'),
					end: dayjs('2023-09'),
				},
				{
					name: 'Junior Developer',
					type: 'Full-time',
					start: dayjs('2021-04'),
					end: dayjs('2022-03'),
				},
			],
			desc: 'Worked on project using C# (ASP.NET Core) and JavaScript (React, Angular)',
		},
		{
			place: 'Artisan Digital',
			title: [
				{
					name: 'Frontend Developer',
					type: 'Intern',
					start: dayjs('2021-05'),
					end: dayjs('2021-10'),
				},
			],
			desc: 'Worked on project using Vue.js',
		},
	];
</script>

<div class="work-wrapper">
	{#each works as work}
		<div>
			<h2 class="head place">{work.place}</h2>
			{#if work.desc}
				<p class="head desc">
					{work.desc}
				</p>
			{/if}
			<div class="head total-time">
				{durationToString(work.title.at(-1)?.start ?? dayjs(), work.title.at(0)?.end ?? dayjs())}
			</div>
			<div class="title-wrap">
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
	.work-wrapper {
		margin-top: -32px;
	}

	.head {
		margin: 0 0 8px;
	}

	.place {
		margin-top: 32px;
	}

	.total-time {
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
