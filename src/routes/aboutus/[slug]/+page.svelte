<script>
    import {items, replaceHyphenWithSpace} from "./components/utils.js";
    import {activeTab, setActiveTabValue, showNavBar} from '$lib/stores/store.js';

    import Chairman from './components/chairman.svelte';

    import Principal from "./components/principal.svelte";

    import Bits from './components/bits.svelte';

    import {isActiveTabSet, toggleIsActiveTab} from "../../../lib/stores/store.js";
	import Trust from "./components/trust.svelte";

    /** @type {import('./$types').PageData} */
    export let data;

    if (data) {
        if (!$isActiveTabSet) {
            setActiveTabValue(data.route)
        }
        toggleIsActiveTab(false)
    }

</script>

<svelte:head>
    <title>About Us</title>
</svelte:head>

{#if !$showNavBar}
    <div class="total flex lg:flex-row 3xs:flex-col h-[100%]">
        <aside class="lg:w-[25%] p-5 rounded-lg  " aria-label="Sidebar">
            <div class="overflow-y-auto py-4 px-3   bg-blue-900 rounded-lg sticky top-2">
                <ul class="space-y-2">
                    {#each items as item}
                        <li id="{item}" on:click={() => setActiveTabValue(item)}>
                            <a href={`/aboutus/${item}`} class="flex items-center 2xl:justify-center p-2 3xs:p-1 text-base font-normal rounded-lg
								{($activeTab === item) ? ' bg-white text-black ' : 'text-white'} ">
                                <span class="ml-3 md:text-base 2xl:text-center  3xs:text-xs xs:text-sm">{replaceHyphenWithSpace(item)}</span>
                            </a>
                        </li>
                    {/each}
                </ul>
            </div>
        </aside>

        <div class=" lg:w-[75%] p-5 rounded-lg ">
            {#if $activeTab === 'About-Trust'}
                <Trust/>
            {/if}
            {#if $activeTab === 'About-BITS-Vizag'}
                <Bits/>
            {/if}
            {#if $activeTab === 'Message-from-Chairman'}
                <Chairman/>
            {/if}
            {#if $activeTab === 'Message-from-Principal'}
                <Principal/>
            {/if}
        </div>
    </div>
    
{/if}
