<script>
    import Events from "$lib/components/events.svelte"
    import Strength from "$lib/components/strength.svelte"
    import Committies from "$lib/components/committies.svelte"
   
    import Gallery from "$lib/components/gallery.svelte"
    import Placement from "$lib/components/placement.svelte"
    import {  showNavBar, toggleNavBar } from '$lib/stores/store.js';
    import Video from "$lib/components/video.svelte"

    import {onMount} from "svelte";
	import Placementheader from "$lib/components/placementheader.svelte";
	

    function scaleLogo(y){
        if(typeof(y) !== "undefined"){
            document.getElementById("scale-logo").style.transform = `scale(${1+y/700})`
            document.getElementById("scale-logo").style.opacity = `${1-y/900}`
        }
    }

    onMount(()=>{

    })

    let y
    $: scaleLogo(y)


</script>

<svelte:head>
    <title>Home</title>
</svelte:head>

<svelte:window bind:scrollY={y}/>
{#if !$showNavBar}
    <div id="overlay" class="overlay overflow-hidden flex relative z-[-1] min-h-[75vh]">
        <video playsinline autoplay muted loop>
            <source src="/baba.webm" type="video/webm" />
        </video>



        <div id="scale-logo" class="vidlogo absolute flex justify-center items-center h-full w-full">
            <img src="/logow.svg" class="mb-24 w-auto lg:h-52 md:h-44 mr-4 pb-10 3xs:h-24 xs:h-32" />
            <img src="/sq.svg" class=" w-auto mb-24 lg:h-60 h-72 md:h-44 3xs:h-24 xs:h-32" />
        </div>
    </div>
    <Placementheader/>
    <Gallery/>
    <Events/>
    <Strength/>
    
    <Placement/>
    <Committies/>
 
{/if}



