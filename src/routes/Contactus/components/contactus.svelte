<script>

    // import {onMount} from "svelte";
    //
    // onMount(async () => {
    //
    // })
    import {animate} from "motion";
    function scaleUp(element) {
        animate(document.querySelector(element), {scale: 1.2}, {duration: 0.3})
    }

    function scaleDown(element) {
        animate(element, {scale: 1}, {duration: 0.3})
    }

    let items = [
        {   
            
            title: "Principal",
            description: "Email  principal@bitsvizag.com"
        },
        {
            title: "Address",
            description: " Near Pothinamallayyapalem Pothinamallayya Palem Visakhapatnam,Andhra Pradesh 530041"
        },
        {
            title: "Office",
            description: "Ph No : +91 12345 67890"
        },
        {
            title: "Administrative Officer",
            description: "Ph No : +91 12345 67890"
        },
        {
            title: "Training and Placement Officer",
            description: "Ph No : +91 12345 67890"
        },
        {
            title: "Instagram",
            description: "bits_vizag_official/"
        },
        
        
    ]
</script>

<section class="text-center bg-slate-800 font-sans xs:px-0 3xs:p-24">
	<div class="flex flex-col justify-center items-center">
		<div class="flex flex-col items-center">
			<p class=" text-3xl text-white p-3">Contact US</p>
			<!-- <p class=" text-2xl text-white pb-2">messsage </p> -->
		</div>
		<div
			class="grid xl:grid-cols-3 lg:grid-cols-3 gap-2 md:grid-cols-2 xs:grid-cols-2   items-center "
		>
			{#each items as item, i}
				<div
					on:mouseenter={() => scaleUp('.card' + i.toString())}
					on:mouseleave={() => {
						scaleDown('.card' + i.toString());
					}}
					class={`card${i} h-[150px] w-[200px] sm:h-[175px] sm:w-[250px] bg-blue-300 flex flex-col items-center m-2 rounded-[5px]`}
				>
                    
					<div class="p-[10px] capitalize font-extrabold">{item.title}</div>
					<div class="capitalize overflow-hidden font-semibold  text-center">{item.description}</div>
				</div>
			{/each}
		</div>
	</div>
</section>
