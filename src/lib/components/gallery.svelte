<script>
    import { inView, animate } from 'motion';

    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';

    const isVisible = writable(false);
    let tempValue = false;
    isVisible.subscribe((value) => {
        tempValue = value;
    });

    onMount(() => {
        inView('#gallery', (info) => {
            console.log(info)
            isVisible.set(!tempValue);
        });
    });
</script>

<section class={`${$isVisible ? ' opacity-100' : 'opacity-0'}`} id="gallery">
    <div class="md:grid md:grid-cols-3 md:grid-rows-5 p-10 gap-10 ">
        <div class="justify-center items-center py-8 md:py-0">
            <p
                    class="uppercase text-[400%] sm:text-[300%] 2xl:text-[600%] text-center md:text-left font-bold"
            >
                gallery
            </p>
        </div>
        <div
                class={`row-span-5 row-start-2  ${
				$isVisible ? ' opacity-100 animate-fade-in-down' : 'opacity-0'
			}`}
        >
            <img
                    src="https://cdn.britannica.com/30/182830-050-96F2ED76/Chris-Evans-title-character-Joe-Johnston-Captain.jpg"
                    alt=""
            />
        </div>
        <div
                class={`row-span-2 col-start-2 row-start-1 items-center   ${
				$isVisible ? ' opacity-100 animate-fade-in-left' : 'opacity-0'
			} `}
        >
            <img
                    src="https://metro.co.uk/wp-content/uploads/2020/07/marvels_iron_man_vr_hero_banner_06_ps4_us_18mar19-ffe6.jpeg?quality=90&strip=all&crop=0px%2C52px%2C1400px%2C736px&resize=1200%2C630"
                    alt=""
                    class="my-6 "
            />
        </div>
        <div
                class={`row-span-2 col-start-3 row-start-2 items-center  ${
				$isVisible ? ' opacity-100 animate-fade-in-up' : 'opacity-0'
			}`}
        >
            <img
                    src="https://metro.co.uk/wp-content/uploads/2020/07/marvels_iron_man_vr_hero_banner_06_ps4_us_18mar19-ffe6.jpeg?quality=90&strip=all&crop=0px%2C52px%2C1400px%2C736px&resize=1200%2C630"
                    alt=""
                    class="my-6 "
            />
        </div>
        <div
                class={`row-span-2 col-start-2 row-start-3 items-center  ${
				$isVisible ? ' opacity-100 animate-fade-in-down' : 'opacity-0'
			} `}
        >
            <img
                    src="https://metro.co.uk/wp-content/uploads/2020/07/marvels_iron_man_vr_hero_banner_06_ps4_us_18mar19-ffe6.jpeg?quality=90&strip=all&crop=0px%2C52px%2C1400px%2C736px&resize=1200%2C630"
                    alt=""
                    class="my-6 "
            />
        </div>
        <div
                class={`row-span-2 col-start-3 row-start-4 items-center  ${
				$isVisible ? ' opacity-100 animate-fade-in-right' : 'opacity-0'
			} `}
        >
            <img
                    src="https://metro.co.uk/wp-content/uploads/2020/07/marvels_iron_man_vr_hero_banner_06_ps4_us_18mar19-ffe6.jpeg?quality=90&strip=all&crop=0px%2C52px%2C1400px%2C736px&resize=1200%2C630"
                    alt=""
                    class="my-6 "
            />
        </div>
        <div class="items-center ">
            <p class="text-2xl text-center md:text-right  hover:underline">More</p>
        </div>
    </div>
</section>