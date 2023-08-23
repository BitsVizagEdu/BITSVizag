<script>
     let activeTab = 'Knowledge Resource Center';
    

	let items = ['Knowledge Resource Center','Accomidation','Cafeteria','Sports','Laboratories','Transport']
	

    import Library from './components/library.svelte';

	import Sports from "./components/sports.svelte";
    
    import Laboratory from './components/laboratory.svelte';
    
	import Cafeteria from './components/cafeteria.svelte';

	import Hostel from './components/hostel.svelte';

	import Transport from './components/transport.svelte'

    import Footer from '$lib/components/footer.svelte';
	

</script>

<svelte:head>
	<title>About Us</title>
</svelte:head>


	<div class="total flex lg:flex-row 3xs:flex-col  h-[100%] ">
		<aside class="lg:w-[25%] p-5 rounded-lg  " aria-label="Sidebar">
			<div class="overflow-y-auto py-4 px-3   bg-blue-900 rounded-lg">
				<ul class="space-y-2">
					{#each items as item}
					<li  id="{item}" on:click={() => (activeTab = item)}>
						<a href="#" class="flex items-center lg:justify-center p-2 text-base font-normal rounded-lg  
								{(activeTab === item) ? ' bg-white text-black ' : 'text-white'} ">
								<span class="ml-3 md:text-base 2xl:text-center  3xs:text-xs xs:text-sm">{item}</span>
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</aside>

		<div class=" lg:w-[75%] p-5 rounded-lg ">
			{#if activeTab === 'Knowledge Resource Center'}
				<Library/>
			{/if}
			{#if activeTab === 'Sports'}
				<Sports/>
			{/if}
			{#if activeTab === 'Laboratory'}
				<Laboratory/>
			{/if}
			{#if activeTab === 'Cafeteria'}
				<Cafeteria/>
			{/if}
			{#if activeTab === 'Hostel'}
				<Hostel/>
			{/if}
			{#if activeTab === 'Transport'}
				<Transport/>
			{/if}
			</div>
	</div>
	

