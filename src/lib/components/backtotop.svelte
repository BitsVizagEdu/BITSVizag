<script>
	export let showOnPx = 150;
	let hidden = true;

	function goTop() {
		document.body.scrollIntoView();
	}

	function scrollContainer() {
		return document.documentElement || document.body;
	}

	function handleOnScroll() {
		if (!scrollContainer()) {
			return;
		}

		if (scrollContainer().scrollTop > showOnPx) {
			hidden = false;
		} else {
			hidden = true;
		}
	}
</script>

<svelte:window on:scroll={handleOnScroll} />

<button
	class="back-to-top flex items-center justify-center"
	on:click={goTop}
	class:hidden
	type="button"
	aria-label="Back to top"
>
	<i class="fa-solid fa-arrow-up pr-2 pt-1" />
	<p>BackToTop</p>
</button>

<style>
	.back-to-top {
		opacity: 1;
		transition:
			opacity 0.5s,
			visibility 0.5s;
		position: fixed;
		z-index: 99;
		right: 22px;
		user-select: none;
		bottom: 74px;
		color: white;
		background: #1d2f63;
		padding: 15px;
		padding-left: 20px;
		padding-right: 20px;
		border-radius: 20px;
		box-shadow: 0 10px 24px rgba(8, 14, 31, 0.35);
		cursor: pointer;
	}
	.back-to-top.hidden {
		opacity: 0;
		visibility: hidden;
	}
	.back-to-top i {
		justify-content: center;
		padding-bottom: 5px;
	}

	@media (max-width: 640px) {
		.back-to-top {
			right: 10px;
			bottom: 80px;
			padding: 8px 14px;
			border-radius: 12px;
		}
		.back-to-top p {
			font-size: 11px;
		}
		.back-to-top i {
			font-size: 10px;
			padding-right: 4px;
		}
	}
</style>
