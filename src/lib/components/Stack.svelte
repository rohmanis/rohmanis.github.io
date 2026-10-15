<script>
	import { t } from '../i18n.svelte.js';
	import { profile } from '../profile.js';
	import { reveal } from '../reveal.js';
</script>

<section id="stack" class="alt">
	<div class="wrap">
		<div use:reveal>
			<p class="eyebrow">{t('stack.eyebrow')}</p>
			<h2 class="title">{t('stack.title')}</h2>
		</div>
		<div class="grid">
			{#each profile.stack as g}
				<article use:reveal>
					<h3>{t('stack.' + g.group)}</h3>
					<ul>
						{#each g.items as item}<li>{item}</li>{/each}
					</ul>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.alt {
		background: var(--bg-alt);
	}
	.grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 16px;
	}
	article {
		padding: 28px;
		background: var(--card);
		border-radius: 24px;
	}
	h3 {
		margin: 0 0 20px;
		font-size: 0.875rem;
		font-weight: 600;
		letter-spacing: 0.02em;
		color: var(--muted);
	}
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: 4px;
	}
	li {
		font-size: clamp(1.5rem, 3vw, 2rem);
		font-weight: 700;
		letter-spacing: -0.03em;
	}
	@media (max-width: 800px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}
</style>
