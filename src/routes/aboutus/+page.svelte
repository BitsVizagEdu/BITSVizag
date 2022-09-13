<script>


	import { showNavBar, toggleNavBar } from '$lib/stores/store.js';

    import Secretary from './components/message.svelte';
    
    import Bits from './components/bits.svelte';
    
    import Footer from '$lib/components/footer.svelte';

    let activeTab = 'About BITS Vizag';

	let items = ['About BITS Vizag','Message from Chairman','Message from Secretary & Correspondent','Message from Principal']

</script>

<svelte:head>
	<title>About Us</title>
</svelte:head>


{#if !$showNavBar}
	<div class="total flex lg:flex-row 3xs:flex-col  h-[100%] h-full">
		<aside class="lg:w-[25%] p-5 rounded-lg  " aria-label="Sidebar">
			<div class="overflow-y-auto py-4 px-3   bg-blue-900 rounded-lg">
				<ul class="space-y-2">
					{#each items as item}
					<li  id="{item}" on:click={() => (activeTab = item)}>
						<a href="#" class="flex items-center lg:justify-center p-2 text-base font-normal rounded-lg  
								{(activeTab === item) ? ' bg-white text-black ' : 'text-white'} ">
							<!-- <svg
								aria-hidden="true"
								class="w-6 h-6 hidden  transition duration-75 text-gray-400 group-hover:text-white"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" /><path
									d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
								/></svg
							> -->
							<span class="ml-3 text-lg">{item}</span>
						</a>
					<!-- </li>
					<li id="Ab-Chairman" on:click={() => (activeTab = 'Chairman')}>
						<a
							href="#"
							class="flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-white hover:text-black"
						>
							<svg
								aria-hidden="true"
								class="w-6 h-6 hidden  transition duration-75 text-gray-400 group-hover:text-white"
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
					<li id="Ab-Secretary" on:click={() => (activeTab = 'Secretary')}>
						<a
							href="#"
							class="flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-white hover:text-black"
						>
							<svg
								aria-hidden="true"
								class="w-6 h-6 hidden  transition duration-75 text-gray-400 group-hover:text-white"
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
					<li id="Ab-Principal" on:click={() => (activeTab = 'Principal')}>
						<a
							href="#"
							class="flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-white hover:text-black"
						>
							<svg
								aria-hidden="true"
								class="w-6 h-6 hidden  transition duration-75 text-gray-400 group-hover:text-white"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" /><path
									d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
								/></svg
							>
							<span class="ml-3 text-lg">Message From Principal</span>
						</a>
					</li> -->
					{/each}
				</ul>
			</div>
		</aside>

		<div class=" lg:w-[75%] p-5 rounded-lg ">
            {#if activeTab === 'About BITS Vizag'}
            <Bits/>
            {/if}
            {#if activeTab === 'Message from Secretary & Correspondent'}
            <Secretary/>
            {/if}

        </div>
	</div>
    <Footer/>
{/if}
