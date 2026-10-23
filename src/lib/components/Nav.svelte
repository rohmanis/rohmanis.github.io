<script>
	import { t, i18n, setLocale } from '../i18n.svelte.js';
	import { profile } from '../profile.js';

	let dark = $state(false);
	let open = $state(false);

	$effect(() => {
		const el = document.documentElement;
		dark = el.dataset.theme ? el.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
	});

	function toggleTheme() {
		dark = !dark;
		const v = dark ? 'dark' : 'light';
		document.documentElement.dataset.theme = v;
		try {
			localStorage.setItem('theme', v);
		} catch (e) {}
	}
</script>

<header>
	<nav class="wrap">
		<a class="brand" href="#top">{profile.name}</a>
		<ul id="nav-links" class:open>
			<li><a href="#about" onclick={() => (open = false)}>{t('nav.about')}</a></li>
			<li><a href="#stack" onclick={() => (open = false)}>{t('nav.stack')}</a></li>
			<li><a href="#journey" onclick={() => (open = false)}>{t('nav.journey')}</a></li>
			<li><a href="#contact" onclick={() => (open = false)}>{t('nav.contact')}</a></li>
		</ul>
		<div class="tools">
			<button class="menu" onclick={() => (open = !open)} aria-label="Menu" aria-expanded={open} aria-controls="nav-links">
				<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
			</button>
			<button onclick={() => setLocale(i18n.locale === 'en' ? 'id' : 'en')} aria-label={t('ui.lang')}>
				{i18n.locale === 'en' ? 'ID' : 'EN'}
			</button>
			<button onclick={toggleTheme} aria-label={t('ui.theme')} aria-pressed={dark}>
				{#if dark}
					<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
				{:else}
					<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></svg>
				{/if}
			</button>
		</div>
	</nav>
</header>

<style>
	header {
		position: sticky;
		top: 0;
		z-index: 10;
		background: var(--nav);
		-webkit-backdrop-filter: saturate(180%) blur(20px);
		backdrop-filter: saturate(180%) blur(20px);
		border-bottom: 1px solid var(--line);
	}
	nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 16px;
		height: 52px;
	}
	.brand {
		color: var(--text);
		font-weight: 600;
		font-size: 0.9375rem;
		letter-spacing: -0.01em;
	}
	ul {
		display: flex;
		gap: 28px;
		list-style: none;
		margin: 0;
		padding: 0;
	}
	ul a {
		color: var(--text);
		opacity: 0.8;
		font-size: 0.8125rem;
		transition: opacity 0.2s;
	}
	ul a:hover {
		opacity: 1;
	}
	.tools {
		display: flex;
		gap: 8px;
	}
	button {
		min-width: 36px;
		height: 32px;
		padding: 0 10px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border: 1px solid var(--line);
		border-radius: 980px;
		background: transparent;
		color: var(--text);
		font: inherit;
		font-size: 0.75rem;
		font-weight: 600;
		cursor: pointer;
		transition: background 0.2s;
	}
	button:hover {
		background: var(--bg-alt);
	}
	.menu {
		display: none;
	}
	@media (max-width: 640px) {
		.menu {
			display: inline-flex;
		}
		ul {
			display: none;
			position: absolute;
			top: 52px;
			left: 0;
			right: 0;
			flex-direction: column;
			gap: 0;
			padding: 8px 16px 16px;
			background: var(--bg);
			border-bottom: 1px solid var(--line);
		}
		ul.open {
			display: flex;
		}
		ul a {
			display: block;
			padding: 12px 0;
			font-size: 1rem;
		}
	}
</style>
