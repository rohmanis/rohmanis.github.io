<script>
	import { t } from '../i18n.svelte.js';
	import { profile } from '../profile.js';
	import { reveal } from '../reveal.js';
</script>

<section id="journey">
	<div class="wrap">
		<div use:reveal>
			<p class="eyebrow">{t('journey.eyebrow')}</p>
			<h2 class="title">{t('journey.title')}</h2>
		</div>
		<div class="grid">
			<article use:reveal>
				<p class="label">{t('journey.work')}</p>
				<h3>{profile.company}</h3>
				<p class="role">{t('journey.work.role')}</p>
			</article>
			<article use:reveal>
				<p class="label">{t('journey.edu')}</p>
				<h3>{profile.school}</h3>
			</article>
		</div>
	</div>
</section>

<style>
	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 16px;
	}
	article {
		padding: 32px;
		background: var(--bg-alt);
		border-radius: 24px;
	}
	.label {
		margin: 0 0 40px;
		font-size: 0.875rem;
		font-weight: 600;
		color: var(--muted);
	}
	h3 {
		margin: 0;
		font-size: clamp(1.5rem, 3vw, 2rem);
		letter-spacing: -0.03em;
	}
	.role {
		margin: 8px 0 0;
		color: var(--muted);
	}
	@media (max-width: 720px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}
</style>
