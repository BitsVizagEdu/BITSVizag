<script>
    import {showNavBar, toggleNavBar} from "../stores.js";

    let nav2 = [
        'BITS Login',
        'ARIIA',
        'NRIF',
        'AICTE',
        'Admission',
        'Alumni',
        'Downloads',
        'Placements',
        'Instagram'
    ];
    import {dropdown, NavItems} from './navItem.js';

    // function handleClick() {
    //     alert('clicked');
    // }
</script>

<link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
/>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
        rel="stylesheet"
/>
<link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap"
        rel="stylesheet"
/>
<div class="bg-gray-800">
    <div class="2xl:container 2xl:mx-auto py-5 lg:px-7 sm:px-6 px-4">

        <div class=" flex flex-row justify-center">
            <div class=" flex space-x-3 items-center">
                <img
                        class="bg-white rounded-full p-1"
                        src="/bits.jpg"
                        alt="circle"
                        height="100px"
                        width="100px"
                />
            </div>
            <div class="flex flex-col justify-center items-center ">
                <h1
                        class=" font-normal text-4xl font-bold leading-6 text-white item-center tracking-wider justify-center text-center px-[25px] "
                >
                    BABA INSTITUTE OF TECHNOLOGY AND SCIENCES
                </h1>
                <div class="flex flex-col mt-2">
                    <p class="text-center text-xl text-white">
                        (Accredited by NAAC, Approved by AICTE, Delhi)
                    </p>
                    <p class="text-center text-lg mb-0 text-white"><small>(Affiliated to JNTUK Kakinada) </small></p>
                </div>
            </div>
        </div>

    </div>
</div>
<nav
        class=" pl-3    flex flex-row justify-between align-middle content-center items-center   border-b-4 border-purpleS2"
>
    <div class="flex flex-row items-center ">
        <img
                class="bg-white rounded-full p-1"
                src="/bits.jpg"
                alt="circle"
                height="70px"
                width="70px"
        />

        <img src="/sqc.svg" class="inline w-32 ml-5" alt=""/>
    </div>

    <div id="nav1" class={`hidden nav1 lg:my-1 lg:h-20 lg:flex lg:flex-row lg:items-center `}>
        {#each $NavItems as navName, index}
            <div class="p-0">
                <div class="dropdown inline-block relative">
                    <div class="flex items-center flex-col content-center hover:cursor-pointer">
                        <a class=" w-6 h-6 pr-1 mt-2">{@html navName.icon}</a>
                        <div>
                            <button
                                    class="text-white font-semibold py-2 pt-0 px-4 rounded inline-flex items-center hover:underline underline-offset-4 "
                            >
                                <span class="text-white text-xs">{navName.name}</span>
                                {#if navName.items.length > 0}
                                    <svg
                                            class="fill-white h-4 w-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                    >
                                        <path
                                                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                        />
                                    </svg>
                                {/if}
                            </button
                            >
                        </div>
                    </div>
                    {#if navName.items.length > 0}
                        <ul
                                class="dropdown-menu bg-gradient-to-r from-blue-500 to-blue-600 absolute rounded-none hidden  text-purpleS2 pl-0"
                        >
                            {#each navName.items as item, i}
                                <li class="text-white  border-white">
                                    <a
                                            class="  hover:underline underline-offset-1 py-2 px-4 block text-white"
                                            href="#">{item}</a
                                    >
                                </li>
                            {/each}
                        </ul>
                    {/if}
                </div>
            </div>
        {/each}
    </div>
    <button class="openbtn px-4 lg:hidden" on:click={toggleNavBar}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
    </button>
    <div class={`${$showNavBar ? "h-[100vh] w-[100vw]" : "hidden"}`}>
        <p>navBar</p>
    </div>
</nav>

<nav class=" bg-white border-b-0 border-purpleS2">
    <div class="nav2 flex justify-center mx-10  items-center  ">
        {#each nav2 as nav2name}
            <a class="{nav2name} w-full text-black inline border-b-4 border-white hover:border-purpleS2 p-[10px]   text-[15px] tracking-wider text-center  cursor-pointer "
            >{nav2name}</a
            >
        {/each}
    </div>
</nav>
<video playsinline autoplay muted loop>
    <source src="/baba2.mp4" type="video/mp4">
</video>


<div id="overlay">
    <img src="/logow.svg" class=" w-auto h-52 mr-4 pb-10">
    <img src="/sq.svg" class=" w-auto h-72">
</div>

<style>
    button {
        font-family: 'Lato', sans-serif;
        font-weight: 900;
    }

    a {
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
    }
</style>
