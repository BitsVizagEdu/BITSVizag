<script>
	import { toggleNavBar } from '../stores/store.js';
	import { fade, fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	// Drill-down view states: 'main', 'courses', 'facilities', 'about', 'contact', 'more'
	let currentView = 'main';

	function handleAction() {
		currentView = 'main'; // reset to main on close
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
		{#if currentView === 'main'}
			<nav class="primary-nav" in:fly={{ x: -30, duration: 250, delay: 100, easing: cubicOut }} out:fly={{ x: -30, duration: 200, easing: cubicOut }}>
				<!-- Home -->
				<a href="/" class="nav-item" on:click={handleAction}>
					<span>Home</span>
				</a>

				<!-- Courses Folder -->
				<button class="nav-item" on:click={() => currentView = 'courses'}>
					<span>Courses</span>
					<svg class="chevron-right" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width: 16px; height: 16px;">
						<polyline points="9 18 15 12 9 6" />
					</svg>
				</button>

				<!-- Facilities Folder -->
				<button class="nav-item" on:click={() => currentView = 'facilities'}>
					<span>Facilities</span>
					<svg class="chevron-right" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width: 16px; height: 16px;">
						<polyline points="9 18 15 12 9 6" />
					</svg>
				</button>

				<!-- About Us Folder -->
				<button class="nav-item" on:click={() => currentView = 'about'}>
					<span>About Us</span>
					<svg class="chevron-right" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width: 16px; height: 16px;">
						<polyline points="9 18 15 12 9 6" />
					</svg>
				</button>

				<!-- Contact Us Folder -->
				<button class="nav-item" on:click={() => currentView = 'contact'}>
					<span>Contact Us</span>
					<svg class="chevron-right" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width: 16px; height: 16px;">
						<polyline points="9 18 15 12 9 6" />
					</svg>
				</button>

				<!-- Admissions Link -->
				<a href="/courses/Offered-Courses" class="nav-item admissions-link" on:click={handleAction}>
					<span>Admissions</span>
					<svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width: 16px; height: 16px;">
						<line x1="5" y1="12" x2="19" y2="12"></line>
						<polyline points="12 5 19 12 12 19"></polyline>
					</svg>
				</a>

				<!-- More... Folder -->
				<button class="nav-item" on:click={() => currentView = 'more'}>
					<span>More...</span>
					<svg class="chevron-right" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width: 16px; height: 16px;">
						<polyline points="9 18 15 12 9 6" />
					</svg>
				</button>
			</nav>

		{:else}
			<!-- Submenu Drill-Down View (Courses, Facilities, etc.) -->
			<div class="submenu-container" in:fly={{ x: 30, duration: 250, delay: 100, easing: cubicOut }} out:fly={{ x: 30, duration: 200, easing: cubicOut }}>
				<!-- Back Button -->
				<button class="back-btn" on:click={() => currentView = 'main'}>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4">
						<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
					</svg>
					<span>Back to Menu</span>
				</button>

				<h3 class="submenu-title">
					{#if currentView === 'courses'}Courses Offered
					{:else if currentView === 'facilities'}Campus Facilities
					{:else if currentView === 'about'}About BITS
					{:else if currentView === 'contact'}Contact BITS
					{:else if currentView === 'more'}Explore More
					{/if}
				</h3>

				<div class="submenu-links-grid">
					{#if currentView === 'courses'}
						<a href="/department/Department%20of%20CSE" on:click={handleAction} class="submenu-link">CSE</a>
						<a href="/department/Department%20of%20CSE%20(AI%20&%20ML)" on:click={handleAction} class="submenu-link">AI & ML</a>
						<a href="/department/Department%20of%20CSE%20(Cyber%20Security)" on:click={handleAction} class="submenu-link">CS (Cyber Security)</a>
						<a href="/department/Department%20of%20ECE" on:click={handleAction} class="submenu-link">ECE</a>
						<a href="/department/Department%20of%20EEE" on:click={handleAction} class="submenu-link">EEE</a>
						<a href="/department/Department%20of%20MBA" on:click={handleAction} class="submenu-link">MBA</a>

					{:else if currentView === 'facilities'}
						<a href="/facilities/Laboratories" on:click={handleAction} class="submenu-link">Laboratories</a>
						<a href="/facilities/Knowledge-Resource-Center" on:click={handleAction} class="submenu-link">Knowledge Resource Center</a>
						<a href="/facilities/Accomidation" on:click={handleAction} class="submenu-link">Accommodation</a>
						<a href="/facilities/Cafeteria" on:click={handleAction} class="submenu-link">Cafeteria</a>
						<a href="/facilities/Sports" on:click={handleAction} class="submenu-link">Sports & Athletics</a>
						<a href="/facilities/Transport" on:click={handleAction} class="submenu-link">Transport Services</a>

					{:else if currentView === 'about'}
						<a href="/aboutus/About-BITS" on:click={handleAction} class="submenu-link">About BITS</a>
						<a href="/aboutus/About-ABWEC" on:click={handleAction} class="submenu-link">About ABWEC</a>
						<a href="/aboutus/Message-from-Secretary-&-Correspondent" on:click={handleAction} class="submenu-link">Secretary & Correspondent Message</a>
						<a href="/aboutus/Message-from-Principal" on:click={handleAction} class="submenu-link">Principal's Message</a>

					{:else if currentView === 'contact'}
						<a href="/contactus#location" on:click={handleAction} class="submenu-link">Campus Location</a>
						<a href="/contactus#phone" on:click={handleAction} class="submenu-link">Contact Phone Numbers</a>
						<a href="/contactus#admissions" on:click={handleAction} class="submenu-link">Admissions Office Details</a>
						<a href="/contactus#email" on:click={handleAction} class="submenu-link">Official Email Addresses</a>
						<a href="https://www.google.com/maps/search/?api=1&query=Baba+college+Lake+near+Pothinamallayyapalem" target="_blank" rel="noopener noreferrer" on:click={handleAction} class="submenu-link">Google Maps Location ↗</a>

					{:else if currentView === 'more'}
						<a href="/faculty" on:click={handleAction} class="submenu-link">Faculty Profiles</a>
						<a href="/examcell" on:click={handleAction} class="submenu-link">Exam Cell Portal</a>
						<a href="/research" on:click={handleAction} class="submenu-link">R&D and Publications</a>
						<a href="/placements" on:click={handleAction} class="submenu-link">CDC & Career Placements</a>
						<a href="/gallery" on:click={handleAction} class="submenu-link">Campus Gallery</a>
						<a href="/Online-Grievances" on:click={handleAction} class="submenu-link">Online Grievance Form</a>
					{/if}
				</div>
			</div>
		{/if}

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
		gap: 32px;
	}

	/* Primary Navigation styles on dark overlay */
	.primary-nav {
		display: flex;
		flex-direction: column;
		gap: 8px;
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

	.nav-item:hover, .nav-item:active {
		color: #3b82f6; /* Premium Blue */
		background: rgba(255, 255, 255, 0.05);
	}

	.chevron-right {
		opacity: 0.6;
		transition: transform 0.2s ease;
	}

	.nav-item:hover .chevron-right {
		transform: translateX(2px);
		opacity: 1;
	}

	.admissions-link {
		color: #c8960c; /* gold/amber highlight */
	}

	.admissions-link:hover {
		color: #b0820a;
	}

	/* Submenu Panel Styles */
	.submenu-container {
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	.back-btn {
		display: flex;
		align-items: center;
		gap: 8px;
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.1);
		color: #ffffff;
		padding: 8px 16px;
		border-radius: 20px;
		font-size: 13px;
		font-weight: 600;
		cursor: pointer;
		margin-bottom: 24px;
		transition: all 0.2s ease;
		width: fit-content;
	}

	.back-btn:active {
		background: rgba(255, 255, 255, 0.12);
		transform: scale(0.95);
	}

	.submenu-title {
		font-size: 24px;
		font-weight: 800;
		color: #ffffff;
		margin-bottom: 24px;
		letter-spacing: -0.01em;
	}

	.submenu-links-grid {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.submenu-link {
		display: flex;
		align-items: center;
		padding: 16px 20px;
		background: rgba(255, 255, 255, 0.03);
		border: 1px solid rgba(255, 255, 255, 0.05);
		color: rgba(255, 255, 255, 0.85);
		text-decoration: none;
		font-size: 15px;
		font-weight: 600;
		border-radius: 14px;
		transition: all 0.2s ease;
	}

	.submenu-link:hover, .submenu-link:active {
		background: rgba(59, 130, 246, 0.1);
		border-color: rgba(59, 130, 246, 0.3);
		color: #3b82f6;
		transform: translateX(4px);
	}

	.nav-footer {
		margin-top: auto;
		border-top: 1px solid rgba(255, 255, 255, 0.06);
		padding-top: 24px;
		display: flex;
		flex-direction: column;
		gap: 16px;
		align-items: center;
		flex-shrink: 0;
	}

	.social-links-row {
		display: flex;
		gap: 16px;
	}

	.social-links-row a {
		color: rgba(255, 255, 255, 0.6);
		font-size: 20px;
		transition: color 0.2s ease, transform 0.2s ease;
	}

	.social-links-row a:hover {
		color: #ffffff;
		transform: translateY(-2px);
	}

	.copyright-micro {
		font-size: 10px;
		color: rgba(255, 255, 255, 0.3);
		text-align: center;
	}
</style>
