<script>
	import { onDestroy, onMount } from 'svelte';
	import { fade, fly, slide } from 'svelte/transition';
	import HodMessage from '$lib/components/HodMessage.svelte';

	const navItems = [
		{
			id: 'about',
			label: 'About Department',
			icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
			color: '#4f46e5'
		},
		{
			id: 'vision',
			label: 'Vision & Mission',
			icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
			color: '#4338ca'
		},
		{
			id: 'labs',
			label: 'Labs & Infra',
			icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
			color: '#6366f1'
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
			id: 'contact',
			label: 'Contact Info',
			icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
			color: '#0284c7'
		}
	];

	const jobRoles = [
		{
			role: 'SOC Analyst',
			description:
				'Monitoring and responding to security threats in real-time within a Security Operations Center.',
			skills: ['SIEM Tools', 'Incident Response', 'Network Monitoring', 'Log Analysis'],
			icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
			color: '#4f46e5'
		},
		{
			role: 'Penetration Tester',
			description: 'Authorized simulated cyberattacks on computer systems to evaluate security.',
			skills: ['Ethical Hacking', 'Kali Linux', 'Metasploit', 'Web Security'],
			icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
			color: '#ef4444'
		},
		{
			role: 'Security Architect',
			description:
				'Designing, building and overseeing the implementation of network and computer security.',
			skills: ['System Design', 'Risk Assessment', 'Compliance', 'Cryptography'],
			icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
			color: '#0ea5e9'
		},
		{
			role: 'Forensics Investigator',
			description: 'Collecting and analyzing digital evidence to investigate cyber crimes.',
			skills: ['Digital Forensics', 'Evidence Collection', 'Legal Knowledge', 'EnCase'],
			icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
			color: '#8b5cf6'
		},
		{
			role: 'Cloud Security Engineer',
			description: 'Securing cloud-based infrastructure and protecting data in cloud environments.',
			skills: ['AWS/Azure Security', 'IAM', 'Cloud Architecture', 'Terraform'],
			icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
			color: '#06b6d4'
		}
	];

	const careerResources = {
		jobs: [
			{ name: 'LinkedIn Security', url: 'https://www.linkedin.com' },
			{ name: 'CyberSecJobs', url: 'https://cybersecjobs.com' },
			{ name: 'Indeed', url: 'https://www.indeed.com' },
			{ name: 'Naukri', url: 'https://www.naukri.com' }
		],
		coding: [
			{ name: 'Hack The Box', url: 'https://www.hackthebox.com' },
			{ name: 'TryHackMe', url: 'https://tryhackme.com' },
			{ name: 'CTFtime', url: 'https://ctftime.org' }
		],
		learning: [
			{ name: 'Cybrary', url: 'https://www.cybrary.it' },
			{ name: 'SANS Institute', url: 'https://www.sans.org' },
			{ name: 'Coursera Security', url: 'https://www.coursera.org' }
		],
		resume: [
			{ name: 'Overleaf', url: 'https://www.overleaf.com' },
			{ name: 'Canva', url: 'https://www.canva.com' }
		]
	};

	const focusRoadmap = [
		{
			year: '1st Year',
			goals: ['Networking Basics', 'Linux Command Line', 'C/Python Programming']
		},
		{
			year: '2nd Year',
			goals: ['Data Structures', 'Operating Systems', 'Ethical Hacking Intro', 'Cryptography']
		},
		{
			year: '3rd Year',
			goals: ['Network Security', 'Web App Security', 'Digital Forensics', 'Internships']
		},
		{
			year: 'Final Year',
			goals: ['Security Auditing', 'Capstone Project', 'Certifications (CEH/CompTIA)', 'Placements']
		}
	];

	const intake = [
		{ key: 'B.Tech', value: '60', color: '#4f46e5' },
		{ key: 'M.Tech', value: '18', color: '#4338ca' }
	];
	const deptImages = [
		'/cyber-security-image.jpg',
		'/CS-Banners/image copy 2.png',
		'/CS-Banners/CS-images/get.jpg'
	];

	const labCategories = [
		{
			id: 'defensive',
			name: 'Defensive Security',
			color: '#4f46e5',
			icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
			labs: [
				'Network Security Lab',
				'Cryptography Lab',
				'Information Security Lab',
				'Cloud Security Lab'
			],
			description:
				'Building resilient architectures and implementing cryptographic protocols to defend against cyber threats.'
		},
		{
			id: 'offensive',
			name: 'Offensive Security',
			color: '#ef4444',
			icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
			labs: ['Ethical Hacking Lab', 'Penetration Testing Lab', 'Web Application Security Lab'],
			description:
				'Learning the tools and techniques of malicious actors to proactively identify and fix vulnerabilities.'
		},
		{
			id: 'specialized',
			name: 'Forensics & IoT',
			color: '#8b5cf6',
			icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
			labs: ['Digital Forensics Lab', 'IoT Security Lab', 'Mobile Security Lab'],
			description:
				'Specialized investigation techniques for digital devices and securing the Internet of Things ecosystem.'
		}
	];

	let activeLabCat = 'defensive';

	function downloadFacultyPDF() {
		window.print();
	}

	const visionMissionTabs = [
		{
			id: 'vision',
			label: 'Vision',
			color: '#4f46e5',
			icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
		},
		{ id: 'mission', label: 'Mission', color: '#4338ca', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
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
		{ id: 'pos', label: 'POs', color: '#ef4444', icon: 'M4 6h16M4 10h16M4 14h16M4 18h16' },
		{
			id: 'sdgs',
			label: 'SDGs',
			color: '#d946ef',
			icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
		}
	];

	let activeVmTab = 'vision';
	$: activeTabColor = visionMissionTabs.find((t) => t.id === activeVmTab)?.color || '#4f46e5';

	const vmContent = {
		vision: {
			text: '“To be a global leader in Cyber Security education and research, producing ethical professionals who secure the digital future through innovation and resilience.”'
		},
		mission: [
			{
				id: 'M1',
				text: 'Provide deep technical expertise in network, web, and cloud security through specialized curriculum.'
			},
			{
				id: 'M2',
				text: 'Foster hands-on skills through state-of-the-art security operations centers and labs.'
			},
			{
				id: 'M3',
				text: 'Promote ethical hacking practices and digital forensic investigation techniques.'
			},
			{
				id: 'M4',
				text: 'Drive innovation in cryptography and secure system architecture to protect global interests.'
			}
		],
		peos: [
			{
				id: 'PEO1',
				text: 'Build elite careers in global security industries, defense, and research.'
			},
			{
				id: 'PEO2',
				text: 'Master modern threat intelligence and vulnerability management frameworks.'
			},
			{
				id: 'PEO3',
				text: 'Develop ethical solutions for complex industrial and national security challenges.'
			},
			{
				id: 'PEO4',
				text: 'Demonstrate lifelong learning and leadership in the cyber security domain.'
			}
		],
		psos: [
			{
				id: 'PSO1',
				text: 'Apply advanced security protocols and tools to defend enterprise networks.'
			},
			{
				id: 'PSO2',
				text: 'Conduct comprehensive security audits and penetration tests on diverse systems.'
			},
			{
				id: 'PSO3',
				text: 'Perform forensic investigations to identify and mitigate digital security breaches.'
			}
		],
		pos: [
			{
				id: 'PO1',
				title: 'Knowledge',
				text: 'Apply computing and security fundamentals to solve problems.'
			},
			{
				id: 'PO2',
				title: 'Analysis',
				text: 'Identify and analyze complex cyber security challenges.'
			},
			{
				id: 'PO3',
				title: 'Design',
				text: 'Architect secure systems for various enterprise domains.'
			},
			{
				id: 'PO4',
				title: 'Research',
				text: 'Use modern security methods to develop innovative solutions.'
			},
			{
				id: 'PO5',
				title: 'Ethics',
				text: 'Practice professional and ethical security responsibilities.'
			}
		],
		sdgs: [
			{
				goal: 'Quality Education',
				desc: 'Promoting specialized technical training in cyber defense.'
			},
			{
				goal: 'Industry Innovation',
				desc: 'Driving secure technological growth through advanced research.'
			},
			{
				goal: 'Peace & Justice',
				desc: 'Securing digital boundaries and ensuring ethical technology use.'
			},
			{ goal: 'Decent Work', desc: 'Preparing students for high-demand careers in digital safety.' }
		]
	};

	const facultyRows = [
		{
			name: 'Prof. P Joshua Raju',
			role: 'Professor & HOD',
			exp: '12 Years',
			qual: 'M.Tech., Ph.D',
			mobile: '8297293834'
		},
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
		}
	];

	let facultySearch = '';
	$: filteredFacultyRows = facultyRows.filter(
		(f) =>
			f.name.toLowerCase().includes(facultySearch.toLowerCase()) ||
			f.role.toLowerCase().includes(facultySearch.toLowerCase()) ||
			f.qual.toLowerCase().includes(facultySearch.toLowerCase())
	);

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
				{#each 'Welcome to the Cyber Security 2026'.split('') as char, i}
					<span class="animated-char" style="animation-delay: {i * 0.05}s">
						{char === ' ' ? '\u00A0' : char}
					</span>
				{/each}
			</div>
			<h1 class="satoshi leading-[0.98rem]">CSE - Cyber Security</h1>
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
			<section id="about" class="dept-section-card" style="--section-accent: #4f46e5">
				<div class="section-top">
					<div class="section-title-wrap">
						<h2 class="satoshi">About Cyber Security</h2>
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
							The Department of Computer Science (Cyber Security) at BITS Vizag is at the forefront
							of digital defence, shaping the future of secure communication.
						</p>
						<p class="inter sub-para">
							Focusing on protecting networks, devices, and data from unauthorised access, we
							prepare students for a world where digital resilience is paramount. Our department
							provides state-of-the-art security operation centres and hands-on labs for mastering
							digital forensics, ethical hacking, and cryptography.
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

		<!-- Vision & Mission Section - Spans Full Width -->
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
									d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"
								></path>
							</svg>
						</div>
						<h2 class="satoshi">Vision & Mission</h2>
					</div>
					<div class="section-underline"></div>
				</div>
			</div>

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
						{:else if activeVmTab === 'sdgs'}
							<div class="sdgs-panel">
								<div class="sdg-grid">
									{#each vmContent.sdgs as sdg, i}
										<div
											class="sdg-card"
											in:fly={{ x: 20, duration: 400, delay: i * 100 }}
											style="--sdg-color: {['#4C9F38', '#BF1D2D', '#26BDE2', '#FCC30B'][i % 4]}"
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

		<!-- Labs & Infrastructure - Spans Full Width -->
		<section
			id="labs"
			class="dept-section-card labs-premium-section"
			style="--section-accent: #6366f1"
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
		</section>

		<!-- Job Opportunities - Spans Full Width -->
		<section
			id="jobs"
			class="dept-section-card full-width-section"
			style="--section-accent: #f97316"
		>
			<div class="section-top">
				<div class="section-title-wrap">
					<h2 class="satoshi">Job Opportunities</h2>
					<div class="section-underline"></div>
				</div>
			</div>

			<div class="jobs-premium-layout">
				<!-- Industry Focus & Roles -->
				<div class="roles-showcase-column">
					<div class="roles-grid">
						{#each jobRoles as job, i}
							<div
								class="premium-role-card"
								in:fly={{ y: 30, duration: 800, delay: i * 100 }}
								style="--role-accent: {job.color}"
							>
								<div class="role-card-inner">
									<div class="role-header">
										<div class="role-icon-box">
											<svg
												viewBox="0 0 24 24"
												width="24"
												height="24"
												fill="none"
												stroke="currentColor"
												stroke-width="2.5"
											>
												<path d={job.icon}></path>
											</svg>
										</div>
										<div class="role-badges">
											<span class="role-tag inter">High Demand</span>
										</div>
									</div>
									<div class="role-body">
										<h3 class="satoshi">{job.role}</h3>
										<p class="inter">{job.description}</p>
										<div class="role-skills">
											{#each job.skills as skill}
												<span class="skill-pill inter">{skill}</span>
											{/each}
										</div>
									</div>
									<div class="card-glow"></div>
								</div>
							</div>
						{/each}
					</div>
				</div>

				<!-- Strategic Career Sidebar -->
				<div class="career-strategy-column">
					<div class="strategy-card roadmap-premium">
						<div class="strategy-header">
							<div class="strategy-icon">
								<svg
									viewBox="0 0 24 24"
									width="20"
									height="20"
									fill="none"
									stroke="currentColor"
									stroke-width="2.5"
								>
									<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
								</svg>
							</div>
							<h3 class="satoshi">Preparation Roadmap</h3>
						</div>
						<div class="roadmap-timeline-v2">
							{#each focusRoadmap as step, i}
								<div class="timeline-step" in:fly={{ x: 20, duration: 600, delay: i * 150 }}>
									<div class="step-indicator">
										<span class="step-num satoshi">0{i + 1}</span>
										<div class="line"></div>
									</div>
									<div class="step-content">
										<h4 class="satoshi">{step.year}</h4>
										<div class="goal-tags">
											{#each step.goals as goal}
												<span class="goal-item inter">{goal}</span>
											{/each}
										</div>
									</div>
								</div>
							{/each}
						</div>
					</div>

					<div class="strategy-card hub-premium">
						<div class="strategy-header">
							<div class="strategy-icon">
								<svg
									viewBox="0 0 24 24"
									width="20"
									height="20"
									fill="none"
									stroke="currentColor"
									stroke-width="2.5"
								>
									<path
										d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"
									></path>
								</svg>
							</div>
							<h3 class="satoshi">Strategic Hub</h3>
						</div>
						<div class="hub-groups">
							{#each Object.entries(careerResources) as [category, items]}
								<div class="hub-group">
									<label class="inter">{category.replace(/([A-Z])/g, ' $1')}</label>
									<div class="hub-links">
										{#each items as item}
											<a href={item.url} target="_blank" class="hub-link inter">
												<span>{item.name}</span>
												<svg
													viewBox="0 0 24 24"
													width="14"
													height="14"
													fill="none"
													stroke="currentColor"
													stroke-width="2.5"
												>
													<path d="M7 17L17 7M17 7H7M17 7V17"></path>
												</svg>
											</a>
										{/each}
									</div>
								</div>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Faculty Profile - Spans Full Width -->
		<section
			id="faculty"
			class="dept-section-card full-width-section"
			style="--section-accent: #059669"
		>
			<div class="section-top">
				<div class="section-title-wrap">
					<h2 class="satoshi">Faculty Profile</h2>
					<div class="section-underline"></div>
				</div>
				<div class="faculty-actions">
					<div class="search-box">
						<svg
							viewBox="0 0 24 24"
							width="18"
							height="18"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
						>
							<circle cx="11" cy="11" r="8"></circle>
							<path d="M21 21l-4.35-4.35"></path>
						</svg>
						<input type="text" placeholder="Search faculty..." bind:value={facultySearch} />
					</div>
					<button class="download-btn inter" on:click={downloadFacultyPDF}>
						<svg
							viewBox="0 0 24 24"
							width="18"
							height="18"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
						>
							<path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4m4-5l5 5 5-5m-5 5V3"></path>
						</svg>
						<span>Export PDF</span>
					</button>
				</div>
			</div>

			<div class="faculty-table-container scrollbar-hide">
				<table class="faculty-table inter">
					<thead>
						<tr>
							<th>Name of the Faculty</th>
							<th>Designation</th>
							<th>Experience</th>
							<th>Qualification</th>
							<th>Mobile</th>
						</tr>
					</thead>
					<tbody>
						{#each filteredFacultyRows as row}
							<tr>
								<td class="font-semibold">{row.name}</td>
								<td>
									<span class="role-badge" class:hod={row.role.includes('HOD')}>
										{row.role}
									</span>
								</td>
								<td>{row.exp}</td>
								<td>{row.qual}</td>
								<td>{row.mobile}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</section>

		<!-- HOD Message - Spans Full Width -->
		<section
			id="hod"
			class="dept-section-card full-width-section"
			style="--section-accent: #db2777"
		>
			<div class="section-top">
				<div class="section-title-wrap">
					<h2 class="satoshi">HOD Message</h2>
					<div class="section-underline"></div>
				</div>
			</div>
			<HodMessage
				hodName="Prof. P Joshua Raju"
				designation="Head of Department"
				department="CSE (Cyber Security)"
				hodMessage="Welcome to the Department of Computer Science & Engineering (Cyber Security) at BITS Vizag. As the digital boundary becomes our primary frontier, cyber threats have become more sophisticated than ever. By blending theoretical foundations with intensive laboratory work, we ensure our students understand the architecture of the digital world and the ways it can be compromised — empowering them to stay ahead of malicious actors and secure sensitive data across diverse platforms."
				hodImage="/joshsir.png"
			/>
		</section>

		<!-- Contact Info - Spans Full Width -->
		<section
			id="contact"
			class="dept-section-card full-width-section"
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
						>
							<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
							<polyline points="22,6 12,13 2,6" />
						</svg>
					</div>
					<div class="tile-content">
						<span class="inter label">Placement Support</span>
						<span class="inter value">tpo@bitsvizag.com</span>
					</div>
					<a href="mailto:tpo@bitsvizag.com" class="tile-link inter">Send Mail</a>
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
						>
							<path
								d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
							/>
						</svg>
					</div>
					<div class="tile-content">
						<span class="inter label">Direct Helpline</span>
						<span class="inter value">+91 8297293834</span>
					</div>
					<a href="tel:+918297293834" class="tile-link inter">Call Now</a>
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
						>
							<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
							<circle cx="12" cy="10" r="3" />
						</svg>
					</div>
					<div class="tile-content">
						<span class="inter label">Office Location</span>
						<span class="inter value">Main Block, 2nd Floor, Room 204</span>
					</div>
					<a href="#" class="tile-link inter">View Maps</a>
				</div>
			</div>
		</section>
	</div>
</div>

<style>
	/* Root & Variables */
	.dept-premium-root {
		--primary-font: 'Satoshi', sans-serif;
		--body-font: 'Inter', sans-serif;
		--bg-main: #f8fafc;
		--glass-bg: rgba(255, 255, 255, 0.7);
		--glass-border: rgba(255, 255, 255, 0.5);
		--shadow-sm: 0 4px 6px -1px rgb(0 0 0 / 0.1);
		--shadow-md: 0 10px 15px -3px rgb(0 0 0 / 0.1);
		opacity: 0;
		transition: opacity 0.8s ease;
		background: var(--bg-main);
		min-height: 100vh;
	}

	.dept-premium-root.mounted {
		opacity: 1;
	}

	.inter {
		font-family: var(--body-font);
	}
	.satoshi {
		font-family: var(--primary-font);
	}

	/* Hero Header - Matches CSE */
	.header-hero {
		height: 430px;
		background: #09090b url('/Cyber-security-news-header.jpg') center/cover;
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
			#6366f1 50%,
			#ffffff 75%,
			#f4f4f5 100%
		);
		background-size: 200% auto;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		animation: shine 6s linear infinite;
		filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.2));
	}

	@keyframes shine {
		to {
			background-position: 200% center;
		}
	}

	/* Layout Container - Matches CSE */
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

	/* Sidebar - Matches CSE */
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
		color: #64748b;
		letter-spacing: 0.1em;
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
		transition: all 0.2s ease;
		color: #475569;
		position: relative;
		width: 100%;
		text-align: left;
	}

	.nav-btn-icon {
		width: 18px;
		height: 18px;
		color: #94a3b8;
		transition: color 0.2s;
	}

	.nav-btn-label {
		font-weight: 600;
		font-size: 0.95rem;
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

	.side-nav-btn.active .nav-btn-icon {
		color: var(--nav-accent);
	}

	.nav-active-dot {
		position: absolute;
		right: 16px;
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: var(--nav-accent);
		box-shadow: 0 0 10px var(--nav-accent);
	}

	/* Content Grid */
	.content-body-grid {
		display: flex;
		flex-direction: column;
		gap: 32px;
	}

	.dept-section-card {
		background: white;
		border-radius: 32px;
		padding: 48px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
		border: 1px solid #e2e8f0;
		transition: transform 0.3s ease;
		scroll-margin-top: 100px;
	}

	.dept-section-card:hover {
		transform: translateY(-4px);
	}

	/* Full Width Extension Logic */
	.vm-premium-section,
	.full-width-section,
	.labs-premium-section {
		grid-column: 1 / -1;
		width: 100%;
		margin-top: 20px;
	}

	.section-top {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 40px;
	}

	.section-title-wrap h2 {
		font-size: 1.9rem;
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

	/* Intake Badges */
	.intake-group {
		display: flex;
		gap: 12px;
	}

	.intake-badge {
		padding: 8px 16px;
		border-radius: 100px;
		background: var(--bg);
		color: white;
		font-size: 0.85rem;
		font-weight: 800;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	}

	/* About Section */
	.about-grid-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 48px;
		align-items: center;
	}

	.main-para {
		font-size: 1.4rem;
		line-height: 1.6;
		color: #1e293b;
		font-weight: 600;
		margin-bottom: 24px;
	}

	.sub-para {
		font-size: 1rem;
		line-height: 1.8;
		color: #64748b;
	}

	.visual-slideshow {
		position: relative;
		height: 400px;
		border-radius: 32px;
		overflow: hidden;
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
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
		bottom: 24px;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		gap: 8px;
		z-index: 5;
	}

	.slideshow-indicators .dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.4);
		transition: all 0.3s ease;
	}

	.slideshow-indicators .dot.active {
		width: 32px;
		border-radius: 4px;
		background: white;
	}

	/* Vision & Mission Section */
	.vm-premium-section {
		background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%) !important;
	}

	.vm-title-row {
		display: flex;
		align-items: center;
		gap: 16px;
	}

	.vm-icon-badge {
		width: 56px;
		height: 56px;
		background: white;
		border-radius: 18px;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.05);
	}

	.vm-tabs-nav {
		display: flex;
		gap: 12px;
		margin-bottom: 40px;
		overflow-x: auto;
		padding: 10px;
	}

	.vm-tab-btn {
		display: flex;
		align-items: center;
		gap: 10px;
		padding: 12px 24px;
		border-radius: 16px;
		background: white;
		border: 1px solid #e2e8f0;
		color: #64748b;
		font-weight: 700;
		white-space: nowrap;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
	}

	.vm-tab-btn.active {
		background: var(--tab-color);
		color: white;
		border-color: transparent;
		box-shadow: 0 15px 30px -5px rgba(0, 0, 0, 0.1);
		transform: translateY(-4px);
	}

	.vm-tab-panel {
		min-height: 320px;
	}

	.vision-panel {
		text-align: center;
		padding: 40px;
		max-width: 900px;
		margin: 0 auto;
	}

	.vision-quote {
		font-size: 2rem;
		font-weight: 800;
		line-height: 1.4;
		color: #0f172a;
		font-style: italic;
	}

	.panel-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		gap: 24px;
	}

	.m-card {
		padding: 40px;
		background: white;
		border-radius: 28px;
		border: 1px solid #f1f5f9;
		position: relative;
		overflow: hidden;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02);
	}

	.m-id {
		font-size: 4rem;
		font-weight: 900;
		position: absolute;
		top: -15px;
		right: -15px;
		opacity: 0.05;
		color: var(--section-accent);
	}

	.peo-item {
		display: flex;
		gap: 24px;
		margin-bottom: 20px;
		background: white;
		padding: 24px;
		border-radius: 24px;
		border: 1px solid #f1f5f9;
	}

	.peo-dot {
		width: 14px;
		height: 14px;
		border-radius: 50%;
		background: var(--section-accent);
		margin-top: 6px;
		flex-shrink: 0;
	}

	.peo-id {
		font-weight: 900;
		color: var(--section-accent);
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.15em;
	}

	.pso-card {
		display: flex;
		gap: 24px;
		padding: 24px;
		background: white;
		border-radius: 28px;
		border: 1px solid #f1f5f9;
	}

	.pso-icon {
		width: 56px;
		height: 56px;
		border-radius: 18px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		flex-shrink: 0;
	}

	.po-card {
		padding: 24px;
		background: white;
		border-radius: 24px;
		border: 1px solid #f1f5f9;
	}

	.po-header {
		display: flex;
		align-items: center;
		gap: 12px;
		margin-bottom: 12px;
	}

	.po-id {
		font-weight: 900;
		font-size: 0.8rem;
		color: white;
		background: var(--section-accent);
		padding: 4px 10px;
		border-radius: 8px;
	}

	.sdg-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 20px;
	}

	.sdg-card {
		display: flex;
		align-items: center;
		gap: 20px;
		padding: 24px;
		background: white;
		border-radius: 24px;
		border-left: 6px solid var(--sdg-color);
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
	}

	/* Labs Section */
	.labs-premium-section {
		background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%) !important;
	}

	.labs-title-row {
		display: flex;
		align-items: center;
		gap: 16px;
	}

	.labs-icon-badge {
		background: #6366f1;
		color: white;
		padding: 12px;
		border-radius: 16px;
		box-shadow: 0 8px 16px -4px rgba(99, 102, 241, 0.3);
	}

	.labs-interactive-grid {
		display: grid;
		grid-template-columns: 300px 1fr;
		gap: 40px;
		margin-top: 40px;
		min-height: 450px;
		background: #f8fafc;
		padding: 24px;
		border-radius: 32px;
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
		padding: 20px;
		background: white;
		border: 1px solid #e2e8f0;
		border-radius: 24px;
		cursor: pointer;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		text-align: left;
		position: relative;
		overflow: hidden;
	}

	.lab-nav-item:hover {
		border-color: var(--nav-color);
		transform: translateX(8px);
	}

	.lab-nav-item.active {
		border-color: var(--nav-color);
		box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
	}

	.nav-icon {
		width: 44px;
		height: 44px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #f1f5f9;
		border-radius: 12px;
		color: #64748b;
		transition: all 0.3s ease;
	}

	.lab-nav-item.active .nav-icon {
		background: var(--nav-color);
		color: white;
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
		padding: 40px;
		box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.02);
	}

	.display-header h3 {
		font-size: 2rem;
		font-weight: 900;
		margin-bottom: 12px;
	}

	.lab-items-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: 20px;
	}

	.lab-item-card {
		display: flex;
		align-items: center;
		gap: 16px;
		padding: 24px;
		background: #f8fafc;
		border-radius: 20px;
		border: 1px solid #e2e8f0;
		transition: all 0.3s;
	}

	.lab-item-card:hover {
		background: white;
		transform: translateY(-4px);
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04);
	}

	.lab-status-dot {
		width: 10px;
		height: 10px;
		border-radius: 50%;
	}

	.lab-name {
		font-weight: 700;
		font-size: 1rem;
		color: #1e293b;
		flex: 1;
	}

	/* Jobs Section */
	.jobs-layout {
		display: grid;
		grid-template-columns: 1fr 380px;
		gap: 40px;
	}

	/* Job Opportunities - Premium UX */
	.jobs-premium-layout {
		display: grid;
		grid-template-columns: 1fr 400px;
		gap: 40px;
		align-items: start;
	}

	.premium-role-card {
		position: relative;
		background: white;
		border-radius: 32px;
		padding: 2px;
		background: linear-gradient(135deg, #e2e8f0 0%, #f8fafc 100%);
		transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
		overflow: hidden;
	}

	.premium-role-card:hover {
		transform: translateY(-8px) scale(1.02);
		background: linear-gradient(135deg, var(--role-accent) 0%, #f8fafc 100%);
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
	}

	.role-card-inner {
		background: white;
		border-radius: 30px;
		padding: 40px;
		height: 100%;
		display: flex;
		flex-direction: column;
		position: relative;
		z-index: 2;
	}

	.role-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 24px;
	}

	.role-icon-box {
		width: 56px;
		height: 56px;
		background: #f8fafc;
		border-radius: 16px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--role-accent);
		border: 1px solid #f1f5f9;
		transition: all 0.3s;
	}

	.premium-role-card:hover .role-icon-box {
		background: var(--role-accent);
		color: white;
		border-color: transparent;
		transform: rotate(-5deg);
	}

	.role-tag {
		font-size: 0.7rem;
		font-weight: 800;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		padding: 6px 12px;
		background: #f1f5f9;
		color: #64748b;
		border-radius: 100px;
	}

	.role-body h3 {
		font-size: 1.6rem;
		font-weight: 900;
		color: #0f172a;
		margin-bottom: 12px;
		letter-spacing: -0.02em;
	}

	.role-body p {
		font-size: 0.95rem;
		color: #64748b;
		line-height: 1.6;
		margin-bottom: 24px;
	}

	.role-skills {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		margin-top: auto;
	}

	.skill-pill {
		font-size: 0.75rem;
		font-weight: 700;
		color: #475569;
		padding: 6px 14px;
		background: #f8fafc;
		border: 1px solid #e2e8f0;
		border-radius: 10px;
		transition: all 0.3s;
	}

	.premium-role-card:hover .skill-pill {
		background: white;
		border-color: #cbd5e1;
	}

	/* Career Strategy Column */
	.career-strategy-column {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}

	.strategy-card {
		background: white;
		border-radius: 32px;
		padding: 40px;
		border: 1px solid #e2e8f0;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02);
	}

	.strategy-header {
		display: flex;
		align-items: center;
		gap: 16px;
		margin-bottom: 32px;
	}

	.strategy-icon {
		width: 44px;
		height: 44px;
		background: #f1f5f9;
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #0f172a;
	}

	.strategy-header h3 {
		font-size: 1.3rem;
		font-weight: 800;
		color: #0f172a;
		margin: 0;
	}

	/* Roadmap V2 */
	.roadmap-timeline-v2 {
		display: flex;
		flex-direction: column;
		gap: 32px;
	}

	.timeline-step {
		display: flex;
		gap: 24px;
	}

	.step-indicator {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 12px;
	}

	.step-num {
		font-size: 0.7rem;
		font-weight: 900;
		color: #94a3b8;
		width: 28px;
		height: 28px;
		border: 2px solid #e2e8f0;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.timeline-step:last-child .line {
		display: none;
	}

	.line {
		width: 2px;
		flex-grow: 1;
		background: #e2e8f0;
		border-radius: 2px;
	}

	.step-content h4 {
		font-size: 0.95rem;
		font-weight: 800;
		color: #0f172a;
		margin: 0 0 12px;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.goal-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}

	.goal-item {
		font-size: 0.75rem;
		font-weight: 600;
		color: #64748b;
		background: #f8fafc;
		padding: 4px 10px;
		border-radius: 6px;
	}

	/* Strategic Hub */
	.hub-groups {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}

	.hub-group label {
		font-size: 0.7rem;
		font-weight: 900;
		text-transform: uppercase;
		color: #94a3b8;
		letter-spacing: 0.1em;
		display: block;
		margin-bottom: 12px;
	}

	.hub-links {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}

	.hub-link {
		display: flex;
		align-items: center;
		gap: 8px;
		padding: 8px 14px;
		background: #f8fafc;
		border: 1px solid #f1f5f9;
		border-radius: 12px;
		font-size: 0.85rem;
		font-weight: 700;
		color: #1e293b;
		transition: all 0.3s;
	}

	.hub-link:hover {
		background: #0f172a;
		color: white;
		border-color: #0f172a;
		transform: scale(1.05);
	}

	@media (max-width: 1280px) {
		.jobs-premium-layout {
			grid-template-columns: 1fr;
		}
	}

	/* Faculty Table */
	.faculty-actions {
		display: flex;
		gap: 16px;
		align-items: center;
	}

	.search-box {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 12px 20px;
		background: #f8fafc;
		border-radius: 20px;
		border: 1px solid #e2e8f0;
		color: #64748b;
		min-width: 350px;
	}

	.search-box input {
		background: transparent;
		border: none;
		outline: none;
		font-family: var(--body-font);
		font-size: 1rem;
		width: 100%;
	}

	.download-btn {
		display: flex;
		align-items: center;
		gap: 10px;
		padding: 12px 24px;
		background: #0f172a;
		color: white;
		border-radius: 20px;
		font-weight: 700;
		transition: all 0.3s ease;
	}

	.download-btn:hover {
		background: #1e293b;
		transform: translateY(-3px);
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
	}

	.faculty-table-container {
		margin-top: 24px;
		overflow-x: auto;
		border-radius: 24px;
		border: 1px solid #f1f5f9;
	}

	.faculty-table {
		width: 100%;
		border-collapse: collapse;
		text-align: left;
	}

	.faculty-table th {
		background: #f8fafc;
		padding: 24px;
		font-size: 0.85rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: #64748b;
		font-weight: 900;
		border-bottom: 2px solid #f1f5f9;
	}

	.faculty-table td {
		padding: 24px;
		font-size: 1rem;
		color: #334155;
		border-bottom: 1px solid #f1f5f9;
	}

	.role-badge {
		padding: 6px 14px;
		background: #f1f5f9;
		border-radius: 12px;
		font-size: 0.8rem;
		font-weight: 800;
		color: #475569;
	}

	.role-badge.hod {
		background: #db277715;
		color: #db2777;
	}

	/* Contact Info - Premium Action Tiles */
	.contact-action-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		gap: 24px;
		margin-top: 20px;
	}

	.contact-tile {
		background: #f8fafc;
		border-radius: 32px;
		padding: 40px;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		border: 1px solid #f1f5f9;
		transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
		position: relative;
		overflow: hidden;
	}

	.contact-tile:hover {
		background: white;
		transform: translateY(-10px);
		box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.1);
		border-color: #e2e8f0;
	}

	.tile-icon {
		width: 72px;
		height: 72px;
		background: white;
		border-radius: 24px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #0284c7;
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
		margin-bottom: 24px;
		transition: all 0.3s;
	}

	.contact-tile.email .tile-icon { color: #4f46e5; }
	.contact-tile.phone .tile-icon { color: #059669; }
	.contact-tile.location .tile-icon { color: #db2777; }

	.contact-tile:hover .tile-icon {
		transform: scale(1.1) rotate(5deg);
		background: #0f172a;
		color: white;
	}

	.tile-content {
		margin-bottom: 32px;
	}

	.tile-content .label {
		display: block;
		font-size: 0.8rem;
		font-weight: 800;
		color: #94a3b8;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		margin-bottom: 8px;
	}

	.tile-content .value {
		font-size: 1.2rem;
		font-weight: 800;
		color: #0f172a;
		word-break: break-word;
	}

	.tile-link {
		width: 100%;
		padding: 14px;
		background: #0f172a;
		color: white;
		border-radius: 16px;
		font-weight: 700;
		text-decoration: none;
		transition: all 0.3s;
		font-size: 0.9rem;
	}

	.tile-link:hover {
		background: #1e293b;
		letter-spacing: 0.05em;
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
	}

	/* Responsive tweaks */
	@media (max-width: 768px) {
		.contact-tile {
			padding: 32px;
		}
	}

	/* Responsive Design */
	@media (max-width: 1280px) {
		.main-content-layout {
			grid-template-columns: 1fr;
			margin: -100px auto 0;
		}

		.side-nav-container {
			display: none;
		}

		.header-hero {
			height: 380px;
		}
	}

	@media (max-width: 1024px) {
		.about-grid-content {
			grid-template-columns: 1fr;
		}

		.jobs-layout {
			grid-template-columns: 1fr;
		}

		.labs-interactive-grid {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 768px) {
		.dept-section-card {
			padding: 32px;
		}

		.section-top {
			flex-direction: column;
			gap: 24px;
		}

		.faculty-actions {
			width: 100%;
			flex-direction: column;
		}

		.search-box {
			width: 100%;
			min-width: unset;
		}

		.download-btn {
			width: 100%;
			justify-content: center;
		}

		.header-content h1 {
			font-size: 2.2rem;
		}
	}

	/* Scrollbar Hide */
	.scrollbar-hide::-webkit-scrollbar {
		display: none;
	}
	.scrollbar-hide {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
</style>
