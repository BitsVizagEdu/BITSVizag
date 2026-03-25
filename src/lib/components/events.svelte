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
			name: 'The Shield Protocol 25',
			description:
				'3-day Cybersecurity Essentials workshop with Supraja Technologies, where 200+ participants gained hands-on training in key security tools and emerging cyber trends.',
			date: 'September 8, 2025',
			image: '/events/S-Protocol.jpg',
			href: 'https://www.instagram.com/p/DOq-sPxE1C1/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
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

<!--Bigger Screens-->
<section class="lg:flex lg:flex-col lg:items-center hidden lg:py-2">
	<div class="flex divide-x-4 divide-purpleS1 justify-start">
		<div class="w-[400px] flex items-center justify-center py-8">
			<div class="w-[800px] flex flex-col bg-white">
				<div class="w-full">
					<p class="text-4xl font-bold">Events</p>
				</div>
			</div>
		</div>
		<div class="w-[400px] flex py-16 justify-end">
			<div class="text-right w-full -mr-24">
				<a href="/gallery" class="text-2xl font-bold underline whitespace-nowrap"
					>Explore More on our Instagram Handle
				</a>
			</div>
		</div>
	</div>
	{#each events.slice(0, limit) as event, i}
		{#if i % 2 === 0}
			<div class="flex divide-x-4 divide-purpleS1 justify-start">
				<div class="w-[400px] flex items-center justify-center py-10">
					<div class="flex flex-col items-center">
						<div class="w-[270px] h-[260px]">
							<a href={event.href}>
								<img
									on:mouseenter={() => scaleUp('.img' + i.toString())}
									on:mouseleave={() => scaleDown('.img' + i.toString())}
									class={`img${i} image w-full h-full object-cover rounded-2xl`}
									src={event.image}
									alt=""
								/>
							</a>
						</div>
						<div class="text-center pt-3 text-gray-500 font-light">
							{event.click}
						</div>
					</div>
					<div class="w-[400px] h-[4px] from-blue-600 to-purple-500 bg-gradient-to-r" />
				</div>
				<div class="w-[400px] flex py-10">
					<div class="flex flex-col justify-center items-center px-4">
						<p class="text-xl font-bold pb-4 text-center">{event.name}</p>
						<p class="text-md font-normal pb-4 text-gray-800 text-center">{event.description}</p>
						<div class="flex">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6 text-gray-500"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
							<p class="text-sm font-light text-gray-500 text-center pl-2">{event.date}</p>
						</div>
					</div>
				</div>
			</div>
		{:else}
			<div class="flex divide-x-4 divide-purpleS1 justify-end">
				<div class="w-[400px] py-10">
					<div class="flex flex-col justify-center items-center pt-4 px-4">
						<p class="text-xl font-bold pb-4 text-center">{event.name}</p>
						<p class="text-md font-normal pb-4 text-gray-800 text-center">{event.description}</p>
						<div class="flex">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6 text-gray-500"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
							<p class="text-sm font-light text-gray-500 text-center pl-2">{event.date}</p>
						</div>
					</div>
				</div>
				<div class="w-[400px] flex items-center justify-center py-10">
					<div class="w-[400px] h-[4px] from-blue-600 to-purple-500 bg-gradient-to-r" />
					<div class="flex flex-col items-center">
						<div class="w-[270px] h-[260px]">
							<a href={event.href}>
								<img
									on:mouseenter={() => scaleUp('.img' + i.toString())}
									on:mouseleave={() => scaleDown('.img' + i.toString())}
									class={`img${i} image w-full h-full object-cover rounded-2xl`}
									src={event.image}
									alt=""
								/>
							</a>
						</div>
						<div class="text-center pt-3 text-gray-500 font-light">
							{event.click}
						</div>
					</div>
				</div>
			</div>
		{/if}
	{/each}

	{#if limit < events.length}
		<div class="w-full flex flex-col items-center py-12 mt-4">
			<div class="w-24 h-1 bg-blue-900 rounded-full mb-8"></div>
			<button
				on:click={showMore}
				class="group flex items-center gap-6 bg-transparent border-none cursor-pointer outline-none p-0 appearance-none"
			>
				<span
					class="text-3xl lg:text-4xl text-black lowercase tracking-leading group-hover:text-[#2672d5] transition-all duration-300"
				>
					explore for more .....
				</span>
				<div
					class="h-12 w-12 rounded-full border-2 border-slate-200 flex items-center justify-center group-hover:border-[#2672d5] group-hover:bg-[#2672d5] group-hover:text-white transition-all duration-500 shadow-sm"
				>
					<i class="fa-solid fa-chevron-down text-xl group-hover:translate-y-1 transition-transform"
					></i>
				</div>
			</button>
		</div>
	{/if}
</section>

<!--<1024px Smaller screens-->
<section class="lg:hidden flex flex-col w-[100vw] bg-gray-800">
	<div class="flex md:p-10 sm:p-10 xs:py-5 xs:px-12 px-6 py-4 items-center justify-center">
		<p class="md:text-4xl sm:text-2xl text-2xl font-bold text-gray-300">Events</p>
	</div>
	<div class="flex flex-wrap xs:p-10">
		{#each events.slice(0, limit) as event, i}
			<div class="flex w-[300px] grow shrink-0 pb-6 justify-center">
				<div class="flex flex-col bg-white xs:ml-5 mx-2 rounded-2xl items-center p-4">
					<p class="md:text-sm sm:text-sm text-lg text-center py-2 font-bold">{event.name}</p>
					<p class="md:text-sm sm:text-sm text-lg text-center py-2 text-gray-900 font-[400]">
						{event.description}
					</p>
					<div class="py-4">
						<img
							class="xs:h-[300px] xs:w-[300px] object-contain rounded-lg"
							src={event.image}
							alt=""
						/>
					</div>
					<div class="flex pb-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-6 h-6 text-gray-900"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
						<p class="text-sm font-light text-gray-900 text-center pl-2">{event.date}</p>
					</div>
				</div>
			</div>
		{/each}
		{#if limit < events.length}
			<div class="flex flex-col items-center w-full py-10 mt-2">
				<div
					class="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6 opacity-50"
				></div>
				<button
					on:click={showMore}
					class="group flex items-center gap-4 bg-transparent border-none cursor-pointer outline-none p-0 appearance-none text-left"
				>
					<span
						class="text-2xl font-black text-gray-300 lowercase tracking-tight group-hover:text-white transition-all"
					>
						explore for more .....
					</span>
					<div
						class="h-10 w-10 rounded-full border border-gray-600 flex items-center justify-center group-hover:border-white group-hover:bg-white group-hover:text-gray-900 transition-all duration-500"
					>
						<i class="fa-solid fa-chevron-down text-sm"></i>
					</div>
				</button>
			</div>
		{/if}
	</div>
</section>

<style>
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
