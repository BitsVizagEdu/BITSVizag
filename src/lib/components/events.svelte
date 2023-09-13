
<script>
    let events = [
        {
            name: "Orientation Program - 2023",
            description: "Connecting B.Tech Freshers, 5000+ alumni, 500+ classifications, 50+ entrepreneurs, 15+ countries. Endless possibilities, one place.",
            date: "August 30, 2023",
            image: "/events/op.jpg",
            href:"https://www.instagram.com/p/CwkaJiwrcsa/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
        },
        {
            name: "The INDEPENDENCE DAY Celebrations at BITS Vizag",
            description: "Students and staff joined hands in commemorating Independence Day at BITS Vizag, fostering a sense of patriotism and togetherness.",
            date: "August 15, 2023",
            image: "/events/independance.jpg",
            href:"https://www.instagram.com/p/Cv_mxy6rXUW/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
        },
        {
            name: "BITS Vizag and G-TEC DST GITAM Join Hands Through Meaningful MOU Signing Ceremony.",
            description: "BITS Vizag and G-TEC | DST GITAM join in impactful MOU for enhanced collaboration.",
            date: "August 10, 2023",
            image: "/events/gitam.jpg",
            href:"https://www.instagram.com/p/CvxX9zYvBow/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
        },
        {
            name: "Mr. Joshua Raju, CSE Students, and KONKORDE Team Gain Invaluable Insights at BNI Kings Meet 2023.",
            description: "Mr. Joshua Raju, CSE students, and KONKORDE Team gained insights at the BNI Kings Meet 2023, Hotel Ocean Vista Bay, August 10th.",
            date: "August 10, 2023",
            image: "/events/bni.jpg",
            href:"https://www.instagram.com/p/Cv_mxy6rXUW/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
        },
        {
            name: "The 234 Battalion CRPF organized a spectacular event at the Picturesque Campus of BITS Vizag",
            description: "The serene campus of BITS Vizag was transformed into a mesmerizing venue as the 234 Battalion CRPF hosted an impressive event.",
            date: "July 27, 2023",
            image: "/events/crpf.jpg",
            href:"https://www.instagram.com/p/CvMyAiwr3v3/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
        },
        {
            name: "MOU Signing Ceremony - BITS Vizag and London School of Digital Business, UK",
            description: "BITS Vizag and London School of Digital Business signed an MOU, enhancing digital education and opportunities. An International Interactive Workshop on the same was held.",
            date: "July 22, 2023",
            image: "/events/lsdb.jpg",
            href:"https://www.instagram.com/p/CvBteqCLtbR/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
        },
        {
            name: "INTERNATIONAL YOGA DAY CELEBRATION",
            description: "Featuring Dr. Sundar Raj Perumali, Director, Aroghyadhatri.",
            date: "June 21, 2023",
            image: "/events/6.jpeg",
            href:"https://www.instagram.com/p/Ctv-lUWroBU/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
        },
        {
            name: "GRADUATION DAY CELEBRATION",
            description: "Featuring Chief Guest Prof. G. Swami Naidu, Registrar - JNTU GV.",
            date: "September 2, 2022",
            image: "/events/7.jpg",
            href:"https://www.instagram.com/p/CrtQ2fwPY26/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
        },
        {
            name: "BITS QUEST 2K23 - ANNUAL FEST",
            description: "Thrilled to witness Digitaries like Prof. K. Venkata Subbaiah, JNTU Vice Chancellor and Shri. K. Nagesh.",
            date: "August 26, 2022",
            image: "/events/5.jpeg",
            href:"https://www.instagram.com/p/CrAr6bOO5ug/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
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

<!--Bigger Screens-->
<section class="lg:flex lg:flex-col lg:items-center hidden">
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
                <a href="/gallery" class="text-2xl font-bold underline">Explore More ></a>
            </div>
        </div>
    </div>
    {#each events as event, i}
        {#if i%2 === 0}
            <div class="flex divide-x-4 divide-purpleS1 justify-start">
                <div class="w-[400px] flex items-center justify-center py-16">
                    <div class="w-[800px] flex flex-col">
                        <div class="w-full">
                            <a href="{event.href}"><img  on:mouseenter={() => scaleUp(".img" + i.toString())} on:mouseleave={() => scaleDown(".img" + i.toString())} class={`img${i} image w-full rounded-2xl`}
                                src={event.image} alt=""></a>
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
                           <a href="{event.href}"> <img on:mouseenter={() => scaleUp(".img" + i.toString())} on:mouseleave={() => scaleDown(".img" + i.toString())} class={`img${i} image w-full rounded-2xl`}
                            src={event.image} alt=""></a>
                        </div>
                    </div>
                </div>
            </div>
        {/if}
    {/each}
</section>

<!--<1024px Smaller screens-->
<section class="lg:hidden flex flex-col w-[100vw] bg-gray-800 ">
    <div class="flex md:p-10 sm:p-10 xs:py-5 xs:px-12 px-6 py-4 items-center justify-center">
        <p class="md:text-4xl sm:text-2xl text-2xl font-bold text-gray-300">Events</p>
    </div>
    <div class="flex flex-wrap xs:p-10">
        {#each events as event, i}
            <div class="flex w-[300px] grow shrink-0 pb-6 justify-center">
                <div class="flex flex-col bg-white xs:ml-5 mx-2 rounded-2xl items-center p-4 ">
                    <p class="md:text-sm sm:text-sm text-lg text-center py-2 font-bold">{event.name}</p>
                    <p class="md:text-sm sm:text-sm text-lg text-center py-2 text-gray-900 font-[400]">{event.description}</p>
                    <div class="py-4">
                        <img class="xs:h-[300px] xs:w-[300px] object-contain rounded-lg" src={event.image} alt="">
                    </div>
                    <div class="flex pb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" class="w-6 h-6 text-gray-900">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <p class="text-sm font-light text-gray-900 text-center pl-2">{event.date}</p>
                    </div>
                </div>
            </div>
        {/each}
        <div class="flex justify-end w-full p-4">
            <a href="#" class="underline text-gray-300 font-bold md:text-2xl sm:text-xl text-lg">Read More...</a>
        </div>
    </div>
</section>
