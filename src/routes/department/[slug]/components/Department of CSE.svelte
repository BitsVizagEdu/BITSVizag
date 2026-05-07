<script>
	import { onDestroy, onMount } from 'svelte';
	import { fade, fly, slide } from 'svelte/transition';
	import HodMessage from '$lib/components/HodMessage.svelte';

	const navItems = [
		{
			id: 'about',
			label: 'About Department',
			icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
			color: '#2563eb'
		},
		{
			id: 'vision',
			label: 'Vision & Mission',
			icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
			color: '#dc2626'
		},

		{
			id: 'labs',
			label: 'Labs & Infra',
			icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
			color: '#7c3aed'
		},
		{
			id: 'jobs',
			label: 'Job Opportunities',
			icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
			color: '#f97316'
		},
		{
			id: 'faculty',
			label: 'Faculty Profile',
			icon: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2 M9 7a4 4 0 110-8 4 4 0 010 8z M23 21v-2a4 4 0 00-3-3.87 M16 3.13a4 4 0 010 7.75',
			color: '#059669'
		},
		{
			id: 'hod',
			label: 'HOD Message',
			icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
			color: '#db2777'
		},
		{
			id: 'innovations',
			label: 'Teaching Innovations',
			icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
			color: '#d97706'
		},
		{
			id: 'contact',
			label: 'Contact Info',
			icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
			color: '#0284c7'
		}
	];

	const jobRoles = [
		{
			role: 'Software Engineer / SDE',
			description: 'The core path focusing on DSA, System Design, and Full-stack development.',
			skills: ['DSA', 'OOP', 'DBMS', 'OS', 'System Design'],
			icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
			color: '#2563eb'
		},
		{
			role: 'AI / ML Engineer',
			description:
				'Building real models with Math, Statistics, and Deep Learning (PyTorch/TensorFlow).',
			skills: ['Python', 'Linear Algebra', 'ML/DL', 'LLMs'],
			icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
			color: '#7c3aed'
		},
		{
			role: 'Cybersecurity',
			description: 'Protecting digital assets through Networking, Linux, and Ethical Hacking.',
			skills: ['Linux', 'Web Security', 'Ethical Hacking', 'Cryptography'],
			icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
			color: '#ef4444'
		},
		{
			role: 'Cloud / DevOps',
			description: 'Automation and deployment using AWS, Docker, Kubernetes, and CI/CD.',
			skills: ['AWS/Azure', 'Docker', 'Kubernetes', 'Terraform'],
			icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
			color: '#06b6d4'
		},
		{
			role: 'Data Science',
			description: 'Extracting insights using Python, SQL, and advanced Data Visualization.',
			skills: ['Python', 'SQL', 'Pandas', 'Statistics'],
			icon: 'M16 8v8m-4-5v5m-4-2v2M4 18h16a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z',
			color: '#f59e0b'
		},
		{
			role: 'Embedded / IoT',
			description: 'Where hardware meets software. Focus on C/C++, RTOS, and Microcontrollers.',
			skills: ['C/C++', 'Microcontrollers', 'RTOS', 'Linux'],
			icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z',
			color: '#10b981'
		}
	];

	const careerResources = {
		jobs: [
			{ name: 'LinkedIn', url: 'https://www.linkedin.com' },
			{ name: 'Wellfound', url: 'https://wellfound.com' },
			{ name: 'Indeed', url: 'https://www.indeed.com' },
			{ name: 'Naukri', url: 'https://www.naukri.com' },
			{ name: 'Internshala', url: 'https://internshala.com' }
		],
		coding: [
			{ name: 'LeetCode', url: 'https://leetcode.com' },
			{ name: 'Codeforces', url: 'https://codeforces.com' },
			{ name: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org' }
		],
		learning: [
			{ name: 'freeCodeCamp', url: 'https://www.freecodecamp.org' },
			{ name: 'Coursera', url: 'https://www.coursera.org' },
			{ name: 'CS50', url: 'https://cs50.harvard.edu' }
		],
		resume: [
			{ name: 'Overleaf', url: 'https://www.overleaf.com' },
			{ name: 'Canva', url: 'https://www.canva.com' }
		]
	};

	const focusRoadmap = [
		{ year: '1st Year', goals: ['C/Python', 'Logic Building', 'Linux Basics'] },
		{ year: '2nd Year', goals: ['DSA', 'Web Development', 'Git/GitHub', 'SQL'] },
		{
			year: '3rd Year',
			goals: ['Specialization', 'Internships', 'Real Projects', 'System Design']
		},
		{ year: 'Final Year', goals: ['Interview Prep', 'Resume', 'Networking', 'Placement Strategy'] }
	];

	const intake = [
		{ key: 'B.Tech', value: '180', color: '#2563eb' },
		{ key: 'M.Tech', value: '18', color: '#0284c7' }
	];

	const deptImages = [
		'/cse-course1 copy.png',
		'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop',
		'/Computer-Science-1-scaled.jpg',
		'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop',
		'https://static.wixstatic.com/media/271739_7e59438cf8d84b70a4c56b170855b8c0~mv2.png/v1/fill/w_980,h_560,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/271739_7e59438cf8d84b70a4c56b170855b8c0~mv2.png'
	];

	const labCategories = [
		{
			id: 'prog',
			name: 'Programming Labs',
			color: '#2563eb',
			icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
			labs: [
				'Java Programming Lab',
				'Python Programming Lab',
				'OOPs Through Java Lab',
				'Advanced Java & Web Dev Lab',
				'C Programming Laboratory'
			],
			description:
				'Modernized coding ecosystems for mastering Java, Python, and foundational C programming with industry-grade development tools.'
		},
		{
			id: 'systems',
			name: 'Systems & Infra',
			color: '#7c3aed',
			icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01',
			labs: ['OS & Compiler Design Lab', 'Computer Networks Lab', 'FOSS Lab'],
			description:
				'Deep dive into operating systems, network protocols, and open-source infrastructure management.'
		},
		{
			id: 'data',
			name: 'Data & Structures',
			color: '#059669',
			icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4',
			labs: ['Advanced Data Structures Lab', 'Database Management Systems Lab'],
			description:
				'Architecting efficient data models and mastering large-scale database management systems.'
		},
		{
			id: 'emerging',
			name: 'Emerging Tech',
			color: '#d97706',
			icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
			labs: ['AI & Data Analytics Lab', 'Cloud Computing Lab', 'Mobile App Development Lab'],
			description:
				'Cutting-edge research in Artificial Intelligence, Cloud infrastructure, and Mobile ecosystems.'
		}
	];

	let activeLabCat = 'prog';

	const facultyRows = [
		{
			name: 'Dr. B. Poorna Satyanarayana',
			role: 'Professor',
			exp: '26 Years',
			qual: 'M.Tech., Ph.D',
			mobile: '9121214313'
		},
		{
			name: 'Mr. S. Durga Prasad',
			role: 'Assistant Professor',
			exp: '22 Years',
			qual: 'M.Tech., Ph.D',
			mobile: '99999 88888'
		},
		{
			name: 'Mrs. U. Padma Mohan',
			role: 'Associate Professor',
			exp: '30 Years',
			qual: 'M.Tech., M.C.A',
			mobile: '9849635322'
		},
		{
			name: 'Mrs. D. Kanakeswari',
			role: 'Sr. Assistant Professor',
			exp: '16 Years',
			qual: 'M.Tech., Ph.D',
			mobile: '9908132695'
		},
		{
			name: 'Mrs. P. T. S. Priya',
			role: 'Associate Professor',
			exp: '12 Years',
			qual: 'M.Tech., M.C.A',
			mobile: '7093275580'
		},
		{
			name: 'Mr. P. Joshua Raju',
			role: 'Sr. Assistant Professor',
			exp: '10 Years',
			qual: 'M.Tech., Ph.D',
			mobile: '8297293834'
		},
		{
			name: 'Mrs. T. Chaitanya',
			role: 'Assistant Professor',
			exp: '7 Years',
			qual: 'M.Tech',
			mobile: '9063497372'
		},
		{
			name: 'Ms. S. Samyukta',
			role: 'Assistant Professor',
			exp: '5 Years',
			qual: 'M.Tech',
			mobile: '7981782250'
		},
		{
			name: 'Mr. G. Kishore',
			role: 'Assistant Professor',
			exp: '4 Years',
			qual: 'M.Tech',
			mobile: '9177262145'
		},
		{
			name: 'Mrs. P. Gayathri',
			role: 'Assistant Professor',
			exp: '3.2 Years',
			qual: 'M.Tech',
			mobile: '9866247778'
		},
		{
			name: 'Mrs. M. Sai Prasanna',
			role: 'Assistant Professor',
			exp: '2 Years',
			qual: 'M.Tech., M.C.A',
			mobile: '7382070704'
		},
		{
			name: 'Ms. D. Sriya Rani',
			role: 'Assistant Professor',
			exp: '1.7 Years',
			qual: 'M.Tech',
			mobile: '9381458890'
		},
		{
			name: 'Ms. G. Sushma',
			role: 'Assistant Professor',
			exp: '1 Year',
			qual: 'M.Tech',
			mobile: '8328181573'
		},
		{
			name: 'Ms. S. Harshini',
			role: 'Assistant Professor',
			exp: '1 Year',
			qual: 'M.Tech',
			mobile: '7893492709'
		},
		{
			name: 'Mr. S. Mouli',
			role: 'Assistant Professor',
			exp: '1 Year',
			qual: 'M.Tech',
			mobile: '9885079970'
		},
		{
			name: 'Ms. K. Srinija',
			role: 'Assistant Professor',
			exp: '1 Year',
			qual: 'M.Tech',
			mobile: '8309666292'
		},
		{
			name: 'Mr. N. Vineeth',
			role: 'Assistant Professor',
			exp: '1 Year',
			qual: 'M.Tech',
			mobile: '9491090696'
		}
	];

	let facultySearch = '';
	$: filteredFacultyRows = facultyRows.filter(
		(f) =>
			f.name.toLowerCase().includes(facultySearch.toLowerCase()) ||
			f.role.toLowerCase().includes(facultySearch.toLowerCase()) ||
			f.qual.toLowerCase().includes(facultySearch.toLowerCase())
	);

	function downloadFacultyPDF() {
		window.print();
	}

	const visionMissionTabs = [
		{
			id: 'vision',
			label: 'Vision',
			color: '#10b981',
			icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
		},
		{ id: 'mission', label: 'Mission', color: '#3b82f6', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
		{
			id: 'peos',
			label: 'PEOs',
			color: '#8b5cf6',
			icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
		},
		{
			id: 'psos',
			label: 'PSOs',
			color: '#f97316',
			icon: 'M11 4a2 2 0 114 0v1a2 2 0 11-4 0V4zM7 8a2 2 0 012-2h6a2 2 0 012 2v1a2 2 0 01-2 2H9a2 2 0 01-2-2V8zM3 13a2 2 0 012-2h14a2 2 0 012 2v1a2 2 0 01-2 2H5a2 2 0 01-2-2v-1z'
		},
		{ id: 'pos', label: 'POs', color: '#0ea5e9', icon: 'M4 6h16M4 10h16M4 14h16M4 18h16' },
		{
			id: 'knowledge',
			label: 'Knowledge',
			color: '#4f46e5',
			icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
		},
		{
			id: 'sdgs',
			label: 'SDGs',
			color: '#d946ef',
			icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
		}
	];

	let activeVmTab = 'vision';
	$: activeTabColor = visionMissionTabs.find((t) => t.id === activeVmTab)?.color || '#10b981';

	const vmContent = {
		vision: {
			title: 'Our Vision',
			text: '“Nurturing future-ready engineers with technical mastery, innovative thinking, and ethical values to solve global challenges.”'
		},
		mission: [
			{
				id: 'M1',
				text: 'Deliver industry-aligned education in AI, Cyber Security, and emerging technologies.'
			},
			{
				id: 'M2',
				text: 'Foster practical learning through modern labs, research, and real-time projects.'
			},
			{
				id: 'M3',
				text: 'Cultivate critical thinking, teamwork, and continuous self-learning skills.'
			},
			{ id: 'M4', text: 'Drive social impact through ethical leadership and technology solutions.' }
		],
		peos: [
			{ id: 'PEO1', text: 'Build elite careers in global software industries and research.' },
			{ id: 'PEO2', text: 'Adapt swiftly to evolving tech and industry requirements.' },
			{ id: 'PEO3', text: 'Solve complex industrial and societal problems responsibly.' },
			{ id: 'PEO4', text: 'Demonstrate lifelong learning and professional leadership.' }
		],
		psos: [
			{ id: 'PSO1', text: 'Apply modern tools and programming for efficient engineering.' },
			{ id: 'PSO2', text: 'Design intelligent AI, Cloud, and Security-driven systems.' },
			{ id: 'PSO3', text: 'Develop scalable, secure, and user-centric software solutions.' }
		],
		pos: [
			{ id: 'PO1', title: 'Knowledge', text: 'Apply core computing and engineering fundamentals.' },
			{ id: 'PO2', title: 'Analysis', text: 'Identify and analyze complex technical challenges.' },
			{ id: 'PO3', title: 'Design', text: 'Architect innovative software systems for users.' },
			{ id: 'PO4', title: 'Research', text: 'Use modern methods to develop technical solutions.' },
			{ id: 'PO5', title: 'Modern Tools', text: 'Utilize latest frameworks and cloud platforms.' },
			{ id: 'PO6', title: 'Ethics', text: 'Practice professional and cyber responsibility.' },
			{ id: 'PO7', title: 'Teamwork', text: 'Work effectively in multidisciplinary environments.' },
			{
				id: 'PO8',
				title: 'Communication',
				text: 'Present technical ideas with clarity and precision.'
			},
			{ id: 'PO9', title: 'Learning', text: 'Stay updated with emerging industry trends.' }
		],
		knowledge: [
			{ cat: 'Foundations', items: 'Data Structures, Algorithms, OS, DBMS, Networks, OOPs.' },
			{ cat: 'Emerging Tech', items: 'AI, ML, Generative AI, Cloud, IoT, Blockchain, Security.' },
			{ cat: 'Dev Skills', items: 'Full Stack, Mobile Apps, UI/UX, API, DevOps Practices.' },
			{ cat: 'Readiness', items: 'Internships, Hackathons, Open Source, Aptitude Training.' },
			{
				cat: 'Innovation',
				items: 'Research-driven learning, Startup incubation, Product thinking.'
			}
		],
		sdgs: [
			{ goal: 'Quality Education', desc: 'Promoting skill-oriented modern technical training.' },
			{
				goal: 'Industry Innovation',
				desc: 'Driving sustainable technological and research growth.'
			},
			{ goal: 'Decent Work', desc: 'Preparing students for global career opportunities.' },
			{ goal: 'Reduced Inequalities', desc: 'Ensuring digital empowerment and equal learning.' },
			{
				goal: 'Sustainable Communities',
				desc: 'Building solutions that improve societal quality of life.'
			}
		]
	};

	let activeNav = 'about';
	let mounted = false;
	let currentImg = 0;
	let sectionObserver;

	function scrollToSection(id) {
		const el = document.getElementById(id);
		if (el) {
			window.scrollTo({
				top: el.offsetTop - 100,
				behavior: 'smooth'
			});
		}
	}

	onMount(() => {
		mounted = true;
		const interval = setInterval(() => {
			currentImg = (currentImg + 1) % deptImages.length;
		}, 4000);

		const targets = navItems.map((item) => document.getElementById(item.id)).filter(Boolean);
		sectionObserver = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
						activeNav = entry.target.id;
					}
				});
			},
			{ threshold: 0.3, rootMargin: '-10% 0px -40% 0px' }
		);
		targets.forEach((t) => sectionObserver.observe(t));

		return () => clearInterval(interval);
	});

	onDestroy(() => {
		if (sectionObserver) sectionObserver.disconnect();
	});
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
		rel="stylesheet"
	/>
	<link
		href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="dept-premium-root" class:mounted>
	<!-- Hero Header -->
	<header class="header-hero">
		<div class="header-overlay"></div>
		<div class="header-content" in:fly={{ y: 30, duration: 1000 }}>
			<div class="welcome-text inter">
				{#each 'Welcome to the CSE 2026'.split('') as char, i}
					<span class="animated-char" style="animation-delay: {i * 0.05}s">
						{char === ' ' ? '\u00A0' : char}
					</span>
				{/each}
			</div>

			<h1 class="satoshi leading-[0.6rem]">Computer Science and Engineering</h1>
		</div>
	</header>

	<div class="main-content-layout">
		<!-- Sidebar Navigation -->
		<aside class="side-nav-container">
			<div class="side-nav-card">
				<div class="side-nav-title satoshi">DEPARTMENT MENU</div>
				<nav class="side-nav-list">
					{#each navItems as item}
						<button
							class="side-nav-btn inter"
							class:active={activeNav === item.id}
							on:click={() => scrollToSection(item.id)}
							style="--nav-accent: {item.color}"
						>
							<div class="nav-btn-icon">
								<svg
									viewBox="0 0 24 24"
									width="18"
									height="18"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
								>
									<path d={item.icon}></path>
								</svg>
							</div>
							<span class="nav-btn-label">{item.label}</span>
							{#if activeNav === item.id}
								<div class="nav-active-dot" in:fade></div>
							{/if}
						</button>
					{/each}
				</nav>
			</div>
		</aside>

		<!-- Main Content Area -->
		<main class="content-body-grid">
			<!-- About Department -->
			<section id="about" class="dept-section-card" style="--section-accent: #2563eb">
				<div class="section-top">
					<div class="section-title-wrap">
						<h2 class="satoshi">About Department</h2>
						<div class="section-underline"></div>
					</div>
					<div class="intake-group">
						{#each intake as item}
							<div class="intake-badge inter" style="--bg: {item.color}">
								<span class="key">{item.key}:</span>
								<span class="val">{item.value} Seats</span>
							</div>
						{/each}
					</div>
				</div>
				<div class="about-grid-content">
					<div class="about-text-side">
						<p class="inter main-para">
							The Department of Computer Science and Engineering at BITS Vizag is a center of
							academic excellence dedicated to producing world-class engineers.
						</p>
						<p class="inter sub-para">
							Established in 2008, the department has evolved into a thriving community of 180
							undergraduate and 18 postgraduate students. We focus on outcome-based education,
							industry collaboration, and cutting-edge research in AI, Data Science, and Modern
							Systems.
						</p>
					</div>
					<div class="about-visual-side">
						<div class="visual-slideshow">
							{#each deptImages as img, i}
								{#if currentImg === i}
									<img
										src={img}
										alt="Dept View {i}"
										in:fade={{ duration: 800 }}
										out:fade={{ duration: 800 }}
									/>
								{/if}
							{/each}
							<div class="slideshow-indicators">
								{#each deptImages as _, i}
									<div class="dot" class:active={currentImg === i}></div>
								{/each}
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>

		<!-- Vision & Mission Section -->
		<section
			id="vision"
			class="dept-section-card vm-premium-section"
			style="--section-accent: {activeTabColor}"
		>
			<div class="section-top">
				<div class="section-title-wrap">
					<div class="vm-title-row">
						<div class="vm-icon-badge" style="color: {activeTabColor}">
							<svg
								viewBox="0 0 24 24"
								width="24"
								height="24"
								fill="none"
								stroke="currentColor"
								stroke-width="2.5"
							>
								<circle cx="12" cy="12" r="3"></circle>
								<path
									d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"
								></path>
							</svg>
						</div>
						<h2 class="satoshi">Vision & Mission</h2>
					</div>
					<div class="section-underline"></div>
				</div>
			</div>

			<!-- VM Tab Navigation -->
			<div class="vm-tabs-nav scrollbar-hide">
				{#each visionMissionTabs as tab}
					<button
						class="vm-tab-btn inter"
						class:active={activeVmTab === tab.id}
						on:click={() => (activeVmTab = tab.id)}
						style="--tab-color: {tab.color}"
					>
						<svg
							viewBox="0 0 24 24"
							width="16"
							height="16"
							fill="none"
							stroke="currentColor"
							stroke-width="2.5"
						>
							<path d={tab.icon}></path>
						</svg>
						<span>{tab.label}</span>
					</button>
				{/each}
			</div>

			<!-- VM Content Display -->
			<div class="vm-content-viewport">
				{#key activeVmTab}
					<div class="vm-tab-panel" in:fade={{ duration: 300 }}>
						{#if activeVmTab === 'vision'}
							<div class="vision-panel" in:fly={{ y: 20, duration: 500, delay: 100 }}>
								<h3 class="satoshi panel-title">Our Vision</h3>
								<p class="inter vision-quote">{vmContent.vision.text}</p>
							</div>
						{:else if activeVmTab === 'mission'}
							<div class="mission-panel">
								<div class="panel-grid">
									{#each vmContent.mission as m, i}
										<div class="m-card" in:fly={{ y: 30, duration: 500, delay: i * 100 }}>
											<span class="m-id satoshi">{m.id}</span>
											<p class="inter">{m.text}</p>
										</div>
									{/each}
								</div>
							</div>
						{:else if activeVmTab === 'peos'}
							<div class="peos-panel">
								<div class="panel-list">
									{#each vmContent.peos as peo, i}
										<div class="peo-item" in:fly={{ x: -20, duration: 400, delay: i * 100 }}>
											<div class="peo-dot"></div>
											<div class="peo-content">
												<span class="peo-id satoshi">{peo.id}</span>
												<p class="inter">{peo.text}</p>
											</div>
										</div>
									{/each}
								</div>
							</div>
						{:else if activeVmTab === 'psos'}
							<div class="psos-panel">
								<div class="panel-grid">
									{#each vmContent.psos as pso, i}
										<div class="pso-card" in:fly={{ y: 30, duration: 500, delay: i * 100 }}>
											<div class="pso-icon" style="background: {activeTabColor}">
												<svg
													viewBox="0 0 24 24"
													width="20"
													height="20"
													fill="none"
													stroke="currentColor"
													stroke-width="2"
												>
													<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
												</svg>
											</div>
											<div class="pso-text">
												<span class="pso-id satoshi">{pso.id}</span>
												<p class="inter">{pso.text}</p>
											</div>
										</div>
									{/each}
								</div>
							</div>
						{:else if activeVmTab === 'pos'}
							<div class="pos-panel">
								<div class="pos-scroll-area scrollbar-hide">
									<div class="pos-grid">
										{#each vmContent.pos as po, i}
											<div class="po-card" in:fly={{ y: 20, duration: 400, delay: i * 50 }}>
												<div class="po-header">
													<span class="po-id satoshi">{po.id}</span>
													<h4 class="satoshi">{po.title}</h4>
												</div>
												<p class="inter">{po.text}</p>
											</div>
										{/each}
									</div>
								</div>
							</div>
						{:else if activeVmTab === 'knowledge'}
							<div class="knowledge-panel">
								<div class="k-grid">
									{#each vmContent.knowledge as k, i}
										<div class="k-card" in:fly={{ y: 30, duration: 500, delay: i * 100 }}>
											<h4 class="satoshi">{k.cat}</h4>
											<p class="inter">{k.items}</p>
										</div>
									{/each}
								</div>
							</div>
						{:else if activeVmTab === 'sdgs'}
							<div class="sdgs-panel">
								<div class="sdg-grid">
									{#each vmContent.sdgs as sdg, i}
										<div
											class="sdg-card"
											in:fly={{ x: 20, duration: 400, delay: i * 100 }}
											style="--sdg-color: {['#4C9F38', '#BF1D2D', '#26BDE2', '#FCC30B', '#E5243B'][
												i % 5
											]}"
										>
											<div class="sdg-icon-wrap" style="color: var(--sdg-color)">
												<svg
													viewBox="0 0 24 24"
													width="24"
													height="24"
													fill="none"
													stroke="currentColor"
													stroke-width="2"
												>
													<circle cx="12" cy="12" r="10"></circle>
													<path d="M12 6v6l4 2"></path>
												</svg>
											</div>
											<div class="sdg-content">
												<h4 class="satoshi">{sdg.goal}</h4>
												<p class="inter">{sdg.desc}</p>
											</div>
										</div>
									{/each}
								</div>
							</div>
						{/if}
					</div>
				{/key}
			</div>
		</section>

		<!-- Labs & Infrastructure - Now Full Width & Interactive -->
		<section
			id="labs"
			class="dept-section-card labs-premium-section"
			style="--section-accent: #7c3aed"
		>
			<div class="section-top">
				<div class="section-title-wrap">
					<div class="labs-title-row">
						<div class="labs-icon-badge">
							<svg
								viewBox="0 0 24 24"
								width="24"
								height="24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
								></path>
							</svg>
						</div>
						<h2 class="satoshi">Labs & Infrastructure</h2>
					</div>
					<div class="section-underline"></div>
				</div>
			</div>

			<div class="labs-interactive-grid">
				<!-- Category Navigation -->
				<div class="labs-nav-sidebar scrollbar-hide">
					{#each labCategories as cat}
						<button
							class="lab-nav-item inter"
							class:active={activeLabCat === cat.id}
							on:click={() => (activeLabCat = cat.id)}
							style="--nav-color: {cat.color}"
						>
							<div class="nav-icon">
								<svg
									viewBox="0 0 24 24"
									width="20"
									height="20"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
								>
									<path d={cat.icon}></path>
								</svg>
							</div>
							<div class="nav-text">
								<span class="cat-name">{cat.name}</span>
								<span class="cat-count">{cat.labs.length} Facilities</span>
							</div>
							<div class="active-indicator"></div>
						</button>
					{/each}
				</div>

				<!-- Content Display Area -->
				<div class="labs-display-pane">
					{#each labCategories as cat}
						{#if activeLabCat === cat.id}
							<div class="labs-content-wrap" in:fly={{ x: 20, duration: 400 }}>
								<div class="display-header">
									<h3 class="satoshi" style="color: {cat.color}">{cat.name}</h3>
									<p class="inter">{cat.description}</p>
								</div>

								<div class="lab-items-grid">
									{#each cat.labs as lab, i}
										<div class="lab-item-card" in:fly={{ y: 20, duration: 400, delay: i * 50 }}>
											<div class="lab-status-dot" style="background: {cat.color}"></div>
											<span class="inter lab-name">{lab}</span>
											<div class="lab-action-btn">
												<svg
													viewBox="0 0 24 24"
													width="14"
													height="14"
													fill="none"
													stroke="currentColor"
													stroke-width="3"
												>
													<path d="M5 12h14m-7-7l7 7-7 7"></path>
												</svg>
											</div>
										</div>
									{/each}
								</div>
							</div>
						{/if}
					{/each}
				</div>
			</div>

			<main class="content-body-grid">
				<!-- Job Opportunities - Career Guidance Hub -->
				<section
					id="jobs"
					class="dept-section-card jobs-premium-section"
					style="--section-accent: #f97316"
				>
					<div class="section-top">
						<div class="section-title-wrap">
							<h2 class="satoshi">Career Pathways</h2>
							<p class="inter dept-label">Strategic Industry Guidance for 2026</p>
							<div class="section-underline"></div>
						</div>
						<div class="jobs-stats inter">
							<span class="pulse-dot"></span>
							<span class="stat-text">100% Placement Target</span>
						</div>
					</div>

					<!-- Primary Roles -->
					<div class="jobs-grid">
						{#each jobRoles as job, i}
							<div class="job-card" in:fly={{ y: 20, duration: 600, delay: i * 100 }}>
								<div class="job-icon-wrap" style="--icon-bg: {job.color}">
									<svg
										viewBox="0 0 24 24"
										width="24"
										height="24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
									>
										<path d={job.icon}></path>
									</svg>
								</div>
								<div class="job-details">
									<h4 class="satoshi">{job.role}</h4>
									<p class="inter">{job.description}</p>
									<div class="job-skills">
										{#each job.skills as skill}
											<span class="skill-tag">{skill}</span>
										{/each}
									</div>
								</div>
								<div class="job-hover-accent" style="background: {job.color}"></div>
							</div>
						{/each}
					</div>

					<!-- Roadmap & Reality Check -->
					<div class="career-insights-grid">
						<div class="insight-block roadmap">
							<h3 class="satoshi">Year-wise Focus</h3>
							<div class="roadmap-timeline">
								{#each focusRoadmap as step}
									<div class="roadmap-item">
										<div class="year-label satoshi">{step.year}</div>
										<div class="goals-list inter">
											{#each step.goals as goal}
												<span>{goal}</span>
											{/each}
										</div>
									</div>
								{/each}
							</div>
						</div>

						<div class="insight-block reality">
							<h3 class="satoshi">Placements Reality Check</h3>
							<div class="reality-content inter">
								<p class="warning-text">
									Theory alone won't get you hired. Most students fail because of:
								</p>
								<ul class="fail-list">
									<li>Tutorial-copy portfolios</li>
									<li>No GitHub activity</li>
									<li>Weak communication skills</li>
									<li>Zero internships</li>
								</ul>
								<div class="success-formula">
									<span class="formula-title">Success Formula</span>
									<p>8.0+ CGPA + Strong Projects + Active GitHub + Internships = SUCCESS</p>
								</div>
							</div>
						</div>
					</div>

					<!-- Resources Hub -->
					<div class="resources-hub">
						<header class="hub-header">
							<h3 class="satoshi">Digital Resource Hub</h3>
							<p class="inter">Curated tools for learning, coding, and hiring</p>
						</header>
						<div class="hub-grid">
							{#each Object.entries(careerResources) as [category, links]}
								<div class="hub-cat">
									<h4 class="satoshi capitalize">{category}</h4>
									<div class="link-list">
										{#each links as link}
											<a
												href={link.url}
												target="_blank"
												rel="noopener noreferrer"
												class="inter resource-link"
											>
												{link.name}
												<svg
													viewBox="0 0 24 24"
													width="14"
													height="14"
													fill="none"
													stroke="currentColor"
													stroke-width="3"><path d="M7 17L17 7M7 7h10v10"></path></svg
												>
											</a>
										{/each}
									</div>
								</div>
							{/each}
						</div>
					</div>
				</section>

				<!-- Faculty Profile - Screenshot-Matched Professional Table -->
				<section id="faculty" class="dept-section-card faculty-table-section">
					<div class="section-header-row">
						<div class="section-title-wrap">
							<h2 class="satoshi">CSE Faculty</h2>
							<p class="inter dept-label">Department of CSE</p>
							<div class="section-underline"></div>
						</div>
					</div>

					<div class="table-controls-row">
						<div class="control-actions">
							<button
								class="round-action-btn download"
								on:click={downloadFacultyPDF}
								title="Download PDF"
							>
								<svg
									viewBox="0 0 24 24"
									width="20"
									height="20"
									fill="none"
									stroke="currentColor"
									stroke-width="2.5"
									><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"
									></path></svg
								>
							</button>
							<button class="round-action-btn cloud" title="Export Cloud">
								<svg
									viewBox="0 0 24 24"
									width="20"
									height="20"
									fill="none"
									stroke="currentColor"
									stroke-width="2.5"
									><path
										d="M17.5 19c3.037 0 5.5-2.463 5.5-5.5 0-2.77-2.05-5.06-4.73-5.44C17.74 4.54 14.39 2 10.5 2 6.36 2 3 5.36 3 9.5c0 .34.03.68.08 1.01C1.26 11.41 0 13.56 0 16c0 3.31 2.69 6 6 6h11.5"
									></path></svg
								>
							</button>
						</div>
						<div class="search-wrap">
							<div class="search-box">
								<svg
									viewBox="0 0 24 24"
									width="16"
									height="16"
									fill="none"
									stroke="currentColor"
									stroke-width="2.5"
									><circle cx="11" cy="11" r="8"></circle><path d="M21 21l-4.35-4.35"></path></svg
								>
								<input
									type="text"
									placeholder="Search records..."
									bind:value={facultySearch}
									class="inter"
								/>
							</div>
						</div>
					</div>

					<div class="premium-table-viewport scrollbar-hide">
						<table class="faculty-main-table">
							<thead>
								<tr class="inter">
									<th class="col-sno"
										>S.NO. <svg
											class="sort-icon"
											viewBox="0 0 24 24"
											width="10"
											height="10"
											fill="currentColor"
											><path d="M12 5l-5 5h10l-5-5zM12 19l5-5H7l5 5z"></path></svg
										></th
									>
									<th class="col-name"
										>NAME <svg
											class="sort-icon"
											viewBox="0 0 24 24"
											width="10"
											height="10"
											fill="currentColor"
											><path d="M12 5l-5 5h10l-5-5zM12 19l5-5H7l5 5z"></path></svg
										></th
									>
									<th class="col-qual"
										>HIGHEST QUALIFICATION <svg
											class="sort-icon"
											viewBox="0 0 24 24"
											width="10"
											height="10"
											fill="currentColor"
											><path d="M12 5l-5 5h10l-5-5zM12 19l5-5H7l5 5z"></path></svg
										></th
									>
									<th class="col-role"
										>DESIGNATION <svg
											class="sort-icon"
											viewBox="0 0 24 24"
											width="10"
											height="10"
											fill="currentColor"
											><path d="M12 5l-5 5h10l-5-5zM12 19l5-5H7l5 5z"></path></svg
										></th
									>
									<th class="col-exp"
										>EXPERIENCE <svg
											class="sort-icon"
											viewBox="0 0 24 24"
											width="10"
											height="10"
											fill="currentColor"
											><path d="M12 5l-5 5h10l-5-5zM12 19l5-5H7l5 5z"></path></svg
										></th
									>
									<th class="col-mobile"
										>MOBILE <svg
											class="sort-icon"
											viewBox="0 0 24 24"
											width="10"
											height="10"
											fill="currentColor"
											><path d="M12 5l-5 5h10l-5-5zM12 19l5-5H7l5 5z"></path></svg
										></th
									>
								</tr>
							</thead>
							<tbody class="inter">
								{#each filteredFacultyRows as faculty, i}
									<tr in:fly={{ y: 10, duration: 400, delay: i * 30 }}>
										<td class="td-sno">{i + 1}</td>
										<td class="td-name">
											<span class="name-val">{faculty.name}</span>
										</td>
										<td class="td-qual">{faculty.qual}</td>
										<td class="td-role">{faculty.role}</td>
										<td class="td-exp">{faculty.exp}</td>
										<td class="td-mobile">
											<a href="tel:{faculty.mobile}" class="mobile-link">
												{faculty.mobile}
											</a>
										</td>
									</tr>
								{/each}
							</tbody>
						</table>

						{#if filteredFacultyRows.length === 0}
							<div class="empty-results inter" in:fade>
								<p>No faculty records match your search.</p>
							</div>
						{/if}
					</div>
				</section>

				<!-- HOD Message - Upgraded with Impactful Motion -->
				<section
					id="hod"
					class="dept-section-card hod-premium-card"
					style="--section-accent: #db2777"
				>
					<div class="hod-container">
						<div class="hod-visual" in:fly={{ x: -40, duration: 800 }}>
							<div class="hod-image-glow"></div>
							<img src="/cse hod.jpg" alt="Prof. S. Durga Prasad" />
							<div class="hod-badge satoshi">22+ Years Exp</div>
						</div>
						<div class="hod-content" in:fly={{ x: 40, duration: 800 }}>
							<div class="quote-icon">
								<svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor" opacity="0.1">
									<path
										d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H13.017V21H14.017ZM6.01701 21L6.01701 18C6.01701 16.8954 6.91244 16 8.01701 16H11.017C11.5693 16 12.017 15.5523 12.017 15V9C12.017 8.44772 11.5693 8 11.017 8H8.01701C7.46473 8 7.01701 8.44772 7.01701 9V12C7.01701 12.5523 6.56929 13 6.01701 13H5.01701V21H6.01701Z"
									></path>
								</svg>
							</div>
							<span class="hod-eyebrow satoshi">MESSAGE FROM THE HOD</span>
							O
							<h2 class="satoshi">Prof. S. Durga Prasad</h2>
							<p class="hod-designation inter">
								Head of Department | Computer Science & Engineering
							</p>
							<div class="hod-message-body">
								<p class="inter">
									"Welcome to the Department of Computer Science and Engineering. Our mission is to
									build strong technologists with analytical depth, engineering discipline, and a
									commitment to innovation and societal progress."
								</p>
								<p class="inter signature">Prof. S. Durga Prasad</p>
							</div>
						</div>
					</div>
				</section>

				<!-- Contact - Upgraded with Action Tiles -->
				<section
					id="contact"
					class="dept-section-card contact-premium-section"
					style="--section-accent: #0284c7"
				>
					<div class="section-top">
						<div class="section-title-wrap">
							<h2 class="satoshi">Get in Touch</h2>
							<div class="section-underline"></div>
						</div>
					</div>
					<div class="contact-action-grid">
						<div class="contact-tile email" in:fly={{ y: 20, duration: 500, delay: 100 }}>
							<div class="tile-icon">
								<svg
									viewBox="0 0 24 24"
									width="24"
									height="24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									><path
										d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
									></path><polyline points="22,6 12,13 2,6"></polyline></svg
								>
							</div>
							<div class="tile-content">
								<span class="inter label">Official Email</span>
								<span class="inter value">cse@bitsvizag.com</span>
							</div>
							<a href="mailto:cse@bitsvizag.com" class="tile-link">Send Mail</a>
						</div>

						<div class="contact-tile phone" in:fly={{ y: 20, duration: 500, delay: 200 }}>
							<div class="tile-icon">
								<svg
									viewBox="0 0 24 24"
									width="24"
									height="24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									><path
										d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
									></path></svg
								>
							</div>
							<div class="tile-content">
								<span class="inter label">Phone Support</span>
								<span class="inter value">+91 91212 14313</span>
							</div>
							<a href="tel:+919999988888" class="tile-link">Call Now</a>
						</div>

						<div class="contact-tile location" in:fly={{ y: 20, duration: 500, delay: 300 }}>
							<div class="tile-icon">
								<svg
									viewBox="0 0 24 24"
									width="24"
									height="24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle
										cx="12"
										cy="10"
										r="3"
									></circle></svg
								>
							</div>
							<div class="tile-content">
								<span class="inter label">Office Location</span>
								<span class="inter value"
									>BITS Vizag campus, near bakkannapalem, Madhurawada, Visakhapatnam, AP - 530048</span
								>
							</div>
							<a href="#" class="tile-link">View Maps</a>
						</div>
					</div>
				</section>
			</main>
		</section>
	</div>
</div>

<style>
	:global(body) {
		background-color: #f8fafc;
		margin: 0;
		padding: 0;
	}

	.dept-premium-root {
		opacity: 0;
		transition: opacity 1s ease;
		background: linear-gradient(180deg, #f1f5f9 0%, #f8fafc 100%);
	}

	.dept-premium-root.mounted {
		opacity: 1;
	}

	/* Hero Header */
	.header-hero {
		height: 430px;
		background: #09090b
			url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop')
			center/cover;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		color: white;
		padding-bottom: 110px;
	}

	.header-overlay {
		position: absolute;
		inset: 0;
		background: radial-gradient(
			circle at center,
			rgba(9, 9, 11, 0.4) 0%,
			rgba(9, 9, 11, 0.85) 100%
		);
	}

	.header-content {
		position: relative;
		z-index: 10;
		padding: 0 24px;
		max-width: 1200px;
		margin-top: -30px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.welcome-text {
		display: flex;
		gap: 0;
		margin-bottom: 12px;
	}

	.animated-char {
		display: inline-block;
		font-size: 0.85rem;
		font-weight: 800;
		letter-spacing: 0.4em;
		color: #ffffff;
		text-transform: uppercase;
		opacity: 0;
		transform: translateY(10px);
		animation: charAppear 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
	}

	@keyframes charAppear {
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.header-content h1 {
		font-size: clamp(2rem, 6vw, 3.8rem);
		font-weight: 900;
		margin: 0;
		letter-spacing: -0.04em;
		line-height: 1.3;
		padding: 10px 0;
		background: linear-gradient(
			to right,
			#f4f4f5 0%,
			#ffffff 25%,
			#60a5fa 50%,
			#ffffff 75%,
			#f4f4f5 100%
		);
		background-size: 200% auto;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		animation: shine 6s linear infinite;
		filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.2));
		white-space: nowrap;
	}

	@keyframes shine {
		to {
			background-position: 200% center;
		}
	}

	/* Layout Grid */
	.main-content-layout {
		max-width: 1300px;
		margin: -180px auto 0;
		padding: 40px 24px 60px;
		display: grid;
		grid-template-columns: 320px 1fr;
		gap: 32px;
		position: relative;
		z-index: 20;
	}

	/* Sidebar */
	.side-nav-container {
		position: sticky;
		top: 40px;
		height: calc(100vh - 80px);
	}
	.side-nav-card {
		background: white;
		border-radius: 24px;
		padding: 24px;
		box-shadow: 0 20px 50px rgba(0, 0, 0, 0.05);
		border: 1px solid #e2e8f0;
	}

	.side-nav-title {
		font-size: 0.8rem;
		font-weight: 800;
		letter-spacing: 0.1em;
		color: #64748b;
		margin-bottom: 24px;
		padding-left: 12px;
	}
	.side-nav-list {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.side-nav-btn {
		display: flex;
		align-items: center;
		gap: 14px;
		padding: 12px 16px;
		border-radius: 14px;
		border: none;
		background: transparent;
		color: #475569;
		font-weight: 600;
		font-size: 0.95rem;
		cursor: pointer;
		transition: all 0.2s ease;
		text-align: left;
		position: relative;
	}

	.side-nav-btn:hover {
		background: #f8fafc;
		color: #0f172a;
		transform: translateX(5px);
	}
	.side-nav-btn.active {
		background: #f1f5f9;
		color: var(--nav-accent);
	}
	.nav-btn-icon {
		color: #94a3b8;
		transition: color 0.2s;
	}
	.side-nav-btn.active .nav-btn-icon {
		color: var(--nav-accent);
	}
	.nav-active-dot {
		position: absolute;
		right: 16px;
		width: 6px;
		height: 6px;
		background: var(--nav-accent);
		border-radius: 50%;
		box-shadow: 0 0 10px var(--nav-accent);
	}

	/* Main Section Cards */
	.content-body-grid {
		display: flex;
		flex-direction: column;
		gap: 32px;
	}

	/* Special case for Vision section to expand full width */
	#vision.vm-premium-section {
		grid-column: 1 / -1;
		width: 100%;
		margin-top: 20px;
	}

	.dept-section-card {
		background: white;
		border-radius: 32px;
		padding: 48px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
		border: 1px solid #e2e8f0;
		transition: transform 0.3s ease;
	}

	.dept-section-card:hover {
		transform: translateY(-4px);
	}
	.section-top {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 40px;
	}
	.section-title-wrap h2 {
		font-size: 2.2rem;
		font-weight: 800;
		margin: 0;
		color: #0f172a;
		letter-spacing: -0.03em;
	}
	.section-underline {
		width: 100px;
		height: 4px;
		background: linear-gradient(90deg, var(--section-accent), #0f172a);
		border-radius: 100px;
		margin-top: 12px;
		position: relative;
		overflow: hidden;
		box-shadow: 0 4px 15px -4px var(--section-accent);
		transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
	}

	.section-underline::after {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 50%;
		height: 100%;
		background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
		animation: hyper-shimmer 2.5s infinite linear;
	}

	@keyframes hyper-shimmer {
		0% {
			left: -100%;
		}
		100% {
			left: 200%;
		}
	}

	.dept-section-card:hover .section-underline {
		width: 200px;
		box-shadow: 0 6px 20px -2px var(--section-accent);
	}
	.intake-group {
		display: flex;
		gap: 12px;
	}
	.intake-badge {
		padding: 8px 16px;
		border-radius: 100px;
		background: #f8fafc;
		border: 1px solid #e2e8f0;
		font-size: 0.85rem;
		font-weight: 700;
		display: flex;
		gap: 6px;
	}
	.intake-badge .val {
		color: var(--bg);
	}

	/* About Grid */
	.about-grid-content {
		display: grid;
		grid-template-columns: 1.2fr 1fr;
		gap: 40px;
		align-items: center;
	}
	.main-para {
		font-size: 1.1rem;
		line-height: 1.5;
		color: #1e2e34;
		margin-bottom: 20px;
		font-weight: 500;
	}
	.sub-para {
		font-size: 1rem;
		line-height: 1.7;
		color: #11344e;
		text-align: justify;
	}

	/* Slideshow Styles */
	.visual-slideshow {
		position: relative;
		width: 100%;
		aspect-ratio: 4/3;
		border-radius: 24px;
		overflow: hidden;
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
		background: #f1f5f9;
	}

	.visual-slideshow img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.slideshow-indicators {
		position: absolute;
		bottom: 16px;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		gap: 8px;
		z-index: 10;
	}

	.slideshow-indicators .dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.4);
		transition: all 0.3s ease;
	}

	.slideshow-indicators .dot.active {
		background: white;
		width: 24px;
		border-radius: 4px;
	}

	/* Info Split Grid */
	.split-info-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 24px;
	}
	.info-card {
		background: #f8fafc;
		padding: 32px;
		border-radius: 24px;
		border: 1px solid #f1f5f9;
	}
	.info-card h3 {
		font-size: 1.2rem;
		font-weight: 800;
		color: #0f172a;
		margin: 0 0 16px;
	}
	.info-card p,
	.info-card li {
		font-size: 0.95rem;
		color: #475569;
		line-height: 1.6;
	}
	.info-card ul {
		padding-left: 20px;
		display: grid;
		gap: 10px;
	}

	/* Faculty Screenshot-Matched Table Section */
	.faculty-table-section {
		background: #ffffff !important;
		padding: 48px !important;
	}

	.section-header-row {
		margin-bottom: 32px;
	}

	.dept-label {
		font-size: 0.9rem;
		color: #64748b;
		font-weight: 600;
		margin: 4px 0 0;
	}

	.table-controls-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 24px;
		gap: 20px;
	}

	.control-actions {
		display: flex;
		gap: 12px;
	}

	.round-action-btn {
		width: 44px;
		height: 44px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		border: none;
		cursor: pointer;
		transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
		color: white;
	}

	.round-action-btn.download {
		background: #10b981;
		box-shadow: 0 4px 12px rgba(16, 185, 129, 0.2);
	}
	.round-action-btn.cloud {
		background: #3b82f6;
		box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
	}

	.round-action-btn:hover {
		transform: scale(1.1);
		filter: brightness(1.1);
	}

	.search-box {
		display: flex;
		align-items: center;
		gap: 10px;
		background: #f8fafc;
		border: 1px solid #e2e8f0;
		padding: 10px 18px;
		border-radius: 100px;
		width: 300px;
		transition: all 0.3s;
	}

	.search-box:focus-within {
		border-color: #3b82f6;
		background: white;
		box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
	}

	.search-box input {
		border: none;
		background: transparent;
		outline: none;
		font-size: 0.9rem;
		width: 100%;
		color: #1e293b;
	}

	.premium-table-viewport {
		border-radius: 16px;
		border: 1px solid #e2e8f0;
		overflow: hidden;
	}

	.faculty-main-table {
		width: 100%;
		border-collapse: collapse;
		text-align: left;
	}

	.faculty-main-table thead tr {
		background: #0f172a;
		color: #ffffff;
	}
	/* Job Opportunities Section */
	.jobs-premium-section {
		background: #ffffff !important;
	}

	.jobs-stats {
		display: flex;
		align-items: center;
		gap: 10px;
		background: #fff7ed;
		padding: 8px 16px;
		border-radius: 100px;
		border: 1px solid #ffedd5;
	}

	.pulse-dot {
		width: 8px;
		height: 8px;
		background: #f97316;
		border-radius: 50%;
		box-shadow: 0 0 0 0 rgba(249, 115, 22, 0.4);
		animation: pulse 2s infinite;
	}

	@keyframes pulse {
		0% {
			box-shadow: 0 0 0 0 rgba(249, 115, 22, 0.4);
		}
		70% {
			box-shadow: 0 0 0 10px rgba(249, 115, 22, 0);
		}
		100% {
			box-shadow: 0 0 0 0 rgba(249, 115, 22, 0);
		}
	}

	.stat-text {
		font-size: 0.8rem;
		font-weight: 700;
		color: #9a3412;
	}

	.jobs-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: 20px;
		margin-top: 10px;
	}

	.job-card {
		background: #f8fafc;
		border: 1px solid #f1f5f9;
		border-radius: 24px;
		padding: 24px;
		position: relative;
		overflow: hidden;
		transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.job-card:hover {
		background: white;
		transform: translateY(-8px);
		box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.08);
		border-color: #e2e8f0;
	}

	.job-icon-wrap {
		width: 52px;
		height: 52px;
		background: var(--icon-bg);
		color: white;
		border-radius: 16px;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 8px 16px -4px var(--icon-bg);
		opacity: 0.9;
	}

	.job-details h4 {
		font-size: 1.15rem;
		font-weight: 800;
		color: #0f172a;
		margin: 0 0 8px;
	}

	.job-details p {
		font-size: 0.85rem;
		color: #64748b;
		line-height: 1.5;
		margin: 0 0 16px;
	}

	.job-skills {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
	}

	.skill-tag {
		padding: 4px 10px;
		background: #ffffff;
		border: 1px solid #e2e8f0;
		border-radius: 6px;
		font-size: 0.7rem;
		font-weight: 700;
		color: #475569;
		transition: all 0.3s;
	}

	.job-card:hover .skill-tag {
		border-color: #cbd5e1;
		background: #f8fafc;
	}

	/* Career Insights Grid */
	.career-insights-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 32px;
		margin-top: 48px;
	}

	.insight-block {
		background: #f8fafc;
		border-radius: 28px;
		padding: 32px;
		border: 1px solid #f1f5f9;
	}

	.insight-block h3 {
		font-size: 1.4rem;
		font-weight: 800;
		color: #0f172a;
		margin-bottom: 24px;
	}

	.roadmap-timeline {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.roadmap-item {
		display: grid;
		grid-template-columns: 100px 1fr;
		gap: 20px;
		position: relative;
	}

	.roadmap-item::before {
		content: '';
		position: absolute;
		left: 110px;
		top: 30px;
		bottom: -20px;
		width: 2px;
		background: #e2e8f0;
	}

	.roadmap-item:last-child::before {
		display: none;
	}

	.year-label {
		font-size: 0.75rem;
		font-weight: 900;
		text-transform: uppercase;
		color: #f97316;
		padding-top: 4px;
	}

	.goals-list {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}

	.goals-list span {
		background: white;
		padding: 6px 12px;
		border-radius: 10px;
		font-size: 0.8rem;
		font-weight: 600;
		color: #334155;
		border: 1px solid #e2e8f0;
	}

	.warning-text {
		color: #ef4444;
		font-weight: 700;
		font-size: 0.9rem;
		margin-bottom: 20px;
	}

	.fail-list {
		list-style: none;
		padding: 0;
		margin-bottom: 24px;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.fail-list li {
		padding-left: 28px;
		position: relative;
		font-size: 0.9rem;
		font-weight: 500;
		color: #475569;
	}

	.fail-list li::before {
		content: '✕';
		position: absolute;
		left: 0;
		color: #ef4444;
		font-weight: 900;
	}

	.success-formula {
		background: #ecfdf5;
		padding: 24px;
		border-radius: 20px;
		border: 1px solid #d1fae5;
	}

	.formula-title {
		display: block;
		font-size: 0.75rem;
		font-weight: 900;
		color: #059669;
		text-transform: uppercase;
		margin-bottom: 8px;
	}

	.success-formula p {
		font-size: 0.95rem;
		font-weight: 700;
		color: #065f46;
		margin: 0;
	}

	/* Resources Hub */
	.resources-hub {
		margin-top: 48px;
		background: #0f172a;
		border-radius: 32px;
		padding: 40px;
		color: white;
	}

	.hub-header {
		margin-bottom: 32px;
	}

	.hub-header h3 {
		font-size: 1.6rem;
		font-weight: 800;
		margin-bottom: 8px;
	}

	.hub-header p {
		font-size: 0.9rem;
		color: #94a3b8;
	}

	.hub-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 40px;
	}

	.hub-cat h4 {
		font-size: 0.8rem;
		font-weight: 900;
		color: #f97316;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		margin-bottom: 20px;
	}

	.link-list {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.resource-link {
		display: flex;
		align-items: center;
		justify-content: space-between;
		text-decoration: none;
		color: #cbd5e1;
		font-size: 0.9rem;
		font-weight: 600;
		transition: all 0.3s;
		padding: 4px 0;
	}

	.resource-link:hover {
		color: white;
		transform: translateX(5px);
	}

	@media (max-width: 1000px) {
		.career-insights-grid {
			grid-template-columns: 1fr;
		}
	}

	.faculty-main-table th {
		padding: 18px 24px;
		font-size: 0.7rem;
		font-weight: 800;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		white-space: nowrap;
	}

	.sort-icon {
		margin-left: 6px;
		opacity: 0.5;
	}

	.faculty-main-table td {
		padding: 16px 24px;
		border-bottom: 1px solid #f1f5f9;
		font-size: 0.9rem;
		color: #334155;
	}

	.faculty-main-table tr:last-child td {
		border-bottom: none;
	}

	.name-val {
		color: #0284c7;
		font-weight: 700;
	}

	.td-sno {
		font-weight: 700;
		color: #64748b;
	}

	.mobile-link {
		color: #059669;
		font-weight: 700;
		text-decoration: none;
		font-size: 0.85rem;
	}

	.mobile-link:hover {
		text-decoration: underline;
	}

	.empty-results {
		padding: 40px;
		text-align: center;
		color: #94a3b8;
	}

	@media print {
		/* Hide everything by default */
		:global(body) * {
			display: none !important;
		}

		/* Show only the faculty section and its parents/children */
		:global(.dept-premium-root),
		:global(.dept-premium-root) .main-content-layout,
		:global(.dept-premium-root) .content-body-grid,
		#faculty,
		#faculty * {
			display: block !important;
		}

		/* Reset table display */
		.faculty-main-table {
			display: table !important;
		}
		.faculty-main-table tr {
			display: table-row !important;
		}
		.faculty-main-table th,
		.faculty-main-table td {
			display: table-cell !important;
		}

		#faculty {
			position: static !important;
			padding: 0 !important;
			margin: 0 !important;
			border: none !important;
			box-shadow: none !important;
		}

		/* Hide UI elements from print */
		.section-header-row,
		.table-controls-row,
		.section-underline::after,
		.sort-icon {
			display: none !important;
		}

		.faculty-main-table thead tr {
			background: #0f172a !important;
			color: white !important;
			-webkit-print-color-adjust: exact;
		}
	}

	@media (max-width: 1000px) {
		.table-controls-row {
			flex-direction: column;
			align-items: flex-start;
		}
		.search-box {
			width: 100%;
		}
		.premium-table-viewport {
			overflow-x: auto;
		}
	}

	/* Labs Premium Section */
	.labs-premium-section {
		grid-column: 1 / -1;
		width: 100%;
		margin-top: 20px;
		background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%) !important;
	}

	.labs-title-row {
		display: flex;
		align-items: center;
		gap: 16px;
	}

	.labs-icon-badge {
		background: #7c3aed;
		color: white;
		padding: 10px;
		border-radius: 14px;
		box-shadow: 0 8px 16px -4px rgba(124, 58, 237, 0.3);
	}

	.labs-intro {
		max-width: 600px;
		color: #64748b;
		font-size: 1rem;
		margin: 12px 0 0;
		line-height: 1.6;
	}

	.labs-interactive-grid {
		display: grid;
		grid-template-columns: 300px 1fr;
		gap: 40px;
		margin-top: 40px;
		min-height: 450px;
	}

	.labs-nav-sidebar {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.lab-nav-item {
		display: flex;
		align-items: center;
		gap: 16px;
		padding: 16px;
		background: white;
		border: 1px solid #e2e8f0;
		border-radius: 20px;
		cursor: pointer;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		text-align: left;
		position: relative;
		overflow: hidden;
	}

	.lab-nav-item:hover {
		border-color: var(--nav-color);
		transform: translateX(8px);
		background: #fdfdfd;
	}

	.lab-nav-item.active {
		background: white;
		border-color: var(--nav-color);
		box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
	}

	.lab-nav-item .nav-icon {
		padding: 10px;
		background: #f8fafc;
		border-radius: 12px;
		color: #94a3b8;
		transition: all 0.3s;
	}

	.lab-nav-item.active .nav-icon {
		background: var(--nav-color);
		color: white;
	}

	.nav-text {
		display: flex;
		flex-direction: column;
	}

	.cat-name {
		font-weight: 800;
		font-size: 0.95rem;
		color: #1e293b;
	}

	.cat-count {
		font-size: 0.75rem;
		color: #94a3b8;
		font-weight: 600;
	}

	.active-indicator {
		position: absolute;
		left: 0;
		top: 50%;
		transform: translateY(-50%);
		width: 4px;
		height: 0;
		background: var(--nav-color);
		transition: height 0.3s;
		border-radius: 0 4px 4px 0;
	}

	.lab-nav-item.active .active-indicator {
		height: 60%;
	}

	.labs-display-pane {
		background: white;
		border-radius: 32px;
		border: 1px solid #f1f5f9;
		padding: 40px;
		box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.02);
		position: relative;
	}

	.display-header {
		margin-bottom: 32px;
	}

	.display-header h3 {
		font-size: 1.8rem;
		font-weight: 900;
		margin-bottom: 8px;
	}

	.display-header p {
		color: #64748b;
		line-height: 1.6;
		max-width: 800px;
	}

	.lab-items-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: 16px;
	}

	.lab-item-card {
		display: flex;
		align-items: center;
		gap: 16px;
		padding: 20px;
		background: #f8fafc;
		border-radius: 20px;
		border: 1px solid #e2e8f0;
		transition: all 0.3s;
	}

	.lab-item-card:hover {
		background: white;
		border-color: #cbd5e1;
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
	}

	.lab-status-dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		flex-shrink: 0;
	}

	.lab-name {
		font-weight: 700;
		color: #334155;
		font-size: 0.95rem;
		flex-grow: 1;
	}

	.lab-action-btn {
		width: 28px;
		height: 28px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: white;
		border-radius: 8px;
		border: 1px solid #e2e8f0;
		color: #94a3b8;
		transition: all 0.3s;
	}

	.lab-item-card:hover .lab-action-btn {
		background: #0f172a;
		color: white;
		border-color: #0f172a;
	}

	.lab-features-footer {
		margin-top: 40px;
		display: flex;
		gap: 24px;
		padding-top: 24px;
		border-top: 1px solid #f1f5f9;
	}

	.feature-tag {
		display: flex;
		align-items: center;
		gap: 8px;
		font-size: 0.8rem;
		font-weight: 700;
		color: #94a3b8;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.feature-tag .dot {
		width: 6px;
		height: 6px;
		background: #e2e8f0;
		border-radius: 50%;
	}

	/* HOD Premium Card */
	.hod-premium-card {
		padding: 0 !important;
		overflow: hidden;
		background: #0f172a !important;
		border: none !important;
	}

	.hod-container {
		display: grid;
		grid-template-columns: 400px 1fr;
		min-height: 500px;
	}

	.hod-visual {
		position: relative;
		overflow: hidden;
	}

	.hod-visual img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
	}

	.hod-visual:hover img {
		transform: scale(1.05);
	}

	.hod-image-glow {
		position: absolute;
		inset: 0;
		background: linear-gradient(to right, transparent 60%, #0f172a 100%);
		z-index: 1;
	}

	.hod-badge {
		position: absolute;
		bottom: 32px;
		left: 32px;
		background: var(--section-accent);
		color: white;
		padding: 10px 20px;
		border-radius: 12px;
		font-weight: 800;
		font-size: 0.9rem;
		z-index: 2;
		box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.3);
	}

	.hod-content {
		padding: 64px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: relative;
		color: white;
	}

	.quote-icon {
		margin-bottom: 24px;
		color: var(--section-accent);
	}

	.hod-eyebrow {
		font-size: 0.8rem;
		font-weight: 800;
		letter-spacing: 0.2em;
		color: var(--section-accent);
		margin-bottom: 8px;
	}

	.hod-content h2 {
		font-size: 3rem;
		font-weight: 900;
		margin: 0;
		color: #ffffff;
		letter-spacing: -0.04em;
	}

	.hod-designation {
		font-size: 1.1rem;
		color: #94a3b8;
		font-weight: 600;
		margin: 8px 0 32px;
	}

	.hod-message-body p {
		font-size: 1.4rem;
		line-height: 1.6;
		color: #e2e8f0;
		font-weight: 500;
		font-style: italic;
	}

	.signature {
		margin-top: 32px !important;
		font-size: 1.1rem !important;
		font-style: normal !important;
		font-weight: 800 !important;
		color: var(--section-accent) !important;
		letter-spacing: 0.02em;
	}

	/* Contact Premium Action Grid */
	.contact-premium-section {
		background: #ffffff !important;
	}

	.contact-action-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 24px;
		margin-top: 10px;
	}

	.contact-tile {
		padding: 32px;
		background: #f8fafc;
		border-radius: 32px;
		border: 1px solid #f1f5f9;
		display: flex;
		flex-direction: column;
		gap: 24px;
		transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
		position: relative;
	}

	.contact-tile:hover {
		background: #ffffff;
		transform: translateY(-12px);
		box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
		border-color: var(--section-accent);
	}

	.tile-icon {
		width: 52px;
		height: 52px;
		background: #ffffff;
		border-radius: 16px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--section-accent);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
		transition: all 0.3s;
	}

	.contact-tile:hover .tile-icon {
		background: var(--section-accent);
		color: white;
		transform: rotate(-10deg);
	}

	.tile-content {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.tile-content .label {
		font-size: 0.85rem;
		font-weight: 700;
		color: #64748b;
		text-transform: uppercase;
		letter-spacing: 0.1em;
	}

	.tile-content .value {
		font-size: 1.1rem;
		font-weight: 800;
		color: #0f172a;
	}

	.tile-link {
		margin-top: auto;
		display: inline-flex;
		align-items: center;
		font-size: 0.9rem;
		font-weight: 700;
		color: var(--section-accent);
		text-decoration: none;
		gap: 8px;
		transition: gap 0.3s;
	}

	.tile-link:hover {
		gap: 12px;
	}

	.tile-link::after {
		content: '→';
	}

	/* Vision & Mission Premium Tabs */
	.vm-premium-section {
		padding: 24px 32px !important;
		overflow: hidden;
		margin-top: -150px !important; /* Move up significantly to close gap */
	}

	.vm-title-row {
		display: flex;
		align-items: center;
		gap: 12px;
		margin-bottom: 4px;
	}

	.vm-icon-badge {
		background: #ffffff;
		color: #d47515;
		padding: 8px;
		border-radius: 12px;
		border: 1px solid #e2e8f0;
	}

	.vm-tabs-nav {
		display: flex;
		gap: 6px;
		margin: 20px 0;
		padding-bottom: 8px;
		overflow-x: auto;
		border-bottom: 1px solid #f1f5f9;
	}

	.vm-tab-btn {
		display: flex;
		align-items: center;
		gap: 6px;
		padding: 8px 16px;
		border-radius: 100px;
		border: 1px solid #e2e8f0;
		background: white;
		color: #64748b;
		font-weight: 700;
		font-size: 0.8rem;
		cursor: pointer;
		transition: all 0.3s ease;
		white-space: nowrap;
	}

	.vm-tab-btn.active {
		background: var(--tab-color);
		color: white;
		border-color: var(--tab-color);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	}

	.vm-content-viewport {
		min-height: auto;
		position: relative;
	}

	.panel-title {
		font-size: 1.2rem;
		font-weight: 800;
		color: #1e293b;
		margin-bottom: 16px;
	}

	/* Vision Panel */
	.vision-panel {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 40px 0;
		text-align: center;
	}

	.vision-quote {
		font-size: 1.5rem;
		line-height: 1.6;
		color: #0f172a;
		font-weight: 700;
		padding: 60px 80px;
		background: white;
		border-radius: 40px;
		border: 1px solid #f1f5f9;
		box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.08);
		position: relative;
		max-width: 900px;
		z-index: 1;
	}

	.vision-quote::before {
		content: '';
		position: absolute;
		inset: -2px;
		background: linear-gradient(45deg, var(--section-accent), transparent, var(--section-accent));
		border-radius: 42px;
		z-index: -1;
		opacity: 0.2;
	}

	/* Mission Cards - Centered Alignment */
	.mission-panel .panel-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 32px;
		max-width: 1000px;
		margin: 0 auto;
	}

	.m-card {
		text-align: center;
		align-items: center;
		padding: 40px 32px;
		background: white;
		border-radius: 32px;
		border: 1px solid #f1f5f9;
		box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.04);
	}

	.m-id {
		margin: 0 auto 16px;
		font-size: 0.7rem;
		padding: 6px 16px;
		border-radius: 100px;
		text-transform: uppercase;
	}

	.m-card p {
		font-size: 1rem;
		font-weight: 600;
		color: #334155;
	}

	/* PEOs - Horizontal Alignment */
	.peos-panel .panel-list {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
		justify-content: center;
	}

	.peo-item {
		flex: 1;
		min-width: 200px;
		max-width: 280px;
		flex-direction: column;
		text-align: center;
		padding: 32px 24px;
		background: #f8fafc;
	}

	.peo-dot {
		margin-bottom: 20px;
		width: 16px;
		height: 16px;
	}

	/* Knowledge Chips */
	.k-grid {
		display: flex;
		flex-wrap: wrap;
		gap: 16px;
		justify-content: center;
	}

	.k-card {
		flex: 1;
		min-width: 260px;
		padding: 24px 32px;
		border-top: none;
		border-left: 5px solid var(--section-accent);
		background: #f1f5f9;
	}

	.k-card h4 {
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: var(--section-accent);
		margin-bottom: 8px;
	}

	.k-card p {
		font-size: 0.9rem;
		font-weight: 700;
		color: #1e293b;
	}

	/* SDGs List Style */
	.sdg-grid {
		grid-template-columns: 1fr;
		max-width: 800px;
		margin: 0 auto;
	}

	.m-card:hover {
		transform: translateY(-8px);
		box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05);
		border-color: var(--section-accent);
	}

	.m-card p {
		font-size: 0.95rem;
		line-height: 1.6;
		color: #475569;
		margin: 0;
	}

	/* PEOs & PSOs */
	.peo-item {
		display: flex;
		gap: 24px;
		background: white;
		padding: 24px;
		border-radius: 20px;
		border: 1px solid #f1f5f9;
		align-items: center;
		transition: all 0.3s ease;
	}

	.peo-item:hover {
		border-color: var(--section-accent);
		background: color-mix(in srgb, var(--section-accent), transparent 98%);
	}

	.peo-dot {
		width: 12px;
		height: 12px;
		background: var(--section-accent);
		border-radius: 4px;
		rotate: 45deg;
		flex-shrink: 0;
		box-shadow: 0 0 15px var(--section-accent);
	}

	.peo-id {
		font-weight: 900;
		color: var(--section-accent);
		font-size: 0.8rem;
		margin-bottom: 4px;
		display: block;
	}

	.pso-card {
		display: flex;
		align-items: flex-start;
		gap: 20px;
		padding: 24px;
		background: white;
		border-radius: 24px;
		border: 1px solid #f1f5f9;
		transition: all 0.4s ease;
	}

	.pso-icon {
		background: var(--section-accent);
		color: white;
		padding: 12px;
		border-radius: 16px;
		box-shadow: 0 10px 20px -5px var(--section-accent);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	/* POs Grid - Brand New High-Density Alignment */
	.pos-panel {
		padding: 10px 0;
	}

	.pos-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 12px;
		width: 100%;
	}

	.po-card {
		background: #f8fafc;
		padding: 16px;
		border-radius: 16px;
		border: 1px solid #e2e8f0;
		transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
		display: flex;
		flex-direction: column;
		gap: 8px;
		position: relative;
		overflow: hidden;
	}

	.po-card:hover {
		background: white;
		border-color: var(--section-accent);
		transform: translateY(-4px);
		box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.1);
	}

	.po-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.po-id {
		background: var(--section-accent);
		color: white;
		padding: 3px 8px;
		border-radius: 6px;
		font-size: 0.65rem;
		font-weight: 900;
		letter-spacing: 0.05em;
	}

	.po-card h4 {
		font-size: 0.85rem;
		font-weight: 800;
		color: #0f172a;
		margin: 0;
	}

	.po-card p {
		font-size: 0.75rem;
		line-height: 1.4;
		color: #64748b;
		margin: 0;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	/* Tablet/Mobile refinement for POs */
	@media (max-width: 1100px) {
		.pos-grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}
	@media (max-width: 800px) {
		.pos-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	/* Knowledge & SDGs */
	.k-card {
		background: white;
		padding: 32px;
		border-radius: 24px;
		border: 1px solid #f1f5f9;
		border-top: 5px solid var(--section-accent);
		transition: all 0.3s ease;
	}

	.k-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.02);
	}

	.sdg-card {
		background: white;
		padding: 24px;
		border-radius: 20px;
		border: 1px solid #f1f5f9;
		border-left: 6px solid var(--sdg-color);
		display: flex;
		gap: 20px;
		transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}

	.sdg-card:hover {
		transform: translateX(12px) scale(1.02);
		box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);
	}

	.sdg-content h4 {
		font-size: 0.95rem;
	}
	.sdg-content p {
		font-size: 0.8rem;
	}

	.pos-scroll-area {
		overflow-x: auto;
		padding-bottom: 10px;
	}

	@media (max-width: 1200px) {
		.main-content-layout {
			grid-template-columns: 1fr;
			padding: 0 16px 60px;
		}
		.side-nav-container {
			position: static;
			height: auto;
			margin-bottom: 32px;
		}
		.side-nav-list {
			flex-direction: row;
			overflow-x: auto;
			padding-bottom: 10px;
		}
		.side-nav-btn {
			white-space: nowrap;
		}
		.header-hero {
			margin-bottom: -40px;
		}
	}

	@media (max-width: 768px) {
		.about-grid-content,
		.split-info-grid,
		.labs-detailed-grid,
		.hod-grid {
			grid-template-columns: 1fr;
		}
		.dept-section-card {
			padding: 32px 24px;
		}
		.header-hero {
			height: 300px;
		}

		/* New Premium Section Mobile Adjustments */
		.hod-container {
			grid-template-columns: 1fr;
		}
		.hod-content {
			padding: 40px 24px;
		}
		.hod-visual {
			height: 320px;
		}
		.hod-content h2 {
			font-size: 2.2rem;
		}
		.contact-action-grid {
			grid-template-columns: 1fr;
		}
		.faculty-interactive-grid {
			grid-template-columns: 1fr;
		}
	}

	/* Scrollbar Utilities */
	.scrollbar-hide::-webkit-scrollbar {
		display: none;
	}
	.scrollbar-hide {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
</style>
