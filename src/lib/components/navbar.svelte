<script>
    import {showNavBar, showNavBar2, toggleNavBar, toggleNavBar2} from '../stores/store.js';
    import Nav from '$lib/components/navmenu.svelte';
    import {NavItems} from './navItem.js';

    let nav2 = ['BITS Login', 'AICTE', 'Admission', 'Alumni', 'Downloads', 'Placements', 'Instagram'];
</script>

<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
/>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com"/>
<link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
        rel="stylesheet"
/>
<link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap"
        rel="stylesheet"
/>
<div id="header" class="bg-gray-800 flex flex-col items-center w-full">
    <div class=" 2xl:mx-auto py-5 lg:px-7 md:pb-5 xs:p-4 sm:px-4 px-4 w-full">
        <div class=" flex flex-row md:justify-between 3xs:justify-center w-full">
            <div class="flex flex-col lg:flex md:hidden  md:justify-center xs:justify-center">
                <div
                        class=" flex space-x-3 lg:flex 3xs:hidden xs:hidden md:flex md:h-[100px] md:w-[100px] lg:h-[150px] lg:w-[150px]  items-center xs:w-20 xs:h-20 justify-start"
                >
                    <img
                            class="bg-transparent md:hidden lg:flex p-1 flex justify-content: flex-start"
                            src="/azadhi.png"
                            alt="circle"
                            height="150px"
                            width="150px"
                    />
                </div>
            </div>
            <div class="flex flex-row justify-center items-center">
                <div
                        class=" flex space-x-3 3xs:hidden 3xs:w-24 xs:mr-4 2xs:w-32 xs:w-36 md:w-[100px] md:h-[100px] 2xs:hidden md:flex lg:block lg:mr-4 items-center"
                >
                    <img class="bg-white rounded-full p-1" src="/bits.jpg" alt="circle"/>
                </div>
                <div class="flex flex-col justify-center items-center ">
                    <h1
                            class="text-4xl 3xs:text-[11px] 2xs:text-[13px] xs:text-[15px] leading-6 xl:text-2xl md:text-[19px] lg:text-xl font-bold text-white item-center tracking-wider justify-center text-center md:px-[10px] "
                    >
                        BABA INSTITUTE OF TECHNOLOGY AND SCIENCES
                    </h1>

                    <div class="mt-1">
                        <h6
                                class="text-center text-xl 3xs:text-[6.5px] 2xs:text-[7.5px] xs:text-[9.5px] leading-3 xl:text-lg lg:text-sm md:text-[12px] text-white"
                        >
                            ( Accredited by NAAC | Approved by AICTE,New Delhi | Affiliated to JNTU-Kakinada,GV )<br
                        />(An ISO 9001:2015 Certified Educational Institution)
                        </h6>
                    </div>
                </div>
            </div>
            <div
                    class="flex flex-col xs:hidden md:flex 3xs:hidden justify-center xs:scale-[0.8] md:scale-[1] items-center "
            >
                <div class="flex flex-col justify-center items-center">
                    <h1
                            class=" text-xl font-bold text-sortwhite items-end tracking-wider justify-center text-center"
                    >
                        COLLEGE<br/>CODE
                    </h1>
                    <h1 class="text-center text-2xl md:text-2xl mb-o xs:text-base text-yellow-400 font-bold">
                        <b>BABA</b>
                    </h1>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="menu">
    <div
            class=" bg-white flex flex-row items-center justify-between lg:hidden  p-3 px-4 hover:cursor-pointer "
    >
        <a class="  " on:click={toggleNavBar}
        >
            <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="black"
                    class="w-6 h-6 "
            >
                <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
            </svg>
        </a>
        <div class="flex flex-row  ">
            <a>
                <img src="./logorb.svg" class=" mx-1 w-9 h-9"/>
            </a>

            <!-- <a>
        <img src="./sqb.svg" class=" w-12	 h-12">
    </a> -->
        </div>

        <a on:click={toggleNavBar2}>
            <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class=" px-2 w-10 "
            >
                <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                />
            </svg>
        </a>
    </div>
    <div class={`${$showNavBar2 ? 'grid gap-2 grid-cols-2 bg-white ' : 'hidden'}`}>
        {#each nav2 as nav2name}
            <div class="flex flex-col  justify-center items-center lg:hidden bg-white  ">
                <button class="flex items-center justify-between mx-14 my-2">
                    <span class="text-black text-left py-1 font-semibold  text-base mr-2">{nav2name}</span>
                </button>
            </div>
        {/each}
    </div>
</div>
{#if $showNavBar}
    <Nav/>
{/if}

{#if !$showNavBar}
    <nav
            id="navt"
            class=" pl-3 hidden 2xs:hidden  lg:flex flex-row justify-between align-middle content-center items-center   border-b-4 border-purpleS2"
    >
        <div class="flex  flex-row items-center ">
            <img
                    class="bg-white rounded-full p-1 lg:w-16 lg:h-16 h-[70px] w-[70px]"
                    src="/bits.jpg"
                    alt="circle"
            />

            <img src="/sqc.svg" class="inline w-32 ml-5 lg:ml-3 lg:w-24" alt=""/>
        </div>

        <div id="nav1" class="nav1 pl-4 my-1 h-20 flex flex-row items-center ">
            {#each $NavItems as navName, index}
                <div class="p-0">
                    <div class="dropdown inline-block relative">
                        <div class="flex items-center flex-col  content-center hover:cursor-pointer">
                            <a class="md:w-5 md:h-5  lg:w-6 lg:h-6 pr-1 lg:pr-0 mt-2">{@html navName.icon}</a>
                            <div>
                                <button
                                        class="text-white font-semibold lg:px-[7px]  py-2 pt-0 md:px-1 rounded inline-flex items-center hover:underline underline-offset-4 "
                                >
									<span class="text-white xl:text-[15px] 2xl:text-[16.5px] 3xs:text-[13px] lg:text-[10px]"
                                    >{navName.name}</span
                                    >
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
                                </button>
                            </div>
                        </div>
                        {#if navName.items.length > 0}
                            <ul
                                    class="dropdown-menu bg-gradient-to-r from-blue-500 to-blue-600 absolute rounded-none hidden  text-purpleS2 pl-0"
                            >
                                {#each navName.items as item, i}
                                    <li class="text-white  border-white">
                                        <a
                                                class="  hover:underline 3xs:text-[11px] underline-offset-1 py-2 px-4 block text-white lg:text-[14px]"
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
    </nav>

    <nav id="nav2" class=" hidden bg-white border-b-0 border-purpleS2 2xs:hidden lg:block">
        <div class="nav2 flex justify-center mx-10  items-center  ">
            {#each nav2 as nav2name}
                <a
                        class="{nav2name} w-full text-black inline border-b-4 border-white hover:border-purpleS2 p-[10px]   text-[15px] tracking-wider text-center  cursor-pointer "
                >{nav2name}</a
                >
            {/each}
        </div>
    </nav>

	

{/if}

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
