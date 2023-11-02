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
            title: "Mr. Madhav Rao",
            description: "Computer Science & Engg",
        },
        {
            title: "Mrs. Ch Komali",
            description: "Electronics & Communication Engg",
        },
        {
            title: "Mr. MVS Prem Sagar",
            description: "Electrical & Electronics Engg"
        },
        {
            title: "Mr. Ali",
            description: "Mechanical Engg",
        },
        {
            title: "Mr. K Harish",
            description: "Civil Engg"
        },
        {
            title: "Mrs. K Sireesha",
            description: "Management Studies"
        },
        
    ]
</script>

<section class="text-center  font-sans xs:px-0 3xs:p-11  ">
    <div class="flex flex-col justify-center items-center ">
        <div class="flex flex-col items-center ">
            <p class=" text-4xl font-bold pb-10">Department Co-Ordinators</p>
            
        </div>
        <div class="grid xl:grid-cols-3 lg:grid-cols-3 gap-2 md:grid-cols-3 xs:grid-cols-1  ">
            
            {#each items as item, i}
                <div>
                    <a href={item.link} on:mouseleave={() => {scaleDown(".card" + i.toString())}} class={`card${i} h-[200px] w-[300px]  bg-white flex flex-col justify-center shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] items-center  m-2 rounded-[5px] `}>
                        <div class="p-[10px] text-center capitalize font-bold text-xl">{item.title}</div>
                        <div class="p-[10px] text-center capitalize text-xl">{item.description}</div>
                    </a>
                </div>
            {/each}
        </div>
    </div>
</section>