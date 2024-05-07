<script lang="ts">
	import dayjs from 'dayjs';

	type Award = {
		readonly name: string;
		readonly date: dayjs.Dayjs;
		readonly info?: string;
		readonly link?: string;
	};

	const awards: Award[] = [
		{
			name: 'Career Essentials in Software Development by Microsoft and LinkedIn',
			date: dayjs('2022-12'),
			link: 'https://www.linkedin.com/learning/certificates/d6dfa4849775d286c01be374cc30b1c0c28aa99ad3e6c11814082be82c7e8354',
		},
		{
			name: 'Microsoft Certified: Azure Fundamentals',
			date: dayjs('2021-10'),
			link: 'https://www.credly.com/badges/e7f9fdfc-3225-4774-a347-4bfd0177e8b0',
		},
		{
			name: 'Google Code Jam 2021, Qualification Round',
			date: dayjs('2021-03'),
			info: '41pts',
		},
		{
			name: 'Google Hash Code 2021, Qualification Round',
			date: dayjs('2021-02'),
			info: 'Rank 227th',
		},
	];
</script>

<div class="awardWrapper">
	{#each awards as award}
		<div class="awardItem">
			<h2 class="award">
				<svelte:element
					this={award.link ? 'a' : 'span'}
					class="awardInner"
					href={award.link}
					target={award.link && '_blank'}
					rel={award.link && 'noopener'}
				>
					{award.name}
				</svelte:element>
			</h2>
			<div class="infoDate">
				<span class="info">{award.info ? `${award.info}` : ''}</span>
				{#if award.info}|{/if}
				{award.date.format('MMMM YYYY')}
			</div>
		</div>
	{/each}
</div>

<style lang="scss">
	.awardWrapper {
		margin-top: -32px;
	}

	.award {
		margin: 32px 0 8px;
		font-size: 1.17em;

		a.awardInner {
			color: currentColor;
			transition: text-decoration-color 0.25s;
			text-decoration-color: white;

			&:hover {
				text-decoration-color: currentColor;
				transition: text-decoration-color 0s;
			}
		}
	}

	.infoDate {
		font-size: 0.9em;
	}

	.info {
		font-weight: bold;
	}
</style>
