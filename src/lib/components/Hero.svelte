<script>
	import { t } from '../i18n.svelte.js';
	import { profile } from '../profile.js';
	import { reveal } from '../reveal.js';
	import { asset, resolve } from '$app/paths';
</script>

<section id="top" class="hero">
	<div class="wrap" use:reveal>
		<img src={asset('/profile.jpg')} width="132" height="132" fetchpriority="high" alt="Portrait of {profile.name}" />
		<p class="pill"><span class="dot"></span>{t('hero.open')}</p>
		<h1>{profile.name}</h1>
		<p class="sub">{t('hero.title')}</p>
		<p class="meta">{t('hero.role')} · {t('hero.location')}</p>
		<div class="cta">
			<a class="btn primary" href="#contact">{t('hero.cta1')}</a>
			<a class="btn" href={resolve('/cv')}>{t('hero.cta3')}</a>
			<a class="btn" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
			<a class="btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer">{t('hero.cta2')}</a>
		</div>
	</div>
</section>

<style>
	.hero {
		padding: clamp(56px, 10vw, 112px) 0 clamp(72px, 12vw, 128px);
		text-align: center;
		background: var(--bg);
	}
	img {
		display: block;
		margin-inline: auto;
		border-radius: 50%;
		object-fit: cover;
		box-shadow: 0 0 0 1px var(--line), 0 12px 40px rgba(0, 0, 0, 0.18);
	}
	.pill {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		margin: 28px 0 20px;
		padding: 6px 14px;
		border: 1px solid var(--line);
		border-radius: 980px;
		font-size: 0.8125rem;
		font-weight: 500;
		color: var(--muted);
	}
	.dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: var(--green);
	}
	h1 {
		margin: 0;
		font-size: clamp(2.75rem, 10vw, 6rem);
		line-height: 1.02;
		letter-spacing: -0.045em;
		font-weight: 700;
	}
	.sub {
		margin: 16px 0 0;
		font-size: clamp(1.25rem, 3.5vw, 2rem);
		letter-spacing: -0.02em;
		color: var(--muted);
	}
	.meta {
		margin: 12px 0 0;
		font-size: 0.9375rem;
		color: var(--muted);
	}
	.cta {
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
		transition: transform 0.2s var(--ease), background 0.2s;
	}
	.btn:hover {
		transform: scale(1.03);
		background: var(--bg-alt);
	}
	.btn.primary {
		background: var(--accent);
		border-color: var(--accent);
		color: var(--accent-text);
	}
	.btn.primary:hover {
		background: var(--accent);
		filter: brightness(1.08);
	}
</style>
