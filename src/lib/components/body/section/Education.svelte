<script lang="ts">
	type EduInfo = {
		readonly name: string;
		readonly degree: string;
		readonly yearStart: number;
		readonly yearEnd: number;
		readonly grade: string;
		readonly desc: string;
	};

	const educations: EduInfo[] = [
		{
			name: 'Chiang Mai University',
			degree: 'Bachelor of Science (Computer Science), English Minor',
			yearStart: 2017,
			yearEnd: 2021,
			grade: '3.38',
			desc: "Graduated with 2nd class Honors. Was department council vice president and a member of the faculty's photo club. I made class project using React, Vue, Express.js, and ASP.NET Core. I contributed some code for a game use in Science Week event. The game was written in Unity."
		}
	];
</script>

{#each educations as ed}
	<div class="education-item">
		<h2 class="info uni">{ed.name}</h2>
		<h3 class="info degree">{ed.degree}</h3>
		<h4 class="info year-grade">
			{ed.yearStart} &#8211; {ed.yearEnd} | Grade: {ed.grade}
		</h4>
		<p class="desc">{ed.desc}</p>
	</div>
{/each}

<style lang="scss">
	.info {
		margin: 0 0 8px;
	}
	.degree {
		font-weight: normal;
		color: rgb(85, 85, 85);
	}
	.year-grade {
		font-size: 0.8em;
	}

	.desc {
		margin: 16px 0 0;
	}
</style>
