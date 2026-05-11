<script>
	import { onDestroy, onMount } from 'svelte';
	import { fade, fly, slide } from 'svelte/transition';
	import HodMessage from '$lib/components/HodMessage.svelte';

	const navItems = [
		{
			id: 'about',
			label: 'About Department',
			icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
			color: '#0d9488'
		},
		{
			id: 'vision',
			label: 'Vision & Mission',
			icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
			color: '#0f766e'
		},
		{
			id: 'labs',
			label: 'Labs & Infra',
			icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
			color: '#14b8a6'
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
			role: 'AI / ML Engineer',
			description:
				'Building real models with Math, Statistics, and Deep Learning (PyTorch/TensorFlow).',
			skills: ['Python', 'Linear Algebra', 'ML/DL', 'LLMs'],
			icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
			color: '#7c3aed'
		},
		{
			role: 'Data Scientist',
			description: 'Extracting insights using Python, SQL, and advanced Data Visualization.',
			skills: ['Python', 'SQL', 'Pandas', 'Statistics'],
			icon: 'M16 8v8m-4-5v5m-4-2v2M4 18h16a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z',
			color: '#f59e0b'
		},
		{
			role: 'LLM Engineer',
			description: 'Designing and deploying large language models and generative AI systems.',
			skills: ['LangChain', 'OpenAI', 'Prompt Eng', 'Transformers'],
			icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
			color: '#3b82f6'
		},
		{
			role: 'Computer Vision Engineer',
			description: 'Building systems that can see and process visual data like humans.',
			skills: ['OpenCV', 'YOLO', 'Image Processing', 'CNNs'],
			icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
			color: '#10b981'
		},
		{
			role: 'NLP Researcher',
			description:
				'Advancing the state of machine translation, sentiment analysis, and chat systems.',
			skills: ['NLTK', 'BERT', 'Text Analytics', 'Word Embeddings'],
			icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z',
			color: '#ef4444'
		},
		{
			role: 'AI Architect',
			description: 'Designing end-to-end AI systems, infrastructure, and scalable deployment pipelines.',
			skills: ['MLES', 'Docker/K8s', 'Cloud AI', 'System Design'],
			icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
			color: '#0d9488'
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
			{ name: 'Kaggle', url: 'https://www.kaggle.com' },
			{ name: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org' }
		],
		learning: [
			{ name: 'Fast.ai', url: 'https://www.fast.ai' },
			{ name: 'Coursera', url: 'https://www.coursera.org' },
			{ name: 'DeepLearning.AI', url: 'https://www.deeplearning.ai' }
		],
		resume: [
			{ name: 'Overleaf', url: 'https://www.overleaf.com' },
			{ name: 'Canva', url: 'https://www.canva.com' }
		]
	};

	const focusRoadmap = [
		{ year: '1st Year', goals: ['Mathematics for AI', 'Python Basics', 'Logic Building'] },
		{ year: '2nd Year', goals: ['Data Structures', 'Statistics', 'ML Fundamentals', 'SQL'] },
		{ year: '3rd Year', goals: ['Deep Learning', 'NLP/Vision', 'Research Projects', 'Cloud AI'] },
		{
			year: 'Final Year',
			goals: ['AI Capstone', 'Portfolio', 'Specialized Interviews', 'Placement']
		}
	];

	const intake = [
		{ key: 'B.Tech', value: '60', color: '#0d9488' },
		{ key: 'M.Tech', value: '18', color: '#14b8a6' }
	];
	const deptImages = ['/CS-Banners/CS-images/AI-3.png', '/CS-Banners/CS-images/AI-4.png'];

	const labCategories = [
		{
			id: 'ai-core',
			name: 'AI & ML Core Labs',
			color: '#0d9488',
			icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
			labs: [
				'Artificial Intelligence Lab',
				'Machine Learning Lab',
				'Deep Learning & Neural Networks Lab',
				'Natural Language Processing Lab'
			],
			description:
				'Specialized environments for training neural networks and building intelligent agents.'
		},
		{
			id: 'data-analytics',
			name: 'Data & Analytics',
			color: '#0f766e',
			icon: 'M16 8v8m-4-5v5m-4-2v2M4 18h16a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z',
			labs: ['Data Science & Analytics Lab', 'Big Data Analytics Lab', 'Cognitive Computing Lab'],
			description: 'Processing large scale datasets and extracting actionable intelligence.'
		},
		{
			id: 'vision-iot',
			name: 'Vision & IoT',
			color: '#14b8a6',
			icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
			labs: ['Computer Vision Lab', 'AI & IoT Integration Lab', 'Python Programming for AI Lab'],
			description: 'Merging physical sensing with intelligent vision processing systems.'
		}
	];

	let activeLabCat = 'ai-core';

	function downloadFacultyPDF() {
		window.print();
	}

	const visionMissionTabs = [
		{
			id: 'vision',
			label: 'Vision',
			color: '#14b8a6',
			icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
		},
		{ id: 'mission', label: 'Mission', color: '#0ea5e9', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
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
		{ id: 'pos', label: 'POs', color: '#ec4899', icon: 'M4 6h16M4 10h16M4 14h16M4 18h16' },
		{
			id: 'sdgs',
			label: 'SDGs',
			color: '#d946ef',
			icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
		}
	];

	let activeVmTab = 'vision';
	$: activeTabColor = visionMissionTabs.find((t) => t.id === activeVmTab)?.color || '#14b8a6';

	const vmContent = {
		vision: {
			text: '“To become a center of excellence in AI & ML by producing skilled innovators who solve global challenges through intelligent technology.”'
		},
		mission: [
			{
				id: 'M1',
				text: 'Provide a robust foundation in AI, ML, and Data Science through hands-on learning.'
			},
			{
				id: 'M2',
				text: 'Foster industry-relevant skills in deep learning, NLP, and computer vision.'
			},
			{ id: 'M3', text: 'Encourage ethical AI practices and research-driven innovation.' },
			{
				id: 'M4',
				text: 'Drive societal impact through intelligent solutions for local and global problems.'
			}
		],
		peos: [
			{ id: 'PEO1', text: 'Build expertise in AI & ML for high-tier industry roles and research.' },
			{ id: 'PEO2', text: 'Master modern intelligent systems and data engineering frameworks.' },
			{ id: 'PEO3', text: 'Develop ethical AI solutions for complex industrial challenges.' },
			{ id: 'PEO4', text: 'Engage in continuous learning and professional leadership.' }
		],
		psos: [
			{ id: 'PSO1', text: 'Implement and optimize intelligent models for real-world automation.' },
			{ id: 'PSO2', text: 'Design scalable AI solutions using cloud and edge computing.' },
			{ id: 'PSO3', text: 'Develop secure and reliable machine learning pipelines.' }
		],
		pos: [
			{
				id: 'PO1',
				title: 'Knowledge',
				text: 'Apply computing and AI fundamentals to solve problems.'
			},
			{
				id: 'PO2',
				title: 'Analysis',
				text: 'Identify and analyze complex data-driven challenges.'
			},
			{ id: 'PO3', title: 'Design', text: 'Architect intelligent systems for various domains.' },
			{
				id: 'PO4',
				title: 'Research',
				text: 'Use modern AI methods to develop innovative solutions.'
			},
			{ id: 'PO5', title: 'Ethics', text: 'Practice professional and responsible AI development.' }
		],
		sdgs: [
			{ goal: 'Quality Education', desc: 'Promoting skill-oriented technical training in AI/ML.' },
			{
				goal: 'Industry Innovation',
				desc: 'Driving technological and research growth through AI.'
			},
			{ goal: 'Decent Work', desc: 'Preparing students for high-demand AI career paths.' },
			{ goal: 'Sustainable Cities', desc: 'Building smart solutions for modern urban challenges.' }
		]
	};

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
			role: 'HOD - Assistant Professor',
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
				{#each 'Welcome to the AI & ML 2026'.split('') as char, i}
					<span class="animated-char" style="animation-delay: {i * 0.05}s">
						{char === ' ' ? '\u00A0' : char}
					</span>
				{/each}
			</div>
			<h1 class="satoshi leading-[0.98rem]">Artificial Intelligence & Machine Learning</h1>
		</div>
	</header>

	<div class="main-content-layout">
		<!-- Sidebar Navigation -->
		<aside class="side-nav-container">
			<div class="side-nav-card">
				<div class="side-nav-title satoshi">AI & ML MENU</div>
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
			<section id="about" class="dept-section-card" style="--section-accent: #0d9488">
				<div class="section-top">
					<div class="section-title-wrap">
						<h2 class="satoshi">About AI & ML</h2>
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
							The Department of Computer Science (AI & ML) at BITS Vizag is at the forefront of the
							technological revolution, shaping the future of autonomous systems.
						</p>
						<p class="inter sub-para">
							Focusing on Artificial Intelligence and Machine Learning, we prepare students for a
							tech-driven world where intelligent algorithms solve complex problems in healthcare,
							finance, and global sustainability.
						</p>
					</div>
					<div class="about-visual-side">
						<div class="visual-slideshow">
							{#each deptImages as img, i}
								{#if currentImg === i}
									<img
										src={img}
										alt="Dept View {i}"
										loading="lazy"
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

		<!-- Labs & Infrastructure -->
		<section
			id="labs"
			class="dept-section-card labs-premium-section"
			style="--section-accent: #14b8a6"
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

		<!-- Job Opportunities -->
		<section
			id="jobs"
			class="dept-section-card jobs-premium-section"
			style="--section-accent: #f97316"
		>
			<div class="section-top">
				<div class="section-title-wrap">
					<h2 class="satoshi">Career Pathways</h2>
					<p class="inter dept-label">Strategic AI Industry Guidance</p>
					<div class="section-underline"></div>
				</div>
				<div class="jobs-stats inter">
					<span class="pulse-dot"></span>
					<span class="stat-text">100% Placement Target</span>
				</div>
			</div>

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
					</div>
				{/each}
			</div>

			<div class="career-insights-grid">
				<div class="insight-block roadmap">
					<h3 class="satoshi">AI Specialist Roadmap</h3>
					<div class="roadmap-timeline">
						{#each focusRoadmap as step, i}
							<div class="roadmap-item" in:fly={{ x: -20, duration: 600, delay: i * 150 }}>
								<div class="timeline-connector">
									<div class="glow-dot" style="background: {activeTabColor}"></div>
									{#if i < focusRoadmap.length - 1}
										<div class="line"></div>
									{/if}
								</div>
								<div class="roadmap-card">
									<div class="year-badge satoshi" style="color: {activeTabColor}">{step.year}</div>
									<div class="goals-list inter">
										{#each step.goals as goal}
											<span class="goal-chip">{goal}</span>
										{/each}
									</div>
								</div>
							</div>
						{/each}
					</div>
				</div>

				<div class="insight-block reality-premium">
					<h3 class="satoshi">Placements Readiness</h3>
					<div class="reality-content inter">
						<p class="warning-text">AI roles require serious technical depth. Focus on:</p>
						<div class="focus-matrix">
							<div class="focus-chip math">
								<span class="dot"></span>
								Mathematics & Statistics
							</div>
							<div class="focus-chip kaggle">
								<span class="dot"></span>
								Kaggle Competitions
							</div>
							<div class="focus-chip open-source">
								<span class="dot"></span>
								Open Source Contributions
							</div>
							<div class="focus-chip dl">
								<span class="dot"></span>
								Deep Learning Frameworks
							</div>
						</div>
						<div class="success-formula-card">
							<div class="formula-badge">SUCCESS FORMULA</div>
							<div class="formula-equation">
								<span class="val">8.5+ CGPA</span>
								<span class="plus">+</span>
								<span class="val">Kaggle Rank</span>
								<span class="plus">+</span>
								<span class="val">ML Projects</span>
								<span class="plus">+</span>
								<span class="val">Internship</span>
								<span class="equals">=</span>
								<span class="result">SUCCESS</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="resources-hub">
				<header class="hub-header">
					<h3 class="satoshi">Digital Resource Hub</h3>
					<p class="inter">Curated tools for AI learning and hiring</p>
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

		<!-- Faculty Profile -->
		<section id="faculty" class="dept-section-card faculty-table-section">
			<div class="section-header-row">
				<div class="section-title-wrap">
					<h2 class="satoshi">AI & ML Faculty</h2>
					<p class="inter dept-label">Department of CSE (AI & ML)</p>
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
							><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"></path></svg
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
							placeholder="Search faculty..."
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
							<th class="col-sno">S.NO.</th>
							<th class="col-name">NAME</th>
							<th class="col-qual">QUALIFICATION</th>
							<th class="col-role">DESIGNATION</th>
							<th class="col-exp">EXPERIENCE</th>
							<th class="col-mobile">MOBILE</th>
						</tr>
					</thead>
					<tbody class="inter">
						{#each filteredFacultyRows as faculty, i}
							<tr in:fly={{ y: 10, duration: 400, delay: i * 30 }}>
								<td class="td-sno">{i + 1}</td>
								<td class="td-name"><span class="name-val">{faculty.name}</span></td>
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

		<!-- HOD Profile & Message - Redesigned Premium Layout -->
		<section id="hod" class="dept-section-card hod-premium-section">
			<div class="hod-profile-grid">
				<!-- Profile Visual -->
				<div class="hod-visual-side" in:fly={{ x: -30, duration: 800 }}>
					<div class="visual-container">
						<img src="/cse hod.jpg" alt="Prof. S. Durga Prasad" loading="lazy" class="hod-main-img" />
						<div class="visual-decor">
							<div class="experience-badge satoshi">
								<span class="num">22+</span>
								<span class="label">Years of<br/>Excellence</span>
							</div>
						</div>
					</div>
				</div>

				<!-- Message Side -->
				<div class="hod-message-side" in:fly={{ x: 30, duration: 800 }}>
					<div class="message-card">
						<div class="quote-mark">“</div>
						<header class="message-header">
							<h3 class="satoshi">Prof. S. Durga Prasad</h3>
							<p class="inter role">Head of Department | CSE (AI & ML)</p>
						</header>
						
						<div class="message-content">
							<p class="inter">
								Welcome to the AI & ML specialisation at BITS Vizag. Our department is dedicated 
								to nurturing technical leadership and pioneering research in intelligent systems. 
								We blend rigorous mathematical foundations with cutting-edge engineering 
								practices to prepare our students for the global AI landscape.
							</p>
						</div>

						<footer class="message-footer">
							<div class="signature-wrap">
								<p class="signature-text satoshi">S. Durga Prasad</p>
								<div class="signature-line"></div>
							</div>
							<div class="hod-stats">
								<div class="stat-item">
									<span class="stat-val">50+</span>
									<span class="stat-label">Papers</span>
								</div>
								<div class="stat-item">
									<span class="stat-val">15+</span>
									<span class="stat-label">Projects</span>
								</div>
							</div>
						</footer>
					</div>
				</div>
			</div>
		</section>

		<!-- Contact Info -->
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
							><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
							></path><polyline points="22,6 12,13 2,6"></polyline></svg
						>
					</div>
					<div class="tile-content">
						<span class="inter label">Official Email</span>
						<span class="inter value">cse.aiml@bitsvizag.com</span>
					</div>
					<a href="mailto:cse.aiml@bitsvizag.com" class="tile-link">Send Mail</a>
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
					<a href="tel:+919121214313" class="tile-link">Call Now</a>
				</div>
			</div>
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
		background: #0d1117 url('/CS-Banners/image copy.png') center/cover;
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
			rgba(13, 148, 136, 0.4) 0%,
			rgba(15, 23, 42, 0.9) 100%
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
		color: #5eead4;
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
		font-size: clamp(2rem, 5vw, 3.5rem);
		font-weight: 900;
		margin: 0;
		letter-spacing: -0.04em;
		line-height: 1.1;
		padding: 10px 0;
		background: linear-gradient(
			to right,
			#f0fdfa 0%,
			#ffffff 25%,
			#2dd4bf 50%,
			#ffffff 75%,
			#f0fdfa 100%
		);
		background-size: 200% auto;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		animation: shimmer 4s linear infinite;
	}

	@keyframes shimmer {
		to {
			background-position: 200% center;
		}
	}

	/* Main Layout */
	.main-content-layout {
		max-width: 1440px;
		margin: -60px auto 0;
		padding: 0 40px 100px;
		display: grid;
		grid-template-columns: 320px 1fr;
		gap: 40px;
		position: relative;
		z-index: 10;
	}

	/* Sidebar */
	.side-nav-container {
		position: sticky;
		top: 40px;
		height: fit-content;
	}

	.side-nav-card {
		background: white;
		border-radius: 32px;
		padding: 32px;
		border: 1px solid #e2e8f0;
		box-shadow: 0 20px 50px rgba(0, 0, 0, 0.05);
	}

	.side-nav-title {
		font-size: 0.75rem;
		font-weight: 900;
		color: #94a3b8;
		letter-spacing: 0.15em;
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
		gap: 12px;
		padding: 12px 16px;
		border-radius: 14px;
		background: transparent;
		border: none;
		color: #64748b;
		font-weight: 600;
		font-size: 0.9rem;
		cursor: pointer;
		transition: all 0.3s;
		text-align: left;
		position: relative;
	}

	.side-nav-btn:hover {
		background: #f8fafc;
		color: #0f172a;
	}

	.side-nav-btn.active {
		background: #f0fdfa;
		color: var(--nav-accent);
	}

	.nav-btn-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 32px;
		height: 32px;
		border-radius: 10px;
		background: white;
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
		transition: all 0.3s;
	}

	.side-nav-btn.active .nav-btn-icon {
		background: var(--nav-accent);
		color: white;
	}

	.nav-active-dot {
		position: absolute;
		right: 20px;
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: var(--nav-accent);
	}

	/* Section Cards */
	.dept-section-card {
		background: white;
		border-radius: 28px;
		padding: 32px;
		margin-bottom: 32px;
		border: 1px solid #e2e8f0;
		box-shadow: 0 20px 50px rgba(0, 0, 0, 0.03);
		position: relative;
		overflow: hidden;
		grid-column: 1 / -1;
	}

	main.content-body-grid .dept-section-card {
		grid-column: auto;
	}

	.section-top {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 48px;
	}

	.section-title-wrap h2 {
		font-size: 1.7rem;
		font-weight: 900;
		color: #0f172a;
		margin: 0 0 10px;
		letter-spacing: -0.03em;
	}

	.section-underline {
		width: 60px;
		height: 4px;
		background: var(--section-accent);
		border-radius: 2px;
	}

	.intake-group {
		display: flex;
		gap: 12px;
	}

	.intake-badge {
		padding: 8px 16px;
		background: white;
		border: 1px solid #e2e8f0;
		border-radius: 12px;
		font-size: 0.85rem;
		font-weight: 700;
	}

	.intake-badge .val {
		color: var(--bg);
	}

	/* About Grid */
	.about-grid-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 60px;
		align-items: center;
	}

	.main-para {
		font-size: 1.15rem;
		line-height: 1.5;
		font-weight: 600;
		color: #1e293b;
		margin-bottom: 20px;
	}

	.sub-para {
		font-size: 0.9rem;
		line-height: 1.7;
		color: #64748b;
	}

	.visual-slideshow {
		height: 320px;
		border-radius: 24px;
		overflow: hidden;
		position: relative;
		box-shadow: 0 40px 80px rgba(0, 0, 0, 0.1);
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
		bottom: 20px;
		left: 20px;
		display: flex;
		gap: 8px;
	}

	.slideshow-indicators .dot {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.5);
		transition: all 0.3s;
	}

	.slideshow-indicators .dot.active {
		width: 20px;
		border-radius: 3px;
		background: white;
	}

	/* Labs Premium Section */
	.labs-premium-section {
		background: #ffffff !important;
	}

	.labs-title-row {
		display: flex;
		align-items: center;
		gap: 16px;
	}

	.labs-icon-badge {
		background: #14b8a6;
		color: white;
		padding: 10px;
		border-radius: 12px;
		box-shadow: 0 8px 16px -4px rgba(20, 184, 166, 0.3);
	}

	.labs-interactive-grid {
		display: grid;
		grid-template-columns: 240px 1fr;
		gap: 32px;
		margin-top: 32px;
		min-height: 400px;
	}

	.labs-nav-sidebar {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.lab-nav-item {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 12px 16px;
		background: #f8fafc;
		border: 1px solid #f1f5f9;
		border-radius: 14px;
		cursor: pointer;
		transition: all 0.3s;
		text-align: left;
		position: relative;
		overflow: hidden;
	}

	.lab-nav-item.active {
		background: white;
		border-color: var(--nav-color);
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
	}

	.lab-nav-item .nav-icon {
		width: 36px;
		height: 36px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 10px;
		background: white;
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
		font-size: 0.85rem;
		color: #1e293b;
	}

	.cat-count {
		font-size: 0.7rem;
		color: #94a3b8;
		font-weight: 600;
	}

	.active-indicator {
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		width: 4px;
		background: var(--nav-color);
		opacity: 0;
		transition: opacity 0.3s;
	}

	.lab-nav-item.active .active-indicator {
		opacity: 1;
	}

	.labs-display-pane {
		background: #f8fafc;
		border-radius: 24px;
		padding: 28px;
		border: 1px solid #f1f5f9;
	}

	.display-header {
		margin-bottom: 24px;
	}

	.display-header h3 {
		font-size: 1.4rem;
		font-weight: 800;
		color: #0f172a;
		margin-bottom: 8px;
	}

	.display-header p {
		font-size: 0.9rem;
		color: #64748b;
		line-height: 1.6;
	}

	.lab-items-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
		gap: 12px;
	}

	.lab-item-card {
		background: white;
		padding: 16px;
		border-radius: 16px;
		border: 1px solid #e2e8f0;
		display: flex;
		align-items: center;
		gap: 12px;
		transition: all 0.3s;
	}

	.lab-item-card:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
		border-color: #cbd5e1;
	}

	.lab-status-dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		flex-shrink: 0;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	}

	.lab-action-btn {
		width: 28px;
		height: 28px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #f1f5f9;
		border-radius: 8px;
		color: #94a3b8;
		transition: all 0.3s;
	}

	.lab-item-card:hover .lab-action-btn {
		background: #0f172a;
		color: white;
	}

	.lab-name {
		font-size: 0.85rem;
		font-weight: 700;
		color: #334155;
		flex-grow: 1;
	}

	/* Vision & Mission Premium Panels */
	.vm-tabs-nav {
		display: flex;
		gap: 12px;
		margin-bottom: 40px;
		overflow-x: auto;
		padding: 4px;
	}

	.vm-tab-btn {
		display: flex;
		align-items: center;
		gap: 10px;
		padding: 10px 18px;
		border-radius: 12px;
		background: white;
		border: 1px solid #e2e8f0;
		color: #64748b;
		font-weight: 700;
		font-size: 0.85rem;
		cursor: pointer;
		transition: all 0.3s;
		white-space: nowrap;
	}

	.vm-tab-btn.active {
		background: var(--tab-color);
		color: white;
		border-color: var(--tab-color);
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
	}

	.vision-panel {
		padding: 20px 0;
	}

	.vision-quote {
		font-size: clamp(1.1rem, 3vw, 1.8rem);
		font-weight: 800;
		color: #0f172a;
		line-height: 1.4;
		font-style: italic;
		background: linear-gradient(to right, #0f172a, #475569);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.panel-title {
		font-size: 0.8rem;
		font-weight: 900;
		text-transform: uppercase;
		letter-spacing: 0.2em;
		color: var(--tab-color);
		margin-bottom: 24px;
	}

	.panel-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 24px;
	}

	.m-card,
	.pso-card {
		background: #f8fafc;
		padding: 24px;
		border-radius: 20px;
		border: 1px solid #e2e8f0;
		transition: all 0.3s ease;
	}

	.m-card:hover,
	.pso-card:hover {
		background: white;
		transform: translateY(-5px);
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
		border-color: #cbd5e1;
	}

	.m-id,
	.pso-id {
		font-size: 0.75rem;
		font-weight: 900;
		color: var(--tab-color);
		margin-bottom: 16px;
		display: block;
	}

	.peo-item {
		display: flex;
		gap: 20px;
		padding: 24px;
		background: #f8fafc;
		border-radius: 20px;
		margin-bottom: 16px;
		border: 1px solid #f1f5f9;
	}

	.peo-dot {
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background: var(--tab-color);
		margin-top: 6px;
		flex-shrink: 0;
		box-shadow: 0 0 15px var(--tab-color);
	}

	.peo-id {
		font-weight: 900;
		font-size: 0.8rem;
		color: var(--tab-color);
		margin-bottom: 4px;
		display: block;
	}

	.pos-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
		gap: 20px;
	}

	.po-card {
		padding: 20px;
		background: white;
		border: 1px solid #f1f5f9;
		border-radius: 16px;
		transition: all 0.3s;
	}

	.po-card:hover {
		border-color: var(--tab-color);
		background: #fafafa;
	}

	.po-header {
		display: flex;
		align-items: center;
		gap: 12px;
		margin-bottom: 12px;
	}

	.po-id {
		font-size: 0.7rem;
		font-weight: 900;
		color: var(--tab-color);
		padding: 4px 8px;
		background: #f0fdf4;
		border-radius: 6px;
	}

	.po-header h4 {
		font-size: 1rem;
		font-weight: 800;
		color: #1e293b;
	}

	.sdg-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
		gap: 20px;
	}

	.sdg-card {
		display: flex;
		gap: 20px;
		padding: 24px;
		background: white;
		border-radius: 24px;
		border: 1px solid #f1f5f9;
		transition: all 0.3s;
	}

	.sdg-card:hover {
		transform: scale(1.02);
		border-color: var(--sdg-color);
	}

	.sdg-icon-wrap {
		width: 48px;
		height: 48px;
		border-radius: 12px;
		background: #f8fafc;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	/* HOD Message Upgraded */
	.hod-premium-card {
		background: #ffffff !important;
	}

	.hod-container {
		display: grid;
		grid-template-columns: 380px 1fr;
		gap: 60px;
		align-items: center;
	}

	.hod-visual {
		position: relative;
		height: 480px;
		border-radius: 32px;
		overflow: hidden;
	}

	.hod-visual img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		position: relative;
		z-index: 2;
	}

	.hod-image-glow {
		position: absolute;
		inset: 0;
		background: radial-gradient(circle at center, var(--section-accent) 0%, transparent 70%);
		opacity: 0.2;
		z-index: 1;
	}

	.hod-badge {
		position: absolute;
		bottom: 24px;
		left: 24px;
		right: 24px;
		background: rgba(255, 255, 255, 0.9);
		backdrop-filter: blur(10px);
		padding: 16px;
		border-radius: 20px;
		text-align: center;
		font-weight: 800;
		color: #0f172a;
		z-index: 3;
		border: 1px solid rgba(255, 255, 255, 0.2);
	}

	.hod-content {
		padding-right: 40px;
	}

	.hod-eyebrow {
		display: block;
		font-size: 0.75rem;
		font-weight: 900;
		letter-spacing: 0.2em;
		color: var(--section-accent);
		margin-bottom: 12px;
	}

	.hod-content h2 {
		font-size: 2.4rem;
		font-weight: 900;
		color: #0f172a;
		margin-bottom: 8px;
	}

	.hod-designation {
		font-size: 1rem;
		color: #64748b;
		font-weight: 600;
		margin-bottom: 32px;
	}

	.hod-message-body p {
		font-size: 1.1rem;
		line-height: 1.8;
		color: #334155;
		margin-bottom: 24px;
	}

	.signature {
		font-family: 'Satoshi', sans-serif;
		font-weight: 900;
		font-size: 1.2rem !important;
		color: #0f172a !important;
		margin-top: 32px;
		border-top: 1px solid #f1f5f9;
		padding-top: 24px;
		display: inline-block;
	}

	/* Contact Page Premium */
	.contact-premium-section {
		background: #0f172a !important;
		color: white !important;
	}

	.contact-premium-section h2 {
		color: white !important;
	}

	.contact-action-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 24px;
	}

	.contact-tile {
		background: rgba(255, 255, 255, 0.03);
		border: 1px solid rgba(255, 255, 255, 0.1);
		padding: 32px;
		border-radius: 28px;
		transition: all 0.4s;
		display: flex;
		flex-direction: column;
		gap: 24px;
	}

	.contact-tile:hover {
		background: rgba(255, 255, 255, 0.05);
		border-color: var(--section-accent);
		transform: translateY(-5px);
	}

	.tile-icon {
		width: 48px;
		height: 48px;
		background: rgba(255, 255, 255, 0.05);
		border-radius: 14px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--section-accent);
	}

	.tile-content .label {
		display: block;
		font-size: 0.75rem;
		font-weight: 800;
		color: #94a3b8;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		margin-bottom: 8px;
	}

	.tile-content .value {
		font-size: 1.1rem;
		font-weight: 700;
		color: white;
	}

	.tile-link {
		padding: 12px 24px;
		background: var(--section-accent);
		color: white;
		text-decoration: none;
		border-radius: 12px;
		font-weight: 700;
		font-size: 0.85rem;
		text-align: center;
		transition: all 0.3s;
	}

	.tile-link:hover {
		filter: brightness(1.1);
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
	}

	/* Faculty Table Fixes */
	.faculty-main-table th {
		background: #0f172a;
		color: white;
		padding: 18px 24px;
		text-align: left;
		font-size: 0.75rem;
		font-weight: 800;
		letter-spacing: 0.1em;
	}

	.faculty-main-table td {
		padding: 18px 24px;
		border-bottom: 1px solid #f1f5f9;
	}

	.name-val {
		color: #14b8a6;
		font-weight: 800;
	}

	.mobile-link {
		color: #0d9488;
		text-decoration: none;
		font-weight: 700;
	}

	.mobile-link:hover {
		text-decoration: underline;
	}

	/* Utility */
	.scrollbar-hide::-webkit-scrollbar {
		display: none;
	}
	.scrollbar-hide {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	@media (max-width: 1000px) {
		.main-content-layout {
			grid-template-columns: 1fr;
			margin-top: -40px;
		}
		.side-nav-container {
			display: none;
		}
		.hod-container {
			grid-template-columns: 1fr;
		}
		.hod-visual {
			height: 350px;
		}
		.about-grid-content {
			grid-template-columns: 1fr;
		}
	}

	.cat-name {
		display: block;
		font-weight: 800;
		font-size: 0.95rem;
		color: #0f172a;
	}

	.cat-count {
		font-size: 0.75rem;
		color: #94a3b8;
	}

	.lab-items-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 16px;
	}

	.lab-item-card {
		padding: 24px;
		background: #f8fafc;
		border-radius: 20px;
		display: flex;
		align-items: center;
		gap: 16px;
		border: 1px solid #f1f5f9;
		transition: all 0.3s;
	}

	.lab-item-card:hover {
		background: white;
		transform: translateY(-4px);
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
	}

	/* Job Opportunities Grid */
	.jobs-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
		gap: 20px;
		margin-top: 32px;
	}

	.job-card {
		background: #f8fafc;
		border-radius: 28px;
		padding: 32px;
		border: 1px solid #f1f5f9;
		background: white;
		padding: 32px;
		border-radius: 32px;
		border: 1px solid #f1f5f9;
		position: relative;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.01);
	}

	.job-card:hover {
		transform: translateY(-8px);
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.04);
		border-color: var(--icon-bg);
		background: linear-gradient(180deg, white 0%, #f8fafc 100%);
	}

	.job-icon-wrap {
		width: 52px;
		height: 52px;
		border-radius: 16px;
		background: var(--icon-bg);
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 24px;
		box-shadow: 0 8px 16px -2px rgba(0, 0, 0, 0.1);
	}

	.job-details h4 {
		font-size: 1.25rem;
		font-weight: 800;
		color: #0f172a;
		margin-bottom: 8px;
		letter-spacing: -0.02em;
	}

	.job-details p {
		font-size: 0.9rem;
		color: #64748b;
		margin-bottom: 20px;
		line-height: 1.6;
	}

	.job-skills {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		margin-top: auto;
	}

	.skill-tag {
		padding: 6px 12px;
		background: #f1f5f9;
		border-radius: 10px;
		font-size: 0.7rem;
		font-weight: 800;
		color: #475569;
		text-transform: uppercase;
		letter-spacing: 0.025em;
		transition: all 0.3s;
	}

	.job-card:hover .skill-tag {
		background: white;
		color: var(--icon-bg);
	}

	/* Roadmap Timeline */
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
		transition: all 0.3s ease;
	}

	.reality-premium {
		background: white;
		border: 1px solid #e2e8f0;
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.03);
	}

	.warning-text {
		color: #0f172a;
		font-weight: 700;
		margin-bottom: 24px;
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.focus-matrix {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 12px;
		margin-bottom: 32px;
	}

	.focus-chip {
		padding: 12px 16px;
		border-radius: 12px;
		background: #f8fafc;
		border: 1px solid #f1f5f9;
		font-size: 0.85rem;
		font-weight: 700;
		color: #334155;
		display: flex;
		align-items: center;
		gap: 10px;
		transition: all 0.3s;
	}

	.focus-chip .dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
	}

	.focus-chip.math {
		border-left: 4px solid #0d9488;
	}
	.focus-chip.math .dot {
		background: #0d9488;
	}
	.focus-chip.kaggle {
		border-left: 4px solid #7c3aed;
	}
	.focus-chip.kaggle .dot {
		background: #7c3aed;
	}
	.focus-chip.open-source {
		border-left: 4px solid #0284c7;
	}
	.focus-chip.open-source .dot {
		background: #0284c7;
	}
	.focus-chip.dl {
		border-left: 4px solid #db2777;
	}
	.focus-chip.dl .dot {
		background: #db2777;
	}

	.focus-chip:hover {
		transform: translateY(-3px);
		background: white;
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
	}

	.success-formula-card {
		background: linear-gradient(135deg, #0d9488 0%, #111827 100%);
		padding: 24px;
		border-radius: 20px;
		position: relative;
		overflow: hidden;
		color: white;
		box-shadow: 0 20px 40px rgba(13, 148, 136, 0.2);
	}

	.success-formula-card::before {
		content: '';
		position: absolute;
		top: -50%;
		left: -50%;
		width: 200%;
		height: 200%;
		background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 60%);
		pointer-events: none;
	}

	.formula-badge {
		font-size: 0.65rem;
		font-weight: 900;
		letter-spacing: 0.1em;
		color: #5eead4;
		margin-bottom: 12px;
		text-transform: uppercase;
	}

	.formula-equation {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 8px;
		font-weight: 800;
		font-size: 0.9rem;
	}

	.formula-equation .val {
		color: white;
	}

	.formula-equation .plus,
	.formula-equation .equals {
		color: #5eead4;
		opacity: 0.8;
	}

	.formula-equation .result {
		color: #fbbf24;
		text-shadow: 0 0 15px rgba(251, 191, 36, 0.5);
		font-size: 1.1rem;
	}

	.roadmap-timeline {
		position: relative;
		margin-top: 32px;
	}

	.roadmap-item {
		display: flex;
		gap: 24px;
		margin-bottom: 24px;
		position: relative;
	}

	.timeline-connector {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		width: 12px;
		flex-shrink: 0;
	}

	.glow-dot {
		width: 12px;
		height: 12px;
		border-radius: 50%;
		z-index: 2;
		box-shadow: 0 0 10px var(--section-accent);
		animation: pulse 2s infinite;
	}

	@keyframes pulse {
		0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(13, 148, 136, 0.4); }
		70% { transform: scale(1.1); box-shadow: 0 0 0 10px rgba(13, 148, 136, 0); }
		100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(13, 148, 136, 0); }
	}

	.timeline-connector .line {
		position: absolute;
		top: 12px;
		bottom: -24px;
		width: 2px;
		background: linear-gradient(180deg, var(--section-accent), #e2e8f0);
		z-index: 1;
	}

	.roadmap-card {
		background: white;
		padding: 20px;
		border-radius: 18px;
		border: 1px solid #f1f5f9;
		flex: 1;
		transition: all 0.3s ease;
	}

	.roadmap-card:hover {
		transform: translateX(8px);
		box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
	}

	.year-badge {
		font-size: 0.75rem;
		font-weight: 900;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		margin-bottom: 12px;
	}

	.goals-list {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}

	.goal-chip {
		background: #f8fafc;
		padding: 6px 14px;
		border-radius: 100px;
		font-size: 0.8rem;
		font-weight: 700;
		color: #334155;
		border: 1px solid #f1f5f9;
		transition: all 0.3s;
	}

	.goal-chip:hover {
		background: #f0fdfa;
		border-color: #5eead4;
		color: #0d9488;
	}

	/* Resources Hub - Minimal & Neat */
	.resources-hub {
		margin-top: 32px;
		background: #f8fafc;
		border-radius: 24px;
		padding: 24px;
		border: 1px solid #e2e8f0;
	}

	.hub-header {
		margin-bottom: 20px;
		text-align: left;
	}

	.hub-header h3 {
		font-size: 1.1rem;
		font-weight: 800;
		color: #0f172a;
	}

	.hub-header p {
		font-size: 0.8rem;
		color: #64748b;
	}

	.hub-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
		gap: 24px;
	}

	.hub-cat h4 {
		font-size: 0.7rem;
		font-weight: 900;
		color: #94a3b8;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		margin-bottom: 12px;
	}

	.link-list {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	.resource-link {
		display: flex;
		align-items: center;
		gap: 8px;
		text-decoration: none;
		color: #475569;
		font-size: 0.85rem;
		font-weight: 600;
		transition: 0.2s;
		padding: 4px 0;
	}

	.resource-link svg {
		opacity: 0.5;
	}

	.resource-link:hover {
		color: #0d9488;
		transform: translateX(3px);
	}

	/* HOD Premium Redesign */
	.hod-profile-grid {
		display: grid;
		grid-template-columns: 380px 1fr;
		gap: 60px;
		align-items: center;
		padding: 40px 0;
	}

	.hod-visual-side {
		position: relative;
	}

	.visual-container {
		position: relative;
		border-radius: 40px;
		overflow: hidden;
		box-shadow: 0 30px 60px rgba(0, 0, 0, 0.1);
	}

	.hod-main-img {
		width: 100%;
		height: 480px;
		object-fit: cover;
		transition: transform 0.5s ease;
	}

	.visual-container:hover .hod-main-img {
		transform: scale(1.05);
	}

	.experience-badge {
		position: absolute;
		bottom: 30px;
		right: -20px;
		background: var(--section-accent);
		color: white;
		padding: 20px;
		border-radius: 24px;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
	}

	.experience-badge .num {
		font-size: 2rem;
		font-weight: 900;
		line-height: 1;
	}

	.experience-badge .label {
		font-size: 0.7rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		margin-top: 4px;
	}

	.hod-message-side {
		position: relative;
	}

	.message-card {
		background: white;
		padding: 60px;
		border-radius: 40px;
		border: 1px solid #f1f5f9;
		position: relative;
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.02);
	}

	.quote-mark {
		position: absolute;
		top: 20px;
		left: 40px;
		font-size: 12rem;
		font-family: serif;
		color: var(--section-accent);
		opacity: 0.05;
		line-height: 1;
	}

	.message-header h3 {
		font-size: 2rem;
		font-weight: 900;
		color: #0f172a;
		margin-bottom: 4px;
	}

	.message-header .role {
		font-size: 1rem;
		color: var(--section-accent);
		font-weight: 700;
		margin-bottom: 32px;
	}

	.message-content p {
		font-size: 1.15rem;
		line-height: 1.8;
		color: #475569;
		font-style: italic;
		margin-bottom: 40px;
	}

	.message-footer {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		border-top: 1px solid #f1f5f9;
		padding-top: 32px;
	}

	.signature-text {
		font-size: 1.5rem;
		font-weight: 700;
		color: #0f172a;
		margin-bottom: 8px;
	}

	.signature-line {
		width: 60px;
		height: 3px;
		background: var(--section-accent);
		border-radius: 2px;
	}

	.hod-stats {
		display: flex;
		gap: 32px;
	}

	.stat-item {
		display: flex;
		flex-direction: column;
	}

	.stat-val {
		font-size: 1.5rem;
		font-weight: 900;
		color: #0f172a;
	}

	.stat-label {
		font-size: 0.75rem;
		font-weight: 700;
		color: #64748b;
		text-transform: uppercase;
	}

	@media (max-width: 1200px) {
		.hod-profile-grid {
			grid-template-columns: 1fr;
			gap: 40px;
		}
		.hod-main-img {
			height: 400px;
		}
		.message-card {
			padding: 40px;
		}
	}

	/* Faculty Table */
	.premium-table-viewport {
		margin-top: 32px;
		border-radius: 24px;
		overflow: hidden;
		border: 1px solid #e2e8f0;
	}

	.faculty-main-table {
		width: 100%;
		border-collapse: collapse;
		text-align: left;
	}

	.faculty-main-table th {
		background: #f8fafc;
		padding: 20px;
		font-size: 0.75rem;
		font-weight: 800;
		color: #64748b;
		text-transform: uppercase;
		letter-spacing: 0.1em;
	}

	.faculty-main-table td {
		padding: 20px;
		font-size: 0.9rem;
		border-top: 1px solid #f1f5f9;
		color: #0f172a;
	}

	.name-val {
		font-weight: 700;
	}

	.round-action-btn {
		width: 44px;
		height: 44px;
		border-radius: 50%;
		border: 1px solid #e2e8f0;
		background: white;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.3s;
	}

	.round-action-btn:hover {
		border-color: #0d9488;
		color: #0d9488;
		background: #f0fdfa;
	}

	.table-controls-row {
		display: flex;
		justify-content: space-between;
		margin-top: 32px;
	}

	.search-box {
		display: flex;
		align-items: center;
		gap: 12px;
		background: #f8fafc;
		padding: 12px 20px;
		border-radius: 14px;
		border: 1px solid #e2e8f0;
		width: 300px;
	}

	.search-box input {
		background: transparent;
		border: none;
		outline: none;
		width: 100%;
		font-size: 0.9rem;
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
		.main-content-layout {
			padding: 0 12px 40px;
			display: block;
			margin-top: -30px;
		}

		.side-nav-container {
			display: none;
		}

		.dept-section-card {
			padding: 24px 16px !important;
			border-radius: 20px;
			text-align: center;
			margin-bottom: 32px;
			overflow: hidden;
		}

		.section-top {
			flex-direction: column;
			gap: 16px;
			align-items: center;
		}

		.section-title-wrap h2 {
			font-size: 1.55rem;
			font-weight: 700;
			letter-spacing: -0.015em;
			line-height: 1.2;
		}

		.section-underline {
			width: 56px;
			height: 3px;
			margin: 10px auto 0;
			background: linear-gradient(90deg, var(--section-accent), #1e293b);
		}

		.intake-group {
			justify-content: center;
			flex-wrap: nowrap;
			gap: 8px;
			width: 100%;
			max-width: 400px;
			margin: 0 auto;
		}

		.intake-badge {
			padding: 6px 10px;
			font-size: 0.75rem;
			flex: 1;
			justify-content: center;
			white-space: nowrap;
		}

		/* About Section Mobile - Compact & Neat */
		.about-grid-content {
			grid-template-columns: 1fr;
			gap: 16px;
		}

		.about-text-side {
			order: 2;
			text-align: center;
		}

		.main-para {
			font-size: 0.95rem;
			margin-bottom: 12px;
			line-height: 1.5;
		}

		.sub-para {
			font-size: 0.85rem;
			text-align: center;
			line-height: 1.6;
		}

		.about-visual-side {
			order: 1;
			width: 100%;
		}

		.visual-slideshow {
			height: 180px;
			border-radius: 16px;
		}

		/* Vision & Mission Mobile - Ultra-Minimal */
		.vm-premium-section {
			margin-top: 0 !important;
			padding: 24px 12px !important;
		}

		.vm-icon-badge {
			display: none;
		}

		.vm-title-row {
			flex-direction: column;
			gap: 8px;
			text-align: center;
			align-items: center;
		}

		.vm-tabs-nav {
			justify-content: flex-start;
			padding: 4px 0 12px;
			margin: 12px 0;
			gap: 8px;
		}

		.vm-tab-btn {
			padding: 6px 14px;
			font-size: 0.75rem;
		}

		.vision-quote {
			font-size: 1.05rem;
			padding: 24px 16px;
			border-radius: 20px;
			max-width: 100%;
			line-height: 1.5;
		}

		.mission-panel .panel-grid {
			grid-template-columns: 1fr;
			gap: 8px;
		}

		.m-card {
			padding: 12px 14px;
			background: #f8fafc;
			border: 1px solid #f1f5f9;
			border-radius: 12px;
		}

		.m-card h4 {
			font-size: 0.85rem;
			margin-bottom: 4px;
		}

		.m-card p {
			font-size: 0.8rem;
		}

		.peos-panel .panel-list {
			flex-direction: column;
			gap: 8px;
		}

		.peo-item {
			padding: 12px 14px;
			border-radius: 12px;
			background: #f8fafc;
			border: 1px solid #f1f5f9;
			gap: 8px;
		}

		.peo-dot {
			display: none;
		}

		.peo-id {
			font-size: 0.75rem;
			color: var(--section-accent);
			font-weight: 800;
			min-width: 32px;
		}

		.peo-content p {
			font-size: 0.8rem;
		}

		.psos-panel .panel-grid {
			grid-template-columns: 1fr;
			gap: 8px;
		}

		.pso-card {
			padding: 12px 14px;
			border-radius: 12px;
			background: #f8fafc;
			border: 1px solid #f1f5f9;
			gap: 8px;
		}

		.pso-icon {
			display: none;
		}

		.pso-id {
			font-size: 0.75rem;
			color: var(--section-accent);
			font-weight: 800;
			min-width: 36px;
		}

		.pso-text p {
			font-size: 0.8rem;
		}

		.pos-grid {
			grid-template-columns: 1fr;
			gap: 8px;
		}

		.po-card {
			padding: 12px 14px;
			border-radius: 12px;
			background: #f8fafc;
			border: 1px solid #f1f5f9;
		}

		.po-header {
			margin-bottom: 4px;
			gap: 10px;
			display: flex;
			align-items: center;
		}

		.po-card h4 {
			font-size: 0.85rem;
			margin: 0;
		}

		.po-card p {
			font-size: 0.75rem;
			line-height: 1.4;
			color: #64748b;
		}

		.k-grid {
			grid-template-columns: 1fr;
			gap: 8px;
		}

		.k-card {
			padding: 12px 14px;
			border-radius: 12px;
			border-top-width: 3px;
		}

		.k-card h4 {
			font-size: 0.85rem;
			margin-bottom: 4px;
		}

		.k-card p {
			font-size: 0.8rem;
		}

		.sdg-grid {
			grid-template-columns: 1fr;
			gap: 8px;
		}

		.sdg-card {
			padding: 10px 12px;
			gap: 12px;
			border-radius: 12px;
			border-left-width: 4px;
		}

		.sdg-num {
			font-size: 1rem;
		}

		.sdg-content h4 {
			font-size: 0.85rem;
			margin-bottom: 2px;
		}

		.sdg-content p {
			font-size: 0.75rem;
		}

		/* Labs Section Mobile - Clean Viewport */
		.labs-interactive-grid {
			grid-template-columns: 1fr;
			gap: 16px;
		}

		.labs-nav-sidebar {
			flex-direction: row;
			overflow-x: auto;
			padding: 4px 0 12px;
			gap: 10px;
			border-bottom: 1px solid #f1f5f9;
			margin-bottom: 8px;
		}

		.lab-nav-item {
			min-width: 130px;
			flex-direction: column;
			align-items: center;
			text-align: center;
			padding: 12px 8px;
			gap: 8px;
			border-radius: 16px;
		}

		.lab-nav-item .nav-icon {
			padding: 8px;
			border-radius: 10px;
		}

		.cat-name {
			font-size: 0.8rem;
		}

		.cat-count {
			font-size: 0.65rem;
		}

		.labs-display-pane {
			padding: 24px 16px;
			border-radius: 24px;
			text-align: center;
		}

		.display-header h3 {
			font-size: 1.3rem;
			margin-bottom: 8px;
		}

		.display-header p {
			font-size: 0.85rem;
			line-height: 1.5;
			margin: 0 auto;
		}

		.lab-item-card {
			padding: 12px 16px;
			border-radius: 14px;
			gap: 12px;
		}

		.lab-name {
			font-size: 0.85rem;
			text-align: left;
		}

		/* Jobs & Careers Mobile - Compact Grid */
		.jobs-grid {
			grid-template-columns: repeat(2, 1fr);
			gap: 12px;
		}

		.job-card {
			padding: 16px 12px;
			gap: 10px;
			border-radius: 16px;
		}

		.job-icon-wrap {
			width: 36px;
			height: 36px;
			margin-bottom: 4px;
			border-radius: 10px;
		}

		.job-icon-wrap svg {
			width: 18px;
			height: 18px;
		}

		.job-details h4 {
			font-size: 0.9rem;
			margin-bottom: 4px;
		}

		.job-details p {
			font-size: 0.7rem;
			margin-bottom: 10px;
			line-height: 1.4;
		}

		.job-skills {
			gap: 4px;
		}

		.skill-tag {
			font-size: 0.6rem;
			padding: 2px 6px;
			border-radius: 6px;
		}

		.career-insights-grid {
			grid-template-columns: 1fr;
			gap: 16px;
		}

		.insight-block {
			padding: 20px 16px;
		}

		/* HOD Section Mobile - Minimal & Compact */
		.hod-container {
			grid-template-columns: 1fr;
		}

		.hod-visual {
			height: 180px;
			order: 1;
		}

		.hod-content {
			padding: 24px 16px;
			order: 2;
			text-align: center;
			align-items: center;
		}

		.quote-icon {
			margin-bottom: 12px;
			display: flex;
			justify-content: center;
		}

		.quote-icon svg {
			width: 32px;
			height: 32px;
		}

		.hod-content h2 {
			font-size: 1.5rem;
			margin-top: 4px;
		}

		.hod-designation {
			font-size: 0.85rem;
			margin-bottom: 16px;
		}

		.hod-message-body p {
			font-size: 0.95rem;
			max-width: 100%;
			line-height: 1.5;
		}

		.hod-badge {
			bottom: 10px;
			left: 50%;
			transform: translateX(-50%);
			padding: 4px 10px;
			font-size: 0.7rem;
		}

		/* Faculty Table Mobile - Neat Table View (Mirrors CSE Dept) */
		.faculty-table-section {
			padding: 24px 12px !important;
		}

		.table-controls-row {
			flex-direction: column;
			gap: 16px;
			align-items: center;
			margin-bottom: 20px;
		}

		.search-box {
			width: 100%;
			max-width: 320px;
		}

		.premium-table-viewport {
			border: 1px solid #e2e8f0;
			border-radius: 20px;
			overflow-x: auto; /* Allow horizontal scroll for table items on mobile */
		}

		.faculty-main-table {
			display: table;
			width: 100%;
			min-width: 600px; /* Force minimum width for horizontal scroll */
		}

		.faculty-main-table thead {
			display: table-header-group;
		}

		.faculty-main-table tr {
			display: table-row !important;
		}

		.faculty-main-table th,
		.faculty-main-table td {
			display: table-cell !important;
			padding: 12px 10px !important;
			font-size: 0.75rem !important;
			white-space: nowrap;
		}

		.col-sno, .td-sno {
			display: none !important; /* Hide S.NO for more space */
		}

		.mobile-link {
			color: #0d9488 !important;
			font-weight: 700;
			text-decoration: underline;
		}

		/* Resource Hub - Minimal Height Fix */
		.resources-hub {
			background: #f8fafc;
			padding: 24px 20px;
			border-radius: 20px;
			border: 1px solid #e2e8f0;
			text-align: left;
			margin-top: 24px;
		}

		.hub-grid {
			grid-template-columns: repeat(2, 1fr);
			gap: 20px;
			text-align: left;
		}

		.hub-cat h4 {
			font-size: 0.65rem;
			color: #94a3b8;
			margin-bottom: 8px;
		}

		.link-list {
			align-items: flex-start;
			gap: 4px;
		}

		.resource-link {
			background: transparent;
			padding: 4px 0;
			border: none;
			width: auto;
			justify-content: flex-start;
			font-size: 0.8rem;
			color: #475569;
		}

		.resource-link svg {
			display: none;
		}

		/* HOD Section Fix */
		.hod-profile-grid {
			grid-template-columns: 1fr;
			gap: 0;
			padding: 0;
		}
		
		.hod-visual-side {
			width: 100%;
		}

		.hod-main-img {
			height: 320px;
			border-radius: 24px 24px 0 0;
		}

		.experience-badge {
			padding: 12px;
			bottom: 40px;
			right: 10px;
			border-radius: 16px;
		}

		.experience-badge .num {
			font-size: 1.5rem;
		}

		.experience-badge .label {
			font-size: 0.6rem;
		}
		
		.hod-message-side {
			margin-top: -32px;
			width: 100%;
		}

		.message-card {
			padding: 32px 20px;
			border-radius: 24px;
			text-align: center;
		}

		.quote-mark {
			font-size: 8rem;
			top: 0;
			left: 20px;
		}

		.message-header h3 {
			font-size: 1.5rem;
		}

		.message-header .role {
			font-size: 0.85rem;
			margin-bottom: 20px;
		}

		.message-content p {
			font-size: 1rem;
			line-height: 1.6;
			margin-bottom: 24px;
		}

		.message-footer {
			flex-direction: column;
			align-items: center;
			gap: 20px;
			padding-top: 24px;
		}

		.signature-text {
			font-size: 1.2rem;
		}

		.hod-stats {
			gap: 24px;
		}

		.stat-val {
			font-size: 1.25rem;
		}

		/* Contact Us - Smaller View */
		.contact-action-grid {
			grid-template-columns: 1fr;
			gap: 12px;
		}

		.contact-tile {
			padding: 14px 18px;
			gap: 12px;
			border-radius: 16px;
			flex-direction: row;
			align-items: center;
			text-align: left;
		}

		.tile-icon {
			width: 36px;
			height: 36px;
			padding: 8px;
			flex-shrink: 0;
		}

		.tile-content {
			flex: 1;
		}

		.tile-content .label {
			font-size: 0.7rem;
			margin-bottom: 1px;
		}

		.tile-content .value {
			font-size: 0.85rem;
		}

		.tile-link {
			padding: 6px 12px;
			font-size: 0.75rem;
			border-radius: 8px;
		}

		/* Hero Adjustments - Minimal & Neat */
		.header-hero {
			height: 200px;
			margin-bottom: 10px;
			padding-bottom: 40px;
		}

		.header-content h1 {
			font-size: 1.35rem;
			line-height: 1.25;
			white-space: normal;
			text-align: center;
			max-width: 280px;
		}

		.welcome-text {
			font-size: 0.65rem;
			gap: 1px;
			margin-bottom: 8px;
			flex-wrap: wrap;
			justify-content: center;
			max-width: 90vw;
		}

		.welcome-text .animated-char {
			letter-spacing: 0.15em;
			font-size: 0.7rem;
		}
	}

	@media (max-width: 480px) {
		.header-hero {
			height: 180px;
		}
		.dept-section-card {
			padding: 20px 12px !important;
		}
		.vision-quote {
			font-size: 1rem;
		}
	}

	/* =============================================
	   WHOLE PAGE PRINT - Premium Brochure Standard
	   ============================================= */
	@media print {
		:global(body) {
			background: #f8fafc !important;
			margin: 0;
			padding: 0;
			-webkit-print-color-adjust: exact !important;
			print-color-adjust: exact !important;
		}

		.dept-premium-root {
			background: #f8fafc !important;
			padding: 0 !important;
		}

		.main-content-layout {
			margin: 0 !important;
			padding: 0 !important;
			display: block !important;
			width: 100% !important;
		}

		/* Hide only global interactive UI */
		.side-nav-container,
		.table-controls-row,
		.slideshow-indicators,
		.lab-action-btn,
		.tile-link,
		.round-action-btn,
		:global(nav),
		:global(footer) {
			display: none !important;
		}

		/* Premium Header Print View */
		.header-hero {
			height: 320px !important;
			background: #0d1117 !important;
			display: flex !important;
			flex-direction: column !important;
			justify-content: center !important;
			align-items: center !important;
			margin-bottom: 50px !important;
			border-bottom: 8px solid #0d9488 !important;
		}

		.header-content h1 {
			background: linear-gradient(to right, #ffffff, #2dd4bf) !important;
			-webkit-background-clip: text !important;
			-webkit-text-fill-color: transparent !important;
			font-size: 3rem !important;
			text-align: center !important;
		}

		.welcome-text span {
			color: #5eead4 !important;
			opacity: 1 !important;
			transform: none !important;
		}

		/* Section Card Design */
		.dept-section-card {
			box-shadow: 0 10px 30px rgba(0,0,0,0.05) !important;
			border: 1px solid #e2e8f0 !important;
			padding: 40px !important;
			margin: 0 30px 40px 30px !important;
			border-radius: 32px !important;
			page-break-inside: avoid !important;
			background: white !important;
		}

		/* Vision & Mission Print */
		.vm-tab-btn.active {
			background: var(--tab-color) !important;
			color: white !important;
		}

		.vision-quote {
			border-left: 6px solid var(--section-accent) !important;
			background: #f0fdfa !important;
		}

		/* Roadmap & Jobs Print */
		.roadmap-card {
			border-left: 4px solid var(--section-accent) !important;
			background: #f8fafc !important;
		}

		.goal-chip {
			background: white !important;
			border: 1px solid #e2e8f0 !important;
			color: #0d9488 !important;
		}

		.job-card {
			border-top: 4px solid var(--icon-bg) !important;
			background: white !important;
		}

		.job-icon-wrap {
			background: var(--icon-bg) !important;
			color: white !important;
		}

		/* Faculty Table Print View */
		.faculty-main-table {
			width: 100% !important;
			border-collapse: separate !important;
			border-spacing: 0 !important;
			border-radius: 16px !important;
			overflow: hidden !important;
			border: 1px solid #e2e8f0 !important;
		}

		.faculty-main-table th {
			background: #0f172a !important;
			color: white !important;
			padding: 15px !important;
			font-size: 0.8rem !important;
			text-transform: uppercase !important;
		}

		.faculty-main-table td {
			padding: 12px 15px !important;
			border-bottom: 1px solid #f1f5f9 !important;
			font-size: 0.85rem !important;
		}

		.faculty-main-table tr:nth-child(even) {
			background: #f8fafc !important;
		}

		.name-val {
			color: #0d9488 !important;
			font-weight: 800 !important;
		}

		/* HOD Section Print */
		.hod-visual-side img {
			border-radius: 20px !important;
		}

		.experience-badge {
			background: #0d9488 !important;
			color: white !important;
		}

		.quote-mark {
			opacity: 0.1 !important;
		}

		.hod-stats .stat-val {
			color: #0d9488 !important;
		}

		/* Footer-like branding for PDF */
		.dept-premium-root::after {
			content: '© 2026 BABA INSTITUTE OF TECHNOLOGY AND SCIENCES (BITS VIZAG) - Department of CSE (AI & ML)';
			display: block;
			text-align: center;
			font-size: 0.75rem;
			color: #94a3b8;
			margin-top: 40px;
			padding-bottom: 40px;
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
