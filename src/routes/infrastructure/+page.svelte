<script>
	import { onMount } from 'svelte';
	import { showNavBar } from '$lib/stores/store.js';
</script>

<svelte:head>
	<title>Page Under Construction | BITS Vizag</title>
</svelte:head>

{#if !$showNavBar}
	<div class="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center bg-slate-50">
		<div class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6">
			<i class="fa-solid fa-screwdriver-wrench text-3xl text-blue-600"></i>
		</div>
		<h1 class="text-3xl font-bold text-slate-900 mb-4">Under Construction</h1>
		<p class="text-slate-600 max-w-md mx-auto mb-8">
			We are currently updating this page to provide you with the latest information. Please check
			back soon!
		</p>
		<a
			href="/"
			class="px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors"
		>
			Back to Home
		</a>
	</div>
{/if}
