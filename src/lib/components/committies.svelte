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
            title: "Anti Ragging Committee",
            description: "Description"
        },
        {
            title: "Online Grievance Redressal",
            description: "Description"
        },
        {
            title: "Research & Development",
            description: "Description"
        },
        {
            title: "Enterprenurial Development Cell",
            description: "Description"
        },
        {
            title: "Women Grievance &  Redressal",
            description: "Description"
        },
        {
            title: "SC / ST Cell",
            description: "Description"
        },
        {
            title: "Training & Placement",
            description: "Description"
        },
        {
            title: "IPR",
            description: "Description"
        },
        {
            title: "Disciplinary Committee",
            description: "Description"
        },
        {
            title: "Cultural",
            description: "Description"
        },
        {
            title: "Admissions",
            description: "Description"
        },
        {
            title: "NSS",
            description: "Description"
        },
        {
            title: "Sports Committee",
            description: "Description"
        },
        {
            title: "Hostel",
            description: "Description"
        },
        {
            title: "Canteen",
            description: "Description"
        },
        {
            title: "Library",
            description: "Description"
        },
    ]
</script>

<section class="text-center  font-sans xs:px-0 3xs:p-24  ">
    <div class="flex flex-col justify-center items-center ">
        <div class="flex flex-col items-center ">
            <p class=" text-3xl  font-bold p-3">Professional Committee</p>
            <p class=" text-2xl  pb-2">BITS Vizag provides you </p>
        </div>
        <div class="grid xl:grid-cols-4 lg:grid-cols-4 gap-2 md:grid-cols-2 xs:grid-cols-2  ">
            {#each items as item, i}
                <div on:mouseenter={() => scaleUp(".card" + i.toString())} on:mouseleave={() => {scaleDown(".card" + i.toString())}} class={`card${i} h-[150px] w-[200px]  bg-white flex justify-center shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] items-center  m-2 rounded-[5px] `}>
                    <div class="p-[10px] text-center capitalize font-bold">{item.title}</div>
                    
                </div>
            {/each}
        </div>
    </div>
</section>