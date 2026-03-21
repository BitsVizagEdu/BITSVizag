<script>
	let activeCourseTab = 'ug';
	let isMobileMenuOpen = false;
	let isMobileCoursesDropdownOpen = false;
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
		isMobileCoursesDropdownOpen = false;
		if (!isMobileMenuOpen) {
			activeMobileDropdown = ''; // close all dropdowns when closing menu
		}
	}

	/** @param {string} dropdownName */
	function toggleMobileDropdown(dropdownName) {
		isMobileCoursesDropdownOpen = false;
		if (activeMobileDropdown === dropdownName) {
			activeMobileDropdown = '';
		} else {
			activeMobileDropdown = dropdownName;
		}
	}

	function toggleMobileCoursesDropdown() {
		isMobileCoursesDropdownOpen = !isMobileCoursesDropdownOpen;
		if (isMobileCoursesDropdownOpen) {
			activeMobileDropdown = '';
		}
	}

	function closeMenus() {
		isMobileMenuOpen = false;
		activeMobileDropdown = '';
		isMobileCoursesDropdownOpen = false;
	}
</script>

<nav
	class={`${isMobileMenuOpen ? 'mobile-menu-active-state' : ''} ${isMobileCoursesDropdownOpen
		? 'mobile-courses-open-state'
		: ''}`.trim()}
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
					class="mobile-quick-link mobile-courses-trigger {isMobileCoursesDropdownOpen ? 'open' : ''}"
					on:click={toggleMobileCoursesDropdown}
					aria-expanded={isMobileCoursesDropdownOpen}
					aria-controls="mobile-courses-dropdown"
				>
					<span>Courses</span>
					<i class="fa-solid fa-chevron-down"></i>
				</button>
				<a href="/facilities" class="mobile-quick-link" on:click={closeMenus}>Facilities</a>
				<a href="/placements" class="mobile-quick-link" on:click={closeMenus}>CDC</a>
			</div>

			<div
				id="mobile-courses-dropdown"
				class="mobile-courses-dropdown {isMobileCoursesDropdownOpen ? 'open' : ''}"
			>
				<div class="mobile-courses-dropdown-inner">
					{#each mobileQuickCourseLinks as course}
						<a href={course.href} class="mobile-course-link" on:click={closeMenus}>
							<span>{course.label}</span>
							<small>{course.level}</small>
						</a>
					{/each}
				</div>
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
				<a href="/aboutus/About-BITS" class="desktop-item">About Us</a>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<button
					type="button"
					class="mobile-item {activeMobileDropdown === 'about' ? 'active-dropdown' : ''}"
					on:click={() => toggleMobileDropdown('about')}>About Us</button
				>
				<div class="mega-box {activeMobileDropdown === 'about' ? 'mobile-show' : ''}">
					<div
						class="content flex flex-col md:flex-row bg-white xl:rounded-3xl xl:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] xl:border border-slate-100 overflow-hidden text-left"
					>
						<div class="flex-1 py-10 px-10 border-r border-slate-50">
							<div class="flex items-center gap-3 mb-8 border-b border-gray-100 pb-4">
								<i class="fa-solid fa-building-columns text-xl text-[#2672d5]" />
								<header class="text-[1.15rem] font-extrabold text-slate-900 tracking-tight">
									The Institution
								</header>
							</div>
							<div class="flex flex-col gap-2">
								<a
									href="/aboutus/About-ABWS"
									on:click={closeMenus}
									class="group flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100"
								>
									<i
										class="fa-solid fa-shield-heart text-[#2672d5] text-lg group-hover:scale-110 transition-transform"
									/>
									<span class="text-[15px] font-bold text-slate-800">About ABWS</span>
								</a>
								<a
									href="/aboutus/About-BITS"
									on:click={closeMenus}
									class="group flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100"
								>
									<i
										class="fa-solid fa-landmark text-[#2672d5] text-lg group-hover:scale-110 transition-transform"
									/>
									<span class="text-[15px] font-bold text-slate-800">About Bits Vizag</span>
								</a>
							</div>
						</div>
						<div class="flex-1 py-10 px-10">
							<div class="flex items-center gap-3 mb-8 border-b border-gray-100 pb-4">
								<i class="fa-solid fa-user-tie text-xl text-[#2672d5]" />
								<header class="text-[1.15rem] font-extrabold text-slate-950 tracking-tight">
									Leadership
								</header>
							</div>
							<div class="flex flex-col gap-2">
								<a
									href="/aboutus/Message-from-Secretary-%26-Correspondent"
									on:click={closeMenus}
									class="group flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100"
								>
									<i
										class="fa-solid fa-pen-nib text-[#2672d5] text-lg group-hover:scale-110 transition-transform"
									/>
									<span class="text-[15px] font-bold text-slate-800"
										>Message from Secretary & Correspondent</span
									>
								</a>

								<a
									href="/aboutus/Message-from-Principal"
									on:click={closeMenus}
									class="group flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100"
								>
									<i
										class="fa-solid fa-graduation-cap text-[#2672d5] text-lg group-hover:scale-110 transition-transform"
									/>
									<span class="text-[15px] font-bold text-slate-800">Message From Principal</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</li>

			<!-- Governance -->
			<li>
				<a href="/governance/board-of-trustees" class="desktop-item">Governance</a>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<button
					type="button"
					class="mobile-item {activeMobileDropdown === 'governance' ? 'active-dropdown' : ''}"
					on:click={() => toggleMobileDropdown('governance')}>Governance</button
				>
				<div class="mega-box {activeMobileDropdown === 'governance' ? 'mobile-show' : ''}">
					<div
						class="content flex flex-col md:flex-row bg-white xl:rounded-3xl xl:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] xl:border border-slate-100 overflow-hidden text-left"
					>
						<div class="flex-1 py-10 justify-center flex flex-col items-center px-10">
							<div class="flex items-center gap-3 mb-8 border-b border-gray-100 pb-4">
								<i class="fa-solid fa-balance-scale text-xl text-[#2672d5]" />
								<header class="text-[1.15rem] font-extrabold text-slate-950 tracking-tight">
									Administration
								</header>
							</div>
							<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
								<a
									href="/governance/board-of-trustees"
									on:click={closeMenus}
									class="group flex items-center gap-4 p-5 rounded-xl hover:bg-slate-50 transition-all border border-slate-50 hover:border-slate-100"
								>
									<i
										class="fa-solid fa-users-rectangle text-[#2672d5] text-xl group-hover:scale-110 transition-transform"
									/>
									<span class="text-[16px] font-bold text-slate-800">Board of Trustees</span>
								</a>
								<a
									href="/governance/governing-body"
									on:click={closeMenus}
									class="group flex items-center gap-4 p-5 rounded-xl hover:bg-slate-50 transition-all border border-slate-50 hover:border-slate-100"
								>
									<i
										class="fa-solid fa-sitemap text-[#2672d5] text-xl group-hover:scale-110 transition-transform"
									/>
									<span class="text-[16px] font-bold text-slate-800">Governing Body</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</li>

			<!-- Courses -->
			<li>
				<a href="/courses/Under-Graduation" class="desktop-item">
					Courses
				</a>
			</li>

			<!-- Faculty -->
			<li class="mobile-priority-item">
				<a href="/faculty" class="desktop-item" on:click={closeMenus}>Faculty</a>
				<a href="/faculty" class="mobile-item" on:click={closeMenus}>Faculty</a>
			</li>

			<!-- Exam Cell -->
			<li>
				<a href="/examcell/BTECH" class="desktop-item">Exam Cell</a>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<button
					type="button"
					class="mobile-item {activeMobileDropdown === 'examcell' ? 'active-dropdown' : ''}"
					on:click={() => toggleMobileDropdown('examcell')}>Exam Cell</button
				>
				<div class="mega-box {activeMobileDropdown === 'examcell' ? 'mobile-show' : ''}">
					<div
						class="content flex flex-col md:flex-row bg-white xl:rounded-3xl xl:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] xl:border border-slate-100 overflow-hidden text-left"
					>
						<div class="flex-1 py-10 px-10 justify-center flex flex-col items-center">
							<div class="flex items-center gap-3 mb-8 border-b border-gray-100 pb-4">
								<i class="fa-solid fa-file-invoice-dollar text-xl text-[#2672d5]" />
								<header class="text-[1.15rem] font-bold text-slate-900">
									Examination Services
								</header>
							</div>
							<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
								<a
									href="/examcell/BTECH"
									on:click={closeMenus}
									class="group flex items-center gap-4 p-5 rounded-xl hover:bg-slate-50 transition-all border border-slate-50 hover:border-slate-100"
								>
									<i
										class="fa-solid fa-user-graduate text-[#2672d5] text-xl group-hover:scale-110 transition-transform"
									/>
									<span class="text-[16px] font-bold text-slate-700">B.Tech</span>
								</a>
								<a
									href="/examcell/MBA"
									on:click={closeMenus}
									class="group flex items-center gap-4 p-5 rounded-xl hover:bg-slate-50 transition-all border border-slate-50 hover:border-slate-100"
								>
									<i
										class="fa-solid fa-briefcase text-[#2672d5] text-xl group-hover:scale-110 transition-transform"
									/>
									<span class="text-[16px] font-bold text-slate-700">MBA</span>
								</a>
								<a
									href="/examcell/MTECH"
									on:click={closeMenus}
									class="group flex items-center gap-4 p-5 rounded-xl hover:bg-slate-50 transition-all border border-slate-50 hover:border-slate-100"
								>
									<i
										class="fa-solid fa-laptop-code text-[#2672d5] text-xl group-hover:scale-110 transition-transform"
									/>
									<span class="text-[16px] font-bold text-slate-700">M.Tech</span>
								</a>
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
				<div
					class="mega-box !max-w-[1000px] {activeMobileDropdown === 'facilities'
						? 'mobile-show'
						: ''}"
				>
					<div
						class="content flex flex-col md:flex-row bg-white xl:rounded-3xl xl:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] overflow-hidden text-left"
					>
						<div class="flex-1 py-10 px-10 justify-center flex flex-col items-center">
							<div class="flex items-center gap-3 mb-8 border-b border-gray-100 pb-4">
								<i class="fa-solid fa-building-circle-check text-xl text-[#2672d5]" />
								<header class="text-[1.15rem] font-bold text-slate-900">Campus Amenities</header>
							</div>
							<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
								<a
									href="/facilities/Knowledge-Resource-Center"
									on:click={closeMenus}
									class="group flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-all"
								>
									<i
										class="fa-solid fa-book-atlas text-[#2672d5] text-xl group-hover:scale-110 transition-transform"
									/>
									<span class="text-[15px] font-bold text-slate-700">Knowledge Center</span>
								</a>
								<a
									href="/facilities/Accomidation"
									on:click={closeMenus}
									class="group flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-all"
								>
									<i
										class="fa-solid fa-bed text-[#2672d5] text-xl group-hover:scale-110 transition-transform"
									/>
									<span class="text-[15px] font-bold text-slate-700">Accomidation</span>
								</a>
								<a
									href="/facilities/Cafeteria"
									on:click={closeMenus}
									class="group flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-all"
								>
									<i
										class="fa-solid fa-utensils text-[#2672d5] text-xl group-hover:scale-110 transition-transform"
									/>
									<span class="text-[15px] font-bold text-slate-700">Cafeteria</span>
								</a>
								<a
									href="/facilities/Sports"
									on:click={closeMenus}
									class="group flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-all"
								>
									<i
										class="fa-solid fa-basketball text-[#2672d5] text-xl group-hover:scale-110 transition-transform"
									/>
									<span class="text-[15px] font-bold text-slate-700">Sports</span>
								</a>
								<a
									href="/facilities/Laboratories"
									on:click={closeMenus}
									class="group flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-all"
								>
									<i
										class="fa-solid fa-flask-vial text-[#2672d5] text-xl group-hover:scale-110 transition-transform"
									/>
									<span class="text-[15px] font-bold text-slate-700">Laboratories</span>
								</a>
								<a
									href="/facilities/Transport"
									on:click={closeMenus}
									class="group flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-all"
								>
									<i
										class="fa-solid fa-bus text-[#2672d5] text-xl group-hover:scale-110 transition-transform"
									/>
									<span class="text-[15px] font-bold text-slate-700">Transport</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</li>

			<!-- Research -->
			<li>
				<a href="/research/publications" class="desktop-item">Research</a>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<button
					type="button"
					class="mobile-item {activeMobileDropdown === 'research' ? 'active-dropdown' : ''}"
					on:click={() => toggleMobileDropdown('research')}>Research</button
				>
				<div class="mega-box {activeMobileDropdown === 'research' ? 'mobile-show' : ''}">
					<div
						class="content flex flex-col md:flex-row bg-white xl:rounded-3xl xl:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] xl:border border-slate-100 overflow-hidden text-left"
					>
						<div class="flex-1 py-10 justify-center flex flex-col items-center px-10">
							<div class="flex items-center gap-3 mb-8 border-b border-gray-100 pb-4">
								<i class="fa-solid fa-microscope text-xl text-[#2672d5]" />
								<header class="text-[1.15rem] font-bold text-slate-900">Discovery & Growth</header>
							</div>
							<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
								<a
									href="/research/publications"
									on:click={closeMenus}
									class="group flex items-center gap-4 p-5 rounded-xl hover:bg-slate-50 transition-all border border-slate-50 hover:border-slate-100"
								>
									<i
										class="fa-solid fa-newspaper text-[#2672d5] text-xl group-hover:scale-110 transition-transform"
									/>
									<span class="text-[16px] font-bold text-slate-700">Publications</span>
								</a>
								<a
									href="/research/projects"
									on:click={closeMenus}
									class="group flex items-center gap-4 p-5 rounded-xl hover:bg-slate-50 transition-all border border-slate-50 hover:border-slate-100"
								>
									<i
										class="fa-solid fa-vial-circle-check text-[#2672d5] text-xl group-hover:scale-110 transition-transform"
									/>
									<span class="text-[16px] font-bold text-slate-700">Research Projects</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</li>

			<!-- CDC (Career Development Cell) -->
			<li class="mobile-priority-item">
				<a href="/placements" class="desktop-item">CDC</a>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<button
					type="button"
					class="mobile-item {activeMobileDropdown === 'cdc' ? 'active-dropdown' : ''}"
					on:click={() => toggleMobileDropdown('cdc')}>CDC</button
				>
				<div class="mega-box !max-w-[1000px] {activeMobileDropdown === 'cdc' ? 'mobile-show' : ''}">
					<div
						class="content flex flex-col md:flex-row bg-white xl:rounded-3xl xl:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] xl:border border-slate-100 overflow-hidden text-left"
					>
						<div class="flex-1 py-10 px-10 justify-center flex flex-col items-center">
							<div class="flex items-center gap-3 mb-8 border-b border-gray-100 pb-4">
								<i class="fa-solid fa-rocket text-xl text-[#2672d5]" />
								<header class="text-[1.15rem] font-extrabold text-slate-900">
									Career Development Cell
								</header>
							</div>
							<div class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
								<a
									href="/placements"
									on:click={closeMenus}
									class="group flex items-center gap-4 p-5 rounded-xl hover:bg-slate-50 transition-all border border-slate-50 hover:border-slate-100"
								>
									<i
										class="fa-solid fa-briefcase text-[#2672d5] text-xl group-hover:scale-110 transition-transform"
									/>
									<div class="flex flex-col">
										<span class="text-[16px] text-slate-900">Training & Placements</span>
										<span class="text-[11px] text-slate-500 font-medium mt-0.5"
											>Career Opportunities</span>
									</div>
								</a>
								<a
									href="/Industry-Linkages"
									on:click={closeMenus}
									class="group flex items-center gap-4 p-5 rounded-xl hover:bg-slate-50 transition-all border border-slate-50 hover:border-slate-100"
								>
									<i
										class="fa-solid fa-handshake text-[#2672d5] text-xl group-hover:scale-110 transition-transform"
									/>
									<div class="flex flex-col">
										<span class="text-[16px] text-slate-900">Industry Linkages</span>
										<span class="text-[11px] text-slate-500 font-medium mt-0.5"
											>International Collaborations</span>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</li>
		</ul>

		{#if activeMobileDropdown === 'courses'}
			<button
				type="button"
				class="courses-sidebar-overlay"
				on:click={closeMenus}
				aria-label="Close courses sidebar"
			></button>
		{/if}

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

	.nav-links li a {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		color: #1e293b;
		text-decoration: none;
		font-size: clamp(14px, 0.72vw, 14px);
		padding: 8px 6px;
		border-radius: 6px;
		transition: color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;
		white-space: nowrap;
		width: 100%;
		max-width: none;
		line-height: normal;
		text-transform: capitalize;
		letter-spacing: 0.02em;
		font-weight: 900;
		font-family: 'Roboto', 'Outfit', sans-serif;
	}

	.nav-links li a:hover {
		color: #2672d5;
		background: rgba(38, 114, 213, 0.08);
	}

	.nav-links li a:focus-visible {
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
		transition: color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;
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
		transform: translateX(-50%) translateY(10px);
		width: 95vw;
		max-width: 950px;
		opacity: 0;
		visibility: hidden;
		transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
		text-align: center;
		z-index: 100;
		top: 64px;
		pointer-events: none;
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
		transition: transform 0.28s cubic-bezier(0.2, 0.8, 0.2, 1), visibility 0.28s ease;
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

	:global(.nav-links li > a:hover + .mega-box),
	:global(.nav-links li > a:focus-visible + .mega-box),
	:global(.nav-links li .mega-box:hover),
	:global(.nav-links li:focus-within .mega-box) {
		opacity: 1;
		visibility: visible;
		transform: translateX(-50%) translateY(0);
		pointer-events: auto;
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

		:global(body.secondnav-drawer-open) .mobile-courses-dropdown {
			max-height: 0 !important;
			opacity: 0 !important;
			pointer-events: none !important;
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
			transition: background 0.22s ease, border-color 0.22s ease, color 0.22s ease;
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
			transition: transform 0.25s ease, color 0.2s ease;
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

		.mobile-courses-dropdown {
			position: absolute;
			top: calc(100% + 7px);
			left: 0;
			right: 0;
			max-height: 0;
			opacity: 0;
			overflow: hidden;
			pointer-events: none;
			transform: translateY(-6px);
			transition: max-height 0.3s ease, opacity 0.22s ease, transform 0.22s ease;
			z-index: 1001;
		}

		.mobile-courses-dropdown.open {
			max-height: 68vh;
			opacity: 1;
			pointer-events: auto;
			transform: translateY(0);
		}

		.mobile-courses-dropdown-inner {
			background: #ffffff;
			border: 1px solid #dbe5f2;
			border-radius: 14px;
			padding: 10px;
			box-shadow: 0 16px 35px rgba(15, 23, 42, 0.12);
			display: grid;
			grid-template-columns: repeat(2, minmax(0, 1fr));
			gap: 8px;
		}

		.mobile-course-link {
			min-height: 44px;
			padding: 10px 12px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 10px;
			border-radius: 10px;
			border: 1px solid #e2e8f0;
			background: #f8fafc;
			text-decoration: none;
			transition: background 0.2s ease, border-color 0.2s ease;
		}

		.mobile-course-link:hover {
			background: #eef5ff;
			border-color: #bfdbfe;
		}

		.mobile-course-link span {
			font-size: 12.5px;
			font-weight: 700;
			color: #1e293b;
			line-height: 1.2;
			white-space: normal;
		}

		.mobile-course-link small {
			flex-shrink: 0;
			font-size: 10px;
			font-weight: 700;
			letter-spacing: 0.07em;
			text-transform: uppercase;
			color: #2563eb;
			background: #e8f1ff;
			padding: 2px 7px;
			border-radius: 999px;
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
			transition: transform 0.38s cubic-bezier(0.4, 0, 0.2, 1) !important;
			white-space: normal !important;
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

		.nav-links li.mobile-priority-item {
			display: none !important;
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
			transition: background 0.2s ease, color 0.2s ease !important;
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
			transition: background 0.2s ease, color 0.2s ease !important;
		}

		/* Down-arrow via ::after */
		.nav-links .mobile-item::after {
			content: '\f107';
			font-family: 'Font Awesome 5 Free';
			font-weight: 900;
			font-size: 13px;
			color: #94a3b8;
			flex-shrink: 0;
			transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s ease;
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

		/* ════════════════════════════════
		   MEGA-BOX DROPDOWN PANEL
		════════════════════════════════ */
		.mega-box {
			position: static !important;
			transform: none !important;
			width: 100% !important;
			max-width: 100% !important;
			opacity: 1 !important;
			visibility: visible !important;
			max-height: 0 !important;
			overflow: hidden !important;
			pointer-events: auto !important;
			box-shadow: none !important;
			background: transparent !important;
			top: auto !important;
			left: auto !important;
			transition: max-height 0.42s cubic-bezier(0.4, 0, 0.2, 1) !important;
		}

		.mega-box.mobile-show {
			max-height: 5000px !important;
		}

		/* ════════════════════════════════
		   DROPDOWN CONTENT AREA
		   Override Tailwind: flex, flex-col md:flex-row, py-10, px-10,
		   shadow, border, rounded-3xl, overflow-hidden, etc.
		════════════════════════════════ */
		.content {
			display: block !important;
			flex-direction: column !important;
			background: #f4f7fb !important;
			border-radius: 16px !important;
			border: 1px solid #e8eef6 !important;
			box-shadow: none !important;
			padding: 10px 10px 14px !important;
			margin: 4px 14px 12px !important;
			width: calc(100% - 28px) !important;
			box-sizing: border-box !important;
			text-align: left !important;
			overflow: hidden !important;
		}

		/* Flatten Tailwind flex-1 divs (py-10 px-10 border-r etc.) */
		.mega-box .flex-1 {
			display: block !important;
			flex: none !important;
			width: 100% !important;
			padding: 0 !important;
			border: none !important;
			box-shadow: none !important;
		}

		/* ── Section headers inside dropdown ── */
		.content header {
			display: flex !important;
			align-items: center !important;
			gap: 6px !important;
			font-size: 10px !important;
			font-weight: 800 !important;
			text-transform: uppercase !important;
			letter-spacing: 0.12em !important;
			color: #64748b !important;
			padding: 4px 6px !important;
			margin: 14px 0 6px !important;
			border: none !important;
			width: 100% !important;
			font-family: 'Roboto', sans-serif !important;
			background: transparent !important;
		}

		.mega-box .flex-1:first-child header {
			margin-top: 6px !important;
		}

		/* Larger headers for UG/PG content area */
		.animate-fade-in header {
			font-size: 14px !important;
			font-weight: 700 !important;
			text-transform: none !important;
			letter-spacing: normal !important;
			color: #1e293b !important;
			margin-top: 4px !important;
			margin-bottom: 10px !important;
		}

		/* ── Links inside dropdown ── */
		.content a {
			display: flex !important;
			align-items: center !important;
			gap: 10px !important;
			padding: 10px 12px !important;
			margin: 0 0 6px !important;
			background: #ffffff !important;
			border-radius: 10px !important;
			border: 1px solid #e8eef6 !important;
			font-size: 13.5px !important;
			font-weight: 600 !important;
			color: #1e293b !important;
			text-decoration: none !important;
			width: 100% !important;
			max-width: 100% !important;
			box-sizing: border-box !important;
			transition: background 0.2s ease, border-color 0.2s ease !important;
			text-align: left !important;
			box-shadow: none !important;
			transform: none !important;
		}

		.content a:hover {
			background: #f0f7ff !important;
			border-color: #c2d9f5 !important;
		}

		.content a:active {
			background: #ddeeff !important;
			transform: scale(0.985) !important;
		}

		/* Text inside dropdown links */
		.content a span {
			color: #1e293b !important;
			font-family: 'Roboto', sans-serif !important;
			text-transform: none !important;
			opacity: 1 !important;
		}

		.content a span:first-child {
			font-size: 13.5px !important;
			font-weight: 600 !important;
			line-height: 1.3 !important;
		}

		.content a span:last-child {
			font-size: 9px !important;
			font-weight: 700 !important;
			text-transform: uppercase !important;
			letter-spacing: 0.05em !important;
			margin-top: 2px !important;
		}

		.content a .flex-col {
			display: flex !important;
			flex-direction: column !important;
			align-items: flex-start !important;
			width: 100% !important;
		}

		/* Icons inside links */
		.content i {
			font-size: 14px !important;
			width: 22px !important;
			text-align: center !important;
			color: #2672d5 !important;
			flex-shrink: 0 !important;
			margin-right: 0 !important;
		}

		/* Grids → single column */
		.content .grid {
			display: grid !important;
			grid-template-columns: 1fr !important;
			gap: 6px !important;
			width: 100% !important;
		}

		/* ════════════════════════════════
		   COURSES — Tab Switcher
		════════════════════════════════ */
		.custom-sidebar {
			width: 100% !important;
			border: none !important;
			background: transparent !important;
			padding: 0 !important;
			margin-bottom: 14px !important;
		}

		.custom-sidebar button {
			display: flex !important;
			align-items: center !important;
			justify-content: flex-start !important;
			gap: 10px !important;
			width: 100% !important;
			padding: 13px 16px !important;
			margin-bottom: 6px !important;
			background: #ffffff !important;
			border-radius: 12px !important;
			border: 1px solid #e8eef6 !important;
			box-shadow: none !important;
			font-size: 14px !important;
			font-weight: 700 !important;
			color: #1e293b !important;
			cursor: pointer !important;
			font-family: 'Roboto', sans-serif !important;
			transition: background 0.2s ease, border-color 0.2s ease !important;
		}

		.custom-sidebar button.active {
			background: #f0f7ff !important;
			border-color: #2672d5 !important;
			color: #2672d5 !important;
		}

		/* Pill-row switcher for Courses */
		.courses-mega .custom-sidebar {
			display: flex !important;
			flex-direction: row !important;
			gap: 8px !important;
			overflow-x: auto !important;
			padding: 2px 0 10px !important;
			margin-top: 6px !important;
			scrollbar-width: none !important;
			-ms-overflow-style: none !important;
		}

		.courses-mega .custom-sidebar::-webkit-scrollbar {
			display: none;
		}

		.courses-mega .custom-sidebar header {
			display: none !important;
		}

		.courses-mega .custom-sidebar button {
			flex: 1 !important;
			white-space: nowrap !important;
			padding: 9px 16px !important;
			border-radius: 100px !important;
			font-size: 13px !important;
			background: #edf2f7 !important;
			border: none !important;
			box-shadow: none !important;
			color: #64748b !important;
			margin-bottom: 0 !important;
			justify-content: center !important;
		}

		.courses-mega .custom-sidebar button.active {
			background: #2672d5 !important;
			color: #ffffff !important;
			border-color: transparent !important;
		}

		.courses-mega .custom-sidebar button div {
			display: none !important;
		}

		/* ════════════════════════════════
		   COURSE CARDS
		════════════════════════════════ */
		.course-card-mobile {
			background: #ffffff !important;
			border: 1px solid #e8eef6 !important;
			border-radius: 12px !important;
			padding: 10px 12px !important;
			display: flex !important;
			align-items: center !important;
			gap: 10px !important;
			box-shadow: none !important;
			width: 100% !important;
			box-sizing: border-box !important;
			transition: background 0.2s ease !important;
		}

		.course-card-mobile:hover {
			background: #f0f7ff !important;
		}

		.course-icon-bg {
			width: 36px !important;
			height: 36px !important;
			border-radius: 10px !important;
			display: flex !important;
			align-items: center !important;
			justify-content: center !important;
			font-size: 14px !important;
			flex-shrink: 0 !important;
		}

		.course-card-mobile span:first-child {
			font-size: 13px !important;
			font-weight: 700 !important;
			color: #1e293b !important;
			letter-spacing: -0.01em !important;
			line-height: 1.3 !important;
		}

		.course-card-mobile span:last-child {
			font-size: 9px !important;
			font-weight: 800 !important;
			text-transform: uppercase !important;
			letter-spacing: 0.08em !important;
			margin-top: 2px !important;
		}
	}

	/* ─────────────────────────────────────────────────────────────
	   TABLET  (≤768px)  — size refinements only
	───────────────────────────────────────────────────────────── */

	@media screen and (max-width: 768px) {
		nav .wrapper {
			grid-template-columns: 58px minmax(0, 1fr) 58px;
			height: 56px;
			padding: 0 10px;
			column-gap: 6px;
		}

		.logo img {
			width: 54px !important;
		}

		.mobile-quick-links-track {
			gap: 5px;
		}

		.mobile-quick-link {
			min-height: 29px;
			font-size: 10px;
			padding: 4px 8px;
		}

		.mobile-courses-dropdown {
			top: calc(100% + 6px);
		}

		.mobile-courses-dropdown.open {
			max-height: 64vh;
		}

		.mobile-courses-dropdown-inner {
			grid-template-columns: 1fr;
			max-height: 58vh;
			overflow-y: auto;
		}

		.mobile-course-link {
			padding: 9px 10px;
		}

		.wrapper .nav-links {
			width: 83% !important;
			max-width: 340px !important;
		}

		.nav-links li > a,
		.nav-links .mobile-item {
			font-size: 14.5px !important;
			padding: 13px 16px !important;
			margin: 2px 12px !important;
			width: calc(100% - 24px) !important;
		}

		.content {
			margin: 4px 12px 10px !important;
			width: calc(100% - 24px) !important;
		}
	}

	/* ─────────────────────────────────────────────────────────────
	   PHONE  (≤576px)  — size refinements only
	───────────────────────────────────────────────────────────── */

	@media screen and (max-width: 576px) {
		nav .wrapper {
			grid-template-columns: 54px minmax(0, 1fr) 54px;
			height: 56px;
			padding: 0 8px;
			column-gap: 4px;
		}

		.logo img {
			width: 50px !important;
		}

		.mobile-quick-links-track {
			gap: 4px;
		}

		.mobile-quick-link {
			min-height: 28px;
			font-size: 9.5px;
			padding: 4px 7px;
		}

		.mobile-courses-dropdown {
			top: calc(100% + 6px);
		}

		.mobile-courses-dropdown-inner {
			padding: 8px;
			gap: 6px;
			border-radius: 12px;
		}

		.mobile-course-link {
			min-height: 42px;
			padding: 8px 9px;
			border-radius: 9px;
		}

		.mobile-course-link span {
			font-size: 12px;
		}

		.mobile-course-link small {
			font-size: 9px;
			padding: 2px 6px;
		}

		.wrapper .nav-links {
			width: 85% !important;
			max-width: 300px !important;
			border-radius: 0 20px 20px 0 !important;
		}

		.nav-links li > a,
		.nav-links .mobile-item {
			font-size: 14px !important;
			padding: 12px 14px !important;
			margin: 2px 10px !important;
			width: calc(100% - 20px) !important;
		}

		.content {
			margin: 4px 10px 10px !important;
			width: calc(100% - 20px) !important;
			padding: 8px 8px 12px !important;
			border-radius: 12px !important;
		}

		.content a {
			padding: 9px 10px !important;
			font-size: 13px !important;
		}

		.content i {
			font-size: 13px !important;
			width: 18px !important;
		}

		.course-card-mobile {
			padding: 9px 10px !important;
		}

		.course-icon-bg {
			width: 32px !important;
			height: 32px !important;
			border-radius: 8px !important;
			font-size: 12px !important;
		}

		.course-card-mobile span:first-child {
			font-size: 12px !important;
		}
	}
</style>
