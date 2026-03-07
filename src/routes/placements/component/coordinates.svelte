<script>
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
			title: 'Mr. Madhav Rao',
			description: 'Computer Science & Engg'
		},
		{
			title: 'Mrs. Ch Komali',
			description: 'Electronics & Communication Engg'
		},
		{
			title: 'Mr. MVS Prem Sagar',
			description: 'Electrical & Electronics Engg'
		},
		{
			title: 'Mr. Ali',
			description: 'Mechanical Engg'
		},
		{
			title: 'Mr. K Harish',
			description: 'Civil Engg'
		},
		{
			title: 'Mrs. K Sireesha',
			description: 'Management Studies'
		}
	];
</script>

<section class="text-center font-sans max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
	<div class="flex flex-col justify-center items-center">
		<div class="flex flex-col items-center">
			<p class="text-3xl md:text-5xl font-bold pb-12 font-outfit text-slate-800">
				Department Coordinators
			</p>
		</div>
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-6xl">
			{#each items as item, i}
				<div class="w-full h-full">
					<a
						href={item.link}
						on:mouseleave={() => {
							scaleDown('.card' + i.toString());
						}}
						class={`card${i} h-full min-h-[160px] md:min-h-[180px] w-full bg-white flex flex-col justify-center shadow-md hover:shadow-xl transition-shadow duration-300 items-center p-6 rounded-2xl border border-slate-100 group`}
					>
						<div
							class="p-[5px] md:p-[10px] text-center capitalize font-bold text-lg md:text-xl text-slate-800 group-hover:text-[#2672d5] transition-colors"
						>
							{item.title}
						</div>
						<div
							class="p-[5px] md:p-[10px] text-center capitalize text-base md:text-lg text-slate-600 font-medium"
						>
							{item.description}
						</div>
					</a>
				</div>
			{/each}
		</div>
	</div>
</section>
