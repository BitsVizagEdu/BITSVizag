<script>
	import { showNavBar } from '$lib/stores/store.js';
	import FacultyPage from '$lib/components/faculty.svelte';
</script>

<svelte:head>
	<title>Faculty | BITS Vizag</title>
	<meta
		name="description"
		content="Meet our distinguished faculty and lab programmers across departments at BITS Vizag."
	/>
</svelte:head>

{#if !$showNavBar}
	<FacultyPage />
{/if}
