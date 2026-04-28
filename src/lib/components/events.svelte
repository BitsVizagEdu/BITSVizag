<script>
	let events = [
		{
			name: 'Mega Job Fair 2026',
			description:
				'The Mega Job Fair 2026, organized by BITS Vizag (A) and Magic Bus Foundation on 10th March 2026, saw 1,786 students from 121 colleges attend, with 696 selected and 368 shortlisted by 38 companies. The event was a grand success, empowering youth through meaningful industry connections.',
			date: 'March 10, 2026',
			image: '/events/job-fair.jpg',
			href: 'https://www.instagram.com/p/DV3uIZcmtvW/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
			click: 'Click to view more >>>'
		},
		{
			name: 'Samsung Innovation Campus X CSE',
			description:
				'The Dept. of CSE is pleased to share that the Samsung Innovation Campus, in association with Datapro Pvt Ltd. and the Department of CSE, BITS Vizag, successfully organized Artificial Intelligence Training Sessions for 250 students of BITS Vizag across all Departments..',
			date: 'January 22, 2026',
			image: '/events/samsung.jpg',
			href: 'https://www.instagram.com/p/DT0QQlfiAI6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
			click: 'Click to view more >>>'
		},
		{
			name: 'Christmas Extravaganza 3.0',
			description:
				'The Campus of Baba Institute of Technology & Sciences Vizag was filled with Festive Grace through Live Carols, Heartfelt Christmas Greetings, Candle Service, Cake Cutting, and the Sharing of Gifts with our Working-Class.',
			date: 'December 25, 2025',
			image: '/events/christmas-3.0.jpg',
			href: 'https://www.instagram.com/p/DSrMrnrCLs5/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
			click: 'Click to view more >>>'
		},

		{
			name: 'Pitch-A-Thon 2025 | BITS Vizag (A) | Powered by Payzo',
			description:
				'BITS Vizag (A), in association with Payzo, successfully organized Pitch-A-Thon 2025 on 9th December, providing a dynamic platform for students to showcase their startup ideas and entrepreneurial thinking..',
			date: 'December 13, 2025',
			image: '/events/payzo.jpg',
			href: 'https://www.instagram.com/p/DSNLQBXE84Q/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
			click: 'Click to view more >>>'
		},
		{
			name: 'The Shield Protocol 25',
			description:
				'3-day Cybersecurity Essentials workshop with Supraja Technologies, where 200+ participants gained hands-on training in key security tools and emerging cyber trends.',
			date: 'September 8, 2025',
			image: '/events/S-Protocol.jpg',
			href: 'https://www.instagram.com/p/DOq-sPxE1C1/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
			click: 'Click to view more >>>'
		},

		{
			name: 'BITS Vizag (A) × Kaumodaki Nexus Grid',
			description:
				'The Department of ECE, BITS Vizag(A) signed an MoU with Kaumodaki Nexus Grid Pvt. Ltd. in the presence of Principal, Dept Head and Delegates from the Organization, marking a meaningful step toward strengthening Industry–Academia collaboration.',
			date: 'December 5, 2025',
			image: '/events/kau.jpg',
			href: 'https://www.instagram.com/p/DR43kIIiNBs/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
			click: 'Click to view more >>>'
		},

		{
			name: 'National-Level T10 Championship',
			description:
				'BITS Vizag players joined the Andhra Pradesh T10 team flagged off for the National Championship',
			date: 'November 24, 2025',
			image: '/events/Champions-T10.jpg',
			href: 'https://www.instagram.com/p/DRcAh1bDdlP/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
			click: 'Click to view more >>>'
		},
		{
			name: 'Visiting Vice-Chancellor,JNTU GV',
			description:
				'BITS Vizag Principal Prof. M. Rajan Babu and TPO Mr. Joshua Raju met the new Hon’ble Vice Chancellor of JNTU Gurajada to convey wishes and discuss future academic collaboration',
			date: 'November 7, 2025',
			image: '/events/vice-chancellor.jpg',
			href: 'https://www.instagram.com/p/DQvtjDijfWw/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
			click: 'Click to view more >>>'
		},
		{
			name: ' State-Level T10 Championship',
			description:
				'BITS Vizag students powered Andhra Pradesh to win the State T10 Championship, with eight players selected for the Nationals. Congrats to the team and mentor K. Vijay Kumar.',
			date: 'November 6, 2025',
			image: '/events/T-10.jpg',
			href: 'https://www.instagram.com/p/DQuOMxUE_qx/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
			click: 'Click to view more >>>'
		},

		{
			name: "International Women's Day 2025",
			description:
				' Women leaders shared impactful stories and guided students toward building a more inclusive and progressive environment.',
			date: 'March 8, 2025',
			image: '/events/womansday1.jpg',
			href: 'https://www.instagram.com/p/DG-wBKtzN4Q/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
			click: 'Click to view more >>>'
		},

		{
			name: 'Launching Ekshetra 3.0',
			description: 'A blend of Innovation, Creativity, and Celebration !!!',
			date: 'February 22, 2025',
			image: '/events/Ekshethra.jpg',
			href: 'https://www.instagram.com/p/DF3G85vt8Gc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
			click: 'Click to view more >>>'
		},
		{
			name: 'Sankranthi Sambaralu 8.0',
			description:
				'BITS Vizag celebrated Sankranti Sambaraalu 8.0 with vibrant festive spirit and warm togetherness.',
			date: 'January 14, 2025',
			image: '/events/Sambaralu8.jpg',
			href: 'https://www.instagram.com/p/DEptB5rtBrV/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
			click: 'Click to view more >>>'
		},
		{
			name: 'Christmas Extravaganza 2.0',
			description:
				'BITS Vizag celebrated Christmas Extravaganza 2.0 with joyful carols, vibrant performances, and a warm festive spirit shared by students and faculty.',
			date: 'December 19, 2024',
			image: '/events/Extravaganza2.0.jpg',
			href: 'https://www.instagram.com/p/DB6xJgLtvcd/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
			click: 'Click to view more >>>'
		},
		{
			name: 'HR Campus Connect',
			description:
				'BITS Vizag hosted the HR Campus Connect Business Event, bringing students and industry leaders together for impactful discussions on careers, recruitment, and future industry trends.',
			date: 'November 03, 2024',
			image: '/events/HRcampus.jpg',
			href: 'https://www.instagram.com/p/DB6xJgLtvcd/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
			click: 'Click to view more >>>'
		},
		{
			name: 'A 3-Day Employability Bootcamp',
			description:
				'The Training and Placement Cell successfully hosted a 3-Day Bootcamp on Developing Employability Competencies from October 22nd to 24th, 2024 at Central Seminar Hall, BITS Vizag.',
			date: 'October 22, 2024',
			image: '/events/14.jpg',
			href: 'https://www.instagram.com/p/DBjYa6DT3D_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
			click: 'Click to view more >>>'
		},
		{
			name: 'The Cloud Summit',
			description:
				'The Dept. of CSE and KONKORDE proudly announce The Cloud Summit, a 3-day AWS workshop, co-organized by BITS Vizag and The Skill Shop.',
			date: 'September 28, 2024',
			image: '/events/13.jpg',
			href: 'https://www.instagram.com/p/DAeAMvWzoWn/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
			click: 'Click to view more >>>'
		},
		{
			name: 'Career Unplugged',
			description:
				'Mr. Krishna Teja, CEO and Co-Founder of Packet Prep & Fresher Bot, shared insights on upskilling and the job market. The Principal and Head of CSE also addressed the students.',
			date: 'September 24, 2024',
			image: '/events/12.jpg',
			href: 'https://www.instagram.com/p/DATssFDzK_Q/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
			click: 'Click to view more >>>'
		},
		{
			name: 'Engineers Day Celebrations',
			description:
				'Ninety-three students received Meritorious Certificates for top performances.Chief Guest Er. Venkateswara Rao (Chief Engineer, GVMC) highlighted the role of engineers and awarded winners and runners.',
			date: 'September 23, 2024',
			image: '/events/EngineersDay.jpg',
			href: 'https://www.instagram.com/p/DARGr6IToYT/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
			click: 'Click to view more >>>'
		},

		{
			name: 'High Performance Computing',
			description:
				'BITS Vizag’s CSE Department, in collaboration with CDAC and AICTE Sankalp, hosted an HPC awareness workshop featuring expert insights from HPC Master Trainer Mr. Venkat Kishore',
			date: 'July 27, 2024',
			image: '/events/HighperComputing.jpg',
			href: 'https://www.instagram.com/p/C97LhIzvpuw/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
			click: 'Click to view more >>>'
		},
		{
			name: 'AI & Robotics Workshop',
			description:
				'Tech Nexus at BITS Vizag: A collaborative workshop uniting students and startups to explore IoT & Robotics, led by Dr. BKC Ganesh, showcasing innovation amidst institutional initiatives.',
			date: 'March 28, 2024',
			image: '/events/AIworkshop.jpg',
			href: 'https://www.instagram.com/p/C5EG0ZsvdNK/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
			click: 'Click to view more >>>'
		},
		{
			name: 'Beyond Limits - A Motivational Session on Life Skills ,featuring the Senior and Versatile actor, Mr. Vijay Thalaivasal',
			description:
				'Embark on a journey of inspiration and empowerment with Beyond Limits, a life-changing session featuring actor Vijay Thalaivasal, held at BITS Vizag!',
			date: 'February 14, 2024',
			image: '/events/vijay.jpg',
			href: 'https://www.instagram.com/p/C3VVkI_PQkk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
			click: 'Click to view more >>>'
		},
		{
			name: 'Prof. Sajjan Shiva | University of Memphis, USA',
			description:
				'Thrilled to witness Digitaries  Prof. Sajjan Shiva sharing valuable insights on higher studies and foreign educational opportunities.',
			date: 'January 9, 2024',
			image: '/events/memphis.jpg',
			href: 'https://www.instagram.com/p/C16PJtmLuFO/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
			click: 'Click to view more >>>'
		},
		{
			name: 'Industrial Visit | Dept. of CSE | KONKORDE | BITS Vizag - T Hub',
			description:
				"They explored T-Hub's Innovative Workspace, gaining a firsthand understanding of its operation.",
			date: 'October 8, 2023',
			image: '/events/thub.jpg',
			href: 'https://www.instagram.com/p/CzbRQZFr_rq/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==',
			click: 'Click to view more >>>'
		},
		{
			name: 'Webinar on Career Prospects in AI and Data Science',
			description: 'Navigating AI Futures: Insights with CEO Suresh Kadari',
			date: 'October 6, 2023',
			image: '/events/webinar.jpg',
			href: 'https://www.instagram.com/p/CyEI28sPLSf/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==',
			click: 'Click to view more >>>'
		},
		{
			name: "ENGINEER'S DAY CELEBRATIONS",
			description:
				"On September 15th, 2023, BITS Vizag had the privilege of honouring the brilliant minds that shape our future on Engineers' Day at BITS Vizag.",
			date: 'September 15, 2023',
			image: '/events/engg.jpg',
			href: 'https://www.instagram.com/p/CxP2vu5LiGo/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==',
			click: 'Click to view more >>>'
		},
		{
			name: 'Orientation Program - 2023',
			description:
				'Connecting B.Tech Freshers, 5000+ alumni, 500+ classifications, 50+ entrepreneurs, 15+ countries. Endless possibilities, one place.',
			date: 'August 30, 2023',
			image: '/events/op.jpg',
			href: 'https://www.instagram.com/p/CwkaJiwrcsa/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==',
			click: 'Click to view more >>>'
		},
		{
			name: 'The INDEPENDENCE DAY Celebrations at BITS Vizag',
			description:
				'Students and staff joined hands in commemorating Independence Day at BITS Vizag, fostering a sense of patriotism and togetherness.',
			date: 'August 15, 2023',
			image: '/events/independance.jpg',
			href: 'https://www.instagram.com/p/Cv_mxy6rXUW/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==',
			click: 'Click to view more >>>'
		},
		{
			name: 'BITS Vizag and G-TEC DST GITAM Join Hands Through Meaningful MOU Signing Ceremony.',
			description:
				'BITS Vizag and G-TEC | DST GITAM join in impactful MOU for enhanced collaboration.',
			date: 'August 10, 2023',
			image: '/events/gitam.jpg',
			href: 'https://www.instagram.com/p/CvxX9zYvBow/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==',
			click: 'Click to view more >>>'
		},
		{
			name: 'BNI Kings Meetup 2023',
			description:
				'Mr. Joshua Raju, CSE students, and KONKORDE Team gained insights at the BNI Kings Meet 2023, Hotel Ocean Vista Bay, August 10th.',
			date: 'August 10, 2023',
			image: '/events/bni.jpg',
			href: 'https://www.instagram.com/p/Cvw0ub-L5SV/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
			click: 'Click to view more >>>'
		},
		{
			name: 'The 234 Battalion CRPF organized a spectacular event at the Picturesque Campus of BITS Vizag',
			description:
				'The serene campus of BITS Vizag was transformed into a mesmerizing venue as the 234 Battalion CRPF hosted an impressive event.',
			date: 'July 27, 2023',
			image: '/events/crpf.jpg',
			href: 'https://www.instagram.com/p/CvMyAiwr3v3/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==',
			click: 'Click to view more >>>'
		},
		{
			name: 'MoU Signing Ceremony - BITS Vizag and London School of Digital Business, UK',
			description:
				'BITS Vizag and London School of Digital Business signed an MoU, enhancing digital education and opportunities. An International Interactive Workshop on the same was held.',
			date: 'July 22, 2023',
			image: '/events/lsdb.jpg',
			href: 'https://www.instagram.com/p/CvBteqCLtbR/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==',
			click: 'Click to view more >>>'
		},
		{
			name: 'INTERNATIONAL YOGA DAY CELEBRATION',
			description: 'Featuring Dr. Sundar Raj Perumali, Director, Aroghyadhatri.',
			date: 'June 21, 2023',
			image: '/events/6.jpeg',
			href: 'https://www.instagram.com/p/Ctv-lUWroBU/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==',
			click: 'Click to view more >>>'
		},
		{
			name: 'GRADUATION DAY CELEBRATION',
			description: 'Featuring Chief Guest Prof. G. Swami Naidu, Registrar - JNTU GV.',
			date: 'September 2, 2022',
			image: '/events/7.jpg',
			href: 'https://www.instagram.com/p/CrtQ2fwPY26/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==',
			click: 'Click to view more >>>'
		}
	];

	import { animate } from 'motion';
	function scaleUp(element) {
		animate(document.querySelector(element), { scale: 1.2 }, { duration: 0.3 });
	}

	function scaleDown(element) {
		animate(element, { scale: 1 }, { duration: 0.3 });
	}

	let limit = 10;
	function showMore() {
		limit = events.length;
	}
</script>

<section class="max-w-7xl mx-auto px-6 py-24 bg-white">
	<!-- ✅ REFINED CLEAN HEADER -->
	<div class="max-w-2xl mb-12" data-aos="fade-up">
		<h2 class="text-2xl md:text-4xl font-semibold tracking-tight text-slate-900/90">
			Campus <span class="text-amber-600 font-semibold">Highlights</span>
		</h2>

		<p class="text-sm md:text-base text-slate-700 mt-2 leading-relaxed">
			Events, achievements, and moments that reflect campus life.
		</p>

		<div
			class="h-[2px] bg-amber-500 mt-4 rounded-full"
			data-aos="fade-right"
			data-aos-delay="200"
			style="width: 40px;"
		></div>
	</div>

	<!-- 🔧 2. CLEAN PREMIUM GRID (Weighted for Right-side impact) -->
	<div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
		<!-- 🎯 3. EVENT LIST (5 Columns) -->
		<div class="lg:col-span-5 flex flex-col gap-8">
			{#each events.slice(0, 5) as event, i}
				<div
					class="flex gap-5 items-start group cursor-pointer"
					data-aos="fade-up"
					data-aos-delay={i * 80}
				>
					<!-- Fixed Image: STRICT 32x32 (w-32 h-32) -->
					<a
						href={event.href}
						target="_blank"
						class="w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden flex-shrink-0 shadow-md bg-slate-50 border border-slate-100 block"
					>
						<img
							src={event.image}
							alt={event.name}
							class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
							loading="lazy"
						/>
					</a>

					<!-- Content Area -->
					<div class="flex-1 pt-0.5">
						<a href={event.href} target="_blank" class="block group/title">
							<h3
								class="text-lg font-semibold text-slate-900 group-hover:text-amber-600 transition-colors leading-tight mb-2"
							>
								{event.name}
							</h3>
						</a>

						<p
							class="text-sm text-slate-600 mt-1 leading-relaxed line-clamp-2 md:line-clamp-3 mb-3"
						>
							{event.description}
						</p>

						<div
							class="text-[11px] text-slate-500 font-bold uppercase tracking-wide flex items-center gap-2"
						>
							<span class="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
							{event.date}
						</div>
					</div>
				</div>
			{/each}
		</div>

		<!-- 💎 4. FEATURED / CTA COLUMN (6 Columns, Offset to Right) -->
		<div class="lg:col-span-7 lg:col-start-7 sticky top-24 hidden lg:block">
			<div
				class="bg-slate-950 rounded-2xl p-10 text-white relative overflow-hidden shadow-2xl min-h-[720px] flex flex-col justify-between group"
				data-aos="fade-left"
			>
				<!-- Subtle Background Mesh -->
				<div class="absolute inset-0 opacity-20 pointer-events-none">
					<div
						class="absolute -top-24 -right-24 w-64 h-64 bg-amber-500 rounded-full blur-[100px]"
					></div>
					<div
						class="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500 rounded-full blur-[100px]"
					></div>
				</div>

				<div class="relative z-10">
					<div
						class="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-[10px] font-bold uppercase tracking-widest mb-8"
					>
						<span class="w-1 h-1 bg-amber-400 rounded-full animate-ping"></span>
						Social Highlights
					</div>

					<h2 class="text-3xl md:text-4xl font-bold mb-6 leading-tight">
						Experience the <br />
						<span class="text-amber-500 italic font-serif">Vibrancy</span> on <br />
						Instagram
					</h2>

					<p class="text-slate-400 text-sm md:text-base leading-relaxed mb-8 max-w-sm">
						Get daily updates, student stories, and behind-the-scenes looks at life at BITS Vizag.
					</p>
				</div>

				<div class="relative z-10">
					<a
						href="https://www.instagram.com/bits_vizag_official/"
						target="_blank"
						class="inline-flex items-center gap-4 bg-white text-slate-950 px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-rose-500 transition-colors shadow-lg group/ig"
					>
						Follow @bitsvizag
						<i
							class="fa-brands fa-instagram text-base group-hover/ig:scale-110 transition-transform"
						></i>
					</a>
				</div>

				<!-- Decorative Glimpse Grid -->
				<div
					class="absolute bottom-0 right-0 w-1/2 h-1/2 translate-x-1/4 translate-y-1/4 opacity-20 group-hover:opacity-40 transition-opacity duration-1000 rotate-12"
				>
					<div class="grid grid-cols-2 gap-4">
						{#each events.slice(6, 10) as ev}
							<div
								class="aspect-square bg-slate-800 rounded-lg overflow-hidden border border-white/5"
							>
								<img src={ev.image} alt="" class="w-full h-full object-cover" />
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- 🧠 5. EXPLORE MORE -->
	{#if limit < events.length}
		<div class="mt-20 flex justify-center pt-12 border-t border-slate-50">
			<button
				on:click={showMore}
				class="group flex items-center gap-4 bg-slate-950 text-white rounded-xl px-10 py-5 font-bold text-xs uppercase tracking-[0.2em] hover:bg-amber-600/80 shadow-xl active:scale-95"
			>
				Explore More Highlights
				<i class="fa-solid fa-chevron-down group-hover:translate-y-0.5 transition-transform"></i>
			</button>
		</div>
	{/if}
</section>

<style>
	/* Clean Motion & Hierarchy Logic */
	:global(.line-clamp-2) {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
	:global(.line-clamp-3) {
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	/* Enhanced styling for all event images */
	.image {
		box-shadow:
			0 10px 25px rgba(0, 0, 0, 0.15),
			0 4px 10px rgba(0, 0, 0, 0.1);
		border: 1px solid rgba(0, 0, 0, 0.05);
		transition: all 0.3s ease;
		object-fit: cover;
	}

	.image:hover {
		box-shadow:
			0 15px 35px rgba(0, 0, 0, 0.2),
			0 6px 15px rgba(0, 0, 0, 0.15);
		transform: translateY(-2px);
	}

	/* Mobile image styling */
	.xs\:h-\[300px\].xs\:w-\[300px\] {
		box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
		border: 1px solid rgba(0, 0, 0, 0.05);
	}
</style>
