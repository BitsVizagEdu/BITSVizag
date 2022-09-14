<script>
    import {setActiveTabValue, toggleNavBar} from '../stores/store.js';
    import {dropdown, NavItems} from './navItem.js';
    import {replaceHyphenWithSpace} from "../../routes/aboutus/[slug]/components/utils.js";

    let nav2 = [
        'BITS Login',
        'AICTE',
        'Admission',
        'Alumni',
        'Downloads',
        'Placements',
        'Instagram'
    ];

    function dropdown_toggle(index) {
        let temp = dropdown;
        temp[index] = !temp[index];
        dropdown.set(temp);
        console.log(temp);
    }

    function onClick(item) {
        toggleNavBar()
        setActiveTabValue(item)
    }

	function onDropdownClick(){
		toggleNavBar()
	}
</script>

<div
        id="menu"
        on:click={toggleNavBar}
        class=" bg-sortwhite  lg:hidden  p-3 hover:cursor-pointer ml-auto"
>
    <a class=" "
    >
        <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-9 h-9 ml-auto mr-0 text-black"
        >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
        </svg>
    </a>
</div>

<div id="navf1 " class="md:block  lg:hidden">
    <div id="navf " class="bg-sortwhite ">
        <div class="con   bg-sortwhite py-2 h-[100vh]">
            {#each $NavItems as navName, index}
                <div
                        on:click={() => dropdown_toggle(index)}
                        class="flex flex-col  bg-sortwhite  "
                >
                    <div class="flex flex-row items-center justify-between">

                        {#if navName.items.length > 0}
                            <button class="flex items-center justify-between px-14 text-black font-bold 3xs:text-base  xs:text-lg mr-2 my-2">
                                {navName.name}
                            </button>
                            <svg class="fill-red1 h-4 w-4 mr-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path
                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                />
                            </svg>
                        {:else}
                            <a href={`${navName.folder}`} on:click={() => toggleNavBar()} class="flex items-center justify-between px-14 text-black font-bold 3xs:text-base  xs:text-lg mr-2 my-2">
                                {navName.name}
                            </a>
                        {/if}
                    </div>
                </div>
                {#if $dropdown[index]}
                    {#if navName.items.length > 0}
                        {#each navName.items as item, i}
                            <div
                                    on:click={() => dropdown_toggle(index)}
                                    class="flex flex-col  justify-between bg-gray1  w-[100vw]"
                            >
                                <a on:click={() => onClick(item)} href={`${navName.folder}/${item}`}
                                   class="flex items-center justify-between mx-14 my-2">
                                    <span class="text-black text-left py-1 font-semibold  text-lg mr-2">{replaceHyphenWithSpace(item)}</span>
                                </a>
                            </div>
                        {/each}
                    {/if}
                {/if}
            {/each}
        </div>
    </div>
</div>
