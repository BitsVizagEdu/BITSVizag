<script>
	import { onMount } from 'svelte';
	import AdmissionsHighlight from './AdmissionsHighlight.svelte';
	import PlacementsHighlight from './PlacementsHighlight.svelte';
	import InfrastructureHighlight from './InfrastructureHighlight.svelte';
	import DepartmentsHighlight from './DepartmentsHighlight.svelte';
	import AccreditationsHighlight from './AccreditationsHighlight.svelte';
	import { fly, fade } from 'svelte/transition';

	let activeSlide = 0;
	const slides = [
		{ component: AdmissionsHighlight, title: 'Admissions' },
		{ component: PlacementsHighlight, title: 'Placements' },
		{ component: InfrastructureHighlight, title: 'Infrastructure' },
		{ component: DepartmentsHighlight, title: 'Departments' },
		{ component: AccreditationsHighlight, title: 'Accreditations' }
	];

	let interval;
	let sectionRef;

	function nextSlide() {
		activeSlide = (activeSlide + 1) % slides.length;
		resetInterval();
	}

	function prevSlide() {
		activeSlide = (activeSlide - 1 + slides.length) % slides.length;
		resetInterval();
	}

	function resetInterval() {
		if (interval) clearInterval(interval);
		interval = setInterval(nextSlide, 10000); // Auto-slide every 10s
	}

	onMount(() => {
		resetInterval();
		return () => clearInterval(interval);
	});

	function handleKeydown(e) {
		if (e.key === 'ArrowRight') {
			nextSlide();
		} else if (e.key === 'ArrowLeft') {
			prevSlide();
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<div bind:this={sectionRef} class="relative w-full overflow-hidden bg-white group">
	<!-- Slides Container -->
	<div 
		class="flex transition-transform duration-[1000ms] cubic-bezier(0.4, 0, 0.2, 1)" 
		style="transform: translateX(-{activeSlide * 100}%);"
		on:click={(e) => {
			if (!e.target.closest('a, button')) {
				nextSlide();
			}
		}}
		on:keydown={(e) => {
			if (e.key === 'Enter' || e.key === ' ') {
				nextSlide();
			}
		}}
		role="button"
		tabindex="0"
	>
		{#each slides as slide, i}
			<div class="w-full shrink-0">
				<svelte:component this={slide.component} isActive={activeSlide === i} />
			</div>
		{/each}
	</div>

	<!-- Navigation Arrows -->
	<button 
		on:click|stopPropagation={prevSlide}
		class="absolute left-4 top-1/2 -translate-y-1/2 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-white/40 backdrop-blur-md text-slate-800 opacity-0 transition-all hover:bg-white hover:shadow-xl group-hover:opacity-100 focus:outline-none border border-white/40"
		aria-label="Previous Slide"
	>
		<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
		</svg>
	</button>

	<button 
		on:click|stopPropagation={nextSlide}
		class="absolute right-4 top-1/2 -translate-y-1/2 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-white/40 backdrop-blur-md text-slate-800 opacity-0 transition-all hover:bg-white hover:shadow-xl group-hover:opacity-100 focus:outline-none border border-white/40"
		aria-label="Next Slide"
	>
		<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
		</svg>
	</button>

	<!-- Premium Indicators (Pill Style) -->
	<div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
		<div class="flex items-center gap-3 rounded-full bg-white/60 px-4 py-3 backdrop-blur-md shadow-lg border border-white/40">
			{#each slides as _, i}
				<button 
					on:click|stopPropagation={() => { activeSlide = i; resetInterval(); }}
					class="relative h-2 transition-all duration-500 ease-out focus:outline-none {activeSlide === i ? 'w-8 bg-blue-600 rounded-full' : 'w-2 bg-slate-300 rounded-full hover:bg-slate-400'}"
					aria-label="Go to slide {i + 1}"
				>
					{#if activeSlide === i}
						<span class="absolute inset-0 animate-pulse rounded-full bg-blue-400 opacity-50"></span>
					{/if}
				</button>
			{/each}
		</div>
	</div>
</div>

<style>
	/* Ensure transitions are smooth */
	:global(.highlights-slider-active) {
		overflow: hidden;
	}
</style>
