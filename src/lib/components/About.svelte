<script>
	import { t } from '../i18n.svelte.js';
	import { reveal } from '../reveal.js';
</script>

<section id="about">
	<div class="wrap" use:reveal>
		<p class="eyebrow">{t('about.eyebrow')}</p>
		<h2 class="title">{t('about.title')}</h2>
		<div class="cols">
			<p>{t('about.p1')}</p>
			<p>{t('about.p2')}</p>
		</div>
	</div>
</section>

<style>
	.cols {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 32px;
	}
	p {
		margin: 0;
		font-size: clamp(1.125rem, 2vw, 1.375rem);
		line-height: 1.45;
		letter-spacing: -0.01em;
		color: var(--muted);
	}
	@media (max-width: 720px) {
		.cols {
			grid-template-columns: 1fr;
			gap: 20px;
		}
	}
</style>
