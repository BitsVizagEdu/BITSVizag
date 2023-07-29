<script>
    import {onMount} from "svelte";

    export const ssr = false;
    import "../app.css"
    import Nav from "$lib/components/navmenu.svelte"
    import BackToTop from '$lib/components/backtotop.svelte'
    import Hero from "$lib/components/navbar.svelte"
    import AOS from 'aos';
    import Middlenav from "$lib/components/middlenav.svelte";
    import 'aos/dist/aos.css'; // You can also use <link> for styles
    // ..
    import {  showNavBar, toggleNavBar } from '$lib/stores/store.js';
	import Footer from "$lib/components/footer.svelte";

    onMount(() => {

            AOS.init();

    })
</script>

<svelte:head>
    <!-- Cloudflare Web Analytics -->
    <script defer src='https://static.cloudflareinsights.com/beacon.min.js'
            data-cf-beacon='{"token": "84745c0a3c924105a8df1514acdb13d4"}'>
    </script>
    <!-- End Cloudflare Web Analytics -->
</svelte:head>

<main>
    {#if $showNavBar}


    {:else}

        <Hero showNavBar={showNavBar}/>
        <Middlenav/>
        <BackToTop/>
        <slot />
        <Footer/>
    {/if}

</main>
