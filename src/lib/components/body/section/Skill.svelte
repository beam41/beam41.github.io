<script lang="ts">
	import {
		hobbySkillsFramework,
		hobbySkillsLang,
		productionSkillsFramework,
		productionSkillsLang,
	} from '$lib/components/body/section/workSkill';
	import SkillPills from '$lib/components/body/section/SkillPills.svelte';
</script>

<div class="skillWrapper">
	<div class="skillInfo">
		<h2 class="skillHead">Experienced</h2>
		<SkillPills skills={productionSkillsLang} />
		<div class="padding"></div>
		<SkillPills skills={productionSkillsFramework} />
	</div>

	<div class="skillInfo">
		<h2 class="skillHead">Knows</h2>
		<SkillPills skills={hobbySkillsLang} />
		<div class="padding"></div>
		<SkillPills skills={hobbySkillsFramework} />
	</div>
</div>

<style lang="scss">
	.skillWrapper {
		margin-top: -32px;
	}
	.skillInfo {
		margin-top: 32px;

		.padding {
			margin-top: 8px;
		}
	}
	.skillHead {
		margin: 0 0 12px;
		font-size: 1.17em;
	}
</style>
