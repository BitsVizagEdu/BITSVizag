<script>
    import {onMount} from "svelte";

    export const ssr = false;
    import "../app.css"
    import Nav from "$lib/components/navmenu.svelte"
    import BackToTop from '$lib/components/backtotop.svelte'
    import Hero from "$lib/components/navbar.svelte"
    import AOS from 'aos';
    import 'aos/dist/aos.css'; // You can also use <link> for styles
    // ..
    import {  showNavBar, toggleNavBar } from '$lib/stores/store.js';
	import Footer from "$lib/components/footer.svelte";

    onMount(() => {

            AOS.init();

    })
</script>

<main>
    {#if $showNavBar}
        <Nav/>
    {:else}
        <Hero showNavBar={showNavBar}/>
        <BackToTop/>
        <slot />
        <Footer/>
    {/if}

</main>