
<script>
    import Nav from "$lib/components/navmenu.svelte"
    import Events from "$lib/components/events.svelte"
    import Hero from "$lib/components/hero.svelte"
    import Strength from "$lib/components/strength.svelte"
    import Message from "$lib/components/message.svelte"
    import Committies from "$lib/components/committies.svelte"
    import Footer from "$lib/components/footer.svelte"
    import Gallery from "$lib/components/gallery.svelte"
    import Placement from "$lib/components/placement.svelte"
    import {  showNavBar, toggleNavBar } from '$lib/stores/store.js';
    import LocomotiveScrollProvider from 'svelte-locomotive-scroll'
</script>

<svelte:head>
    <title>Home</title>
</svelte:head>

<LocomotiveScrollProvider options={{smooth: false}} watch={[]}>
    {#if $showNavBar}
    <Nav/>
    {:else}
    <Hero showNavBar={showNavBar}/>
    <Events/>
    <Strength/>
<!--    <Placement/>-->
    <Committies/>
    <Gallery/>
    <Message/>
    <Footer/>
    <!-- <Events/> -->
    {/if}
    
    
</LocomotiveScrollProvider>



