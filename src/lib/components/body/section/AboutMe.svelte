<script lang="ts">
	import SvgEmail from '$lib/components/svg/Email.svelte';
	import SvgLinkedin from '$lib/components/svg/Linkedin.svelte';
	import SvgGithub from '$lib/components/svg/Github.svelte';
	import SvgGitlab from '$lib/components/svg/Gitlab.svelte';
	import type { ComponentType } from 'svelte';

	const myInfo =
		'My name is Phumdol Lookthipnapha, a software engineer based in Chiang Mai, Thailand. I have experience in full-stack web development.';

	type Contact = {
		readonly className: string;
		readonly icon: ComponentType;
		readonly link?: string;
		readonly text: string;
	};

	const contactList: readonly Contact[] = [
		{
			className: 'em',
			icon: SvgEmail,
			text: 'phumdol.backlit792@passmail.net',
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

<p class="about">{myInfo}</p>
<div class="contact">
	{#each contactList as contact (contact.className)}
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
				background: mix(black, white, 5%);
			}

			&.li {
				background: mix(rgb(0, 119, 183), white, 5%);
				&:hover {
					background: rgb(0, 119, 183);
				}
			}

			&.gh {
				background: mix(rgb(20, 25, 30), white, 5%);
				&:hover {
					background: rgb(20, 25, 30);
				}
			}

			&.gl {
				background: mix(#f96424, white, 5%);
				&:hover {
					background: #f96424;
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
