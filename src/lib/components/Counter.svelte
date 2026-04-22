<script>
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	export let value = '0';
	export let duration = 2000;

	let displayValue = '0';
	let suffix = '';
	let targetNumber = 0;
	let started = false;

	const count = tweened(0, {
		duration: duration,
		easing: cubicOut
	});

	$: {
		// Parse the value to extract number and suffix
		const match = String(value).match(/^(\d+)(.*)$/);
		if (match) {
			targetNumber = parseInt(match[1], 10);
			suffix = match[2];
		} else {
			targetNumber = 0;
			suffix = value;
		}
	}

	$: displayValue = Math.floor($count).toLocaleString() + suffix;

	/** @type {HTMLElement | null} */
	let element = null;

	onMount(() => {
		if (!element) return;
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting && !started) {
					started = true;
					count.set(targetNumber);
				}
			},
			{ threshold: 0.1 }
		);

		observer.observe(element);

		return () => {
			if (element) observer.unobserve(element);
		};
	});
</script>

<span bind:this={element} class="counter">
	{displayValue}
</span>

<style>
	.counter {
		display: inline-block;
		font-variant-numeric: tabular-nums;
	}
</style>
