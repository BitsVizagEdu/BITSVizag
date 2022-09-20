<script>

   let show = ["false","false","false","false","false","false","false","false","false","false"]

   function setValue(y){
       if (!show[y]){
           show = ["false","false","false","false","false","false","false","false","false","false"]
           console.log("hello")
       }
       else{
           show = ["false","false","false","false","false","false","false","false","false","false"]
           show[y] = !show[y]
           console.log("hi")
       }

       console.log(show[y])
   }

    let criteria_1 = [

    {
        "name": "1.1.1",
        "items" : [ "1.1.1"],
        "link": ["https://drive.google.com/file/d/1dSYbEc4gKZiEwCd6VQBfKUJLkaO4vi3m/view?usp=sharing"]

    },
    {
        "name": "1.1.2",
        "items" : [ "1.1.2.2"],
        "link": ["https://drive.google.com/file/d/1NL19prvnP77eDYBxYDsh6xSgv9WDQman/view?usp=sharing"]

    },
    {
        "name": "1.1.3",
        "items" : [ "1.1.3.2","1.1.3.3","1.1.3.4"],
        "link": ["https://drive.google.com/file/d/1RA2O6pxLg4gcN8fbuNB3qWWd6DWQPnpb/view?usp=sharing","https://drive.google.com/file/d/1DRzbCcaIxlf9oGBxRwAYq_AH4hGim82D/view?usp=sharing","https://drive.google.com/file/d/1B5ACAVVAGFVDgm7MIJCxI9qr3Di_EpOM/view?usp=sharing"]

    },
    {
        "name": "1.2.1",
        "items" : [ "1.2.1.1","1.2.1.2",],
        "link": ["https://drive.google.com/file/d/1aEwbFA9I-QVjkDysutoSvweUdxBOZ52o/view?usp=sharing","https://drive.google.com/file/d/1P4lALDeWHwLIVb89-qIdXAclMrrmHE48/view?usp=sharing"]

    },
    {
        "name": "1.2.2",
        "items" : [ "1.2.2.1","1.2.2.2","1.2.2.3","1.2.2.4","1.2.2.5"],
        "link": ["https://drive.google.com/file/d/1cborY20RHqcr5Uz7Ee296GSdhbkGdHNs/view?usp=sharing","https://drive.google.com/file/d/1Hk9AASVlW-jvO8a18bf4JDRVKOdtgx7L/view?usp=sharing","https://drive.google.com/file/d/10mM4JgVK0lSC5YdZIYx31WDslaQcEDGL/view?usp=sharing","https://drive.google.com/file/d/19GXij08ztPyPOeq4iBb0SXqESXsv4fs1/view?usp=sharing","https://drive.google.com/file/d/1ZAFvqsoKOsR1j933jyccyJFk6MRzIMeu/view?usp=sharing"]

    },
    {
        "name": "1.2.3",
        "items" : [ "1.2.3.1","1.2.3.2","1.2.3.3","1.2.3.4","1.2.3.5"],
        "link": ["https://drive.google.com/file/d/1QEkaXoKBrUpG98z7cSJIRrJcSPiTjDVZ/view?usp=sharing","https://drive.google.com/file/d/133cFTwLfsx3jmcYF-TrMWfvtW8NQo4bJ/view?usp=sharing","https://drive.google.com/file/d/1LfkTO4XQCe7tt0yS6ZPEnx3VHb58rZ5j/view?usp=sharing","https://drive.google.com/file/d/1LfkTO4XQCe7tt0yS6ZPEnx3VHb58rZ5j/view?usp=sharing","https://drive.google.com/file/d/1Ie0Sj_X9B7Bz246as_kA4CpKCsPxc9XB/view?usp=sharing"]

    },
    {
        "name": "1.3.1",
        "items" : [ "1.3.1",],
        "link": ["https://drive.google.com/file/d/1K7fQNwkQQnU3X9O0QEwUo7Zrv1mKqSa7/view?usp=sharing"]

    },
    {
        "name": "1.3.2",
        "items" : [ "1.3.2"],
        "link": ["https://drive.google.com/file/d/1WiK47LKUi3nayINHfeJhfezZDrWkGbBi/view?usp=sharing"]

    },
    {
        "name": "1.3.3",
        "items" : [ "1.3.3.1","1.3.3.2","1.3.3.3",],
        "link": ["https://drive.google.com/file/d/1NxzBvyOipMPME4vOXDEw2ckKFSPHkjKz/view?usp=sharing","https://drive.google.com/file/d/1j46WpI-YpfyU7Lsr2c_XVRck75GDeVJ-/view?usp=sharing","https://drive.google.com/file/d/1Pimey-8rKQl0h7vPwLbBCZaQwleX-H7N/view?usp=sharing"]

    },
    {
        "name": "1.4.2",
        "items" : [ "1.4.2_CE","1.4.2_CSE","1.4.2_ECE","1.4.2_EEE","1.4.2_ME","1.4.2_MBA"],
        "link": ["https://drive.google.com/file/d/1RNbNuqXct89OyschM2XxPGfAzXz5XFsE/view?usp=sharing","https://drive.google.com/file/d/1xQoQrNNRRwpKQaaAgWGZB_YTLtW7aDyU/view?usp=sharing","https://drive.google.com/file/d/1ejkJLjAtKY0VN4o6JGwisgitslAo9fOx/view?usp=sharing","https://drive.google.com/file/d/1fOz7TKQKsZWXCdDzP5LMAisXddzNmCwP/view?usp=sharing","https://drive.google.com/file/d/1gyYE1HzdR8jN0CrJYTK6mhZ7EvU80H6S/view?usp=sharing","https://drive.google.com/file/d/1ycr6HgPIznzA4kewfuCkki69oAY1xsOV/view?usp=sharing"]

    },

    ]
</script>
<div class="flex flex-row w-full">
<div class="bg-indigo-800  rounded-2xl flex w-full flex-col md:w-auto">
    {#each criteria_1 as list,y}
    <div class=" flex flex-col p-3 items-center justify-center">
        <div class="flex cursor-pointer  w-64 items-center justify-center  pb-2">
        <button on:click={() => setValue(y)} class=" w-96 {(show[y]) ? '  text-white ' : ' bg-slate-800 text-white'} inline text-lg p-4 rounded-xl font-extrabold items-center justify-center">{list.name}</button>
        </div>
        <!--{#if show[y]}-->
        <div class="{(show[y]) ? ' hidden ' : 'block '}  w-64 rounded-xl bg-white items-center justify-center">
        {#each list.items as sublist, i}
        <a id={y} href={list.link[i]} class="{(show[y]) ? ' hidden ' : 'block '} text-black text-center p-4 pl-6 text-xl">{sublist}</a>
        {/each}
        </div>
        <!--{/if}-->
    </div>
    {/each}
</div>
<div class=" md:flex-col text-center w-full m-4 hidden md:flex">
    <img src="./naaclogo.png">
    <p class="font-semibold text-justify text-base">India has one of the largest and diverse education systems in the world. Privatization, widespread expansion, increased autonomy and introduction of Programmes in new and emerging areas have improved access to higher education. At the same time, it has also led to widespread concern on the quality and relevance of the higher education. To address these concerns, the National Policy on Education (NPE, 1986) and the Programme of Action (PoA, 1992) spelt out strategic plans for the policies, advocated the establishment of an independent National accreditation agency. Consequently, the National Assessment and Accreditation Council (NAAC) was established in 1994 as an autonomous institution of the University Grants Commission (UGC) with its Head Quarter in Bengaluru. The mandate of NAAC as reflected in its vision statement is in making quality assurance an integral part of the functioning of Higher Education Institutions (HEIs).<br><br><br> 
                                        The NAAC functions through its General Council (GC) and Executive Committee (EC) comprising educational administrators, policy makers and senior academicians from a cross-section of Indian higher education system. The Chairperson of the UGC is the President of the GC of the NAAC, the Chairperson of the EC is an eminent academician nominated by the President of GC (NAAC). The Director is the academic and administrative head of NAAC and is the member-secretary of both the GC and the EC. In addition to the statutory bodies that steer its policies and core staff to support its activities NAAC is advised by the advisory and consultative committees constituted from time to time.</p>
</div>
</div>