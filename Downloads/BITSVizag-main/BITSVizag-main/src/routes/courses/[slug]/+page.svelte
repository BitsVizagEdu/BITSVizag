<script>
    import {items, replaceHyphenWithSpace} from "./components/utils.js";
    import {activeTab, setActiveTabValue, showNavBar} from '$lib/stores/store.js';

    import PostGraduation from "./components/Post Graduation.svelte";
    import UnderGraduation from "./components/Under Graduation.svelte";

    import Footer from '$lib/components/footer.svelte';
    import {isActiveTabSet, toggleIsActiveTab} from "../../../lib/stores/store.js";

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
    <title>Courses Offered</title>
</svelte:head>

{#if !$showNavBar}
    <div class="total flex lg:flex-row 3xs:flex-col  h-[100%] ">
        <aside class="lg:w-[25%] p-5 rounded-lg  " aria-label="Sidebar">
            <div class="overflow-y-auto sticky top-2 py-4 px-3   bg-blue-900 rounded-lg">
                <ul class="space-y-2">
                    {#each items as item}
                        <li id="{item}" on:click={() => setActiveTabValue(item)}>
                            <a href={`/courses/${item}`} class="flex items-center 2xl:justify-center p-2 3xs:p-1 text-base font-normal rounded-lg
								{($activeTab === item) ? ' bg-white text-black ' : 'text-white'} ">
                                <span class="ml-3 md:text-base 2xl:text-center  3xs:text-xs xs:text-sm">{replaceHyphenWithSpace(item)}</span>
                            </a>
                        </li>
                    {/each}
                </ul>
            </div>
        </aside>

        <div class=" lg:w-[75%] p-5 rounded-lg ">
            {#if $activeTab === 'Under Graduation'}
                <UnderGraduation/>
            {/if}
            
            {#if $activeTab === 'Post Graduation'}
                <PostGraduation/>
            {/if}
        </div>
    </div>

{/if}
