<script>
	import { toggleNavBar } from '../stores/store.js';
	import { fade, slide } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	// Toggle states for expandable sections
	let openSections = {
		courses: false,
		facilities: false,
		about: false,
		contact: false,
		more: false
	};

	function toggleSection(section) {
		openSections[section] = !openSections[section];
		// Close other sections for accordion effect
		for (let key in openSections) {
			if (key !== section) {
				openSections[key] = false;
			}
		}
	}

	function handleAction() {
		toggleNavBar();
	}
</script>

<!-- Fullscreen mobile nav overlay matching hero blue color theme -->
<div class="mobile-nav-root" transition:fade={{ duration: 250 }}>
	<!-- Top Header Row -->
	<header class="nav-top-header">
		<a href="/" class="brand" on:click={handleAction}>
			<img src="/1.png" alt="BITS Logo" class="logo-mini" />
		</a>
		<button on:click={handleAction} class="close-btn" aria-label="Close Menu">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6">
				<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</button>
	</header>

	<!-- Main navigation list -->
	<div class="nav-scroll-area">
		<nav class="primary-nav">
			<!-- Home -->
			<div class="nav-item-wrap">
				<a href="/" class="nav-item" on:click={handleAction}>
					<span>Home</span>
				</a>
			</div>

			<!-- Courses -->
			<div class="nav-item-wrap">
				<button 
					class="nav-item {openSections.courses ? 'active' : ''}" 
					on:click={() => toggleSection('courses')}
					aria-expanded={openSections.courses}
				>
					<span>Courses</span>
					<svg class="chevron {openSections.courses ? 'rotate' : ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
						<polyline points="6 9 12 15 18 9" />
					</svg>
				</button>
				{#if openSections.courses}
					<div class="submenu" transition:slide={{ duration: 250, easing: cubicOut }}>
						<a href="/department/Department%20of%20CSE" on:click={handleAction}>CSE</a>
						<a href="/department/Department%20of%20CSE%20(AI%20&%20ML)" on:click={handleAction}>AI & ML</a>
						<a href="/department/Department%20of%20CSE%20(Cyber%20Security)" on:click={handleAction}>CS</a>
						<a href="/department/Department%20of%20ECE" on:click={handleAction}>ECE</a>
						<a href="/department/Department%20of%20EEE" on:click={handleAction}>EEE</a>
						<a href="/department/Department%20of%20MBA" on:click={handleAction}>MBA</a>
					</div>
				{/if}
			</div>

			<!-- Facilities -->
			<div class="nav-item-wrap">
				<button 
					class="nav-item {openSections.facilities ? 'active' : ''}" 
					on:click={() => toggleSection('facilities')}
					aria-expanded={openSections.facilities}
				>
					<span>Facilities</span>
					<svg class="chevron {openSections.facilities ? 'rotate' : ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
						<polyline points="6 9 12 15 18 9" />
					</svg>
				</button>
				{#if openSections.facilities}
					<div class="submenu" transition:slide={{ duration: 250, easing: cubicOut }}>
						<a href="/facilities/Laboratories" on:click={handleAction}>Laboratories</a>
						<a href="/facilities/Knowledge-Resource-Center" on:click={handleAction}>Knowledge Resource Center</a>
						<a href="/facilities/Accomidation" on:click={handleAction}>Accommodation</a>
						<a href="/facilities/Cafeteria" on:click={handleAction}>Cafeteria</a>
						<a href="/facilities/Sports" on:click={handleAction}>Sports</a>
						<a href="/facilities/Transport" on:click={handleAction}>Transport</a>
					</div>
				{/if}
			</div>

			<!-- About Us -->
			<div class="nav-item-wrap">
				<button 
					class="nav-item {openSections.about ? 'active' : ''}" 
					on:click={() => toggleSection('about')}
					aria-expanded={openSections.about}
				>
					<span>About Us</span>
					<svg class="chevron {openSections.about ? 'rotate' : ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
						<polyline points="6 9 12 15 18 9" />
					</svg>
				</button>
				{#if openSections.about}
					<div class="submenu" transition:slide={{ duration: 250, easing: cubicOut }}>
						<a href="/aboutus/About-BITS" on:click={handleAction}>About BITS</a>
						<a href="/aboutus/About-ABWEC" on:click={handleAction}>About ABWEC</a>
						<a href="/aboutus/Message-from-Secretary-&-Correspondent" on:click={handleAction}>Secretary & Correspondent</a>
						<a href="/aboutus/Message-from-Principal" on:click={handleAction}>Principal's Message</a>
					</div>
				{/if}
			</div>

			<!-- Contact Us -->
			<div class="nav-item-wrap">
				<button 
					class="nav-item {openSections.contact ? 'active' : ''}" 
					on:click={() => toggleSection('contact')}
					aria-expanded={openSections.contact}
				>
					<span>Contact Us</span>
					<svg class="chevron {openSections.contact ? 'rotate' : ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
						<polyline points="6 9 12 15 18 9" />
					</svg>
				</button>
				{#if openSections.contact}
					<div class="submenu" transition:slide={{ duration: 250, easing: cubicOut }}>
						<a href="/contactus#location" on:click={handleAction}>Campus Location</a>
						<a href="/contactus#phone" on:click={handleAction}>Phone Numbers</a>
						<a href="/contactus#admissions" on:click={handleAction}>Admissions Office</a>
						<a href="/contactus#email" on:click={handleAction}>Email</a>
						<a href="https://www.google.com/maps/search/?api=1&query=Baba+college+Lake+near+Pothinamallayyapalem" target="_blank" rel="noopener noreferrer" on:click={handleAction}>Google Maps</a>
					</div>
				{/if}
			</div>

			<!-- Admissions -->
			<div class="nav-item-wrap">
				<a href="/courses/Offered-Courses" class="nav-item admissions-link" on:click={handleAction}>
					<span>Admissions</span>
					<svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width: 18px; height: 18px;">
						<line x1="5" y1="12" x2="19" y2="12"></line>
						<polyline points="12 5 19 12 12 19"></polyline>
					</svg>
				</a>
			</div>

			<!-- More... Expandable Dropdown -->
			<div class="nav-item-wrap">
				<button 
					class="nav-item {openSections.more ? 'active' : ''}" 
					on:click={() => toggleSection('more')}
					aria-expanded={openSections.more}
				>
					<span>More...</span>
					<svg class="chevron {openSections.more ? 'rotate' : ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
						<polyline points="6 9 12 15 18 9" />
					</svg>
				</button>
				{#if openSections.more}
					<div class="submenu" transition:slide={{ duration: 250, easing: cubicOut }}>
						<a href="/faculty" on:click={handleAction}>Faculty Profiles</a>
						<a href="/examcell" on:click={handleAction}>Exam Cell Portal</a>
						<a href="/research" on:click={handleAction}>R&D and Publications</a>
						<a href="/placements" on:click={handleAction}>CDC & Placements</a>
						<a href="/gallery" on:click={handleAction}>Campus Gallery</a>
						<a href="/Online-Grievances" on:click={handleAction}>Online Grievance</a>
					</div>
				{/if}
			</div>
		</nav>

		<!-- Bottom Social Icons Area (Smooth and Elegant) -->
		<div class="nav-footer">
			<div class="social-links-row">
				<a href="https://www.instagram.com/bits_vizag_official/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
					<i class="fa-brands fa-instagram"></i>
				</a>
				<a href="https://www.linkedin.com/company/bits-vizag/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
					<i class="fa-brands fa-linkedin"></i>
				</a>
				<a href="https://youtube.com/@bitsmediacenter8449" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
					<i class="fa-brands fa-youtube"></i>
				</a>
				<a href="https://x.com/bits_vizag" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
					<i class="fa-brands fa-x-twitter"></i>
				</a>
			</div>
			<p class="copyright-micro">&copy; 2026 Baba Institute of Technology and Sciences</p>
		</div>
	</div>
</div>

<style>
	.mobile-nav-root {
		position: fixed;
		inset: 0;
		width: 100vw;
		height: 100dvh;
		background: rgba(5, 8, 22, 0.98); /* Rich dark blue overlay matching the hero section */
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		z-index: 10000;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		font-family: 'Inter', sans-serif;
	}

	.nav-top-header {
		height: 72px;
		padding: 0 24px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid rgba(255, 255, 255, 0.08);
		flex-shrink: 0;
	}

	.logo-mini {
		height: 48px;
		width: auto;
		filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
	}

	.close-btn {
		background: none;
		border: none;
		padding: 8px;
		margin-right: -8px;
		color: #ffffff;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: transform 0.2s ease, opacity 0.2s ease;
	}

	.close-btn:active {
		transform: scale(0.9);
		opacity: 0.8;
	}

	.nav-scroll-area {
		flex: 1;
		overflow-y: auto;
		-webkit-overflow-scrolling: touch;
		padding: 24px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 40px;
	}

	/* Primary Navigation styles on dark overlay */
	.primary-nav {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.nav-item-wrap {
		width: 100%;
	}

	.nav-item {
		width: 100%;
		height: 52px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: none;
		border: none;
		padding: 0 16px;
		font-family: 'Inter', sans-serif;
		font-size: 18px;
		font-weight: 600;
		color: rgba(255, 255, 255, 0.9);
		text-align: left;
		cursor: pointer;
		text-decoration: none;
		border-radius: 12px;
		transition: all 0.2s ease;
	}

	.nav-item:hover, .nav-item.active {
		color: #3b82f6; /* Premium Blue */
		background: rgba(255, 255, 255, 0.05);
	}

	.nav-item:active {
		color: #60a5fa;
		background: rgba(255, 255, 255, 0.08);
	}

	.admissions-link {
		color: #3b82f6;
	}

	.chevron {
		width: 16px;
		height: 16px;
		color: rgba(255, 255, 255, 0.4);
		transition: transform 0.25s ease;
	}

	.chevron.rotate {
		transform: rotate(180deg);
		color: #3b82f6;
	}

	/* Submenu Panel inside Dark Overlay */
	.submenu {
		display: flex;
		flex-direction: column;
		gap: 2px;
		padding: 6px 0 12px 24px;
		border-left: 2px solid rgba(255, 255, 255, 0.1);
		margin-left: 24px;
		margin-top: 2px;
	}

	.submenu a {
		height: 40px;
		display: flex;
		align-items: center;
		color: rgba(255, 255, 255, 0.6);
		text-decoration: none;
		font-size: 16px;
		font-weight: 400;
		transition: color 0.2s ease;
	}

	.submenu a:hover {
		color: #3b82f6;
	}

	/* Navigation Footer Area (Social Icons & Copyright) */
	.nav-footer {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 16px;
		border-top: 1px solid rgba(255, 255, 255, 0.08);
		padding-top: 24px;
		margin-top: auto;
	}

	.social-links-row {
		display: flex;
		gap: 24px;
		align-items: center;
	}

	.social-links-row a {
		color: rgba(255, 255, 255, 0.6);
		font-size: 20px;
		transition: color 0.2s ease, transform 0.2s ease;
	}

	.social-links-row a:hover {
		color: #3b82f6;
		transform: translateY(-2px);
	}

	.social-links-row a:active {
		transform: translateY(0);
	}

	.copyright-micro {
		font-size: 11px;
		color: rgba(255, 255, 255, 0.3);
		text-align: center;
	}
</style>
