<script>
	import { inView, animate } from 'motion';

	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	const isVisible = writable(false);
	let tempValue = false;
	isVisible.subscribe((value) => {
		tempValue = value;
	});

	onMount(() => {
		inView('#gallery', (info) => {
			isVisible.set(!tempValue);
		});
	});
</script>

<section class={`${$isVisible ? ' opacity-100' : 'opacity-0'}`} id="gallery">
	<div class="md:grid md:grid-cols-3 md:grid-rows-5 p-10 gap-10">
		<div class="justify-center items-center py-8 md:py-0">
			<p
				class="uppercase text-[400%] sm:text-[300%] 2xl:text-[600%] text-center md:text-left font-bold"
			>
				gallery
			</p>
		</div>
		<div
			class={`row-span-5 row-start-2  ${
				$isVisible ? ' opacity-100 animate-fade-in-down' : 'opacity-0'
			}`}
		>
			<img src="./g1.jpeg" alt="" />
		</div>
		<div
			class={`row-span-2 col-start-2 row-start-1 items-center   ${
				$isVisible ? ' opacity-100 animate-fade-in-left' : 'opacity-0'
			} `}
		>
			<img src="./g2.jpeg" alt="" class="my-6" />
		</div>
		<div
			class={`row-span-2 col-start-3 row-start-2 items-center  ${
				$isVisible ? ' opacity-100 animate-fade-in-up' : 'opacity-0'
			}`}
		>
			<img src="./g3.jpeg" alt="" class="my-6" />
		</div>
		<div
			class={`row-span-2 col-start-2 row-start-3 items-center  ${
				$isVisible ? ' opacity-100 animate-fade-in-down' : 'opacity-0'
			} `}
		>
			<img src="./g4.jpeg" alt="" class="my-6" />
		</div>
		<div
			class={`row-span-2 col-start-3 row-start-4 items-center  ${
				$isVisible ? ' opacity-100 animate-fade-in-right' : 'opacity-0'
			} `}
		>
			<img src="./g5.jpeg" alt="" class="my-6" />
		</div>
		<div class="items-center">
			<p class="text-2xl text-center md:text-right hover:underline font-bold">More ></p>
		</div>
	</div>
	<div class="border-b-4 border-purpleS1"></div>
</section>
