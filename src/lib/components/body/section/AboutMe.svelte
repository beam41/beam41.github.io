<script lang="ts">
	import SvgEmail from '$lib/components/svg/Email.svelte';
	import SvgLinkedin from '$lib/components/svg/Linkedin.svelte';
	import SvgGithub from '$lib/components/svg/Github.svelte';
	import SvgGitlab from '$lib/components/svg/Gitlab.svelte';
	import type { ComponentType } from 'svelte';

	type Contact = {
		className: string;
		icon: ComponentType;
		link?: string;
		text: string;
	};

	const contactList: Contact[] = [
		{
			className: 'em',
			icon: SvgEmail,
			text: 'phumdol.l@gmail.com',
		},
		{
			className: 'li',
			icon: SvgLinkedin,
			link: 'https://www.linkedin.com/in/phumdol/',
			text: 'Phumdol Lookthipnapha',
		},
		{
			className: 'gh',
			icon: SvgGithub,
			link: 'https://github.com/beam41/',
			text: 'beam41',
		},
		{
			className: 'gl',
			icon: SvgGitlab,
			link: 'https://gitlab.com/beam41',
			text: 'beam41',
		},
	];
</script>

<p class="about">
	My name is Phumdol Lookthipnapha, a software engineer based in Chiang Mai, Thailand. I have
	experience in full-stack web development.
</p>
<div class="contact">
	{#each contactList as contact}
		<svelte:element
			this={contact.link ? 'a' : 'div'}
			class={contact.className}
			href={contact.link}
			target={contact.link && '_blank'}
			rel={contact.link && 'noopener'}
		>
			<svelte:component this={contact.icon} />
			<span>{contact.text}</span>
		</svelte:element>
	{/each}
</div>

<style lang="scss">
	.about {
		margin: 0 0 24px;
	}

	.contact {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(212px, 1fr));
		gap: 8px;
		margin: 0 64px;

		& > a:hover {
			color: white;
			transition: background 0s;
		}

		& > * {
			border-radius: 4px;
			height: 40px;
			display: flex;
			justify-content: center;
			align-items: center;
			color: rgb(74, 74, 74);
			text-decoration: none;
			transition: background 250ms ease-in-out;
			font-size: 0.9em;

			:global(svg) {
				width: 24px;
				height: 24px;
				margin-top: -2px;
				margin-right: 4px;
			}

			&.em {
				background: rgba(black, 0.05);
			}

			&.li {
				background: rgba(rgb(0, 119, 183), 0.05);
				&:hover {
					background: rgba(rgb(0, 119, 183), 1);
				}
			}

			&.gh {
				background: rgba(rgb(20, 25, 30), 0.05);
				&:hover {
					background: rgba(rgb(20, 25, 30), 1);
				}
			}

			&.gl {
				background: rgba(#f96424, 0.05);
				&:hover {
					background: rgba(#f96424, 1);
				}
			}
		}

		& > a {
			user-select: none;
		}
	}

	@media screen and (max-width: 400px) {
		.contact {
			margin: 0;
		}
	}
</style>
