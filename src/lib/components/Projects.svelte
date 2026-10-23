<script>
	import { t } from '../i18n.svelte.js';
	import { profile } from '../profile.js';
	import { reveal } from '../reveal.js';
	import { asset } from '$app/paths';
</script>

<section id="projects" class="alt">
	<div class="wrap">
		<div use:reveal>
			<p class="eyebrow">{t('projects.eyebrow')}</p>
			<h2 class="title">{t('projects.title')}</h2>
		</div>
		<div class="grid">
			{#each profile.projects as p}
				<article use:reveal>
					<img src={asset(p.image)} width="320" height="320" loading="lazy" alt="{p.name} preview" />
					<div class="body">
						<h3>{p.name}</h3>
						<p class="text">{t('projects.' + p.id)}</p>
						<ul>
							{#each p.tech as item}<li>{item}</li>{/each}
						</ul>
						<a class="btn" href={p.url} target="_blank" rel="noopener noreferrer">{t('projects.visit')} ↗</a>
					</div>
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
		grid-template-columns: 1fr;
		gap: 16px;
	}
	article {
		display: grid;
		grid-template-columns: minmax(0, 320px) 1fr;
		gap: 32px;
		align-items: center;
		padding: 24px;
		background: var(--card);
		border-radius: 24px;
	}
	img {
		display: block;
		width: 100%;
		height: auto;
		aspect-ratio: 1;
		object-fit: cover;
		border-radius: 16px;
	}
	h3 {
		margin: 0;
		font-size: clamp(1.5rem, 3vw, 2rem);
		letter-spacing: -0.03em;
	}
	.text {
		margin: 12px 0 0;
		color: var(--muted);
	}
	ul {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		margin: 16px 0 24px;
		padding: 0;
		list-style: none;
	}
	li {
		padding: 4px 12px;
		border: 1px solid var(--line);
		border-radius: 980px;
		font-size: 0.8125rem;
		color: var(--muted);
	}
	.btn {
		display: inline-flex;
		align-items: center;
		min-height: 44px;
		padding: 0 24px;
		border: 1px solid var(--accent);
		border-radius: 980px;
		background: var(--accent);
		color: var(--accent-text);
		font-size: 1.0625rem;
		transition: transform 0.2s var(--ease);
	}
	.btn:hover {
		transform: scale(1.03);
	}
	@media (max-width: 720px) {
		article {
			grid-template-columns: 1fr;
			gap: 20px;
		}
	}
</style>
