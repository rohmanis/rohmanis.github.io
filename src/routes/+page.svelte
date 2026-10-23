<script>
	import Nav from '../lib/components/Nav.svelte';
	import Hero from '../lib/components/Hero.svelte';
	import About from '../lib/components/About.svelte';
	import Stack from '../lib/components/Stack.svelte';
	import Journey from '../lib/components/Journey.svelte';
	import Projects from '../lib/components/Projects.svelte';
	import Contact from '../lib/components/Contact.svelte';
	import Footer from '../lib/components/Footer.svelte';
</script>

<a class="skip" href="#main">Skip to content</a>
<Nav />
<main id="main">
	<Hero />
	<About />
	<Stack />
	<Journey />
	<Projects />
	<Contact />
</main>
<Footer />
