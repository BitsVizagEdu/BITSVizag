<script>
	/** @type {any[]} */
	export let items = [];
	/** @type {string} */
	export let activeTab = '';
	/** @type {string} */
	export let title = 'Navigation';
	/** @type {string} */
	export let basePath = '';
	/** @type {boolean} */
	export let useButtons = false;
	/** @type {function(any): void} */
	export let onSelect = (item) => {};

	import { replaceHyphenWithSpace } from '../utils.js';

	let isDropdownOpen = false;

	/** @param {any} item */
	function handleSelect(item) {
		activeTab = item;
		isDropdownOpen = false;
		onSelect(item);
	}

	/** @param {string} item */
	function getItemHref(item) {
		return `${basePath}/${encodeURIComponent(item)}`;
	}

	function toggleDropdown() {
		isDropdownOpen = !isDropdownOpen;
	}
</script>

<!-- Centered Premium Sidebar - Top Navigation Style -->
<div class="navigation-container">
	<div class="max-w-6xl mx-auto px-4 lg:px-6">
		<!-- Title Section -->
		<div class="title-section">
			<span class="eyebrow">{title}</span>
			<h2 class="title-text">{replaceHyphenWithSpace(activeTab)}</h2>
			<div class="accent-line"></div>
		</div>

		<!-- Mobile Dropdown -->
		<div class="lg:hidden relative">
			<button class="mobile-dropdown-trigger" on:click={toggleDropdown}>
				<span class="current-label">{replaceHyphenWithSpace(activeTab)}</span>
				<i class="fa-solid fa-chevron-down transition-transform duration-300" class:rotate-180={isDropdownOpen}></i>
			</button>

			{#if isDropdownOpen}
				<div class="mobile-dropdown-menu">
					{#each items as item}
						{#if useButtons}
							<button 
								class="dropdown-item" 
								class:active={activeTab === item}
								on:click={() => handleSelect(item)}
							>
								{item}
							</button>
						{:else}
							<a 
								href={getItemHref(item)} 
								class="dropdown-item" 
								class:active={activeTab === item}
								on:click={() => handleSelect(item)}
							>
								{replaceHyphenWithSpace(item)}
							</a>
						{/if}
					{/each}
				</div>
			{/if}
		</div>

		<!-- Desktop Navigation Grid -->
		<div class="hidden lg:flex flex-wrap justify-center gap-4">
			{#each items as item}
				<div class="nav-item-wrapper">
					{#if useButtons}
						<button
							on:click={() => handleSelect(item)}
							class="premium-nav-link"
							class:active={activeTab === item}
						>
							<span class="label">{item}</span>
							{#if activeTab === item}
								<div class="active-glow"></div>
							{/if}
						</button>
					{:else}
						<a
							href={getItemHref(item)}
							on:click={() => handleSelect(item)}
							class="premium-nav-link"
							class:active={activeTab === item}
						>
							<span class="label">{replaceHyphenWithSpace(item)}</span>
							{#if activeTab === item}
								<div class="active-glow"></div>
							{/if}
						</a>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.navigation-container {
		width: 100%;
		background: linear-gradient(to bottom, #ffffff, #f9fafb);
		padding: 3rem 0;
		border-bottom: 1px solid #e5e7eb;
		position: relative;
		z-index: 50;
	}

	.title-section {
		text-align: center;
		margin-bottom: 2.5rem;
	}

	.eyebrow {
		display: block;
		font-size: 0.75rem;
		font-weight: 800;
		text-transform: uppercase;
		letter-spacing: 0.15em;
		color: #94a3b8;
		margin-bottom: 0.5rem;
		font-family: 'Outfit', sans-serif;
	}

	.title-text {
		font-size: 2.25rem;
		font-weight: 900;
		color: #0f172a;
		letter-spacing: -0.025em;
		font-family: 'Outfit', sans-serif;
		background: linear-gradient(135deg, #0f172a 0%, #334155 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.accent-line {
		height: 4px;
		width: 48px;
		background: #2672d5;
		border-radius: 999px;
		margin: 0.75rem auto 0;
	}

	/* Mobile Dropdown Styles */
	.mobile-dropdown-trigger {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1.25rem 1.5rem;
		background: #ffffff;
		border: 1px solid #e2e8f0;
		border-radius: 1rem;
		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
		cursor: pointer;
		font-family: 'Roboto', sans-serif;
	}

	.current-label {
		font-size: 1rem;
		font-weight: 700;
		color: #1e293b;
	}

	.mobile-dropdown-menu {
		position: absolute;
		top: calc(100% + 0.5rem);
		left: 0;
		right: 0;
		background: #ffffff;
		border: 1px solid #e2e8f0;
		border-radius: 1rem;
		box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
		overflow: hidden;
		z-index: 100;
		padding: 0.5rem;
		animation: dropdownFade 0.2s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.dropdown-item {
		display: block;
		width: 100%;
		padding: 1rem 1.25rem;
		text-align: left;
		font-size: 0.9375rem;
		font-weight: 600;
		color: #475569;
		border-radius: 0.75rem;
		text-decoration: none;
		border: none;
		background: none;
		transition: all 0.2s;
	}

	.dropdown-item:hover {
		background: #f1f5f9;
		color: #2672d5;
	}

	.dropdown-item.active {
		background: #eff6ff;
		color: #2672d5;
	}

	/* Desktop Navigation Styles */
	.premium-nav-link {
		position: relative;
		display: inline-flex;
		align-items: center;
		padding: 0.875rem 1.75rem;
		background: #ffffff;
		border: 1px solid #e2e8f0;
		border-radius: 999px;
		color: #64748b;
		text-decoration: none;
		font-size: 0.875rem;
		font-weight: 700;
		font-family: 'Roboto', sans-serif;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		overflow: hidden;
	}

	.premium-nav-link:hover {
		border-color: #2672d5;
		color: #2672d5;
		transform: translateY(-2px);
		box-shadow: 0 10px 15px -3px rgba(38, 114, 213, 0.1);
	}

	.premium-nav-link.active {
		background: #2672d5;
		border-color: #2672d5;
		color: #ffffff;
		box-shadow: 0 10px 15px -3px rgba(38, 114, 213, 0.3);
	}

	.active-glow {
		position: absolute;
		inset: 0;
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, transparent 100%);
	}

	.rotate-180 {
		transform: rotate(180deg);
	}

	@keyframes dropdownFade {
		from { opacity: 0; transform: translateY(-10px); }
		to { opacity: 1; transform: translateY(0); }
	}

	span, a, button {
		font-family: 'Roboto', 'Outfit', sans-serif;
	}
</style>

