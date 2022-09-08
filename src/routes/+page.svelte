
<script>
    import Events from "$lib/components/events.svelte"
    import Hero from "$lib/components/hero.svelte"
    import Strength from "$lib/components/strength.svelte"
    import Message from "$lib/components/message.svelte"
    import Committies from "$lib/components/committies.svelte"
    import Footer from "$lib/components/footer.svelte"
    import Placement from "$lib/components/placement.svelte"
    import LocomotiveScrollProvider from 'svelte-locomotive-scroll'
</script>

<svelte:head>
    <title>Home</title>
</svelte:head>

<LocomotiveScrollProvider options={{smooth: false}} watch={[]}>
    <Hero/>
    <Events/>
    <Strength/>
<!--    <Placement/>-->
    <Committies/>
    <Message/>
    <Footer/>
</LocomotiveScrollProvider>



