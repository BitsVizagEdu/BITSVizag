<script>
	import Nav from '$lib/components/navmenu.svelte';

	import Hero from '$lib/components/navbar.svelte';

	import { showNavBar, toggleNavBar } from '$lib/stores/store.js';

    import Secretary from './components/message.svelte';
    
    import Bits from './components/bits.svelte';
    
    import Footer from '$lib/components/footer.svelte';

    let activeTab = 'Bits';

</script>

<svelte:head>
	<title>About Us</title>
</svelte:head>


	
	<div class="total flex md:flex-row 3xs:flex-col  h-[100%] h-full">
		<aside class="md:w-[25%]   bg-blue-900 " aria-label="Sidebar">
			<div class="overflow-y-auto py-4 px-3  rounded-none">
				<ul class="space-y-2">
					<li on:click={() => (activeTab = 'Bits')}>
						<a 
							href="#"
							class="flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-700"
						>
							<svg
								aria-hidden="true"
								class="w-6 h-6  transition duration-75 text-gray-400 group-hover:text-white"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" /><path
									d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
								/></svg
							>
							<span class="ml-3 text-lg">Abouts BITS Vizag</span>
						</a>
					</li>
					<li on:click={() => (activeTab = 'Chairman')}>
						<a
							href="#"
							class="flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-700"
						>
							<svg
								aria-hidden="true"
								class="w-6 h-6  transition duration-75 text-gray-400 group-hover:text-white"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" /><path
									d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
								/></svg
							>
							<span class="ml-3 text-lg">Message From Chairman</span>
						</a>
					</li>
					<li on:click={() => (activeTab = 'Secretary')}>
						<a
							href="#"
							class="flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-700"
						>
							<svg
								aria-hidden="true"
								class="w-6 h-6  transition duration-75 text-gray-400 group-hover:text-white"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" /><path
									d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
								/></svg
							>
							<span class="ml-3 text-lg">Message From Secretary & Correspondent</span>
						</a>
					</li>
					<li on:click={() => (activeTab = 'Principal')}>
						<a
							href="#"
							class="flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-700"
						>
							<svg
								aria-hidden="true"
								class="w-6 h-6  transition duration-75 text-gray-400 group-hover:text-white"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" /><path
									d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
								/></svg
							>
							<span class="ml-3 text-lg">Message From Principal</span>
						</a>
					</li>
				</ul>
			</div>
		</aside>

		<div class=" md:w-[75%] ">
            {#if activeTab === 'Bits'}
            <Bits/>
            {/if}
            {#if activeTab === 'Secretary'}
            <Secretary/>
            {/if}

        </div>
	</div>
    <Footer/>

