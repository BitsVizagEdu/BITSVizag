<script>
     let activeTab = 'Academic Calendar';
    

	let items = ['Academic Calendar','Academic Regulation','Syllabus','Results','Timetable','Circular & Notification','Online Discrepancies','Department Examcell Coordinators','Contactus']
	
	import Calendar from "./components/calendar.svelte";
	import Regulation from "./components/regulation.svelte";
	import Results from "./components/results.svelte";
	import Timetable from "./components/timetable.svelte";
	import Footer from "$lib/components/footer.svelte";
	import Circular from "./components/circular.svelte";
	import Online from "./components/online.svelte";
    import Coordinators from "./components/coordinators.svelte";
	import Contactus from "./components/contactus.svelte";
	import Syllabus from "./components/syllabus.svelte";
	

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
			{#if activeTab === 'Academic Calendar'}
				<Calendar/>
			{/if}
			{#if activeTab === 'Academic Regulation'}
				<Regulation/>
			{/if}
			{#if activeTab === 'Syllabus'}
				<Syllabus/>
			{/if}
			{#if activeTab === 'Results'}
				<Results/>
			{/if}
			{#if activeTab === 'Timetable'}
				<Timetable/>
			{/if}
			{#if activeTab === 'Circular & Notification'}
				<Circular/>
			{/if}
			{#if activeTab === 'Online Discrepancies'}
				<Online/>
			{/if}
			{#if activeTab === 'Department Examcell Coordinators'}
				<Coordinators/>
			{/if}
			{#if activeTab === 'Contactus'}
				<Contactus/>
			{/if}
			</div>
	</div>
	<Footer/>

