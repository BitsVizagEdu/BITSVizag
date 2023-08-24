<script>
    import {items, replaceHyphenWithSpace} from "./components/utils.js";
    import {activeTab, setActiveTabValue, showNavBar} from '$lib/stores/store.js';

    import DepartmentofBsh from "./components/Department of BS&H.svelte";
    import DepartmentofCse from "./components/Department of CSE.svelte";
    import DepartmentofEce from "./components/Department of ECE.svelte";
    import DepartmentofEee from "./components/Department of EEE.svelte";
    import DepartmentofCivil from "./components/Department of CIVIL.svelte";
    import DepartmentofMech from "./components/Department of MECH.svelte";
    import DepartmentofMba from "./components/Department of MBA.svelte";
    import Footer from '$lib/components/footer.svelte';
    import {isActiveTabSet, toggleIsActiveTab} from "../../../lib/stores/store.js";
    import {page} from "$app/stores";

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
    <title>Department</title>
</svelte:head>

{#if !$showNavBar}
    <div class="total flex lg:flex-row 3xs:flex-col  h-[100%] ">
        <aside class="lg:w-[25%] p-5 rounded-lg  " aria-label="Sidebar">
            <div class="overflow-y-auto sticky top-2 py-4 px-3   bg-blue-900 rounded-lg">
                <ul class="space-y-2">
                    {#each items as item}
                        <li id="{item}" on:click={() => setActiveTabValue(item)}>
                            <a href={`/department/${item}`} class="flex items-center 2xl:justify-center p-2 3xs:p-1 text-base font-normal rounded-lg
								{($activeTab === item) ? ' bg-white text-black ' : 'text-white'} ">
                                <span class="ml-3 md:text-base 2xl:text-center  3xs:text-xs xs:text-sm">{replaceHyphenWithSpace(item)}</span>
                            </a>
                        </li>
                    {/each}
                </ul>
            </div>
        </aside>

        <div class=" lg:w-[75%] p-5 rounded-lg ">
            {#if $activeTab === 'Department of BS&H'}
                <DepartmentofBsh/>
            {/if}

            {#if $activeTab === 'Department of CSE'}
                <DepartmentofCse/>
            {/if}
            {#if $activeTab === 'Department of ECE'}
                <DepartmentofEce/>
            {/if}
            {#if $activeTab === 'Department of EEE'}
                <DepartmentofEee/>
            {/if}
            {#if $activeTab === 'Department of CIVIL'}
                <DepartmentofCivil/>
            {/if}
            {#if $activeTab === 'Department of MECH'}
                <DepartmentofMech/>
            {/if}
            {#if $activeTab === 'Department of MBA'}
                <DepartmentofMba/>
            {/if}
        </div>
    </div>

{/if}
