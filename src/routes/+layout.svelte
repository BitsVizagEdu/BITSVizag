<script>
    export const ssr = false;
    import "../app.css"
    import Nav from "$lib/components/navmenu.svelte"

    import Hero from "$lib/components/navbar.svelte"

    import {  showNavBar, toggleNavBar } from '$lib/stores/store.js';
</script>

<main>
    {#if $showNavBar}
        <Nav/>
    {:else}
        <Hero showNavBar={showNavBar}/>
    {/if}
    <slot />
</main>