<script>
    let nav2 = ['BITS Login', 'ARIIA', 'NRIF', 'AICTE', 'Admission', 'Alumni', 'Downloads', 'Placements', 'Instagram'];
    import { NavItems} from './navItem.js'
    function handleClick() {
        alert('clicked')
    }
</script>


<nav class=" pl-3 h-20 mt-[20px]  flex flex-row justify-between align-middle content-center items-center  bg-white border-b-4 border-black">
    <div class="flex flex-row items-center ">
        <img src="/logo.svg" class="inline w-[60px] h-[60] "  alt="">
    </div>

    <div id="nav1" class="nav1 mr-5 h-20 flex flex-row items-center ">
        {#each $NavItems as navName, index}
            <div class="p-0">
                <div class="dropdown inline-block relative">
                    <button class=" text-purpleS1 font-bold py-2 px-4 rounded inline-flex items-center hover:bg-purpleS2 hover:text-white">
                        <span class="mr-1">{navName.name}</span>{#if navName.items.length>0 }
                        <svg class="fill-current h-4 w-4 logo-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                    {/if}</button>
                    {#if navName.items.length>0 }
                        <ul class="dropdown-menu absolute rounded-md hidden border-2 border-purpleS1 text-purpleS2 pl-0">
                            {#each navName.items as item,i}
                                <li class="text-white border-b-2 border-purpleS3"><a class=" bg-purpleS1 hover:underline underline-offset-1 py-2 px-4 block text-white" href="#">{item}</a></li>
                            {/each}
                        </ul>
                    {/if}
                </div>

            </div>
        {/each}

    </div>
    <button class="openbtn hidden" on:click={handleClick}>☰</button>

</nav>

<nav class=" bg-slate-800 border-b-4 border-white">
    <div class="nav2 flex justify-center mx-10 items-center">
        {#each nav2 as nav2name}
            <a class="{nav2name} w-full text-white inline p-[10px] font-extrabold hover:underline underline-offset-8 text-[20px] tracking-wider text-center  cursor-pointer ">{nav2name}</a>
        {/each}
    </div>
</nav>

<video playsinline autoplay muted loop>
    <source src="/baba2.mp4" type="video/mp4">
</video>


<div id="overlay">
    <img src="/sq.svg" class=" w-auto h-96" alt="">
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