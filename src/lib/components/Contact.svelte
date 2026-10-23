<script>
	import { t } from '../i18n.svelte.js';
	import { profile } from '../profile.js';
	import { reveal } from '../reveal.js';
	import { resolve } from '$app/paths';
</script>

<section id="contact" class="alt">
	<div class="wrap" use:reveal>
		<p class="eyebrow">{t('contact.eyebrow')}</p>
		<h2 class="title">{t('contact.title')}</h2>
		<p class="text">{t('contact.text')}</p>
		<div class="links">
			<a class="btn primary" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
			<a class="btn" href={resolve('/cv')}>{t('contact.cv')}</a>
			<a class="btn" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
			<a class="btn" href={profile.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
		</div>
	</div>
</section>

<style>
	.alt {
		background: var(--bg-alt);
		text-align: center;
	}
	.title {
		max-width: 14em;
		margin-inline: auto;
		margin-bottom: 20px;
	}
	.text {
		max-width: 32em;
		margin: 0 auto;
		color: var(--muted);
		font-size: 1.25rem;
	}
	.links {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 12px;
		margin-top: 36px;
	}
	.btn {
		display: inline-flex;
		align-items: center;
		min-height: 44px;
		padding: 0 24px;
		border: 1px solid var(--line);
		border-radius: 980px;
		color: var(--text);
		font-size: 1.0625rem;
		transition: transform 0.2s var(--ease);
	}
	.btn:hover {
		transform: scale(1.03);
	}
	.btn.primary {
		background: var(--accent);
		border-color: var(--accent);
		color: var(--accent-text);
	}
</style>
