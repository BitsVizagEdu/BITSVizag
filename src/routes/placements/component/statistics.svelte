
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
            title: "312+",
            description: "Recruiters hired BITS VIZAG students"
        },
        {
            title: "1000+",
            description: "Companies offering CTC 5 Lacs p.a. or above"
        },
        {
            title: "350+",
            description: "Recruiters of IITs/IIMs/NITs also hire from BITS"
        },
        {
            title: "1.6 Lacs",
            description: "Highest Internship Stipend per month"
        },
        
        
    ]
</script>

<h1 class="md:text-4xl text-xl text-center p-2 md:p-10">Statistics</h1>
<div class="text-center  font-sans  ">
    <div class="flex flex-col  items-center ">
        
        <div class="grid xl:grid-cols-4 lg:grid-cols-4 gap-2 md:grid-cols-2 xs:grid-cols-2   items-center justify-center">
            {#each items as item, i}
                <div on:mouseenter={() => scaleUp(".card" + i.toString())} on:mouseleave={() => {scaleDown(".card" + i.toString())}} class={`card${i} h-[150px] w-[200px]  bg-white  shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] justify-center item-center m-2 rounded-[5px] `}>
                    <div class="px-6 py-3 text-indigo-900   capitalize  text-left text-4xl">{item.title}</div>
                    <div class="px-6 text-left">{item.description}</div>
                </div>
            {/each}
        </div>
    </div>
</div>

<div class="mt-10">
    <div class="flex flex-col md:flex-row h-1/2 items-center justify-around">
        <img src="/graph1.jpg" alt="" class="md:w-[35vw] px-2">
        <img src="/graph2.jpg" alt="" class="md:w-[35vw] px-2">
    </div>
    <div class="flex flex-col md:flex-row h-1/2 items-center justify-around">
        <img src="/graph3.jpg" alt="" class="md:w-[35vw] px-2">
        <img src="/graph4.jpg" alt="" class="md:w-[35vw] px-2">
    </div>

</div>