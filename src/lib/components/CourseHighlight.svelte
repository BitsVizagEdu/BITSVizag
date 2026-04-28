<script>
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	const courses = [
		{
			title: 'CSE',
			image: '/gallery/g2.jpg',
			desc: 'Computer Science & Engineering',
			duration: '4 Years',
			seats: '1,260 Seats',
			href: `/department/${encodeURIComponent('Department of CSE')}`,
			color: 'amber-500'
		},
		{
			title: 'CSE AI & ML',
			image: '/Course-highlight/newAI.jpg',
			desc: 'Artificial Intelligence & Machine Learning',
			duration: '4 Years',
			seats: '1,260 Seats',
			href: `/department/${encodeURIComponent('Department of CSE (AI & ML)')}`,
			color: 'blue-500'
		},
		{
			title: 'Cyber Security',
			image: '/CS-Banners/CS-images/get4.jpg',
			desc: 'Protecting the Digital Frontier',
			duration: '4 Years',
			seats: '1,260 Seats',
			href: `/department/${encodeURIComponent('Department of CSE (Cyber Security)')}`,
			color: 'emerald-500'
		},
		{
			title: 'ECE',
			image: '/Course-highlight/newece.jpg',
			desc: 'Electronics & Communication Engineering',
			duration: '4 Years',
			seats: '1,260 Seats',
			href: `/department/${encodeURIComponent('Department of ECE')}`,
			color: 'rose-500'
		},
		{
			title: 'EEE',
			image: './Course-highlight/eeenew.png',
			desc: 'Electrical & Electronics Engineering',
			duration: '4 Years',
			seats: '1,260 Seats',
			href: `/department/${encodeURIComponent('Department of EEE')}`,
			color: 'indigo-500'
		},
		{
			title: 'Mechanical',
			image: '/mechnew.png',
			desc: 'Mechanical Engineering & Innovation',
			duration: '4 Years',
			seats: '1,260 Seats',
			href: `/department/${encodeURIComponent('Department of MECH')}`,
			color: 'orange-500'
		}
	];

	const colorMap = {
		'amber-500': {
			bg: 'bg-amber-500',
			text: 'text-amber-500',
			btnText: 'text-slate-950',
			accent: 'text-amber-400'
		},
		'blue-500': {
			bg: 'bg-blue-600',
			text: 'text-blue-500',
			btnText: 'text-white',
			accent: 'text-blue-400'
		},
		'emerald-500': {
			bg: 'bg-emerald-600',
			text: 'text-emerald-500',
			btnText: 'text-white',
			accent: 'text-emerald-400'
		},
		'rose-500': {
			bg: 'bg-rose-600',
			text: 'text-rose-500',
			btnText: 'text-white',
			accent: 'text-rose-400'
		},
		'indigo-500': {
			bg: 'bg-indigo-600',
			text: 'text-indigo-500',
			btnText: 'text-white',
			accent: 'text-indigo-400'
		},
		'orange-500': {
			bg: 'bg-orange-600',
			text: 'text-orange-500',
			btnText: 'text-white',
			accent: 'text-orange-400'
		}
	};

	let active = 0;
	let paused = false;
	let interval;

	function startAutoplay() {
		if (interval) clearInterval(interval);
		interval = setInterval(() => {
			if (!paused) {
				active = (active + 1) % courses.length;
			}
		}, 3500);
	}

	onMount(() => {
		startAutoplay();
		return () => clearInterval(interval);
	});

	function handleMouseEnter(i) {
		active = i;
		paused = true;
	}

	function handleMouseLeave() {
		paused = false;
	}
</script>

<section class="max-w-7xl mx-auto px-6 py-12 bg-white overflow-hidden">
	<!-- ✅ CENTERED PREMIUM HEADER -->
	<div class="mb-16 max-w-4xl mx-auto text-center px-4" data-aos="fade-up">
		<h2 class="text-4xl md:text-5xl lg:text-5xl font-semibold text-[#1a233e] mb-4">
			Programmes & <span
				class="bg-gradient-to-r from-[#e67e22] to-[#f1c40f] bg-clip-text text-transparent"
				>Courses</span
			>
		</h2>
		<p class="text-sm md:text-lg text-slate-500 leading-relaxed max-w-3xl mx-auto">
			Discover our AICTE-approved, UGC-recognised programmes. From core engineering to emerging
			specialisations, each course is crafted to build exceptional careers.
		</p>
	</div>

	<!-- Desktop Accordion Slider -->
	<div class="hidden md:flex gap-4 h-[480px] w-full" on:mouseleave={handleMouseLeave} role="list">
		{#each courses as course, i}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div
				class="relative rounded-[2rem] overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group shadow-sm hover:shadow-xl"
				style="flex: {active === i ? 3.5 : 1};"
				on:mouseenter={() => handleMouseEnter(i)}
			>
				<!-- Image -->
				<img
					src={course.image}
					alt={course.title}
					class="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
				/>

				<!-- Overlay -->
				<div
					class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent transition-opacity duration-500"
					class:opacity-60={active !== i}
				></div>

				<!-- Content -->
				<div class="absolute bottom-8 left-8 right-8 text-white z-10">
					{#if active === i}
						<div class="flex flex-col gap-2">
							<span
								class="text-[10px] font-black uppercase tracking-[0.3em] {colorMap[course.color]
									.accent}">Featured Course</span
							>
							<h3 class="text-2xl lg:text-3xl font-bold tracking-tight">
								{course.title}
							</h3>
							<p class="text-sm text-slate-200 mt-1 max-w-xs leading-relaxed">
								{course.desc}. Deep dive into advanced curriculum and industry projects.
							</p>

							<!-- 💎 Added Stats & Button -->
							<div class="mt-6 flex flex-col gap-6" in:fade={{ delay: 200 }}>
								<div
									class="flex items-center gap-6 text-xs font-bold text-slate-200/90 tracking-wide"
								>
									<div
										class="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm"
									>
										<i class="fa-regular fa-clock {colorMap[course.color].accent} text-sm"></i>
										{course.duration}
									</div>
									<div
										class="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm"
									>
										<i class="fa-solid fa-users {colorMap[course.color].accent} text-sm"></i>
										{course.seats}
									</div>
								</div>

								<a href={course.href} class="w-fit">
									<button
										class="w-fit {colorMap[course.color].bg} {colorMap[course.color]
											.btnText} px-8 py-3.5 rounded-xl font-black text-[13px] uppercase tracking-wider flex items-center gap-3 hover:bg-white hover:text-slate-950 transition-all group/btn shadow-xl active:scale-95"
									>
										Explore {course.title}
										<i
											class="fa-solid fa-arrow-right group-hover/btn:translate-x-1 transition-transform"
										></i>
									</button>
								</a>
							</div>
						</div>
					{/if}
				</div>

				<!-- Collapsed State Vertical Title -->
				{#if active !== i}
					<div
						class="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10"
					>
						<span
							class="whitespace-nowrap uppercase tracking-[0.4em] font-black text-[11px] transform -rotate-90 origin-center text-slate-300 group-hover:text-white transition-colors"
						>
							{course.title}
						</span>
					</div>
				{/if}
			</div>
		{/each}
	</div>

	<!-- Mobile Snap Slider -->
	<div
		class="md:hidden flex overflow-x-auto gap-5 pb-8 snap-x snap-mandatory scroll-smooth no-scrollbar"
	>
		{#each courses as course, i}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div
				class="min-w-[95%] snap-center relative rounded-3xl overflow-hidden aspect-[5/4] shadow-lg"
				on:click={() => (active = i)}
			>
				<img
					src={course.image}
					alt={course.title}
					class="absolute inset-0 w-full h-full object-cover"
				/>
				<div
					class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/20 to-transparent"
				></div>

				<div class="absolute bottom-6 left-6 right-6 text-white">
					<span
						class="text-[9px] font-black uppercase tracking-[0.3em] {colorMap[course.color]
							.accent} mb-2 block">Program</span
					>
					<h3 class="text-2xl font-bold tracking-tight mb-4">{course.title}</h3>

					<div class="flex items-center gap-4 text-[10px] font-bold text-slate-200 mb-6">
						<div class="flex items-center gap-1.5">
							<i class="fa-regular fa-clock {colorMap[course.color].accent}"></i>
							{course.duration}
						</div>
						<div class="flex items-center gap-1.5">
							<i class="fa-solid fa-users {colorMap[course.color].accent}"></i>
							{course.seats}
						</div>
					</div>

					<a href={course.href} class="w-full block">
						<button
							class="w-full {colorMap[course.color].bg} {colorMap[course.color]
								.btnText} py-3.5 rounded-xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg"
						>
							Explore {course.title}
							<i class="fa-solid fa-arrow-right text-[10px]"></i>
						</button>
					</a>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	/* Hide scrollbar but keep functionality */
	.no-scrollbar::-webkit-scrollbar {
		display: none;
	}
	.no-scrollbar {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	/* Smooth expansion transition handled by Svelte style binding on flex property */
</style>
