<script>
    import Events from "$lib/components/events.svelte"
    import Strength from "$lib/components/strength.svelte"
    import Committies from "$lib/components/committies.svelte"
    import Footer from "$lib/components/footer.svelte"
    import Gallery from "$lib/components/gallery.svelte"
    import Placement from "$lib/components/placement.svelte"
    import {  showNavBar, toggleNavBar } from '$lib/stores/store.js';
    import Video from "$lib/components/video.svelte"

    let y
    $:console.log(y)
</script>

<svelte:head>
    <title>Home</title>
</svelte:head>

<svelte:window bind:scrollY={y}/>
{#if !$showNavBar}
    <Video/>
    <Gallery/>
<!--    <Events/>-->
    <Strength/>
    <Placement/>
    <Committies/>
    <Footer/>
{/if}


