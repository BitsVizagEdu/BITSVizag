<script>
	import { documentLinks } from '$lib/data/documents.js';
	import MegaMenuItem from './MegaMenuItem.svelte';
	import SubMenuPanel from './SubMenuPanel.svelte';
	import SubMenuItem from './SubMenuItem.svelte';
	let activeCourseTab = 'ug';
	let isMobileMenuOpen = false;
	let activeMobileDropdown = ''; // To track the currently open dropdown in mobile

	const mobileQuickCourseLinks = [
		{ label: 'CSE', href: '/department/Department%20of%20CSE', level: 'UG' },
		{ label: 'ECE', href: '/department/Department%20of%20ECE', level: 'UG' },
		{ label: 'EEE', href: '/department/Department%20of%20EEE', level: 'UG' },
		{ label: 'Mechanical', href: '/department/Department%20of%20MECH', level: 'UG' },
		{ label: 'Civil', href: '/department/Department%20of%20CIVIL', level: 'UG' },
		{ label: 'BS&H', href: '/department/Department%20of%20BS%26H', level: 'UG' },
		{
			label: 'CSE (AI & ML)',
			href: '/department/Department%20of%20CSE%20(AI%20%26%20ML)',
			level: 'UG'
		},
		{
			label: 'CSE (Cyber Security)',
			href: '/department/Department%20of%20CSE%20(Cyber%20Security)',
			level: 'UG'
		},
		{ label: 'MBA', href: '/department/Department%20of%20MBA', level: 'PG' },
		{ label: 'M.Tech', href: '/courses/Post-Graduation', level: 'PG' }
	];

	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
		if (!isMobileMenuOpen) {
			activeMobileDropdown = ''; // close all dropdowns when closing menu
		}
	}

	/** @param {string} dropdownName */
	function toggleMobileDropdown(dropdownName) {
		if (activeMobileDropdown === dropdownName) {
			activeMobileDropdown = '';
		} else {
			activeMobileDropdown = dropdownName;
		}
	}

	function closeMenus() {
		isMobileMenuOpen = false;
		activeMobileDropdown = '';
	}

	function handleMobileBack() {
		activeMobileDropdown = '';
	}
</script>

<nav
	class="{isMobileMenuOpen ? 'mobile-menu-active-state' : ''} {activeMobileDropdown
		? 'mobile-menu-active-state'
		: ''}"
>
	<div class="wrapper">
		<div class="logo flex items-center">
			<a href="/"
				><img
					class="w-[80px] md:w-[140px] xl:w-[160px] transition-all"
					src="/1.png"
					alt="BITS Vizag Logo"
				/></a
			>
		</div>

		<div class="mobile-quick-nav xl:hidden">
			<div class="mobile-quick-links-track">
				<a href="/aboutus/About-BITS" class="mobile-quick-link" on:click={closeMenus}>About Us</a>
				<a href="/faculty" class="mobile-quick-link" on:click={closeMenus}>Faculty</a>
				<button
					type="button"
					class="mobile-quick-link mobile-courses-trigger {activeMobileDropdown === 'courses'
						? 'open'
						: ''}"
					on:click={() => toggleMobileDropdown('courses')}
				>
					<span>Courses</span>
					<i class="fa-solid fa-chevron-down"></i>
				</button>
				<a href="/facilities" class="mobile-quick-link" on:click={closeMenus}>Facilities</a>
				<a href="/placements" class="mobile-quick-link" on:click={closeMenus}>CDC</a>
			</div>
		</div>

		<!-- Mobile Overlay Backdrop -->
		{#if isMobileMenuOpen}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div
				class="mobile-backdrop xl:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-[998]"
				on:click={closeMenus}
			></div>
		{/if}

		<ul class="nav-links h-full {isMobileMenuOpen ? 'mobile-open' : ''}">
			<!-- Mobile Menu Header -->
			<div
				class="xl:hidden flex items-center justify-between mb-8 pb-4 border-b border-slate-100/60 w-full pt-2"
			>
				<img src="/1.png" alt="BITS Vizag Logo" class="h-12 w-auto object-contain" />
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<button type="button" class="btn close-btn" on:click={toggleMobileMenu}>
					<i class="fas fa-times text-slate-800" />
				</button>
			</div>

			<li><a href="/" on:click={closeMenus}>Home</a></li>

			<!-- About Us -->
			<li class="mobile-priority-item">
				<a href="/aboutus/About-BITS" class="desktop-item" on:click={closeMenus}>About Us</a>
				<a href="/aboutus/About-BITS" class="mobile-item" on:click={closeMenus}>About Us</a>
			</li>

			<!-- Courses -->
			<li>
				<a href="/courses/Under-Graduation" class="desktop-item"> Courses </a>
			</li>

			<!-- Faculty -->
			<li class="mobile-priority-item">
				<a href="/faculty" class="desktop-item" on:click={closeMenus}>Faculty</a>
				<a href="/faculty" class="mobile-item" on:click={closeMenus}>Faculty</a>
			</li>

			<!-- Exam Cell -->
			<li>
				<button type="button" class="desktop-item">Exam Cell</button>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<button
					type="button"
					class="mobile-item {activeMobileDropdown === 'examcell' ? 'active-dropdown' : ''}"
					on:click={() => toggleMobileDropdown('examcell')}>Exam Cell</button
				>
				<!-- DESKTOP MEGA BOX -->
				<div class="mega-box hidden xl:block">
					<div
						class="content overflow-hidden rounded-2xl border border-slate-100 bg-white p-5 shadow-2xl xl:max-w-3xl xl:mx-auto"
					>
						<div class="flex flex-col items-start w-full">
							<!-- Header Section -->
							<div class="mb-5 flex w-full items-center gap-4 border-b border-slate-100 pb-4">
								<div
									class="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 border border-blue-100"
								>
									<i
										class="fa-solid fa-file-invoice-dollar text-xl text-blue-600"
										aria-hidden="true"
									/>
								</div>
								<div class="flex flex-col text-left">
									<header class="text-[17px] font-bold tracking-tight text-slate-900 leading-tight">
										Examination Services
									</header>
								</div>
							</div>

							<!-- Items Grid -->
							<div class="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
								<MegaMenuItem
									href="/examcell/BTECH"
									label="B.Tech"
									icon="fa-solid fa-user-graduate"
									onClick={closeMenus}
								/>
								<MegaMenuItem
									href="/examcell/MBA"
									label="MBA"
									icon="fa-solid fa-briefcase"
									onClick={closeMenus}
								/>
								<MegaMenuItem
									href="/examcell/MTECH"
									label="M.Tech"
									icon="fa-solid fa-laptop-code"
									onClick={closeMenus}
								/>
								{#each documentLinks.examcell as link}
									<MegaMenuItem
										href={link.href}
										label={link.label}
										icon={link.icon}
										external={true}
										onClick={closeMenus}
									/>
								{/each}
								<MegaMenuItem
									href="/pdfs/timetables.pdf"
									label="Time Tables"
									icon="fa-solid fa-table-list"
									external={true}
									onClick={closeMenus}
								/>
							</div>
						</div>
					</div>
				</div>
			</li>

			<!-- Facilities -->
			<li class="mobile-priority-item">
				<a href="/facilities" class="desktop-item">Facilities</a>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<button
					type="button"
					class="mobile-item {activeMobileDropdown === 'facilities' ? 'active-dropdown' : ''}"
					on:click={() => toggleMobileDropdown('facilities')}>Facilities</button
				>
				<!-- DESKTOP MEGA BOX -->
				<div class="mega-box hidden xl:block">
					<div
						class="content overflow-hidden rounded-2xl border border-slate-100 bg-white p-5 shadow-2xl xl:max-w-3xl xl:mx-auto"
					>
						<div class="flex flex-col items-start w-full">
							<!-- Header Section -->
							<div class="mb-5 flex w-full items-center gap-4 border-b border-slate-100 pb-4">
								<div
									class="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 border border-slate-100"
								>
									<i
										class="fa-solid fa-building-circle-check text-xl text-slate-800"
										aria-hidden="true"
									/>
								</div>
								<div class="flex flex-col text-left">
									<header class="text-[17px] font-bold tracking-tight text-slate-900 leading-tight">
										Campus Amenities
									</header>
								</div>
							</div>

							<!-- Items Grid -->
							<div class="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
								<MegaMenuItem
									href="/facilities/Knowledge-Resource-Center"
									label="Knowledge Center"
									icon="fa-solid fa-book-atlas"
									iconColorClass="text-slate-700"
									iconBgClass="bg-slate-50"
									onClick={closeMenus}
								/>
								<MegaMenuItem
									href="/facilities/Accomidation"
									label="Accommodation"
									icon="fa-solid fa-bed"
									iconColorClass="text-slate-700"
									iconBgClass="bg-slate-50"
									onClick={closeMenus}
								/>
								<MegaMenuItem
									href="/facilities/Cafeteria"
									label="Cafeteria"
									icon="fa-solid fa-utensils"
									iconColorClass="text-slate-700"
									iconBgClass="bg-slate-50"
									onClick={closeMenus}
								/>
								<MegaMenuItem
									href="/facilities/Sports"
									label="Sports"
									icon="fa-solid fa-basketball"
									iconColorClass="text-slate-700"
									iconBgClass="bg-slate-50"
									onClick={closeMenus}
								/>
								<MegaMenuItem
									href="/facilities/Laboratories"
									label="Laboratories"
									icon="fa-solid fa-flask-vial"
									iconColorClass="text-slate-700"
									iconBgClass="bg-slate-50"
									onClick={closeMenus}
								/>
								<MegaMenuItem
									href="/facilities/Transport"
									label="Transport"
									icon="fa-solid fa-bus"
									iconColorClass="text-slate-700"
									iconBgClass="bg-slate-50"
									onClick={closeMenus}
								/>
							</div>
						</div>
					</div>
				</div>
			</li>
			<!-- Governance -->
			<li>
				<button type="button" class="desktop-item">Governance</button>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<button
					type="button"
					class="mobile-item {activeMobileDropdown === 'governance' ? 'active-dropdown' : ''}"
					on:click={() => toggleMobileDropdown('governance')}>Governance</button
				>
				<!-- DESKTOP MEGA BOX -->
				<div class="mega-box hidden xl:block">
					<div
						class="content overflow-hidden rounded-2xl border border-slate-100 bg-white p-5 shadow-2xl xl:max-w-3xl xl:mx-auto"
					>
						<div class="flex flex-col items-start w-full">
							<!-- Header Section -->
							<div class="mb-5 flex w-full items-center gap-4 border-b border-slate-100 pb-4">
								<div
									class="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 border border-orange-100"
								>
									<i class="fa-solid fa-balance-scale text-xl text-orange-600" aria-hidden="true" />
								</div>
								<div class="flex flex-col text-left">
									<header class="text-[17px] font-bold tracking-tight text-slate-900 leading-tight">
										Administration
									</header>
								</div>
							</div>

							<!-- Items Grid -->
							<div class="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
								<MegaMenuItem
									href="/governance/board-of-trustees"
									label="Board of Trustees"
									icon="fa-solid fa-users-rectangle"
									iconColorClass="text-orange-600"
									iconBgClass="bg-orange-50"
									onClick={closeMenus}
								/>
								<MegaMenuItem
									href="/governance/governing-body"
									label="Governing Body"
									icon="fa-solid fa-sitemap"
									iconColorClass="text-orange-600"
									iconBgClass="bg-orange-50"
									onClick={closeMenus}
								/>
								{#each documentLinks.governance as link}
									<MegaMenuItem
										href={link.href}
										label={link.label}
										icon={link.icon}
										iconColorClass="text-orange-600"
										iconBgClass="bg-orange-50"
										external={true}
										onClick={closeMenus}
									/>
								{/each}
							</div>
						</div>
					</div>
				</div>
			</li>

			<!-- Research -->
			<li>
				<button type="button" class="desktop-item">Research</button>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<button
					type="button"
					class="mobile-item {activeMobileDropdown === 'research' ? 'active-dropdown' : ''}"
					on:click={() => toggleMobileDropdown('research')}>Research</button
				>
				<!-- DESKTOP MEGA BOX -->
				<div class="mega-box hidden xl:block">
					<div
						class="content overflow-hidden rounded-2xl border border-slate-100 bg-white p-5 shadow-2xl xl:max-w-3xl xl:mx-auto"
					>
						<div class="flex flex-col items-start w-full">
							<!-- Header Section -->
							<div class="mb-5 flex w-full items-center gap-4 border-b border-slate-100 pb-4">
								<div
									class="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 border border-teal-100"
								>
									<i class="fa-solid fa-microscope text-xl text-teal-600" aria-hidden="true" />
								</div>
								<div class="flex flex-col text-left">
									<header class="text-[17px] font-bold tracking-tight text-slate-900 leading-tight">
										Discovery & Growth
									</header>
								</div>
							</div>

							<!-- Items Grid -->
							<div class="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
								<MegaMenuItem
									href="/research/publications"
									label="Publications"
									icon="fa-solid fa-newspaper"
									iconColorClass="text-teal-600"
									iconBgClass="bg-teal-50"
									onClick={closeMenus}
								/>
								<MegaMenuItem
									href="/research/projects"
									label="Research Projects"
									icon="fa-solid fa-vial-circle-check"
									iconColorClass="text-teal-600"
									iconBgClass="bg-teal-50"
									onClick={closeMenus}
								/>
								{#each documentLinks.research as link}
									<MegaMenuItem
										href={link.href}
										label={link.label}
										icon={link.icon}
										iconColorClass="text-teal-600"
										iconBgClass="bg-teal-50"
										external={true}
										onClick={closeMenus}
									/>
								{/each}
							</div>
						</div>
					</div>
				</div>
			</li>

			<!-- CDC (Career Development Cell) -->
			<li class="mobile-priority-item">
				<a href="/placements" class="desktop-item" on:click={closeMenus}>CDC</a>
				<a href="/placements" class="mobile-item" on:click={closeMenus}>CDC</a>
			</li>
		</ul>

		<!-- MOBILE SUB-MENU PANELS -->
		<SubMenuPanel
			isOpen={activeMobileDropdown === 'examcell'}
			title="Exam Cell"
			onBack={handleMobileBack}
			onClose={closeMenus}
		>
			<SubMenuItem
				label="B.Tech"
				href="/examcell/BTECH"
				icon="fa-solid fa-user-graduate"
				onClick={closeMenus}
			/>
			<SubMenuItem
				label="MBA"
				href="/examcell/MBA"
				icon="fa-solid fa-briefcase"
				onClick={closeMenus}
			/>
			<SubMenuItem
				label="M.Tech"
				href="/examcell/MTECH"
				icon="fa-solid fa-laptop-code"
				onClick={closeMenus}
			/>
			{#each documentLinks.examcell as link}
				<SubMenuItem
					label={link.label}
					href={link.href}
					icon={link.icon}
					external={true}
					onClick={closeMenus}
				/>
			{/each}
			<SubMenuItem
				label="Time Tables"
				href="/pdfs/timetables.pdf"
				icon="fa-solid fa-table-list"
				external={true}
				onClick={closeMenus}
			/>
		</SubMenuPanel>

		<SubMenuPanel
			isOpen={activeMobileDropdown === 'facilities'}
			title="Facilities"
			onBack={handleMobileBack}
			onClose={closeMenus}
		>
			<SubMenuItem
				label="Knowledge Center"
				href="/facilities/Knowledge-Resource-Center"
				icon="fa-solid fa-book-atlas"
				onClick={closeMenus}
			/>
			<SubMenuItem
				label="Accommodation"
				href="/facilities/Accomidation"
				icon="fa-solid fa-bed"
				onClick={closeMenus}
			/>
			<SubMenuItem
				label="Cafeteria"
				href="/facilities/Cafeteria"
				icon="fa-solid fa-utensils"
				onClick={closeMenus}
			/>
			<SubMenuItem
				label="Sports"
				href="/facilities/Sports"
				icon="fa-solid fa-basketball"
				onClick={closeMenus}
			/>
			<SubMenuItem
				label="Laboratories"
				href="/facilities/Laboratories"
				icon="fa-solid fa-flask-vial"
				onClick={closeMenus}
			/>
			<SubMenuItem
				label="Transport"
				href="/facilities/Transport"
				icon="fa-solid fa-bus"
				onClick={closeMenus}
			/>
		</SubMenuPanel>

		<SubMenuPanel
			isOpen={activeMobileDropdown === 'governance'}
			title="Governance"
			onBack={handleMobileBack}
			onClose={closeMenus}
		>
			<SubMenuItem
				label="Board of Trustees"
				href="/governance/board-of-trustees"
				icon="fa-solid fa-users-rectangle"
				onClick={closeMenus}
			/>
			<SubMenuItem
				label="Governing Body"
				href="/governance/governing-body"
				icon="fa-solid fa-sitemap"
				onClick={closeMenus}
			/>
			{#each documentLinks.governance as link}
				<SubMenuItem
					label={link.label}
					href={link.href}
					icon={link.icon}
					external={true}
					onClick={closeMenus}
				/>
			{/each}
		</SubMenuPanel>

		<SubMenuPanel
			isOpen={activeMobileDropdown === 'research'}
			title="Research"
			onBack={handleMobileBack}
			onClose={closeMenus}
		>
			<SubMenuItem
				label="Publications"
				href="/research/publications"
				icon="fa-solid fa-newspaper"
				onClick={closeMenus}
			/>
			<SubMenuItem
				label="Research Projects"
				href="/research/projects"
				icon="fa-solid fa-vial-circle-check"
				onClick={closeMenus}
			/>
			{#each documentLinks.research as link}
				<SubMenuItem
					label={link.label}
					href={link.href}
					icon={link.icon}
					external={true}
					onClick={closeMenus}
				/>
			{/each}
		</SubMenuPanel>

		<SubMenuPanel
			isOpen={activeMobileDropdown === 'courses'}
			title="Courses"
			onBack={handleMobileBack}
			onClose={closeMenus}
		>
			<div class="px-6 py-4 border-b border-slate-100 bg-slate-50">
				<span class="text-xs font-bold uppercase tracking-widest text-slate-400">UG Programs</span>
			</div>
			{#each mobileQuickCourseLinks.filter((l) => l.level === 'UG') as link}
				<SubMenuItem label={link.label} href={link.href} onClick={closeMenus} />
			{/each}

			<div class="px-6 py-4 border-b border-slate-100 bg-slate-50 mt-4">
				<span class="text-xs font-bold uppercase tracking-widest text-slate-400">PG Programs</span>
			</div>
			{#each mobileQuickCourseLinks.filter((l) => l.level === 'PG') as link}
				<SubMenuItem label={link.label} href={link.href} onClick={closeMenus} />
			{/each}
		</SubMenuPanel>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<button type="button" class="btn menu-btn" on:click={toggleMobileMenu}
			><i class="fas fa-bars text-slate-800" /></button
		>
	</div>
</nav>

<style>
	/* ═══════════════════════════════════════════════════════════════
	   MIDDLENAV — Navbar + Mobile Sidebar
	   Desktop (>1280px): UNTOUCHED — only layout/font/spacing preserved
	   Mobile  (≤1280px): Full rewrite — slide-in sidebar
	═══════════════════════════════════════════════════════════════ */

	/* ─────────────────────────────────────────────────────────────
	   DESKTOP BASE STYLES  (above 1280px — do not change)
	───────────────────────────────────────────────────────────── */

	nav.mobile-menu-active-state {
		z-index: 99999 !important;
	}

	nav.mobile-courses-open-state {
		z-index: 1006;
	}

	nav {
		position: sticky;
		top: 0;
		z-index: 998;
		width: 100%;
		background: #ffffff;
		font-family: 'Roboto', sans-serif;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.03);
	}

	nav .wrapper {
		position: relative;
		max-width: 1600px;
		padding: 0 16px;
		height: 56px;
		line-height: normal;
		margin: auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 10px;
	}

	.wrapper .logo img {
		width: 100px;
	}

	.mobile-quick-nav {
		display: none;
	}

	.wrapper .nav-links {
		display: grid;
		grid-template-columns: repeat(9, minmax(0, 1fr));
		flex: 1;
		align-items: center;
		justify-content: stretch;
		column-gap: clamp(2px, 0.45vw, 10px);
		white-space: normal;
		height: 100%;
		min-width: 0;
	}

	.nav-links li {
		list-style: none;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		min-width: 0;
	}

	.nav-links li a,
	.nav-links li .desktop-item {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		color: #1e293b;
		text-decoration: none;
		font-size: clamp(14px, 0.72vw, 14px);
		padding: 8px 6px;
		border-radius: 6px;
		transition:
			color 0.2s ease,
			background-color 0.2s ease,
			box-shadow 0.2s ease;
		white-space: nowrap;
		width: 100%;
		max-width: none;
		line-height: normal;
		text-transform: capitalize;
		letter-spacing: 0.02em;
		font-weight: 900;
		font-family: 'Roboto', 'Outfit', sans-serif;
	}

	.nav-links li a:hover,
	.nav-links li .desktop-item:hover {
		color: #2672d5;
		background: rgba(38, 114, 213, 0.08);
	}

	.nav-links li a:focus-visible,
	.nav-links li .desktop-item:focus-visible {
		outline: none;
		color: #1d4ed8;
		box-shadow: none;
	}

	.nav-links .mobile-item {
		display: none;
		font-weight: 700;
	}

	.desktop-courses-trigger {
		border: none;
		background: transparent;
		cursor: pointer;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		color: #1e293b !important;
		text-decoration: none;
		font-size: clamp(14px, 0.72vw, 14px);
		padding: 8px 6px;
		border-radius: 6px;
		transition:
			color 0.2s ease,
			background-color 0.2s ease,
			box-shadow 0.2s ease;
		white-space: nowrap;
		width: 100%;
		max-width: none;
		line-height: normal;
		text-transform: capitalize;
		letter-spacing: 0.02em;
		font-weight: 900;
		font-family: 'Roboto', 'Outfit', sans-serif;
	}

	.desktop-courses-trigger:hover {
		color: #2672d5;
		background: rgba(38, 114, 213, 0.08);
	}

	.mega-box {
		position: absolute;
		left: 50%;
		transform: translateX(-50%) translateY(0);
		width: 95vw;
		max-width: 850px;
		opacity: 0;
		visibility: hidden;
		transition:
			opacity 0.25s ease,
			visibility 0.25s ease,
			transform 0.25s ease;
		text-align: center;
		z-index: 9999;
		top: 56px;
		pointer-events: none;
		background: transparent;
		padding-top: 10px;
	}

	.courses-sidebar-overlay {
		position: fixed;
		inset: 56px 0 0 0;
		background: rgba(15, 23, 42, 0.28);
		border: none;
		padding: 0;
		margin: 0;
		z-index: 999;
	}

	.mega-box.courses-mega {
		position: fixed;
		top: 56px;
		right: 0;
		left: auto;
		width: min(430px, 92vw);
		max-width: 430px;
		height: calc(100vh - 56px);
		transform: translateX(104%);
		opacity: 1;
		visibility: hidden;
		pointer-events: none;
		transition:
			transform 0.28s cubic-bezier(0.2, 0.8, 0.2, 1),
			visibility 0.28s ease;
		z-index: 1000;
		display: none;
	}

	.mega-box.courses-mega.mobile-show {
		transform: translateX(0);
		visibility: visible;
		pointer-events: auto;
	}

	.courses-mega .content {
		height: 100%;
		min-height: 100%;
		border-radius: 0;
		border-left: 1px solid #e5e7eb;
		border-top: none;
		border-right: none;
		border-bottom: none;
		box-shadow: -8px 0 24px rgba(15, 23, 42, 0.08);
		overflow-y: auto;
	}

	.mega-box::before {
		content: '';
		position: absolute;
		top: -14px;
		left: 0;
		width: 100%;
		height: 14px;
		background: transparent;
	}

	.nav-links li:hover .mega-box,
	.nav-links li:focus-within .mega-box,
	.mega-box:hover {
		opacity: 1 !important;
		visibility: visible !important;
		transform: translateX(-50%) translateY(0) !important;
		pointer-events: auto !important;
	}

	.content {
		position: relative;
	}

	.mega-box .content header {
		font-family: 'Roboto', sans-serif !important;
		font-weight: 600;
	}

	.mega-box .content span {
		font-family: 'Roboto', sans-serif !important;
	}

	.wrapper .btn {
		color: #1e293b;
		font-size: 24px;
		cursor: pointer;
		display: none;
		border: none;
		background: transparent;
		padding: 0;
	}

	.wrapper .btn.close-btn {
		display: none;
		position: absolute;
		right: 25px;
		top: 25px;
		width: 45px;
		height: 45px;
		background: #f1f5f9;
		border-radius: 50%;
		align-items: center;
		justify-content: center;
		transition: all 0.3s ease;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
	}

	.close-btn i {
		font-size: 20px;
		color: #1e293b;
	}

	.close-btn:hover {
		background: #e2e8f0;
		transform: rotate(90deg);
	}

	/* ─────────────────────────────────────────────────────────────
	   MOBILE SIDEBAR  (≤1280px)
	   NOTE: We use !important where Tailwind utility classes on the
	   HTML would otherwise win (py-10, px-10, flex, md:flex-row …)
	───────────────────────────────────────────────────────────── */

	@media screen and (max-width: 1280px) {
		.courses-sidebar-overlay {
			display: none !important;
		}

		* {
			box-sizing: border-box;
		}

		:global(body.secondnav-drawer-open) .mobile-quick-nav {
			opacity: 0;
			visibility: hidden;
			pointer-events: none;
		}

		nav {
			z-index: 999;
			box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
		}

		nav .wrapper {
			display: grid;
			grid-template-columns: 56px minmax(0, 1fr) 56px;
			align-items: center;
			padding: 0 12px;
			height: 56px;
			column-gap: 8px;
		}

		.logo {
			grid-column: 1;
			flex-shrink: 0;
		}

		.logo img {
			display: block;
			width: 50px;
		}

		.mobile-quick-nav {
			grid-column: 2;
			display: block !important;
			width: 100%;
			min-width: 0;
			position: relative;
		}

		.mobile-quick-links-track {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 7px;
			overflow-x: auto;
			overflow-y: hidden;
			padding: 0 2px;
			scroll-padding-inline: 6px;
			scrollbar-width: none;
			-ms-overflow-style: none;
		}

		.mobile-quick-links-track::-webkit-scrollbar {
			display: none;
		}

		.mobile-quick-link {
			flex: 0 0 auto;
			min-height: 30px;
			padding: 5px 9px;
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 6px;
			border-radius: 999px;
			border: 1px solid #d9e3f1;
			background: #f8fbff;
			color: #1e293b;
			font-size: 10.5px;
			font-weight: 700;
			letter-spacing: 0.01em;
			text-decoration: none;
			text-align: center;
			line-height: 1;
			white-space: nowrap;
			font-family: 'Roboto', sans-serif;
			transition:
				background 0.22s ease,
				border-color 0.22s ease,
				color 0.22s ease;
		}

		.mobile-quick-link:hover {
			background: #eef5ff;
			border-color: #bfd7f7;
			color: #1d4ed8;
		}

		.mobile-courses-trigger {
			cursor: pointer;
			width: auto;
		}

		.mobile-courses-trigger i {
			font-size: 10px;
			color: #64748b;
			transition:
				transform 0.25s ease,
				color 0.2s ease;
		}

		.mobile-courses-trigger.open {
			background: #eaf3ff;
			border-color: #2672d5;
			color: #1d4ed8;
		}

		.mobile-courses-trigger.open i {
			transform: rotate(180deg);
			color: #1d4ed8;
		}

		/* ── Show hamburger ── */
		.wrapper .btn {
			display: block;
		}

		.wrapper .btn.menu-btn {
			grid-column: 3;
			justify-self: end;
			margin-left: 0;
			flex-shrink: 0;
		}

		/* ════════════════════════════════
		   SIDEBAR PANEL
		════════════════════════════════ */
		.wrapper .nav-links {
			position: fixed !important;
			top: 0 !important;
			left: 0 !important;
			height: 100vh !important;
			width: 82% !important;
			max-width: 380px !important;
			background: #ffffff !important;
			display: flex !important;
			flex-direction: column !important;
			align-items: stretch !important;
			justify-content: flex-start !important;
			padding: 0 0 60px !important;
			overflow-y: auto !important;
			overflow-x: hidden !important;
			scrollbar-width: none !important;
			-ms-overflow-style: none !important;
			z-index: 1000 !important;
			border-radius: 0 24px 24px 0 !important;
			box-shadow: 10px 0 50px rgba(0, 0, 0, 0.18) !important;
			transform: translateX(-110%) !important;
			transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1) !important;
			white-space: normal !important;
			display: flex !important;
			flex-direction: column !important;
			align-items: stretch !important;
		}

		.wrapper .nav-links::-webkit-scrollbar {
			display: none;
		}

		/* Slide in when open */
		.wrapper .nav-links.mobile-open {
			transform: translateX(0) !important;
		}

		/* ── Close button ── */
		.wrapper .btn.close-btn {
			display: flex;
			position: static;
		}

		/* ════════════════════════════════
		   NAV LIST ITEMS
		════════════════════════════════ */
		.nav-links li {
			display: block !important;
			height: auto !important;
			width: 100% !important;
			margin: 0 !important;
		}

		/* Direct links (e.g. Home) */
		.nav-links li > a {
			display: flex !important;
			align-items: center !important;
			justify-content: center !important;
			padding: 14px 20px !important;
			margin: 3px 14px !important;
			width: calc(100% - 28px) !important;
			font-size: 15px !important;
			font-weight: 700 !important;
			color: #1e293b !important;
			border-radius: 12px !important;
			text-decoration: none !important;
			transition:
				background 0.2s ease,
				color 0.2s ease !important;
			white-space: normal !important;
			text-align: center !important;
		}

		.nav-links li > a:hover {
			background: #f0f7ff !important;
			color: #2672d5 !important;
			transform: none !important;
		}

		/* Hide desktop anchors on items that have a mobile-item button */
		.nav-links .desktop-item {
			display: none !important;
		}

		/* ════════════════════════════════
		   MOBILE DROPDOWN TRIGGER
		════════════════════════════════ */
		.nav-links .mobile-item {
			display: flex !important;
			align-items: center !important;
			justify-content: space-between !important;
			width: calc(100% - 28px) !important;
			margin: 3px 14px !important;
			padding: 14px 18px !important;
			border-radius: 12px !important;
			background: transparent !important;
			border: none !important;
			color: #1e293b !important;
			font-size: 15px !important;
			font-weight: 700 !important;
			cursor: pointer !important;
			user-select: none !important;
			font-family: 'Roboto', sans-serif !important;
			text-align: left !important;
			transition:
				background 0.2s ease,
				color 0.2s ease !important;
		}

		/* Down-arrow via ::after */
		.nav-links .mobile-item::after {
			content: '\f107';
			font-family: 'Font Awesome 5 Free';
			font-weight: 900;
			font-size: 13px;
			color: #94a3b8;
			flex-shrink: 0;
			transition:
				transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
				color 0.2s ease;
			margin-left: auto;
			padding-left: 10px;
		}

		.nav-links .mobile-item:hover {
			background: #f8fafc !important;
			color: #2672d5 !important;
		}

		.nav-links .mobile-item.active-dropdown {
			background: #f0f7ff !important;
			color: #2672d5 !important;
		}

		.nav-links .mobile-item.active-dropdown::after {
			transform: rotate(180deg);
			color: #2672d5;
		}
	}
</style>
