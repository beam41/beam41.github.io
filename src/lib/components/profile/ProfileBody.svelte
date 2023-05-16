<script>
	import Content from '$lib/components/body/Content.svelte';
	import AboutMe from '$lib/components/body/section/AboutMe.svelte';
	import Education from '$lib/components/body/section/Education.svelte';
	import Skill from '$lib/components/body/section/Skill.svelte';
	import WorkHistory from '$lib/components/body/section/WorkHistory.svelte';
	import Award from '$lib/components/body/section/Award.svelte';
	import Footer from '$lib/components/body/Footer.svelte';
</script>

<main class="body">
	<Content title="About Me">
		<AboutMe />
	</Content>
	<Content title="Educations">
		<Education />
	</Content>
	<Content title="Skills">
		<Skill />
	</Content>
	<Content title="Work History">
		<WorkHistory />
	</Content>
	<Content title="Awards & Certifications">
		<Award />
	</Content>
</main>
<Footer />
