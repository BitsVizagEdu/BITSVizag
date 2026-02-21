<script>
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
					class="w-[110px] md:w-[140px] xl:w-[160px] transition-all"
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
				<a href="/aboutus/About-BITS-Vizag" class="desktop-item">About Us</a>
				<input type="checkbox" id="showMega" />
				<label for="showMega" class="mobile-item">About Us</label>
				<div class="mega-box">
					<div
						class="content flex flex-col md:flex-row bg-white rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-slate-100 overflow-hidden text-left"
					>
						<div class="flex-1 py-10 px-10 border-r border-slate-50">
							<div class="flex items-center gap-3 mb-8 border-b border-gray-100 pb-4">
								<i class="fa-solid fa-building-columns text-xl text-[#2672d5]" />
								<header class="text-[1.15rem] font-bold text-slate-900">The Institution</header>
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
								<header class="text-[1.15rem] font-bold text-slate-900">Leadership</header>
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
								<header class="text-[1.15rem] font-extrabold text-slate-900 tracking-tight">
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
			<li>
				<a href="/courses/Under Graduation" class="desktop-item">Courses</a>
				<input type="checkbox" id="courses" />
				<label for="courses" class="mobile-item">Courses</label>
				<div class="mega-box !max-w-[1100px]">
					<div
						class="content flex flex-col md:flex-row bg-white rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-slate-100 overflow-hidden"
					>
						<!-- Courses Main Section (UG) -->
						<div class="flex-[1.5] py-10 px-12 text-left bg-white">
							<div class="flex items-center gap-4 mb-10 border-b border-slate-100 pb-5">
								<div class="w-10 h-10 flex items-center justify-center rounded-xl">
									<i class="fa-solid fa-scroll text-[#2672d5] text-lg" />
								</div>
								<header class="text-xl font-bold text-slate-900">Under Graduation</header>
							</div>
							<div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
								<a
									href="/department/Department of CSE"
									on:click={closeMenus}
									class="group flex items-center gap-4 p-2 rounded-xl hover:bg-slate-50 transition-all"
								>
									<div
										class="w-10 h-10 flex items-center justify-center border border-slate-100 rounded-lg group-hover:bg-blue-200 group-hover:shadow-md transition-all"
									>
										<i
											class="fa-solid fa-laptop-code text-[#2672d5] text-lg group-hover:scale-110 transition-transform"
										/>
									</div>
									<div class="flex flex-col text-left">
										<span class="text-[16px] font-bold text-slate-900">Computer Science</span>
										<span class="text-[10px] text-slate-500 font-bold mt-0.5">Engineering</span>
									</div>
								</a>
								<a
									href="/department/Department of ECE"
									on:click={closeMenus}
									class="group flex items-center gap-4 p-2 rounded-xl hover:bg-slate-50 transition-all"
								>
									<div
										class="w-10 h-10 flex items-center justify-center border border-slate-100 rounded-lg group-hover:bg-blue-200 group-hover:shadow-md transition-all"
									>
										<i
											class="fa-solid fa-microchip text-[#2672d5] text-lg group-hover:scale-110 transition-transform"
										/>
									</div>
									<div class="flex flex-col text-left">
										<span class="text-[16px] font-bold text-slate-900"
											>Electronics & Communication</span
										>
										<span class="text-[10px] text-slate-500 mt-0.5">Engineering</span>
									</div>
								</a>
								<a
									href="/department/Department of EEE"
									on:click={closeMenus}
									class="group flex items-center gap-4 p-2 rounded-xl hover:bg-slate-50 transition-all"
								>
									<div
										class="w-10 h-10 flex items-center justify-center border border-slate-100 rounded-lg group-hover:bg-blue-200 group-hover:shadow-md transition-all"
									>
										<i
											class="fa-solid fa-bolt-lightning text-[#2672d5] text-lg group-hover:scale-110 transition-transform"
										/>
									</div>
									<div class="flex flex-col text-left">
										<span class="text-[16px] font-bold text-slate-900"
											>Electrical & Electronics</span
										>
										<span class="text-[10px] text-slate-500 mt-0.5">Engineering</span>
									</div>
								</a>
								<a
									href="/department/Department of BS&H"
									on:click={closeMenus}
									class="group flex items-center gap-4 p-2 rounded-xl hover:bg-slate-50 transition-all"
								>
									<div
										class="w-10 h-10 flex items-center justify-center border border-slate-100 rounded-lg group-hover:bg-blue-200 group-hover:shadow-md transition-all"
									>
										<i
											class="fa-solid fa-atom text-[#2672d5] text-lg group-hover:scale-110 transition-transform"
										/>
									</div>
									<div class="flex flex-col text-left">
										<span class="text-[16px] font-bold text-slate-900"
											>Basic Sciences & Humanities</span
										>
										<span class="text-[10px] text-slate-500 mt-0.5">Basic Sciences</span>
									</div>
								</a>
								<a
									href="/department/Department of CIVIL"
									on:click={closeMenus}
									class="group flex items-center gap-4 p-2 rounded-xl hover:bg-slate-50 transition-all"
								>
									<div
										class="w-10 h-10 flex items-center justify-center border border-slate-100 rounded-lg group-hover:bg-blue-200 group-hover:shadow-md transition-all"
									>
										<i
											class="fa-solid fa-hard-hat text-[#2672d5] text-lg group-hover:scale-110 transition-transform"
										/>
									</div>
									<div class="flex flex-col text-left">
										<span class="text-[16px] font-bold text-slate-900">Civil Engineering</span>
										<span class="text-[10px] text-slate-500 mt-0.5">Structure</span>
									</div>
								</a>
								<a
									href="/department/Department of MECH"
									on:click={closeMenus}
									class="group flex items-center gap-4 p-2 rounded-xl hover:bg-slate-50 transition-all"
								>
									<div
										class="w-10 h-10 flex items-center justify-center border border-slate-100 rounded-lg group-hover:bg-blue-200 group-hover:shadow-md transition-all"
									>
										<i
											class="fa-solid fa-gears w-6 h-6 text-[#2672d5] group-hover:scale-110 transition-transform"
										/>
									</div>
									<div class="flex flex-col text-left">
										<span class="text-[16px] flex-auto font-bold text-slate-900"
											>Mechanical Engineering</span
										>
										<span class="text-[10px] text-slate-500 mt-0.5">Machinery</span>
									</div>
								</a>
							</div>
						</div>

						<!-- Featured Section (PG) -->
						<div class="flex-1 bg-slate-50/50 py-10 px-10 text-left border-l border-slate-100">
							<div class="flex items-center gap-4 mb-10 border-b border-slate-200 pb-5">
								<div
									class="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm"
								>
									<i class="fa-solid fa-award text-[#2672d5] text-lg" />
								</div>
								<header class="text-xl font-bold text-slate-900">Post Graduation</header>
							</div>
							<div class="flex flex-col gap-5">
								<a
									href="/department/Department of MBA"
									on:click={closeMenus}
									class="group flex items-center gap-6 bg-white p-5 rounded-2xl transition-all shadow-sm hover:shadow-md hover:bg-blue-50 border border-slate-100"
								>
									<div
										class="w-14 h-14 flex items-center justify-center bg-[#2672d5]/[0.1] text-[#2672d5] rounded-2xl transition-all"
									>
										<i class="fa-solid fa-briefcase text-2xl" />
									</div>
									<div class="flex flex-col">
										<span class="text-lg font-bold text-slate-900">MBA</span>
										<span class="text-[10px] text-slate-500 font-bold mt-2 tracking-widest"
											>Management</span
										>
									</div>
								</a>
								<a
									href="/courses/Post-Graduation"
									on:click={closeMenus}
									class="group flex items-center gap-6 bg-white p-5 rounded-2xl transition-all shadow-sm hover:shadow-md hover:bg-blue-50 border border-slate-100"
								>
									<div
										class="w-14 h-14 flex items-center justify-center bg-[#2672d5]/[0.1] text-[#2672d5] rounded-2xl transition-all"
									>
										<i class="fa-solid fa-laptop-code text-2xl" />
									</div>
									<div class="flex flex-col">
										<span class="text-lg font-bold text-slate-900">M.Tech</span>
										<span class="text-[10px] text-slate-500 font-bold mt-2">Technology</span>
									</div>
								</a>
							</div>
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
	@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');

	nav {
		z-index: 99;
		width: 100%;
		background: #ffffff;
		font-family: 'Outfit', sans-serif;
	}

	nav .wrapper {
		position: relative;
		max-width: 1600px;
		padding: 0 20px;
		height: 80px;
		line-height: normal;
		margin: auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0;
	}

	.wrapper .logo img {
		width: 130px;
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
		color: #334155;
		text-decoration: none;
		font-size: 15px;
		padding: 10px 14px;
		border-radius: 10px;
		transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
		white-space: nowrap;
		line-height: normal;
		text-transform: none;
		letter-spacing: 0.02em;
		font-weight: 700;
		font-family:
			'Inter',
			system-ui,
			-apple-system,
			Segoe UI,
			Roboto,
			sans-serif;
	}

	.nav-links li a:hover {
		color: #2672d5;
		background: #f8fafc;
		transform: translateY(-1px);
	}

	.nav-links .mobile-item {
		display: none;
		font-weight: 800;
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
		top: 80px;
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

	.content {
		position: relative;
	}

	.mega-box .content header {
		font-family: 'Outfit', sans-serif !important;
	}

	.wrapper .btn {
		color: #1e293b;
		font-size: 24px;
		cursor: pointer;
		display: none;
	}

	.wrapper .btn.close-btn {
		position: absolute;
		right: 30px;
		top: 20px;
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
			width: 100px;
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
			max-width: 320px;
			top: 0;
			left: -100%;
			background: #ffffff;
			display: block;
			padding: 70px 24px;
			overflow-y: auto;
			box-shadow: 20px 0px 60px rgba(0, 0, 0, 0.08);
			transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
			z-index: 1000;
		}

		#menu-btn:checked ~ .nav-links {
			left: 0%;
		}

		.nav-links li {
			margin: 12px 0;
			display: block;
			height: auto;
		}

		.nav-links li a {
			padding: 14px 20px;
			display: block;
			font-size: 17px;
			font-weight: 800;
			border-radius: 14px;
			color: #0f172a;
			line-height: normal;
		}

		.nav-links .mobile-item {
			display: block;
			padding: 14px 20px;
			border-radius: 14px;
			color: #0f172a;
			cursor: pointer;
			transition: background 0.2s;
		}

		.nav-links .mobile-item:hover {
			background: #f1f5f9;
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
			transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
			box-shadow: none;
		}

		#showMega:checked ~ .mega-box,
		#governance:checked ~ .mega-box,
		#courses:checked ~ .mega-box,
		#faculty:checked ~ .mega-box,
		#examcell:checked ~ .mega-box,
		#facilities:checked ~ .mega-box,
		#research:checked ~ .mega-box,
		#cdc:checked ~ .mega-box {
			max-height: 2000px;
			margin-top: 15px;
		}

		.content {
			box-shadow: none !important;
			border: none !important;
			background: #f8fafc !important;
			border-radius: 20px !important;
		}

		.content .flex-1 {
			padding: 24px !important;
			border: none !important;
		}
	}

	input[type='radio'],
	input[type='checkbox'] {
		display: none;
	}
</style>
