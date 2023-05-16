<script lang="ts">
	const productionSkillsLang = [
		'C#',
		'JavaScript',
		'TypeScript',
		'HTML',
		'CSS',
		'SQL',
		'GraphQL'
	] as const;

	const productionSkillsFramework = [
		'ASP.NET Core',
		'Angular',
		'React',
		'Vue.js',
		'Express.js',
		'AdonisJS',
		'MongoDB'
	] as const;

	const hobbySkillsLang = ['Go', 'Python', 'Dart', 'C++'] as const;

	const hobbySkillsFramework = ['Flask', 'OpenCV', 'Flutter', 'Unity', 'Docker'] as const;
</script>

<div class="skill-wrapper">
	<div class="skill-info">
		<h2 class="skill-head">Experienced</h2>
		<div class="skills">
			{#each productionSkillsLang as skill}
				<span>{skill}</span>
			{/each}
		</div>
		<div class="skills bot">
			{#each productionSkillsFramework as skill}
				<span>{skill}</span>
			{/each}
		</div>
	</div>

	<div class="skill-info">
		<h2 class="skill-head">Learned</h2>
		<div class="skills">
			{#each hobbySkillsLang as skill}
				<span>{skill}</span>
			{/each}
		</div>
		<div class="skills bot">
			{#each hobbySkillsFramework as skill}
				<span>{skill}</span>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	.skill-wrapper {
		margin-top: -32px;
	}
	.skill-info {
		margin-top: 32px;
	}
	.skill-head {
		margin: 0 0 12px;
		font-size: 1.17em;
	}

	.skills {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		margin: -4px -4px;
		color: rgb(95, 95, 95);
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
		}

		&.bot {
			margin-top: 8px;
		}
	}
</style>
