<script>
	import { onMount } from 'svelte';

	let selectedTab = 'ug';
	let ugCount = 0;
	let pgCount = 0;
	let hasAnimated = false;

	const ugPrograms = [
		'B.Tech Computer Science & Engineering',
		'B.Tech CSE (AI & ML)',
		'B.Tech CSE (Cyber Security)',
		'B.Tech Electronics & Communication',
		'B.Tech Electrical & Electronics',
		'B.Tech Mechanical Engineering'
	];

	const pgPrograms = [
		'M.Tech Advanced Computing',
		'M.Tech Power Systems',
		'MBA General',
		'MBA Finance',
		'MBA Operations'
	];

	const programLists = {
		ug: ugPrograms,
		pg: pgPrograms
	};

	function animateCounter(target, duration = 800) {
		const start = 0;
		const increment = target / (duration / 16);
		let current = 0;

		const counter = setInterval(() => {
			current += increment;
			if (current >= target) {
				current = target;
				clearInterval(counter);
			}
			if (selectedTab === 'ug') {
				ugCount = Math.floor(current);
			} else {
				pgCount = Math.floor(current);
			}
		}, 16);
	}

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && !hasAnimated) {
						hasAnimated = true;
						animateCounter(ugPrograms.length);
					}
				});
			},
			{ threshold: 0.3 }
		);

		const element = document.getElementById('academics-highlight');
		if (element) {
			observer.observe(element);
		}

		return () => {
			if (element) observer.unobserve(element);
		};
	});

	function handleTabChange(tab) {
		selectedTab = tab;
		if (tab === 'ug' && ugCount === 0) {
			animateCounter(ugPrograms.length);
		} else if (tab === 'pg' && pgCount === 0) {
			animateCounter(pgPrograms.length);
		}
	}
</script>

<section id="academics-highlight" class="py-12 px-4 md:px-8">
	<div class="max-w-5xl mx-auto">
		<!-- Header -->
		<div class="text-center mb-12">
			<span class="text-emerald-600 font-semibold text-sm uppercase tracking-wide">Our Programs</span>
			<h2 class="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-2">World-Class Engineering & Management Education</h2>
			<p class="text-lg text-slate-600 max-w-2xl mx-auto">
				Discover our comprehensive range of undergraduate and postgraduate programs designed to shape future leaders.
			</p>
		</div>

		<!-- Tab Selector with Animated Counter -->
		<div class="grid grid-cols-2 gap-4 mb-10">
			<!-- UG Tab -->
			<button
				on:click={() => handleTabChange('ug')}
				class="relative group transition-all duration-300 {selectedTab === 'ug' ? 'scale-105' : 'hover:scale-102'}"
			>
				<div class="p-8 rounded-2xl border-2 transition-all duration-300 {selectedTab === 'ug' ? 'border-emerald-500 bg-emerald-50' : 'border-slate-200 bg-white hover:border-emerald-300'}">
					<div class="text-center">
						<div class="text-5xl md:text-6xl font-bold text-emerald-600 mb-2 font-mono">
							{selectedTab === 'ug' ? ugCount : '06'}
						</div>
						<div class="text-xl font-semibold text-slate-900">UG Programs</div>
						<p class="text-sm text-slate-600 mt-2">Bachelor of Technology</p>
					</div>
				</div>
			</button>

			<!-- PG Tab -->
			<button
				on:click={() => handleTabChange('pg')}
				class="relative group transition-all duration-300 {selectedTab === 'pg' ? 'scale-105' : 'hover:scale-102'}"
			>
				<div class="p-8 rounded-2xl border-2 transition-all duration-300 {selectedTab === 'pg' ? 'border-blue-500 bg-blue-50' : 'border-slate-200 bg-white hover:border-blue-300'}">
					<div class="text-center">
						<div class="text-5xl md:text-6xl font-bold text-blue-600 mb-2 font-mono">
							{selectedTab === 'pg' ? pgCount : '05'}
						</div>
						<div class="text-xl font-semibold text-slate-900">PG Programs</div>
						<p class="text-sm text-slate-600 mt-2">Master's Degrees</p>
					</div>
				</div>
			</button>
		</div>

		<!-- Programs List with Animation -->
		<div class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
			<div class="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
				{#each programLists[selectedTab] as program, i (program)}
					<div
						class="p-6 hover:bg-slate-50 transition-colors duration-300 animate-fadeIn"
						style="--delay: {i * 50}ms"
					>
						<div class="flex items-start gap-4">
							<div class="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br {selectedTab === 'ug' ? 'from-emerald-100 to-emerald-50' : 'from-blue-100 to-blue-50'} flex items-center justify-center">
								<span class="text-lg font-bold {selectedTab === 'ug' ? 'text-emerald-600' : 'text-blue-600'}">
									{i + 1}
								</span>
							</div>
							<div>
								<h4 class="font-semibold text-slate-900">{program}</h4>
								<p class="text-sm text-slate-600 mt-1">
									{selectedTab === 'ug' ? '4-year comprehensive curriculum' : 'Advanced specialization program'}
								</p>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- Explore Link -->
		<div class="mt-10 text-center">
			<a href={selectedTab === 'ug' ? '/courses/Under-Graduation' : '/courses/Post-Graduation'} class="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold {selectedTab === 'ug' ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-blue-600 hover:bg-blue-700'} text-white transition-colors duration-300">
				Explore All {selectedTab === 'ug' ? 'UG' : 'PG'} Programs
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
				</svg>
			</a>
		</div>
	</div>
</section>

<style>
	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	:global(.animate-fadeIn) {
		animation: fadeIn 0.6s ease-out forwards;
		animation-delay: var(--delay, 0ms);
	}
</style>
