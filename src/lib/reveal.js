export function reveal(node) {
	if (typeof IntersectionObserver === 'undefined' || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
	node.classList.add('rv');
	const io = new IntersectionObserver(
		([e]) => {
			if (e.isIntersecting) {
				node.classList.add('rv-in');
				io.disconnect();
			}
		},
		{ threshold: 0.15 }
	);
	io.observe(node);
	return { destroy: () => io.disconnect() };
}
