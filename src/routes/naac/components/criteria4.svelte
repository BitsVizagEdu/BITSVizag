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


    let criteria_4 = [

    {
        "name": "4.1.1",
        "items" : [ "4.1.1.1"],
        "link": ["https://drive.google.com/file/d/1gn7XHtDqyFJmooVwCru2B_AIGoNugfqi/view?usp=sharing"]

    },
    {
        "name": "4.1.2",
        "items" : ["4.1.2.1" ],
        "link": ["https://drive.google.com/file/d/1xVWL3aJPKUlfcvwh1mkaY6FBKvhvsbCI/view?usp=sharing"]

    },
    {
        "name": "4.1.3",
        "items" : ["4.1.3" ],
        "link": ["https://drive.google.com/file/d/1bJdFOJa2B1bAcHxoNl6ltcpfTB8QcWU_/view?usp=sharing"]

    },
    {
        "name": "4.2.2.1",
        "items" : ["4.2.2.1","4.2.2.2","4.2.2.3","4.2.2.4","4.2.2.5" ],
        "link": ["https://drive.google.com/file/d/1L1pihkeyNoOSjRSZ3x3g4lDJpe1fo2DV/view?usp=sharing","https://drive.google.com/file/d/127lnLq1AzPaRkDWsZhpK-Pat2acEjkVl/view?usp=sharing","https://drive.google.com/file/d/1GQu892wXxwxJ_6_4lCf2q2-Se3ywHHZP/view?usp=sharing","https://drive.google.com/file/d/1-dojFSO-qqJ9pTQSDitPYvFvBDVXn8tp/view?usp=sharing","https://drive.google.com/file/d/11VVRp_CL5vL-3X6j0oL74y0ZDB_KTJSP/view?usp=sharing"]

    },
    ]
</script>

<div class="flex flex-row w-full">
<div class="bg-indigo-800  rounded-2xl flex w-full flex-col md:w-auto mb-auto">
    {#each criteria_4 as list,y}
    <div class=" flex flex-col p-3 items-center justify-center">
        <div class="flex cursor-pointer  w-64 items-center justify-center  pb-2 ">
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