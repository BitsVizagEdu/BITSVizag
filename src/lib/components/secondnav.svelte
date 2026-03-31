<script>
	import { onDestroy } from 'svelte';
	import { browser } from '$app/environment';

	let isMobileMenuOpen = false;

	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}

	function closeMobileMenu() {
		isMobileMenuOpen = false;
	}

	/** @param {KeyboardEvent} event */
	function handleEscape(event) {
		if (event.key === 'Escape') {
			closeMobileMenu();
		}
	}

	$: if (browser) {
		document.body.classList.toggle('secondnav-drawer-open', isMobileMenuOpen);
	}

	onDestroy(() => {
		if (browser) {
			document.body.classList.remove('secondnav-drawer-open');
		}
	});
</script>

<svelte:window on:keydown={handleEscape} />

<nav>
	<div class="wrapper">
		<div class="mobile-visible-links">
			<a href="/gallery" class="mobile-visible-link" on:click={closeMobileMenu}>Gallery</a>
			<a href="/Students" class="mobile-visible-link" on:click={closeMobileMenu}>Students</a>
			<a
				href="/infrastructure"
				class="mobile-visible-link"
				title="Infrastructure"
				aria-label="Infrastructure"
				on:click={closeMobileMenu}>Infrastructure</a
			>
			<a href="/contactus" class="mobile-visible-link" on:click={closeMobileMenu}>Contact</a>
		</div>

		<button
			type="button"
			class="mobile-menu-btn"
			on:click={toggleMobileMenu}
			aria-label="Open quick links sidebar"
			aria-expanded={isMobileMenuOpen}
		>
			{#if isMobileMenuOpen}
				<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" class="h-5 w-5">
					<path
						d="M6 6l12 12M18 6 6 18"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			{:else}
				<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" class="h-5 w-5">
					<path
						d="M4 7h16M4 12h16M4 17h16"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			{/if}
		</button>

		<ul class="nav-links {isMobileMenuOpen ? 'drawer-open' : ''}">
			<li class="mobile-featured-hidden">
				<a href="/gallery" on:click={closeMobileMenu}>Gallery</a>
			</li>
			<li class="mobile-featured-hidden">
				<a href="/Students" on:click={closeMobileMenu}>Students</a>
			</li>
			<li>
				<a href="/Industry-Linkages" on:click={closeMobileMenu}>Industry & International Linkages</a
				>
			</li>
			<li class="mobile-featured-hidden">
				<a href="/infrastructure" on:click={closeMobileMenu}>Infrastructure</a>
			</li>
			<li><a href="/finance-quality" on:click={closeMobileMenu}>Finance & Quality</a></li>
			<li><a href="/Mandatory" on:click={closeMobileMenu}>Disclosures</a></li>
			<li>
				<a
					href="https://docs.google.com/forms/d/e/1FAIpQLSeLM-fVFfXfLMtIzC2QcO-djxj14gqkW1F18eGdqG9m9mt-Sg/viewform"
					target="_blank"
					on:click={closeMobileMenu}>Online Grievances</a
				>
			</li>
			<li class="mobile-featured-hidden">
				<a href="/contactus" on:click={closeMobileMenu}>Contact Us</a>
			</li>
		</ul>
	</div>

	{#if isMobileMenuOpen}
		<button
			type="button"
			class="mobile-backdrop"
			on:click={closeMobileMenu}
			aria-label="Close quick links sidebar"
		></button>
	{/if}
</nav>

<style>
	/* Fonts are loaded in app.html */

	nav {
		--middlenav-mobile-height: 56px;
		--secondnav-mobile-height: 50px;
		position: sticky;
		top: 56px; /* Below Middlenav */
		z-index: 997;
		width: 100%;
		background: #d22626;
		font-family: 'Roboto', sans-serif;
		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
	}

	nav .wrapper {
		max-width: 1600px;
		padding: 0 24px;
		height: 40px;
		margin: auto;
		display: flex;
		align-items: center;
		justify-content: stretch;
	}

	.mobile-visible-links,
	.mobile-menu-btn,
	.mobile-backdrop {
		display: none;
	}

	.mobile-visible-link {
		text-decoration: none;
	}

	.nav-links {
		display: flex;
		flex: 1;
		width: 100%;
		align-items: center;
		justify-content: space-evenly;
		white-space: nowrap;
		list-style: none;
		margin: 0;
		padding: 0;
		height: 100%;
	}

	.nav-links li {
		display: flex;
		align-items: center;
		height: 100%;
		position: relative;
	}

	.nav-links li a {
		color: rgba(255, 255, 255, 0.95);
		text-decoration: none;
		font-size: 14px;
		padding: 8px 16px;
		transition: all 0.25s ease;
		text-transform: capitalize;
		letter-spacing: 0.02em;
		border-radius: 8px;
		display: flex;
		align-items: center;
		font-weight: 500;
		font-family: 'Roboto', sans-serif;

		font-weight: 600;
	}

	.nav-links li a:hover {
		color: #ffffff;
		background: rgba(255, 255, 255, 0.12);
		transform: translateY(-1px);
	}

	.nav-links li a:active {
		transform: translateY(0);
		background: rgba(255, 255, 255, 0.2);
	}

	@media screen and (max-width: 1200px) {
		nav {
			overflow: hidden;
		}

		nav .wrapper {
			padding: 0;
			height: 50px;
			justify-content: flex-start;
			overflow-x: auto;
			scrollbar-width: none;
			-ms-overflow-style: none;
			-webkit-overflow-scrolling: touch;
		}

		nav .wrapper::-webkit-scrollbar {
			display: none;
		}

		.nav-links {
			padding: 0 20px;
			gap: 4px;
		}

		.nav-links li a {
			font-size: 14px;
			padding: 10px 18px;
			letter-spacing: 0.02em;
			background: rgba(255, 255, 255, 0.05);
			border: 1px solid rgba(255, 255, 255, 0.1);
		}
	}

	@media screen and (max-width: 768px) {
		nav {
			overflow: visible;
			z-index: 1001;
		}

		nav .wrapper {
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: var(--secondnav-mobile-height);
			padding: 0 12px;
			gap: 8px;
		}

		.mobile-visible-links {
			display: flex;
			align-items: center;
			gap: clamp(4px, 1.5vw, 12px);
			flex: 1;
			min-width: 0;
			height: 100%;
		}

		.mobile-visible-link {
			display: flex;
			align-items: center;
			justify-content: center;
			flex: 1;
			min-width: 0;
			height: 100%;
			padding: 0 4px;
			font-size: 11px;
			font-weight: 700;
			color: #ffffff;
			text-transform: capitalize;
			letter-spacing: 0.05em;
			white-space: nowrap;
			text-decoration: none;
			transition: opacity 0.2s ease;
		}

		.mobile-visible-link:active {
			opacity: 0.7;
		}

		.mobile-menu-btn {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 100%;
			width: 44px;
			color: #ffffff;
			background: transparent;
			border: none;
			cursor: pointer;
			transition: opacity 0.2s ease;
			flex-shrink: 0;
		}

		.mobile-menu-btn:active {
			opacity: 0.7;
		}

		.nav-links {
			position: fixed;
			top: calc(var(--middlenav-mobile-height) + var(--secondnav-mobile-height));
			right: 0;
			width: min(84vw, 320px);
			height: calc(100dvh - (var(--middlenav-mobile-height) + var(--secondnav-mobile-height)));
			padding: 14px;
			margin: 0;
			gap: 10px;
			flex-direction: column;
			align-items: stretch;
			justify-content: flex-start;
			background: linear-gradient(180deg, #d22626 0%, #b91f1f 100%);
			border-left: 1px solid rgba(255, 255, 255, 0.26);
			border-top-left-radius: 16px;
			border-bottom-left-radius: 16px;
			box-shadow: -16px 0 34px rgba(8, 10, 20, 0.32);
			overflow-y: auto;
			transform: translateX(105%);
			transition: transform 0.34s cubic-bezier(0.22, 1, 0.36, 1);
			z-index: 1003;
		}

		.nav-links.drawer-open {
			transform: translateX(0);
		}

		.nav-links li {
			height: auto;
		}

		.nav-links li.mobile-featured-hidden {
			display: none;
		}

		.nav-links li a {
			font-size: 14px;
			padding: 12px 15px;
			border-radius: 10px;
			background: rgba(255, 255, 255, 0.12);
			border: 1px solid rgba(255, 255, 255, 0.22);
			justify-content: flex-start;
			text-transform: none;
			white-space: normal;
			line-height: 1.35;
		}

		.nav-links li a:hover {
			transform: none;
			background: rgba(255, 255, 255, 0.2);
		}

		.mobile-backdrop {
			display: block;
			position: fixed;
			top: calc(var(--middlenav-mobile-height) + var(--secondnav-mobile-height));
			left: 0;
			right: 0;
			bottom: 0;
			border: 0;
			background: rgba(8, 12, 26, 0.38);
			backdrop-filter: blur(2px);
			z-index: 1002;
		}

		@media screen and (max-width: 420px) {
			nav .wrapper {
				padding: 0 8px;
				gap: 6px;
			}

			.mobile-menu-btn {
				width: 34px;
				height: 34px;
			}

			.mobile-visible-links {
				gap: 5px;
			}

			.mobile-visible-link {
				min-height: 30px;
				font-size: 9.5px;
				padding: 5px 4px;
			}
		}
	}
</style>
