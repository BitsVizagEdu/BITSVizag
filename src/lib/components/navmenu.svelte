<script>
	import {
		activeTab,
		setActiveTabValue,
		tempTabValue,
		toggleIsActiveTab,
		toggleNavBar
	} from '../stores/store.js';
	import { dropdown, NavItems } from './navItem.js';
	import { slide, fade } from 'svelte/transition';

	import { onMount, onDestroy } from 'svelte';

	/** @param {string} text */
	function replaceHyphenWithSpace(text) {
		return text.replace(/-/g, ' ');
	}

	onMount(() => {
		document.body.style.overflow = 'hidden';
		document.body.style.touchAction = 'none';
	});

	onDestroy(() => {
		document.body.style.overflow = '';
		document.body.style.touchAction = '';
	});

	/** @param {number} index
	 * @param {MouseEvent} event
	 */
	function dropdown_toggle(index, event) {
		dropdown.update((val) => {
			const isOpening = !val[index];
			if (isOpening) {
				val = val.map(() => false);
				// Scroll the clicked element into view after a short delay
				const target = event.currentTarget;
				setTimeout(() => {
					target.scrollIntoView({ behavior: 'smooth', block: 'start' });
				}, 100);
			}
			val[index] = !val[index];
			return val;
		});
	}

	/** @param {string} item */
	function onClick(item) {
		toggleIsActiveTab(true);
		setActiveTabValue(item);
		toggleNavBar();
	}

	/** @param {string} folder
	 * @param {string} item
	 */
	function getItemHref(folder, item) {
		if (item.startsWith('/') || item.startsWith('http')) return item;
		return `${folder}/${encodeURIComponent(item)}`;
	}
</script>

<div class="mobile-nav-root" in:fade={{ duration: 200 }}>
	<!-- Combined Top Header Row -->
	<header class="nav-top-bar">
		<div class="brand-side">
			<img src="/1.png" alt="BITS Logo" class="logo-mini" />
		</div>
		<button on:click={toggleNavBar} class="close-minimal" aria-label="Close Menu">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="2.5"
				stroke="currentColor"
				class="w-6 h-6"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</button>
	</header>

	<div class="nav-scroll-area">
		<nav class="nav-list-compact">
			{#each $NavItems as nav, index}
				<div class="nav-group-item {$dropdown[index] ? 'is-expanded' : ''}">
					{#if nav.items && nav.items.length > 0}
						<button class="row-link" on:click={(e) => dropdown_toggle(index, e)}>
							<span class="label-text">{nav.name}</span>
							<svg
								class="chevron-icon {$dropdown[index] ? 'rotate' : ''}"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="3"
							>
								<polyline points="6 9 12 15 18 9" />
							</svg>
						</button>
					{:else}
						<a href={nav.folder || '#'} class="row-link" on:click={toggleNavBar}>
							<span class="label-text">{nav.name}</span>
						</a>
					{/if}

					{#if $dropdown[index] && nav.items && nav.items.length > 0}
						<div class="submenu-compact" transition:slide={{ duration: 350 }}>
							{#if nav.folder && nav.folder !== '#' && nav.folder !== '/'}
								<a href={nav.folder} class="sub-link-neat overview-link" on:click={toggleNavBar}>
									<div class="dot-indicator"></div>
									<span>{nav.name} Overview</span>
								</a>
							{/if}
							{#each nav.items as item}
								<a
									href={getItemHref(nav.folder, item)}
									class="sub-link-neat"
									on:click={() => onClick(item)}
								>
									<div class="dot-indicator"></div>
									<span class="capitalize">{replaceHyphenWithSpace(item)}</span>
								</a>
							{/each}
						</div>
					{/if}
				</div>
			{/each}
		</nav>

		<!-- Minimal Footer CTA -->
		<div class="nav-base">
			<a href="/admissions" class="btn-apply-mini" on:click={toggleNavBar}>Apply Now</a>
			<div class="social-row-mini">
				<a href="https://instagram.com/bitsvizag"><i class="fa-brands fa-instagram"></i></a>
				<a href="https://linkedin.com"><i class="fa-brands fa-linkedin"></i></a>
				<a href="https://youtube.com"><i class="fa-brands fa-youtube"></i></a>
			</div>
		</div>
	</div>
</div>

<style>
	.mobile-nav-root {
		position: fixed;
		inset: 0;
		width: 100%;
		height: 100vh;
		background: #fff;
		display: flex;
		flex-direction: column;
		font-family: 'Inter', sans-serif;
		z-index: 999999;
		overflow: hidden;
	}

	.nav-top-bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1.2rem;
		border-bottom: 1px solid #f1f5f9;
		background: #fff;
		flex-shrink: 0;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.02);
	}

	.brand-side {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 4px;
		max-width: 75%;
	}

	.logo-mini {
		height: 44px;
		width: auto;
		object-fit: contain;
		margin-left: -2px;
	}

	.tagline-micro {
		font-size: 8px;
		font-weight: 800;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: #94a3b8;
		line-height: 1;
	}

	.close-minimal {
		padding: 0.6rem;
		color: #1e293b;
		border-radius: 50%;
		background: #f8fafc;
		border: none;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.2s;
	}

	.close-minimal:active {
		background: #f1f5f9;
		scale: 0.95;
	}

	.nav-scroll-area {
		flex: 1;
		display: flex;
		flex-direction: column;
		overflow-y: auto;
		overflow-x: hidden;
		-webkit-overflow-scrolling: touch;
		overscroll-behavior: contain;
		touch-action: pan-y;
		padding: 1.5rem 1.2rem 12rem;
		scrollbar-width: none;
	}

	.nav-scroll-area::-webkit-scrollbar {
		display: none;
	}

	.nav-list-compact {
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	.nav-group-item {
		border-bottom: 1px solid #f8fafc;
		width: 100%;
	}

	.row-link {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.9rem 0.5rem;
		text-align: left;
		background: none;
		border: none;
		cursor: pointer;
		text-decoration: none;
	}

	.label-text {
		font-size: 1.05rem;
		font-weight: 600;
		color: #0f172a;
	}

	.chevron-icon {
		width: 1.1rem;
		height: 1.1rem;
		color: #cbd5e1;
		transition: transform 0.25s;
	}

	.is-expanded .label-text {
		color: #fbbf24;
	}
	.chevron-icon.rotate {
		transform: rotate(180deg);
		color: #fbbf24;
	}

	.submenu-compact {
		background: #fcfcfd;
		padding: 0.5rem 0 1.2rem;
		margin-bottom: 0.5rem;
		border-radius: 12px;
	}

	.sub-link-neat {
		display: flex;
		align-items: center;
		gap: 0.8rem;
		padding: 0.8rem 1.2rem;
		text-decoration: none;
		color: #475569;
		font-size: 0.95rem;
		font-weight: 600;
	}

	.sub-link-neat:active {
		color: #fbbf24;
		background: #fff;
	}

	.overview-link {
		color: #fbbf24;
		font-style: italic;
		opacity: 0.9;
	}

	.dot-indicator {
		width: 5px;
		height: 5px;
		background: #e2e8f0;
		border-radius: 50%;
	}

	.nav-base {
		margin-top: auto;
		padding: 3rem 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.5rem;
		border-top: 1px dashed #f1f5f9;
		width: 100%;
	}

	.btn-apply-mini {
		width: 100%;
		max-width: 240px;
		background: #0f172a;
		color: #fff;
		text-align: center;
		padding: 0.9rem;
		border-radius: 99px;
		font-weight: 700;
		font-size: 0.9rem;
		text-transform: uppercase;
		text-decoration: none;
		box-shadow: 0 10px 25px rgba(15, 23, 42, 0.15);
	}

	.social-row-mini {
		display: flex;
		gap: 1.5rem;
		color: #94a3b8;
		font-size: 1.2rem;
	}
</style>
