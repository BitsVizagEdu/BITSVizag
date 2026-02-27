<script>
	let activeCourseTab = 'ug';
	function closeMenus() {
		if (typeof document !== 'undefined') {
			const checkboxes = document.querySelectorAll('.nav-links input[type="checkbox"]');
			checkboxes.forEach((cb) => {
				if (cb instanceof HTMLInputElement) cb.checked = false;
			});
			const menuBtn = document.getElementById('menu-btn');
			if (menuBtn instanceof HTMLInputElement) menuBtn.checked = false;
		}
	}
</script>

<nav>
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
		<input type="radio" name="slider" id="menu-btn" />
		<input type="radio" name="slider" id="close-btn" />

		<ul class="nav-links h-full">
			<label for="close-btn" class="btn close-btn">
				<i class="fas fa-times text-slate-800" />
			</label>
			<li><a href="/" on:click={closeMenus}>Home</a></li>

			<!-- About Us -->
			<li>
				<a href="/aboutus/About-BITS" class="desktop-item">About Us</a>
				<input type="checkbox" id="showMega" />
				<label for="showMega" class="mobile-item">About Us</label>
				<div class="mega-box">
					<div
						class="content flex flex-col md:flex-row bg-white rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-slate-100 overflow-hidden text-left"
					>
						<div class="flex-1 py-10 px-10 border-r border-slate-50">
							<div class="flex items-center gap-3 mb-8 border-b border-gray-100 pb-4">
								<i class="fa-solid fa-building-columns text-xl text-[#2672d5]" />
								<header class="text-[1.15rem] font-extrabold text-slate-950 tracking-tight">
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
									<span class="text-[15px] font-bold text-slate-700">About ABWS</span>
								</a>
								<a
									href="/aboutus/About-BITS"
									on:click={closeMenus}
									class="group flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100"
								>
									<i
										class="fa-solid fa-landmark text-[#2672d5] text-lg group-hover:scale-110 transition-transform"
									/>
									<span class="text-[15px] font-bold text-slate-700">About Bits Vizag</span>
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
									<span class="text-[15px] font-bold text-slate-700"
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
									<span class="text-[15px] font-bold text-slate-700">Message From Principal</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</li>

			<!-- Governance -->
			<li>
				<a href="/governance" class="desktop-item">Governance</a>
				<input type="checkbox" id="governance" />
				<label for="governance" class="mobile-item">Governance</label>
				<div class="mega-box">
					<div
						class="content flex flex-col md:flex-row bg-white rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-slate-100 overflow-hidden text-left"
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
									<span class="text-[16px] font-bold text-slate-700">Board of Trustees</span>
								</a>
								<a
									href="/governance/governing-body"
									on:click={closeMenus}
									class="group flex items-center gap-4 p-5 rounded-xl hover:bg-slate-50 transition-all border border-slate-50 hover:border-slate-100"
								>
									<i
										class="fa-solid fa-sitemap text-[#2672d5] text-xl group-hover:scale-110 transition-transform"
									/>
									<span class="text-[16px] font-bold text-slate-700">Governing Body</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</li>

			<!-- Courses -->
			<li on:mouseleave={() => (activeCourseTab = 'ug')}>
				<a href="/courses/Under-Graduation" class="desktop-item">Courses</a>
				<input type="checkbox" id="courses" />
				<label for="courses" class="mobile-item">Courses</label>
				<div class="mega-box !max-w-[850px] !h-auto">
					<div
						class="content flex flex-col md:flex-row bg-white rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-slate-100 overflow-hidden text-left min-h-[420px]"
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

							<div class="flex flex-col gap-2 relative z-10">
								<button
									on:mouseenter={() => (activeCourseTab = 'ug')}
									class="flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 border border-transparent
										{activeCourseTab === 'ug'
										? 'bg-white shadow-md shadow-blue-500/5 border-slate-100'
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
											: 'text-slate-700'}">Under Graduation</span
									>
								</button>

								<button
									on:mouseenter={() => (activeCourseTab = 'pg')}
									class="flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 border border-transparent
										{activeCourseTab === 'pg'
										? 'bg-white shadow-md shadow-blue-500/5 border-slate-100'
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
											: 'text-slate-700'}">Post Graduation</span
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
											class="group flex items-center gap-4 p-3.5 rounded-2xl border border-slate-50 hover:border-slate-100 hover:bg-slate-50/50 hover:shadow-lg hover:shadow-slate-200/40 transition-all duration-300"
										>
											<div
												class="w-9 h-9 flex items-center justify-center bg-blue-50/60 rounded-xl group-hover:bg-[#2672d5] transition-colors duration-500 shadow-sm shrink-0"
											>
												<i
													class="fa-solid fa-laptop-code text-[#2672d5] text-[14px] group-hover:text-white transition-colors"
												/>
											</div>
											<div class="flex flex-col text-left">
												<span
													class="text-[13.5px] font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors"
													>Computer Science</span
												>
												<span
													class="text-[9px] text-slate-500 font-bold uppercase tracking-widest mt-1"
													>Programme</span
												>
											</div>
										</a>
										<a
											href="/department/Department of CSE (AI & ML)"
											on:click={closeMenus}
											class="group flex items-center gap-4 p-3.5 rounded-2xl border border-slate-50 hover:border-slate-100 hover:bg-slate-50/50 hover:shadow-lg hover:shadow-slate-200/40 transition-all duration-300"
										>
											<div
												class="w-9 h-9 flex items-center justify-center bg-blue-50/60 rounded-xl group-hover:bg-[#2672d5] transition-colors duration-500 shadow-sm shrink-0"
											>
												<i
													class="fa-solid fa-brain text-[#2672d5] text-[14px] group-hover:text-white transition-colors"
												/>
											</div>
											<div class="flex flex-col text-left">
												<span
													class="text-[13.5px] font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors"
													>CS (AI & ML)</span
												>
												<span
													class="text-[9px] text-slate-500 font-bold uppercase tracking-wider mt-1"
													>Specialization</span
												>
											</div>
										</a>
										<a
											href="/department/Department of CSE (Cyber Security)"
											on:click={closeMenus}
											class="group flex items-center gap-4 p-3.5 rounded-2xl border border-slate-50 hover:border-slate-100 hover:bg-slate-50/50 hover:shadow-lg hover:shadow-slate-200/40 transition-all duration-300"
										>
											<div
												class="w-9 h-9 flex items-center justify-center bg-blue-50/60 rounded-xl group-hover:bg-[#2672d5] transition-colors duration-500 shadow-sm shrink-0"
											>
												<i
													class="fa-solid fa-shield-halved text-[#2672d5] text-[14px] group-hover:text-white transition-colors"
												/>
											</div>
											<div class="flex flex-col text-left">
												<span
													class="text-[13.5px] font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors"
													>CS (Cyber Security)</span
												>
												<span
													class="text-[9px] text-slate-500 font-bold uppercase tracking-wider mt-1"
													>Specialization</span
												>
											</div>
										</a>
										<a
											href="/department/Department of ECE"
											on:click={closeMenus}
											class="group flex items-center gap-4 p-3.5 rounded-2xl border border-slate-50 hover:border-slate-100 hover:bg-slate-50/50 hover:shadow-lg hover:shadow-slate-200/40 transition-all duration-300"
										>
											<div
												class="w-9 h-9 flex items-center justify-center bg-blue-50/60 rounded-xl group-hover:bg-[#2672d5] transition-colors duration-500 shadow-sm shrink-0"
											>
												<i
													class="fa-solid fa-microchip text-[#2672d5] text-[14px] group-hover:text-white transition-colors"
												/>
											</div>
											<div class="flex flex-col text-left">
												<span
													class="text-[13.5px] font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors"
													>Electronics & Communication</span
												>
												<span
													class="text-[9px] text-slate-500 font-bold uppercase tracking-widest mt-1"
													>Programme</span
												>
											</div>
										</a>
										<a
											href="/department/Department of EEE"
											on:click={closeMenus}
											class="group flex items-center gap-4 p-3.5 rounded-2xl border border-slate-50 hover:border-slate-100 hover:bg-slate-50/50 hover:shadow-lg hover:shadow-slate-200/40 transition-all duration-300"
										>
											<div
												class="w-9 h-9 flex items-center justify-center bg-blue-50/60 rounded-xl group-hover:bg-[#2672d5] transition-colors duration-500 shadow-sm shrink-0"
											>
												<i
													class="fa-solid fa-bolt-lightning text-[#2672d5] text-[14px] group-hover:text-white transition-colors"
												/>
											</div>
											<div class="flex flex-col text-left">
												<span
													class="text-[13.5px] font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors"
													>Electrical & Electronics</span
												>
												<span
													class="text-[9px] text-slate-500 font-bold uppercase tracking-widest mt-1"
													>Programme</span
												>
											</div>
										</a>
										<a
											href="/department/Department of BS&H"
											on:click={closeMenus}
											class="group flex items-center gap-4 p-3.5 rounded-2xl border border-slate-50 hover:border-slate-100 hover:bg-slate-50/50 hover:shadow-lg hover:shadow-slate-200/40 transition-all duration-300"
										>
											<div
												class="w-9 h-9 flex items-center justify-center bg-blue-50/60 rounded-xl group-hover:bg-[#2672d5] transition-colors duration-500 shadow-sm shrink-0"
											>
												<i
													class="fa-solid fa-atom text-[#2672d5] text-[14px] group-hover:text-white transition-colors"
												/>
											</div>
											<div class="flex flex-col text-left">
												<span
													class="text-[13.5px] font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors"
													>Basic Sciences</span
												>
												<span
													class="text-[9px] text-slate-500 font-bold uppercase tracking-widest mt-1"
													>Programme</span
												>
											</div>
										</a>
										<a
											href="/department/Department of CIVIL"
											on:click={closeMenus}
											class="group flex items-center gap-4 p-3.5 rounded-2xl border border-slate-50 hover:border-slate-100 hover:bg-slate-50/50 hover:shadow-lg hover:shadow-slate-200/40 transition-all duration-300"
										>
											<div
												class="w-9 h-9 flex items-center justify-center bg-blue-50/60 rounded-xl group-hover:bg-[#2672d5] transition-colors duration-500 shadow-sm shrink-0"
											>
												<i
													class="fa-solid fa-hard-hat text-[#2672d5] text-[14px] group-hover:text-white transition-colors"
												/>
											</div>
											<div class="flex flex-col text-left">
												<span
													class="text-[13.5px] font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors"
													>Civil Engineering</span
												>
												<span
													class="text-[9px] text-slate-500 font-bold uppercase tracking-widest mt-1"
													>Programme</span
												>
											</div>
										</a>
										<a
											href="/department/Department of MECH"
											on:click={closeMenus}
											class="group flex items-center gap-4 p-3.5 rounded-2xl border border-slate-50 hover:border-slate-100 hover:bg-slate-50/50 hover:shadow-lg hover:shadow-slate-200/40 transition-all duration-300"
										>
											<div
												class="w-9 h-9 flex items-center justify-center bg-blue-50/60 rounded-xl group-hover:bg-[#2672d5] transition-colors duration-500 shadow-sm shrink-0"
											>
												<i
													class="fa-solid fa-gears text-[#2672d5] text-[14px] group-hover:text-white transition-colors"
												/>
											</div>
											<div class="flex flex-col text-left">
												<span
													class="text-[13.5px] font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors"
													>Mechanical Eng.</span
												>
												<span
													class="text-[9px] text-slate-500 font-bold uppercase tracking-widest mt-1"
													>Programme</span
												>
											</div>
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
													class="text-[15.5px] font-bold text-slate-900 leading-none group-hover:text-blue-600 transition-colors"
													>MBA</span
												>
												<span
													class="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-2"
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
													class="text-[15.5px] font-bold text-slate-900 leading-none group-hover:text-blue-600 transition-colors"
													>M.Tech</span
												>
												<span
													class="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-2"
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
				<input type="checkbox" id="faculty" />
				<label for="faculty" class="mobile-item">Faculty</label>
				<div class="mega-box">
					<div
						class="content flex flex-col md:flex-row bg-white rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-slate-100 overflow-hidden text-left"
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
				<input type="checkbox" id="examcell" />
				<label for="examcell" class="mobile-item">Exam Cell</label>
				<div class="mega-box">
					<div
						class="content flex flex-col md:flex-row bg-white rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-slate-100 overflow-hidden text-left"
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
				<input type="checkbox" id="facilities" />
				<label for="facilities" class="mobile-item">Facilities</label>
				<div class="mega-box !max-w-[1000px]">
					<div
						class="content flex flex-col md:flex-row bg-white rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] overflow-hidden text-left"
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
				<input type="checkbox" id="research" />
				<label for="research" class="mobile-item">Research</label>
				<div class="mega-box">
					<div
						class="content flex flex-col md:flex-row bg-white rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-slate-100 overflow-hidden text-left"
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
				<input type="checkbox" id="cdc" />
				<label for="cdc" class="mobile-item">CDC</label>
				<div class="mega-box !max-w-[1000px]">
					<div
						class="content flex flex-col md:flex-row bg-white rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-slate-100 overflow-hidden text-left"
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

		<label for="menu-btn" class="btn menu-btn"><i class="fas fa-bars text-slate-800" /></label>
	</div>
</nav>

<style>
	/* Fonts are loaded in app.html */

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
		font-weight: 500;
		font-family: 'Roboto', sans-serif;
		font-weight: 600;
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
			width: 100%;
			top: 0;
			left: -100%;
			background: #ffffff;
			display: block;
			padding: 80px 20px 40px;
			overflow-y: auto;
			box-shadow: none;
			transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
			z-index: 1000;
		}

		#menu-btn:checked ~ .nav-links {
			left: 0%;
		}

		.wrapper .btn.close-btn {
			display: flex;
		}

		/* Added overlay when menu is open */
		#menu-btn:checked ~ .btn.menu-btn::before {
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
			font-weight: 600;
			border-radius: 12px;
			color: #1e293b;
			line-height: normal;
		}

		.nav-links .mobile-item {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 12px 16px;
			border-radius: 12px;
			color: #1e293b;
			cursor: pointer;
			font-size: 16px;
			font-weight: 600;
			transition: background 0.2s;
		}

		.nav-links .mobile-item::after {
			content: '\f107';
			font-family: 'Font Awesome 5 Free';
			font-weight: 900;
			transition: transform 0.3s;
		}

		#showMega:checked + .mobile-item::after,
		#governance:checked + .mobile-item::after,
		#courses:checked + .mobile-item::after,
		#faculty:checked + .mobile-item::after,
		#examcell:checked + .mobile-item::after,
		#facilities:checked + .mobile-item::after,
		#research:checked + .mobile-item::after,
		#cdc:checked + .mobile-item::after {
			transform: rotate(180deg);
		}

		.nav-links .mobile-item:hover {
			background: #f8fafc;
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
			transition: all 0.3s ease;
			box-shadow: none;
			background: transparent;
		}

		#showMega:checked ~ .mega-box,
		#governance:checked ~ .mega-box,
		#courses:checked ~ .mega-box,
		#faculty:checked ~ .mega-box,
		#examcell:checked ~ .mega-box,
		#facilities:checked ~ .mega-box,
		#research:checked ~ .mega-box,
		#cdc:checked ~ .mega-box {
			max-height: 5000px;
			margin-top: 5px;
			margin-bottom: 15px;
		}

		.content {
			box-shadow: none !important;
			border: none !important;
			background: #f1f5f9 !important;
			border-radius: 20px !important;
			padding: 20px 12px !important;
			display: flex !important;
			flex-direction: column !important;
			align-items: center !important;
			justify-content: center !important;
			text-align: center !important;
		}

		.flex-1 {
			width: 100% !important;
			display: flex !important;
			flex-direction: column !important;
			align-items: center !important;
			justify-content: center !important;
			padding: 12px 0 !important;
		}

		.content .grid {
			width: 100% !important;
			display: flex !important;
			flex-direction: column !important;
			align-items: center !important;
			gap: 8px !important;
		}

		.content header {
			font-size: 14px !important;
			color: #64748b !important;
			padding: 0 16px !important;
			margin-bottom: 16px !important;
			letter-spacing: 0.12em;
			text-transform: uppercase;
			font-weight: 600;
			display: flex !important;
			align-items: center !important;
			justify-content: center !important;
			gap: 10px !important;
			width: 100% !important;
		}

		.flex-1 > div:first-child {
			display: flex !important;
			justify-content: center !important;
			align-items: center !important;
			width: 100% !important;
		}

		.content a {
			padding: 16px 24px !important;
			margin: 6px 0 !important;
			background: white !important;
			border-radius: 12px !important;
			font-size: 15px !important;
			border: 1px solid #e2e8f0 !important;
			width: 100% !important;
			max-width: 300px !important;
			display: flex !important;
			justify-content: center !important;
			align-items: center !important;
			box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04) !important;
			text-align: center !important;
		}

		.content a:hover {
			border-color: #2672d5 !important;
			color: #2672d5 !important;
			transform: translateY(-1px) !important;
			box-shadow: 0 4px 12px rgba(38, 114, 213, 0.1) !important;
		}

		.content i {
			font-size: 16px !important;
		}
	}

	input[type='radio'],
	input[type='checkbox'] {
		display: none;
	}
</style>
