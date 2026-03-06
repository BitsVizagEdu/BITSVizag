<script>
	let activeCourseTab = 'ug';
	let isMobileMenuOpen = false;
	let activeMobileDropdown = ''; // To track the currently open dropdown in mobile

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
</script>

<nav class={isMobileMenuOpen ? 'mobile-menu-active-state' : ''}>
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
			<li>
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
									href="/aboutus/Message-from-Secretary-&-Correspondent"
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
				<a href="/governance" class="desktop-item">Governance</a>
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
			<li on:mouseleave={() => (activeCourseTab = 'ug')}>
				<a href="/courses/Under-Graduation" class="desktop-item">Courses</a>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<button
					type="button"
					class="mobile-item {activeMobileDropdown === 'courses' ? 'active-dropdown' : ''}"
					on:click={() => toggleMobileDropdown('courses')}>Courses</button
				>
				<div
					class="mega-box courses-mega !max-w-[1200px] !h-auto {activeMobileDropdown === 'courses'
						? 'mobile-show'
						: ''}"
				>
					<div
						class="content flex flex-col md:flex-row bg-white xl:rounded-3xl xl:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] xl:border border-slate-100 overflow-hidden text-left min-h-[420px]"
					>
						<!-- Sidebar Menu -->
						<div
							class="w-full md:w-[280px] bg-slate-50/60 border-r border-slate-100 p-6 flex flex-col shrink-0 relative custom-sidebar"
						>
							<header
								class="text-[11px] font-bold text-slate-800 uppercase tracking-widest px-4 mb-5 mt-2"
							>
								Levels of Study
							</header>

							<div class="flex flex-col gap-2 relative z-10 w-full">
								<button
									on:click={() => (activeCourseTab = 'ug')}
									class="flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 border border-transparent w-full
										{activeCourseTab === 'ug'
										? 'bg-white shadow-md shadow-blue-500/5 border-slate-100 active'
										: 'hover:bg-slate-100/80 text-slate-600'}"
								>
									<div
										class="w-10 h-10 rounded-xl flex items-center justify-center transition-all {activeCourseTab ===
										'ug'
											? 'bg-blue-500 text-white shadow-sm'
											: 'bg-white text-[#2672d5] border border-slate-100 shadow-sm'}"
									>
										<i class="fa-solid fa-scroll text-[16px]"></i>
									</div>
									<span
										class="font-bold text-[15px] {activeCourseTab === 'ug'
											? 'text-blue-600'
											: 'text-slate-800'}">Under Graduation</span
									>
								</button>

								<button
									on:click={() => (activeCourseTab = 'pg')}
									class="flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 border border-transparent w-full
										{activeCourseTab === 'pg'
										? 'bg-white shadow-md shadow-blue-500/5 border-slate-100 active'
										: 'hover:bg-slate-100/80 text-slate-600'}"
								>
									<div
										class="w-10 h-10 rounded-xl flex items-center justify-center transition-all {activeCourseTab ===
										'pg'
											? 'bg-blue-500 text-white shadow-sm'
											: 'bg-white text-[#2672d5] border border-slate-100 shadow-sm'}"
									>
										<i class="fa-solid fa-award text-[16px]"></i>
									</div>
									<span
										class="font-bold text-[15px] {activeCourseTab === 'pg'
											? 'text-blue-600'
											: 'text-slate-800'}">Post Graduation</span
									>
								</button>
							</div>

							<!-- subtle decorative background on sidebar -->
							<div
								class="absolute bottom-0 left-0 w-full h-[150px] opacity-[0.03] pointer-events-none"
								style="background: linear-gradient(to top, #2672d5 0%, transparent 100%);"
							></div>
						</div>

						<!-- Tab Content Area -->
						<div class="flex-1 p-8 md:p-10 bg-white relative">
							{#if activeCourseTab === 'ug'}
								<div class="animate-fade-in">
									<header
										class="text-[19px] font-bold text-slate-900 tracking-tight mb-7 px-1 flex items-center gap-3"
									>
										<span class="w-1.5 h-5 bg-blue-500 rounded-full inline-block shadow-sm"></span>
										Under Graduation
									</header>
									<div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
										<!-- UG Cards -->
										<a
											href="/department/Department of CSE"
											on:click={closeMenus}
											class="course-card-mobile group flex items-center gap-4 p-3 rounded-xl border border-slate-100 bg-white hover:bg-slate-50 transition-all duration-300"
										>
											<div class="course-icon-bg shadow-sm shrink-0 bg-blue-50 text-blue-600">
												<i class="fa-solid fa-laptop-code text-[14px]"></i>
											</div>
											<div class="flex flex-col text-left flex-1 min-w-0">
												<span class="text-[15px] font-slate-800 tracking-wider"
													>Computer Science & Engineering (CSE)</span
												>
												<span
													class="text-[9px] text-blue-600 font-bold uppercase tracking-wider mt-0.5"
													>Programme</span
												>
											</div>
											<i class="fa-solid fa-chevron-right text-[10px] text-slate-300"></i>
										</a>
										<a
											href="/department/Department of ECE"
											on:click={closeMenus}
											class="course-card-mobile group flex items-center gap-4 p-3 rounded-xl border border-slate-100 bg-white hover:bg-slate-50 transition-all duration-300"
										>
											<div class="course-icon-bg shadow-sm shrink-0 bg-indigo-50 text-indigo-600">
												<i class="fa-solid fa-microchip text-[14px]"></i>
											</div>
											<div class="flex flex-col text-left flex-1 min-w-0">
												<span class="text-[15px] font-slate-800 tracking-wider"
													>Electronics & Communication Engineering (ECE)</span
												>
												<span
													class="text-[9px] text-indigo-600 font-bold uppercase tracking-wider mt-0.5"
													>Programme</span
												>
											</div>
											<i class="fa-solid fa-chevron-right text-[10px] text-slate-300"></i>
										</a>
										<a
											href="/department/Department of CSE (AI & ML)"
											on:click={closeMenus}
											class="course-card-mobile group flex items-center gap-4 p-3 rounded-xl border border-slate-100 bg-white hover:bg-slate-50 transition-all duration-300"
										>
											<div class="course-icon-bg shadow-sm shrink-0 bg-purple-50 text-purple-600">
												<i class="fa-solid fa-brain text-[14px]"></i>
											</div>
											<div class="flex flex-col text-left flex-1 min-w-0">
												<span class="text-[15px] font-slate-800 tracking-wider"
													>Artificial Intelligence & Machine Learning</span
												>
												<span
													class="text-[9px] text-purple-600 font-bold uppercase tracking-wider mt-0.5"
													>Specialization</span
												>
											</div>
											<i class="fa-solid fa-chevron-right text-[10px] text-slate-300"></i>
										</a>
										<a
											href="/department/Department of EEE"
											on:click={closeMenus}
											class="course-card-mobile group flex items-center gap-4 p-3 rounded-xl border border-slate-100 bg-white hover:bg-slate-50 transition-all duration-300"
										>
											<div class="course-icon-bg shadow-sm shrink-0 bg-yellow-50 text-yellow-600">
												<i class="fa-solid fa-bolt-lightning text-[14px]"></i>
											</div>
											<div class="flex flex-col text-left flex-1 min-w-0">
												<span class="text-[15px] font-slate-800 tracking-wider"
													>Electrical & Electronics Engineering (EEE)</span
												>
												<span
													class="text-[9px] text-yellow-600 font-bold uppercase tracking-wider mt-0.5"
													>Programme</span
												>
											</div>
											<i class="fa-solid fa-chevron-right text-[10px] text-slate-300"></i>
										</a>
										<a
											href="/department/Department of CSE (Cyber Security)"
											on:click={closeMenus}
											class="course-card-mobile group flex items-center gap-4 p-3 rounded-xl border border-slate-100 bg-white hover:bg-slate-50 transition-all duration-300"
										>
											<div class="course-icon-bg shadow-sm shrink-0 bg-red-50 text-red-600">
												<i class="fa-solid fa-shield-halved text-[14px]"></i>
											</div>
											<div class="flex flex-col text-left flex-1 min-w-0">
												<span class="text-[15px] font-slate-800 tracking-wider"
													>Cyber Security (CS)</span
												>
												<span
													class="text-[9px] text-red-600 font-bold uppercase tracking-wider mt-0.5"
													>Specialization</span
												>
											</div>
											<i class="fa-solid fa-chevron-right text-[10px] text-slate-300"></i>
										</a>
										<a
											href="/department/Department of MECH"
											on:click={closeMenus}
											class="course-card-mobile group flex items-center gap-4 p-3 rounded-xl border border-slate-100 bg-white hover:bg-slate-50 transition-all duration-300"
										>
											<div class="course-icon-bg shadow-sm shrink-0 bg-teal-50 text-teal-600">
												<i class="fa-solid fa-gears text-[14px]"></i>
											</div>
											<div class="flex flex-col text-left flex-1 min-w-0">
												<span class="text-[15px] font-slate-800 tracking-wider"
													>Mechanical Engineering (MECH)</span
												>
												<span
													class="text-[9px] text-teal-600 font-bold uppercase tracking-wider mt-0.5"
													>Programme</span
												>
											</div>
											<i class="fa-solid fa-chevron-right text-[10px] text-slate-300"></i>
										</a>
										<a
											href="/department/Department of BS&H"
											on:click={closeMenus}
											class="course-card-mobile group flex items-center gap-4 p-3 rounded-xl border border-slate-100 bg-white hover:bg-slate-50 transition-all duration-300"
										>
											<div class="course-icon-bg shadow-sm shrink-0 bg-emerald-50 text-emerald-600">
												<i class="fa-solid fa-atom text-[14px]"></i>
											</div>
											<div class="flex flex-col text-left flex-1 min-w-0">
												<span class="text-[15px] font-slate-800 tracking-wider"
													>Basic Sciences & Humanities (BS&H)</span
												>
												<span
													class="text-[9px] text-emerald-600 font-bold uppercase tracking-wider mt-0.5"
													>Programme</span
												>
											</div>
											<i class="fa-solid fa-chevron-right text-[10px] text-slate-300"></i>
										</a>
										<a
											href="/department/Department of CIVIL"
											on:click={closeMenus}
											class="course-card-mobile group flex items-center gap-4 p-3 rounded-xl border border-slate-100 bg-white hover:bg-slate-50 transition-all duration-300"
										>
											<div class="course-icon-bg shadow-sm shrink-0 bg-orange-50 text-orange-600">
												<i class="fa-solid fa-hard-hat text-[14px]"></i>
											</div>
											<div class="flex flex-col text-left flex-1 min-w-0">
												<span class="text-[15px] font-slate-800 tracking-wider"
													>Civil Engineering (CIVIL)</span
												>
												<span
													class="text-[9px] text-orange-600 font-bold uppercase tracking-wider mt-0.5"
													>Programme</span
												>
											</div>
											<i class="fa-solid fa-chevron-right text-[10px] text-slate-300"></i>
										</a>
									</div>
								</div>
							{:else if activeCourseTab === 'pg'}
								<div class="animate-fade-in flex flex-col h-full">
									<header
										class="text-[19px] font-bold text-slate-900 tracking-tight mb-7 px-1 flex items-center gap-3"
									>
										<span class="w-1.5 h-5 bg-blue-500 rounded-full inline-block shadow-sm"></span>
										Post Graduation
									</header>
									<div class="flex flex-col gap-4">
										<!-- PG Cards -->
										<a
											href="/department/Department of MBA"
											on:click={closeMenus}
											class="group flex items-center gap-5 p-5 bg-slate-50/60 hover:bg-blue-50/40 rounded-2xl transition-all shadow-sm border border-slate-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/10"
										>
											<div
												class="w-12 h-12 flex items-center justify-center bg-white text-[#2672d5] border border-slate-100 rounded-xl group-hover:bg-[#2672d5] group-hover:text-white group-hover:border-transparent transition-all duration-500 shadow-sm shrink-0"
											>
												<i class="fa-solid fa-briefcase text-[18px]" />
											</div>
											<div class="flex flex-col text-left">
												<span
													class="text-[15.5px] font-bold text-slate-800 leading-none group-hover:text-blue-600 transition-colors"
													>MBA</span
												>
												<span
													class="text-[10px] text-blue-600 font-bold uppercase tracking-widest mt-2"
													>Management</span
												>
											</div>
											<i
												class="fa-solid fa-chevron-right ml-auto text-slate-300 group-hover:text-blue-500 transition-all duration-500 group-hover:translate-x-1 text-sm bg-white w-8 h-8 rounded-full flex items-center justify-center shadow-sm border border-slate-50"
											/>
										</a>
										<a
											href="/courses/Post-Graduation"
											on:click={closeMenus}
											class="group flex items-center gap-5 p-5 bg-slate-50/60 hover:bg-blue-50/40 rounded-2xl transition-all shadow-sm border border-slate-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/10"
										>
											<div
												class="w-12 h-12 flex items-center justify-center bg-white text-[#2672d5] border border-slate-100 rounded-xl group-hover:bg-[#2672d5] group-hover:text-white group-hover:border-transparent transition-all duration-500 shadow-sm shrink-0"
											>
												<i class="fa-solid fa-laptop-code text-[18px]" />
											</div>
											<div class="flex flex-col text-left">
												<span
													class="text-[15.5px] font-bold text-slate-800 leading-none group-hover:text-blue-600 transition-colors"
													>M.Tech</span
												>
												<span
													class="text-[10px] text-green-600 font-bold uppercase tracking-widest mt-2"
													>Programme</span
												>
											</div>
											<i
												class="fa-solid fa-chevron-right ml-auto text-slate-300 group-hover:text-blue-500 transition-all duration-500 group-hover:translate-x-1 text-sm bg-white w-8 h-8 rounded-full flex items-center justify-center shadow-sm border border-slate-50"
											/>
										</a>
									</div>
								</div>
							{/if}
						</div>
					</div>
				</div>
			</li>

			<!-- Faculty -->
			<li>
				<a href="/faculty/teaching-staff" class="desktop-item">Faculty</a>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<button
					type="button"
					class="mobile-item {activeMobileDropdown === 'faculty' ? 'active-dropdown' : ''}"
					on:click={() => toggleMobileDropdown('faculty')}>Faculty</button
				>
				<div class="mega-box {activeMobileDropdown === 'faculty' ? 'mobile-show' : ''}">
					<div
						class="content flex flex-col md:flex-row bg-white xl:rounded-3xl xl:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] xl:border border-slate-100 overflow-hidden text-left"
					>
						<div class="flex-1 flex flex-col justify-center items-center py-10 px-10">
							<div class="flex items-center gap-3 mb-8 border-b border-gray-100 pb-4">
								<i class="fa-solid fa-chalkboard-user text-xl text-[#2672d5]" />
								<header class="text-[1.15rem] flex items-center font-bold text-slate-900">
									Our Educators
								</header>
							</div>
							<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
								<a
									href="/faculty/teaching-staff"
									on:click={closeMenus}
									class="group flex items-center gap-4 p-5 rounded-xl hover:bg-slate-50 transition-all border border-slate-50 hover:border-slate-100"
								>
									<i
										class="fa-solid fa-user-graduate text-[#2672d5] text-xl group-hover:scale-110 transition-transform"
									/>
									<span class="text-[16px] font-bold text-slate-900">Teaching Staff</span>
								</a>
								<a
									href="/faculty/non-teaching-staff"
									on:click={closeMenus}
									class="group flex items-center gap-4 p-5 rounded-xl hover:bg-slate-50 transition-all border border-slate-50 hover:border-slate-100"
								>
									<i
										class="fa-solid fa-user-gear text-[#2672d5] text-xl group-hover:scale-110 transition-transform"
									/>
									<span class="text-[16px] font-bold text-slate-900">Non-Teaching Staff</span>
								</a>
							</div>
						</div>
					</div>
				</div>
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
			<li>
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
			<li>
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
											>Career Opportunities</span
										>
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
											>International Collaborations</span
										>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</li>
		</ul>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<button type="button" class="btn menu-btn" on:click={toggleMobileMenu}
			><i class="fas fa-bars text-slate-800" /></button
		>
	</div>
</nav>

<style>
	@media screen and (max-width: 1280px) {
		nav {
			position: sticky;
			top: 0;
			z-index: 999;
			box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
		}

		.logo img {
			width: 75px;
		}

		nav .wrapper {
			justify-content: space-between;
			padding: 0 20px;
			height: 70px;
		}

		.wrapper .btn {
			display: block;
		}

		/* -------- CENTERED MOBILE MENU PANEL -------- */

		.wrapper .nav-links {
			position: fixed;

			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%) scale(0.96);

			width: 92%;
			max-width: 420px;
			height: 85vh;

			background: #ffffff;
			border-radius: 26px;

			padding: 22px 16px 70px;

			overflow-y: auto;
			overflow-x: hidden;

			box-shadow:
				0 40px 80px rgba(0, 0, 0, 0.12),
				0 10px 30px rgba(0, 0, 0, 0.06);

			opacity: 0;
			pointer-events: none;

			transition:
				transform 0.35s cubic-bezier(0.4, 0, 0.2, 1),
				opacity 0.35s ease;

			z-index: 1000;
		}

		/* OPEN STATE */

		.nav-links.mobile-open {
			opacity: 1;
			pointer-events: auto;
			transform: translate(-50%, -50%) scale(1);
		}

		/* BACKDROP */

		.mobile-backdrop {
			position: fixed;
			inset: 0;
			background: rgba(0, 0, 0, 0.45);
			backdrop-filter: blur(6px);
			z-index: 998;
		}

		/* MENU ITEMS */

		.nav-links li {
			margin: 8px 0;
			display: block;
			height: auto;
		}

		.nav-links li a {
			display: block;
			padding: 14px 16px;
			font-size: 16px;
			font-weight: 700;
			border-radius: 12px;
			color: #000;
		}

		.nav-links .mobile-item {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 14px 16px;
			border-radius: 12px;
			font-size: 16px;
			font-weight: 700;
			cursor: pointer;
			background: transparent;
			border: none;
			width: 100%;
		}

		.nav-links .mobile-item:hover {
			background: #f8fafc;
			color: #2672d5;
		}

		.nav-links .mobile-item::after {
			content: '\f107';
			font-family: 'Font Awesome 5 Free';
			font-weight: 900;
			transition: transform 0.3s ease;
		}
		.nav-links .mobile-item.active-dropdown::after {
			transform: rotate(180deg);
		}
		.nav-links .desktop-item {
			display: none;
		}

		/* DROPDOWN CONTAINER */

		.mega-box {
			position: static;
			transform: none;
			width: 100%;
			max-width: 100%;
			opacity: 1;
			visibility: visible;
			max-height: 0;
			overflow: hidden;
			transition: max-height 0.45s ease;
		}

		.mega-box.mobile-show {
			max-height: 4000px;
			margin-top: 12px;
			margin-bottom: 16px;
		}

		/* CONTENT CARD */

		.content {
			background: #f8fafc;
			border-radius: 20px;
			padding: 18px 16px;

			display: flex;
			flex-direction: column;
			gap: 12px;
		}

		/* GRID INSIDE DROPDOWNS */

		.content .grid {
			display: grid;
			grid-template-columns: 1fr;
			gap: 12px;
		}

		/* ITEM CARDS */

		.content a {
			display: flex;
			align-items: center;
			gap: 12px;

			padding: 12px 14px;

			background: #ffffff;
			border-radius: 12px;

			border: 1px solid #f1f5f9;

			box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);

			font-size: 14px;
			font-weight: 600;

			transition: all 0.25s ease;
		}

		.content a:hover {
			background: #f9fafb;
		}

		.content i {
			width: 22px;
			text-align: center;
			color: #2672d5;
		}

		/* HEADER */

		.content header {
			font-size: 12px;
			font-weight: 700;
			letter-spacing: 0.08em;
			text-transform: uppercase;
			margin-bottom: 6px;
		}

		/* COURSES MOBILE SWITCHER */

		.custom-sidebar {
			display: flex;
			gap: 8px;
			overflow-x: auto;
			padding-bottom: 8px;
		}

		.custom-sidebar::-webkit-scrollbar {
			display: none;
		}

		.custom-sidebar button {
			white-space: nowrap;
			padding: 10px 16px;
			border-radius: 100px;

			background: #f1f5f9;
			border: none;

			font-size: 13px;
			font-weight: 700;
			color: #64748b;
		}

		.custom-sidebar button.active {
			background: #2672d5;
			color: white;
		}

		.course-card-mobile {
			display: flex;
			align-items: center;
			gap: 12px;

			background: white;

			border-radius: 14px;
			border: 1px solid #f1f5f9;

			padding: 12px;

			box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
		}

		.course-icon-bg {
			width: 38px;
			height: 38px;

			border-radius: 10px;

			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
</style>
