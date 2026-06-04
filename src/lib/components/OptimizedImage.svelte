<script>
	/**
	 * Optimized Image Component with lazy loading, responsive images, and performance optimizations
	 * @param {string} src - Image source (required)
	 * @param {string} alt - Alt text (required)
	 * @param {string} [width] - Image width
	 * @param {string} [height] - Image height
	 * @param {boolean} [eager=false] - Load image eagerly (for above-fold images)
	 * @param {string} [sizes] - Responsive image sizes
	 * @param {string} [srcset] - Responsive image srcset
	 * @param {string} [fetchpriority] - Native image fetch priority hint
	 * @param {string} [className] - Additional CSS classes
	 * @param {string} [style] - Additional inline styles
	 */
	export let src = '';
	export let alt = '';
	export let width = undefined;
	export let height = undefined;
	export let eager = false;
	export let sizes = undefined;
	export let srcset = undefined;
	export let fetchpriority = undefined;
	export let className = '';
	export let style = '';

	let imageLoaded = false;

	const handleImageLoad = () => {
		imageLoaded = true;
	};
</script>

<img
	{src}
	{alt}
	{width}
	{height}
	{sizes}
	{srcset}
	{fetchpriority}
	loading={eager ? 'eager' : 'lazy'}
	decoding="async"
	class="transition-opacity duration-300 {imageLoaded ? 'opacity-100' : 'opacity-0'} {className}"
	on:load={handleImageLoad}
	style="contain: layout style paint; {style}"
/>
