<script>
    import {
        setActiveTabValue,
        showNavBar,
        showNavBar2,
        toggleIsActiveTab,
        toggleNavBar,
        toggleNavBar2
    } from '../stores/store.js';
    import Nav from '$lib/components/navmenu.svelte';
    import {NavItems} from './navItem.js';
    import {replaceHyphenWithSpace} from "../../routes/aboutus/[slug]/components/utils.js";

    let nav3 = [
        {
            name: "Staff",
            link: "/staff"
        },
        {
            name: "AICTE",
            link: "/aicte"
        },
        {
            name: "Alumni",
            link: "/alumni"
        },
        {
            name: "Downloads",
            link: "/downloads"
        },
        {
            name: "Placements",
            link: "/placements"
        },
        {
            name: "Instagram",
            link: "https://www.instagram.com/bits_vizag_official/"
        }
    ]

    let nav2 = ['Staff', 'AICTE', 'Admission', 'Alumni', 'Downloads', 'Placements', 'Instagram'];
    function onClick(item){
        toggleIsActiveTab(true)
        setActiveTabValue(item)
    }
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
                            src="/naac.png"
                            alt="circle"
                            height="150px"
                            width="150px"
                    />
                </div>
            </div>
            <div class="flex flex-row justify-center items-center">
                
                <div class="flex flex-col justify-center items-center text-center">
                    <h1
                            class="text-4xl 3xs:text-[11px] 2xs:text-[13px] xs:text-[15px] leading-6 xl:text-3xl md:text-[19px] lg:text-xl font-bold text-white item-center tracking-wider justify-center text-center md:px-[10px] "
                    >
                        BABA INSTITUTE OF TECHNOLOGY AND SCIENCES
                    </h1>

                    <div class="mt-1">
                        <h6
                                class="text-center text-xl 3xs:text-[6.5px] 2xs:text-[7.5px] xs:text-[9.5px] leading-3 xl:text-lg lg:text-sm md:text-[12px] text-white"
                        >
                            ( Accredited by NAAC | Approved by AICTE,New Delhi | Affiliated to JNTU-Kakinada,GV )<br
                        />(An ISO 9001:2015 Certified Educational Institution)
                        <p class="text-yellow-400 font-semibold uppercase text-xl">College Code :Baba</p>
                        </h6>
                    </div>
                </div>
            </div>
            <div
                    class="flex flex-col xs:hidden md:flex 3xs:hidden justify-center xs:scale-[0.8] md:scale-[1] items-center "
            >
                <div class="flex flex-col justify-center items-center 2xs:w-28">
                    <img id="bits" class="bg-white rounded-full p-1 md:hidden" src="/bits.jpg" alt="circle"/>
                </div>
            </div>
        </div>
    </div>
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
