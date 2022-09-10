<script>
	import { isHidden, toggleIsHidden, toggleNavBar } from '../stores/store.js';
	let nav2 = [
		'BITS Login',
		'AICTE',
		'Admission',
		'Alumni',
		'Downloads',
		'Placements',
		'Instagram'
	];
	import { NavItems, dropdown } from './navItem.js';
	function dropdown_toggle(index) {
		let temp = dropdown;
		temp[index] = !temp[index];
		dropdown.set(temp);
		console.log(temp);
	}
	// function handleClick() {
	//     alert('clicked');
	// }
</script>

<div
	id="menu"
	on:click={toggleNavBar}
	class=" bg-sortwhite  lg:hidden  p-3 hover:cursor-pointer ml-auto"
>
	<a class=" "
		><svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-9 h-9 ml-auto mr-0"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
		</svg>
	</a>
</div>

<div id="navf1 " class="md:block w-full lg:hidden">
	<div id="navf " class="bg-sortwhite flex flex-col justify-center">
		<div class="container bg-sortwhite py-2">
			{#each $NavItems as navName, index}
				<div
					on:click={() => dropdown_toggle(index)}
					class="flex flex-col justify-between bg-sortwhite mx-auto w-[100%]"
				>
					<button class="flex items-center justify-between pl-14 my-2">
						<span class="text-black font-bold  text-lg mr-2">{navName.name}</span>
						{#if navName.items.length > 0}
							<svg class="fill-red1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
								<path
									d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
								/>
							</svg>
						{/if}
					</button>
				</div>
				{#if $dropdown[index]}
					{#if navName.items.length > 0}
						{#each navName.items as item, i}
							<div
								on:click={() => dropdown_toggle(index)}
								class="flex flex-col  justify-between bg-gray1  w-[100vw]"
							>
								<button class="flex items-center justify-between mx-14 my-2">
									<span class="text-black text-left py-1 font-semibold  text-lg mr-2">{item}</span>
									<!-- {#if navName.items.length > 0}
                                <svg
                                    class="fill-red1 h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                    />
                                </svg>
                            {/if} -->
								</button>
							</div>
						{/each}
					{/if}
				{/if}
			{/each}
		</div>
		<div class="flex flex-col justify-center font-semibold text-lg bg-black w-full items-center py-20 space-y-10">
            {#each nav2 as nav2name}
                <a class="{nav2name}  text-white">{nav2name}</a>
            {/each}
        </div>
	</div>
</div>
