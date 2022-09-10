
<script>
    let events = [
        {
            name: "TECH TALK by LUMOS LABS – INTO THE WEB3 METAVERSE",
            description: "Department of Training & Placements TECH TALK by LUMOS LABS...",
            date: "September 2, 2022",
            image: "https://bitsvizag.com/wp-content/uploads/2022/08/DTP-03.09.2022.jpeg"
        },
        {
            name: "VALUE ADDED COURSE ON – Solid Modeling with CATIA V5",
            description: "VALUE ADDED COURSE ON Solid Modeling with CATIA V5 by...",
            date: "September 2, 2022",
            image: "https://bitsvizag.com/wp-content/uploads/2022/08/DME-02.09.2022.jpeg"
        },
        {
            name: "Vizag Mega Beach Cleanup Drive featuring Faculty and Students of BITS Vizag",
            description: "Thankyou for giving us this Opportunity and making us a part...",
            date: "August 26, 2022",
            image: "/BeachClean.webp"
        },
        {
            name: "Celebrating 75 Years of Independence",
            description: "Secretary and Correspondent Madam Dr. Srilakshmi Kondru...",
            date: "August 15, 2022",
            image: "/IndependenceDay.webp"
        },
    ]

    import {animate} from "motion";
    function scaleUp(element) {
        animate(document.querySelector(element), {scale: 1.2}, {duration: 0.3})
    }

    function scaleDown(element) {
        animate(element, {scale: 1}, {duration: 0.3})
    }
</script>

<section class=" flex flex-col items-center">
    <div class="flex divide-x-4 divide-purpleS1 justify-start">
        <div class="w-[400px] flex items-center justify-center py-16">
            <div class="w-[800px] flex flex-col bg-white">
                <div class="w-full">
                    <p class="text-4xl font-bold" >Events</p>
                </div>
            </div>
        </div>
        <div class="w-[400px] flex py-16 justify-end">
            <div class="flex flex-col justify-center items-center px-4">
                <a href="#" class="text-2xl font-semibold underline">View all ></a>
            </div>
        </div>
    </div>
    {#each events as event, i}
        {#if i%2 === 0}
            <div class="flex divide-x-4 divide-purpleS1 justify-start">
                <div class="w-[400px] flex items-center justify-center py-16">
                    <div class="w-[800px] flex flex-col">
                        <div class="w-full">
                            <img on:mouseenter={() => scaleUp(".img" + i.toString())} on:mouseleave={() => scaleDown(".img" + i.toString())} class={`img${i} image w-full rounded-2xl`}
                                 src={event.image} alt="">
                        </div>
                    </div>
                    <div class="w-[400px] h-[4px] from-blue-600 to-purple-500 bg-gradient-to-r"></div>
                </div>
                <div class="w-[400px] flex py-16">
                    <div class="flex flex-col justify-center items-center px-4">
                        <p class="text-xl font-bold pb-4 text-center">{event.name}</p>
                        <p class="text-md font-normal pb-4 text-gray-800 text-center">{event.description}</p>
                        <div class="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                 stroke="currentColor" class="w-6 h-6 text-gray-500">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            <p class="text-sm font-light text-gray-500 text-center pl-2">{event.date}</p>
                        </div>
                    </div>
                </div>
            </div>
        {:else}
            <div class="flex divide-x-4 divide-purpleS1 justify-end">
                <div class="w-[400px] py-16">
                    <div class="flex flex-col justify-center items-center pt-4 px-4">
                        <p class="text-xl font-bold pb-4 text-center">{event.name}</p>
                        <p class="text-md font-normal pb-4 text-gray-800 text-center">{event.description}</p>
                        <div class="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                 stroke="currentColor" class="w-6 h-6 text-gray-500">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            <p class="text-sm font-light text-gray-500 text-center pl-2">{event.date}</p>
                        </div>
                    </div>
                </div>
                <div class="w-[400px] flex items-center justify-center py-16">
                    <div class="w-[400px] h-[4px] from-blue-600 to-purple-500 bg-gradient-to-r"></div>
                    <div class="w-[800px] flex flex-col bg-white rounded-2xl border-2">
                        <div class="w-full">
                            <img on:mouseenter={() => scaleUp(".img" + i.toString())} on:mouseleave={() => scaleDown(".img" + i.toString())} class={`img${i} image w-full rounded-2xl`}
                                 src={event.image} alt="">
                        </div>
                    </div>
                </div>
            </div>
        {/if}
    {/each}
</section>


