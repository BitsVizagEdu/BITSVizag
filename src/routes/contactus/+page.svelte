<script>
    import Nav from "$lib/components/navmenu.svelte"
    
    import Hero from "$lib/components/navbar.svelte"
   
    import {  showNavBar, toggleNavBar } from '$lib/stores/store.js';

    import Contactus from "./components/contactus.svelte";

    import Footer from "$lib/components/footer.svelte";
    
</script>

<svelte:head>
    <title>Contact Us</title>
</svelte:head>


{#if $showNavBar}
    <Nav/>
    
    {:else}
    
    <Hero showNavBar={showNavBar}/>
    
    <Contactus/>

    <Footer/>
    
{/if}

