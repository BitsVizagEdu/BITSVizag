<!-- <script>
	// import {onMount} from "svelte";
	//
	// onMount(async () => {
	//
	// })
	import { animate } from 'motion';
	function scaleUp(element) {
		animate(document.querySelector(element), { scale: 1.2 }, { duration: 0.3 });
	}

	function scaleDown(element) {
		animate(element, { scale: 1 }, { duration: 0.3 });
	}

	let items = [
		{
			title: '312+',
			description: 'Recruiters hired BITS VIZAG students'
		},
		{
			title: '1000+',
			description: 'Companies offering CTC 5 Lacs p.a. or above'
		},
		{
			title: '350+',
			description: 'Recruiters of IITs/IIMs/NITs also hire from BITS'
		},
		{
			title: '1.6 Lacs',
			description: 'Highest Internship Stipend per month'
		}
	];
</script>

<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
	<h1 class="text-3xl md:text-5xl font-bold pb-12 font-outfit text-slate-800 text-center">
		Statistics
	</h1>
	<div class="flex flex-col items-center">
		Stats Grid -->
		<!-- <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full">
			{#each items as item, i}
				<div
					role="region"
					aria-label="Statistic Card"
					on:mouseenter={() => scaleUp('.card' + i.toString())}
					on:mouseleave={() => scaleDown('.card' + i.toString())}
					class={`card${i} h-full min-h-[160px] w-full bg-white flex flex-col justify-center shadow-md hover:shadow-xl transition-shadow duration-300 p-6 rounded-2xl border border-slate-100 items-start group`}
				>
					<div
						class="text-indigo-900 group-hover:text-[#2672d5] font-bold text-3xl mb-2 transition-colors"
					>
						{item.title}
					</div>
					<div class="text-slate-600 text-sm md:text-base font-medium leading-snug">
						{item.description}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<div class="max-w-7xl mx-auto px-4 lg:px-8 pb-12 md:pb-20">
	<div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
		<div class="w-full rounded-2xl overflow-hidden shadow-sm border-2 border-slate-50">
			<img
				src="/graph1.png"
				alt="Statistics Graph 1"
				class="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
			/>
		</div>
		<div class="w-full rounded-2xl overflow-hidden shadow-sm border-2 border-slate-50">
			<img
				src="/graph2.png"
				alt="Statistics Graph 2"
				class="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
			/>
		</div>
		<div class="w-full rounded-2xl overflow-hidden shadow-sm border-2 border-slate-50">
			<img
				src="/graph3.png"
				alt="Statistics Graph 3"
				class="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
			/>
		</div>
		<div class="w-full rounded-2xl overflow-hidden shadow-sm border-2 border-slate-50">
			<img
				src="/graph4.jpg"
				alt="Statistics Graph 4"
				class="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
			/>
		</div>
	</div>
</div> -->
