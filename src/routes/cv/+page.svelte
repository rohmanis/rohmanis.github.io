<script>
	import { i18n } from '../../lib/i18n.svelte.js';
	import { cv } from '../../lib/cv.js';
	import { profile } from '../../lib/profile.js';
	import { asset, resolve } from '$app/paths';

	let c = $derived(cv[i18n.locale]);
	const strip = (u) => u.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
</script>

<svelte:head>
	<title>{profile.name} — CV</title>
	<meta name="robots" content="noindex" />
	<link rel="canonical" href="https://rohmanis.github.io/cv" />
</svelte:head>

<div class="bar">
	<div class="wrap row">
		<a class="back" href={resolve('/')}>← {c.ui.back}</a>
		<button class="export" onclick={() => window.print()}>
			<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" /></svg>
			{c.ui.export}
		</button>
	</div>
	<p class="hint">{c.ui.hint}</p>
</div>

<main class="sheet">
	<article class="paper">
		<header>
			<img src={asset('/profile-v2.jpg')} width="88" height="88" alt="Portrait of {profile.name}" />
			<div>
				<h1>{profile.name}</h1>
				<p class="role">{c.role}</p>
				<ul class="contact">
					<li>{c.contact.location}</li>
					<li><a href="mailto:{c.contact.email}">{c.contact.email}</a></li>
					<li>{c.contact.phone}</li>
					<li><a href={profile.linkedin}>{strip(profile.linkedin)}</a></li>
					<li><a href={profile.github}>{strip(profile.github)}</a></li>
				</ul>
			</div>
		</header>

		<section>
			<h2>{c.ui.summary}</h2>
			<p>{c.summary}</p>
		</section>

		<section>
			<h2>{c.ui.experience}</h2>
			{#each c.experience as job}
				<div class="item">
					<div class="head">
						<h3>{job.role} <span>· {job.org}</span></h3>
						<time>{job.period}</time>
					</div>
					<ul>
						{#each job.points as point}<li>{point}</li>{/each}
					</ul>
				</div>
			{/each}
		</section>

		<section>
			<h2>{c.ui.projects}</h2>
			{#each c.projects as p}
				<p class="proj"><strong>{p.name}.</strong> {p.text}</p>
			{/each}
		</section>

		<section>
			<h2>{c.ui.education}</h2>
			{#each c.education as e}
				<div class="head">
					<h3>{e.school} <span>· {e.degree}</span></h3>
					<time>{e.period}</time>
				</div>
			{/each}
		</section>

		<section>
			<h2>{c.ui.skills}</h2>
			<dl>
				{#each c.skills as s}
					<dt>{s.label}</dt>
					<dd>{s.items}</dd>
				{/each}
			</dl>
		</section>

		<section>
			<h2>{c.ui.languages}</h2>
			<p>{c.languages.join('  ·  ')}</p>
		</section>
	</article>
</main>

<style>
	.bar {
		position: sticky;
		top: 0;
		z-index: 10;
		background: var(--nav);
		-webkit-backdrop-filter: saturate(180%) blur(20px);
		backdrop-filter: saturate(180%) blur(20px);
		border-bottom: 1px solid var(--line);
	}
	.row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 16px;
		height: 52px;
	}
	.back {
		font-size: 0.875rem;
	}
	.export {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		min-height: 36px;
		padding: 0 18px;
		border: 1px solid var(--accent);
		border-radius: 980px;
		background: var(--accent);
		color: var(--accent-text);
		font: inherit;
		font-size: 0.875rem;
		font-weight: 600;
		cursor: pointer;
		transition: filter 0.2s;
	}
	.export:hover {
		filter: brightness(1.08);
	}
	.hint {
		margin: 0;
		padding: 0 16px 8px;
		text-align: center;
		font-size: 0.75rem;
		color: var(--muted);
	}
	.sheet {
		padding: 32px 16px 64px;
		background: var(--bg-alt);
		min-height: calc(100vh - 80px);
	}
	/* The paper is always light so the PDF looks the same in dark mode. */
	.paper {
		--ink: #1d1d1f;
		--ink-muted: #5c5c61;
		--ink-line: #d9d9de;
		max-width: 794px;
		margin: 0 auto;
		padding: clamp(24px, 6vw, 56px);
		background: #fff;
		color: var(--ink);
		border-radius: 12px;
		box-shadow: 0 0 0 1px var(--line), 0 12px 40px rgba(0, 0, 0, 0.12);
		font-size: 0.9375rem;
		line-height: 1.5;
	}
	.paper a {
		color: var(--ink);
	}
	header {
		display: flex;
		gap: 20px;
		align-items: center;
		padding-bottom: 20px;
		border-bottom: 2px solid var(--ink);
	}
	header img {
		flex: none;
		border-radius: 50%;
		object-fit: cover;
	}
	h1 {
		margin: 0;
		font-size: 2rem;
		line-height: 1.1;
		letter-spacing: -0.03em;
	}
	.role {
		margin: 2px 0 8px;
		color: var(--ink-muted);
		font-size: 1.0625rem;
	}
	.contact {
		display: flex;
		flex-wrap: wrap;
		gap: 2px 16px;
		margin: 0;
		padding: 0;
		list-style: none;
		font-size: 0.8125rem;
		color: var(--ink-muted);
	}
	.contact a {
		color: inherit;
	}
	section {
		padding: 18px 0 0;
		break-inside: avoid;
	}
	h2 {
		margin: 0 0 8px;
		padding-bottom: 4px;
		border-bottom: 1px solid var(--ink-line);
		font-size: 0.75rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--ink-muted);
	}
	p {
		margin: 0 0 6px;
	}
	.item {
		margin-bottom: 12px;
	}
	.head {
		display: flex;
		justify-content: space-between;
		gap: 12px;
		align-items: baseline;
	}
	h3 {
		margin: 0;
		font-size: 1rem;
	}
	h3 span {
		font-weight: 400;
		color: var(--ink-muted);
	}
	time {
		flex: none;
		font-size: 0.8125rem;
		color: var(--ink-muted);
	}
	.item ul {
		margin: 4px 0 0;
		padding-left: 1.2em;
	}
	.item li {
		margin-bottom: 2px;
	}
	dl {
		display: grid;
		grid-template-columns: 6.5em 1fr;
		gap: 4px 12px;
		margin: 0;
	}
	dt {
		font-weight: 600;
	}
	dd {
		margin: 0;
	}
	@media (max-width: 520px) {
		header {
			flex-direction: column;
			align-items: flex-start;
		}
		.head {
			flex-direction: column;
			gap: 0;
		}
	}
	@media print {
		@page {
			size: A4;
			margin: 14mm;
		}
		.bar {
			display: none;
		}
		.sheet {
			padding: 0;
			background: none;
			min-height: 0;
		}
		.paper {
			max-width: none;
			padding: 0;
			border-radius: 0;
			box-shadow: none;
			font-size: 10.5pt;
		}
		header img,
		h2 {
			-webkit-print-color-adjust: exact;
			print-color-adjust: exact;
		}
	}
</style>
