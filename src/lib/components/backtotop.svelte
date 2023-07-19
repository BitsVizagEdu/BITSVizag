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

<div class="back-to-top" on:click={goTop} class:hidden>
	<i class="fa-solid fa-arrow-up" />
	<p>BackToTop</p>
</div>

<style>
	.back-to-top {
		opacity: 1;
		transition: opacity 0.5s, visibility 0.5s;
		position: fixed;
		z-index: 99;
		right: 30px;
		user-select: none;
		bottom: 20px;
		color: white;
		background-color: #2a2a72;
		background-image: linear-gradient(315deg, #2a2a72 0%, #009ffd 74%);
		padding: 15px;
		padding-left: 20px;
		padding-right: 20px;
		border-radius: 20px;
		cursor: pointer;
	}
	.back-to-top.hidden {
		opacity: 0;
		visibility: hidden;
	}
	.back-to-top i {
		display: flex;
		justify-content: center;
		padding-bottom: 5px;
	}
</style>
