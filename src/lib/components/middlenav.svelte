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
	/* Fonts are loaded in app.html */

	nav.mobile-menu-active-state {
		z-index: 99999 !important;
	}

	nav {
		z-index: 99;
		width: 100%;
		background: #ffffff;
		font-family: 'Roboto', sans-serif;
	}

	nav .wrapper {
		position: relative;
		max-width: 1600px;
		padding: 0 24px;
		height: 56px;
		line-height: normal;
		margin: auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0;
	}

	.wrapper .logo img {
		width: 100px;
	}

	.wrapper .nav-links {
		display: flex;
		flex: 1;
		align-items: center;
		justify-content: space-evenly;
		white-space: nowrap;
		height: 100%;
	}

	.nav-links li {
		list-style: none;
		height: 100%;
		display: flex;
		align-items: center;
	}

	.nav-links li a {
		color: #000000;
		text-decoration: none;
		font-size: 15px;
		padding: 8px 14px;
		border-radius: 8px;
		transition: all 0.3s ease;
		white-space: nowrap;
		line-height: normal;
		text-transform: capitalize;
		letter-spacing: 0.02em;
		font-weight: 600;
		font-family: 'Roboto';
	}

	.nav-links li a:hover {
		color: #2672d5;
		background: rgba(38, 114, 213, 0.05);
		transform: translateY(-1px);
	}

	.nav-links .mobile-item {
		display: none;
		font-weight: 700;
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

	.mega-box::before {
		content: '';
		position: absolute;
		top: -40px;
		left: 0;
		width: 100%;
		height: 40px;
		background: transparent;
	}

	.nav-links li:hover .mega-box {
		opacity: 1;
		visibility: visible;
		transform: translateX(-50%) translateY(0);
		pointer-events: auto;
	}
	nav {
		position: sticky;
		top: 0;
		z-index: 998;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.03);
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

	@media screen and (max-width: 1280px) {
		nav {
			position: sticky;
			top: 0;
			z-index: 999;
			box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
			width: 100%;
		}
		.logo img {
			display: block;
			width: 75px;
		}
		nav .wrapper {
			justify-content: space-between;
			padding: 0 20px;
			height: 70px;
			gap: 0;
		}

		.wrapper .btn {
			display: block;
		}

		.wrapper .nav-links {
			position: fixed;
			height: 100vh;
			width: 100vw;
			top: 0;
			left: -100%;
			background: #ffffff;
			display: block;
			padding: 20px 16px 80px;
			overflow-y: auto;
			overflow-x: hidden;
			box-shadow: none;
			transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
			z-index: 1000;
			box-sizing: border-box !important;
		}
		* {
			box-sizing: border-box;
		}

		.wrapper .btn.close-btn {
			display: flex;
			position: static;
		}

		/* Added overlay when menu is open */
		.nav-links.mobile-open ~ .btn.menu-btn::before {
			content: '';
			position: fixed;
			top: 0;
			left: 0;
			width: 100vw;
			height: 100vh;
			background: rgba(0, 0, 0, 0.4);
			backdrop-filter: blur(8px);
			-webkit-backdrop-filter: blur(8px);
			z-index: 999;
			cursor: default;
		}

		.nav-links li {
			margin: 8px 0;
			display: block;
			height: auto;
		}

		.nav-links li a {
			padding: 12px 16px;
			display: block;
			font-size: 16px;
			font-weight: 700;
			border-radius: 12px;
			color: #000000;
			line-height: normal;
		}

		.nav-links.mobile-open {
			left: 0%;
		}

		.nav-links .mobile-item {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 12px 16px;
			border-radius: 12px;
			color: #000000;
			cursor: pointer;
			font-size: 16px;
			font-weight: 700;
			transition: background 0.2s;
			user-select: none;
			width: 100%;
			border: none;
			background: transparent;
			text-align: left;
			font-family: inherit;
		}

		.nav-links .mobile-item::after {
			content: '\f107';
			font-family: 'Font Awesome 5 Free';
			font-weight: 900;
			transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		}

		.nav-links .mobile-item.active-dropdown::after {
			transform: rotate(180deg);
		}

		.nav-links .mobile-item:hover {
			background: #f8fafc;
			color: #2672d5;
		}

		.nav-links .desktop-item {
			display: none;
		}

		.mega-box {
			position: static;
			transform: none;
			width: 100%;
			max-width: 100%;
			opacity: 1;
			visibility: visible;
			max-height: 0;
			overflow: hidden;
			transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
			box-shadow: none;
			background: transparent;
		}

		.mega-box.mobile-show {
			max-height: 5000px;
			margin-top: 10px;
			margin-bottom: 20px;
		}

		.content {
			box-shadow: none !important;
			border: none !important;
			background: #f8fafc !important;
			border-radius: 24px !important;
			padding: 20px 12px !important;
			display: block !important;
			text-align: left !important;
			width: 100% !important;
			box-sizing: border-box !important;
			margin-left: 0 !important;
			margin-right: 0 !important;
		}

		.flex-1 {
			width: 100% !important;
			display: block !important;
			padding: 0 !important;
			border: none !important;
		}

		.content .grid {
			width: 100% !important;
			display: grid !important;
			grid-template-columns: 1fr !important;
			gap: 12px !important;
		}

		.content header,
		.content a span,
		.content a div,
		.custom-sidebar span,
		.custom-sidebar button {
			color: #000000 !important;
			text-transform: none !important;
			opacity: 1 !important;
			font-family: 'Roboto', sans-serif !important;
		}

		.content header {
			font-size: 11px !important;
			padding: 0 8px !important;
			margin-bottom: 8px !important;
			margin-top: 16px !important;
			letter-spacing: 0.1em !important;
			text-transform: uppercase !important;
			font-weight: 700 !important;
			display: flex !important;
			align-items: center !important;
			justify-content: flex-start !important;
			gap: 8px !important;
			width: 100% !important;
			border: none !important;
		}

		/* Sub-headers adjustment */
		.animate-fade-in header {
			font-size: 15px !important;
			margin-top: 6px !important;
			letter-spacing: normal !important;
			font-weight: 700 !important;
		}

		.flex-1:first-child header {
			margin-top: 0 !important;
		}

		.content a {
			padding: 10px 14px !important;
			margin: 0 !important;
			background: white !important;
			border-radius: 10px !important;
			font-size: 14px !important;
			border: 1px solid #f1f5f9 !important;
			width: 100% !important;
			max-width: 100% !important;
			display: flex !important;
			justify-content: flex-start !important;
			align-items: center !important;
			box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02) !important;
			text-align: left !important;
			transition: all 0.3s ease !important;
			box-sizing: border-box !important;
		}

		.content a:active {
			background: #f1f5f9 !important;
			transform: scale(0.98);
		}

		.content a .flex-col {
			display: flex !important;
			flex-direction: column !important;
			align-items: flex-start !important;
			width: 100% !important;
		}

		.content a span:first-child {
			font-weight: 600 !important;
			line-height: 1.25 !important;
			font-size: 14px !important;
		}

		.content a span:last-child {
			font-size: 9px !important;
			letter-spacing: 0.05em !important;
			margin-top: 2px !important;
			font-weight: 600 !important;
		}

		.content i {
			font-size: 14px !important;
			width: 24px !important;
			text-align: center !important;
			margin-right: 6px !important;
			color: #2672d5 !important;
		}

		/* Styling for the sidebar-like buttons in Courses mobile view */
		.custom-sidebar {
			width: 100% !important;
			border: none !important;
			background: transparent !important;
			padding: 0 !important;
			margin-bottom: 20px !important;
		}

		.custom-sidebar button {
			width: 100% !important;
			justify-content: flex-start !important;
			padding: 16px 20px !important;
			margin-bottom: 8px !important;
			background: white !important;
			border-radius: 16px !important;
			border: 1px solid #f1f5f9 !important;
			box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03) !important;
			font-weight: 800 !important;
		}

		/* Insane Courses Mobile Switcher */
		.courses-mega .custom-sidebar {
			flex-direction: row !important;
			gap: 8px !important;
			overflow-x: auto !important;
			padding: 0 4px 10px !important;
			margin-top: 10px !important;
			scrollbar-width: none !important;
			-ms-overflow-style: none !important;
		}
		.courses-mega .custom-sidebar::-webkit-scrollbar {
			display: none !important;
		}
		.courses-mega .custom-sidebar header {
			display: none !important;
		}
		.courses-mega .custom-sidebar button {
			white-space: nowrap !important;
			width: auto !important;
			flex: 1 !important;
			padding: 12px 18px !important;
			border-radius: 100px !important;
			font-size: 13px !important;
			background: #f1f5f9 !important;
			border: none !important;
			box-shadow: none !important;
			color: #64748b !important;
			margin-bottom: 0 !important;
		}
		.courses-mega .custom-sidebar button.active {
			background: #2672d5 !important;
			color: white !important;
		}
		.courses-mega .custom-sidebar button div {
			display: none !important;
		}

		/* Premium Course Cards */
		.course-card-mobile {
			background: white !important;
			border: 1px solid #f1f5f9 !important;
			border-radius: 16px !important;
			padding: 12px !important;
			display: flex !important;
			align-items: center !important;
			box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02) !important;
			width: 100% !important;
			box-sizing: border-box !important;
		}
		.course-icon-bg {
			width: 40px !important;
			height: 40px !important;
			border-radius: 12px !important;
			display: flex !important;
			align-items: center !important;
			justify-content: center !important;
			font-size: 16px !important;
		}
		.course-card-mobile span:first-child {
			font-size: 13px !important;
			font-weight: 700 !important;
			letter-spacing: -0.01em !important;
			color: #000000 !important;
		}
		.course-card-mobile span:last-child {
			font-size: 9px !important;
			font-weight: 800 !important;
			text-transform: uppercase !important;
			letter-spacing: 0.1em !important;
			margin-top: 2px !important;
		}

		.custom-sidebar button.active {
			border-color: #2672d5 !important;
			background: #f0f7ff !important;
		}
	}
</style>
