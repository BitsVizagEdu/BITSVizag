<script>
	import { showNavBar } from '$lib/stores/store.js';
	import { onMount } from 'svelte';

	let isScrolled = false;

	onMount(() => {
		const handleScroll = () => {
			isScrolled = window.scrollY > 20;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	function toggleNav() {
		showNavBar.set(!$showNavBar);
	}
</script>

<div class="mobile-header-container lg:hidden">
	<!-- Top Info Bar -->
	<div class="top-info-bar">
		<div class="contact-info">
			<a href="tel:+918886634502" class="info-link">
				<i class="fa-solid fa-phone"></i>
				<span class="bright-text">88866 34502</span>
			</a>
			<a href="mailto:principal@bitsvizag.com" class="info-link">
				<i class="fa-solid fa-envelope"></i>
				<span class="bright-text">principal@bitsvizag.com</span>
			</a>
		</div>
		<div class="social-and-buttons">
			<div class="social-icons">
				<a href="https://instagram.com/bitsvizag" target="_blank"
					><i class="fa-brands fa-instagram"></i></a
				>
				<a href="https://whatsapp.com" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
				<a href="https://linkedin.com" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
				<a href="https://youtube.com" target="_blank"><i class="fa-brands fa-youtube"></i></a>
				<a href="https://x.com" target="_blank"><i class="fa-brands fa-x-twitter"></i></a>
			</div>
			<a href="https://bitsvizageamcetexamportal1.vercel.app/" target="_blank" class="btn-eamcet"
				>EAMCET PORTAL</a
			>
		</div>
	</div>

	<!-- Main Header -->
	<header class="main-header {isScrolled ? 'scrolled' : ''}">
		<div class="header-inner">
			<a href="/" class="brand">
				<img src="/1.png" alt="BITS Vizag Logo" class="logo" />
				<div class="accreditation-row">
					<div class="acc-logo-wrap white-bg">
						<img src="/Accredation-logos/UGC.png" alt="UGC" class="acc-logo" />
					</div>
					<img src="/Accredation-logos/JNTUGV.jpg" alt="JNTU" class="acc-logo" />
					<img src="/naac.png" alt="NAAC" class="acc-logo" />
					<div class="acc-logo-wrap white-bg">
						<img src="/rcb.png" alt="RCB" class="acc-logo" />
					</div>
					<img src="/bits.png" alt="BITS" class="acc-logo" />
				</div>
			</a>
			<button class="menu-toggle" on:click={toggleNav} aria-label="Toggle Menu">
				<div class="hamburger">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</button>
		</div>
	</header>
</div>

<style>
	.mobile-header-container {
		width: 100%;
		position: relative;
		z-index: 50;
		font-family: 'Inter', sans-serif;
	}

	.top-info-bar {
		background: #060b18;
		color: #ffffff;
		padding: 2px 10px;
		display: flex;
		flex-direction: column;
		gap: 2px;
		border-bottom: 1px solid rgba(251, 191, 36, 0.3);
	}

	.bright-text {
		color: #ffffff;
		text-shadow: 0 0 1px rgba(255, 255, 255, 0.2);
	}

	.contact-info {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		justify-content: center;
		font-size: 10px;
		font-weight: 500;
	}

	.info-link {
		color: #ffffff;
		text-decoration: none;
		display: flex;
		align-items: center;
		gap: 4px;
	}

	.info-link i {
		color: #fbbf24;
		font-size: 10px;
	}

	.social-and-buttons {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		padding: 2px 10px;
	}

	.social-icons {
		display: flex;
		gap: 10px;
	}

	.social-icons a {
		color: white;
		font-size: 11px;
		transition: color 0.2s;
	}

	.social-icons a:hover {
		color: #fbbf24;
	}

	.btn-eamcet {
		font-size: 9px;
		font-weight: 900;
		padding: 4px 12px;
		border-radius: 4px;
		text-decoration: none;
		text-transform: uppercase;
		color: #080e1f;
		background: #fbbf24;
		border: 1px solid #fbbf24;
		white-space: nowrap;
		box-shadow: 0 4px 10px rgba(251, 191, 36, 0.3);
	}

	.main-header {
		background: white;
		padding: 6px 12px;
		transition: all 0.3s ease;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	}

	.main-header.scrolled {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		padding: 4px 12px;
		z-index: 100;
	}

	.header-inner {
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 100%;
	}

	.brand {
		display: flex;
		align-items: center;
		gap: 10px;
		text-decoration: none;
		color: #080e1f;
		flex: 1;
		min-width: 0;
	}

	.logo {
		height: 40px;
		width: auto;
	}

	.accreditation-row {
		display: flex;
		align-items: center;
		gap: 4px;
		margin-left: 6px;
		padding-left: 6px;
		border-left: 1px solid #e5e7eb;
	}

	.acc-logo-wrap.white-bg {
		background: rgb(255, 255, 255);
		border-radius: 4px;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 2px;
		box-shadow: 0 1px 3px rgb(248, 246, 246);
	}

	.acc-logo {
		height: 28px;
		width: auto;
		object-fit: contain;
	}

	.menu-toggle {
		background: none;
		border: none;
		padding: 6px;
		cursor: pointer;
	}

	.hamburger {
		width: 20px;
		height: 14px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.hamburger span {
		display: block;
		height: 2px;
		width: 100%;
		background: #080e1f;
		border-radius: 2px;
		transition: all 0.3s ease;
	}
</style>
