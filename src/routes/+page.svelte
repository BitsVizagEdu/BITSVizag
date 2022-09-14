
<script>
    import Nav from "$lib/components/navmenu.svelte"
    import Events from "$lib/components/events.svelte"
    import Hero from "$lib/components/navbar.svelte"
    import Strength from "$lib/components/strength.svelte"
    import Committies from "$lib/components/committies.svelte"
    import Footer from "$lib/components/footer.svelte"
    import Gallery from "$lib/components/gallery.svelte"
    import Placement from "$lib/components/placement.svelte"
    import {  showNavBar, toggleNavBar } from '$lib/stores/store.js';
    import Video from "$lib/components/video.svelte"
</script>

<svelte:head>
    <title>Home</title>
</svelte:head>


{#if !$showNavBar}
    <Video/>
    <Gallery/>
    <Events/>
    <Strength/>
    <Placement/>
    <Committies/>
    <Footer/>
{/if}


