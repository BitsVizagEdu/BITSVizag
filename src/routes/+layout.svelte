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

    onMount(() => {

            AOS.init();

    })
</script>

<main>
    {#if $showNavBar}
    
        
    {:else}
    
        <Hero showNavBar={showNavBar}/>
        <Middlenav/>
        <BackToTop/>
        <slot />
    {/if}
    
</main>