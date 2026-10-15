const dict = {
	en: {
		'nav.about': 'About',
		'nav.stack': 'Stack',
		'nav.journey': 'Journey',
		'nav.contact': 'Contact',
		'hero.open': 'Open to work',
		'hero.title': 'Software built to be reliable.',
		'hero.role': 'Software Developer',
		'hero.location': 'Serang, Banten, Indonesia',
		'hero.cta1': 'Get in touch',
		'hero.cta2': 'LinkedIn',
		'about.eyebrow': 'About',
		'about.title': 'Backend depth, frontend care.',
		'about.p1': 'I’m a software developer based in Serang, Banten. I build backend services with Java and Spring Boot, and interfaces with React and Next.js.',
		'about.p2': 'I like simple systems that are easy to maintain, and interfaces that feel quick and clear. I’m currently open to on-site and hybrid roles.',
		'stack.eyebrow': 'Stack',
		'stack.title': 'The tools I work with.',
		'stack.backend': 'Backend',
		'stack.runtime': 'Runtime',
		'stack.frontend': 'Frontend',
		'journey.eyebrow': 'Journey',
		'journey.title': 'Where I work and study.',
		'journey.work': 'Work',
		'journey.work.role': 'Software Developer',
		'journey.edu': 'Education',
		'contact.eyebrow': 'Contact',
		'contact.title': 'Let’s build something together.',
		'contact.text': 'Open to on-site and hybrid roles. The best way to reach me is through LinkedIn.',
		'footer.rights': 'All rights reserved.',
		'ui.theme': 'Toggle theme',
		'ui.lang': 'Switch language'
	},
	id: {
		'nav.about': 'Tentang',
		'nav.stack': 'Teknologi',
		'nav.journey': 'Perjalanan',
		'nav.contact': 'Kontak',
		'hero.open': 'Terbuka untuk pekerjaan',
		'hero.title': 'Perangkat lunak yang andal.',
		'hero.role': 'Software Developer',
		'hero.location': 'Serang, Banten, Indonesia',
		'hero.cta1': 'Hubungi saya',
		'hero.cta2': 'LinkedIn',
		'about.eyebrow': 'Tentang',
		'about.title': 'Kuat di backend, peduli di frontend.',
		'about.p1': 'Saya software developer di Serang, Banten. Saya membangun layanan backend dengan Java dan Spring Boot, serta antarmuka dengan React dan Next.js.',
		'about.p2': 'Saya suka sistem yang sederhana dan mudah dirawat, serta antarmuka yang terasa cepat dan jelas. Saat ini saya terbuka untuk peran on-site maupun hybrid.',
		'stack.eyebrow': 'Teknologi',
		'stack.title': 'Alat yang saya gunakan.',
		'stack.backend': 'Backend',
		'stack.runtime': 'Runtime',
		'stack.frontend': 'Frontend',
		'journey.eyebrow': 'Perjalanan',
		'journey.title': 'Tempat saya bekerja dan belajar.',
		'journey.work': 'Pekerjaan',
		'journey.work.role': 'Software Developer',
		'journey.edu': 'Pendidikan',
		'contact.eyebrow': 'Kontak',
		'contact.title': 'Mari membangun sesuatu bersama.',
		'contact.text': 'Terbuka untuk peran on-site dan hybrid. Cara terbaik menghubungi saya adalah lewat LinkedIn.',
		'footer.rights': 'Hak cipta dilindungi.',
		'ui.theme': 'Ganti tema',
		'ui.lang': 'Ganti bahasa'
	}
};

export const i18n = $state({ locale: 'en' });

export function t(key) {
	return dict[i18n.locale][key] ?? dict.en[key] ?? key;
}

export function setLocale(l) {
	i18n.locale = l;
	if (typeof document === 'undefined') return;
	document.documentElement.lang = l;
	try {
		localStorage.setItem('locale', l);
	} catch (e) {}
}

export function initLocale() {
	let l = null;
	try {
		l = localStorage.getItem('locale');
	} catch (e) {}
	if (l !== 'en' && l !== 'id') l = navigator.language?.toLowerCase().startsWith('id') ? 'id' : 'en';
	setLocale(l);
}
