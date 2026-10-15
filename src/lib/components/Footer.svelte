<script>
	import { t } from '../i18n.svelte.js';
	import { profile } from '../profile.js';
</script>

<footer>
	<div class="wrap">© 2026 {profile.name}. {t('footer.rights')}</div>
</footer>

<style>
	footer {
		padding: 28px 0;
		border-top: 1px solid var(--line);
		font-size: 0.8125rem;
		color: var(--muted);
		text-align: center;
	}
</style>
