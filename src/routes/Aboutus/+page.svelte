<script>
    import Nav from "$lib/components/navmenu.svelte"
    
    import Hero from "$lib/components/navbar.svelte"
   
    import {  showNavBar, toggleNavBar } from '$lib/stores/store.js';
    
</script>

<svelte:head>
    <title>Home</title>
</svelte:head>


{#if $showNavBar}
    <Nav/>
    
    {:else}
    <Hero showNavBar={showNavBar}/>
    
{/if}