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


    let criteria_7 = [

    {
        "name": "7.1.2",
        "items" : [ "7.1.2.1","7.1.2.2","7.1.2.3","7.1.2.4"],
        "link": ["https://drive.google.com/file/d/1Rq7xKaGnIYAmN4KSsWl_70gs0Zu0Dvix/view?usp=sharing","https://drive.google.com/file/d/1gkktFF6XN6k8hahW6TKTjgjtAWvPFXKa/view?usp=sharing","https://drive.google.com/file/d/1ubnBD6OU26g6xrZ6NeSXhqSa-x5-_6d3/view?usp=sharing","https://drive.google.com/file/d/1Ml-N3wDnCwDA8niBDGDCxeWF2LYPIq4w/view?usp=sharing"]

    },
    {
        "name": "7.1.4",
        "items" : [ "7.1.4.1","7.1.4.2","7.1.4.3","7.1.4.4"],
        "link": ["https://drive.google.com/file/d/1qEfckrylLNqB7ZghUTVAAWnhogDxKSlg/view?usp=sharing","https://drive.google.com/file/d/1L1EXBHt2Gz0VBUkmCBrZ33GBL1cqxYoM/view?usp=sharing","https://drive.google.com/file/d/1E9kbisp8ox089v-RKKLNiJLYLS7VBwwo/view?usp=sharing","https://drive.google.com/file/d/1yWsiUxuFeQf1_RP3IRoKe_35BiQsrT3X/view?usp=sharing"]

    },
    {
        "name": "7.1.5",
        "items" : [ "7.1.5.1","7.1.5.2","7.1.5.3","7.1.5.4","7.1.5.6"],
        "link": ["https://drive.google.com/file/d/1GneWnHS8JmOruB-vgR3-HiJD0UATQ2Nt/view?usp=sharing","https://drive.google.com/file/d/1NHrQVsXlK2SdGKzhghSA2InIw1h_vJ0_/view?usp=sharing","https://drive.google.com/file/d/1NHrQVsXlK2SdGKzhghSA2InIw1h_vJ0_/view?usp=sharing","https://drive.google.com/file/d/1mMNT6ou7IyCfxzNR4e6ubOtefTZNg1Qx/view?usp=sharing","https://drive.google.com/file/d/1mMNT6ou7IyCfxzNR4e6ubOtefTZNg1Qx/view?usp=sharing"]

    },
    {
        "name": "7.1.6",
        "items" : [ "7.1.6.1","7.1.6.2","7.1.6.3","7.1.6.4","7.1.6.5","7.1.6.6"],
        "link": ["https://drive.google.com/file/d/1SdydM2He0i22On2pDJTJg4Fx1k7_7rpS/view?usp=sharing","https://drive.google.com/file/d/1Hf5OmFziaZ9sQPkXnHa5bgEgN16ONIhF/view?usp=sharing","https://drive.google.com/file/d/1w4c1U5kcxbhzB5Ovm5N_iuzPxRaWPQPn/view?usp=sharing","https://drive.google.com/file/d/1xCh6ujrSkKMSuC-pveFo1Zh0b2J1k7ee/view?usp=sharing","https://drive.google.com/file/d/1g48UV82OBsUzq4oOda5J5iJqN-Q2q_Qk/view?usp=sharing","https://drive.google.com/file/d/1Uq9gO-WWrSH-drQZ1BsHMfwgtmQw6BpH/view?usp=sharing"]

    },
    {
        "name": "7.1.7",
        "items" : [ "7.1.7.1","7.1.7.2","7.1.7.3","7.1.7.4","7.1.7.5"],
        "link": ["https://drive.google.com/file/d/1M7K8ZCoQcem29IRgslLf1c5KhlJYAYa1/view?usp=sharing","https://drive.google.com/file/d/1J4FM45Zi0WuZqybLKVg_rAo9doHfhBpF/view?usp=sharing","https://drive.google.com/file/d/19nIUJk92nEif49lM8fs82rWRm1A4ICHP/view?usp=sharing","https://drive.google.com/file/d/19nIUJk92nEif49lM8fs82rWRm1A4ICHP/view?usp=sharing","https://drive.google.com/file/d/10dmz9RK6Znwk8j2DV3M5XwjQrUmo_p_x/view?usp=sharing"]

    },
    {
        "name": "7.1.10",
        "items" : [ "7.1.10.1"],
        "link": ["https://drive.google.com/file/d/1J_-0ufMVEv4o0WKUtDTBtSHKZlE7nEqS/view?usp=sharing"]

    },
    ]
</script>

<div class="flex flex-row  ">
    <div class="bg-indigo-800 hidden md:flex  rounded-2xl flex w-full flex-col md:w-auto" >
        {#each criteria_7 as list,y}
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
    <div class=" md:hidden mb-auto main flex flex-col bg-indigo-800 max-w-min  max-h-min  rounded-2xl">

        {#each criteria_7 as list,y}
            <div class="flex  max-w-min  rounded-2xl flex-row">
                <div class=" flex  p-3">
                    <div class="cursor-pointer ] mx-2 max-h-[84px] ">
                        <button on:click={() => setValue(y)}
                                class=" {(show[y]) ? '  text-white ' : ' bg-white text-black'} inline text-lg p-4 rounded-xl font-bold">{list.name}</button>
                    </div>
                    <!--{#if show[y]}-->

                    <!--{/if}-->
                </div>
                <div id="left" class="{(show[y]) ? ' hidden ' : 'block '} z-10 w-[50%] max-h-min absolute 3xs:left-[46%]  2xs:left-[37%] xs:left-[33%]  rounded-md bg-sortwhite  ">
                    {#each list.items as sublist, i}
                        <a id={y} href={list.link[i]}
                           class="{(show[y]) ? ' hidden ' : 'block '} text-black text-center p-4 pl-6 text-xl  font-semibold">{sublist}</a>
                    {/each}
                </div>
            </div>
        {/each}
    </div>
    <div class=" md:flex-col text-center w-full m-4  md:flex">
        <img src="./naaclogo.png" class=" ">
        <p class="font-semibold text-justify 3xs:text-sm xs:text-base ">India has one of the largest and diverse education systems in the world. Privatization, widespread expansion, increased autonomy and introduction of Programmes in new and emerging areas have improved access to higher education. At the same time, it has also led to widespread concern on the quality and relevance of the higher education. To address these concerns, the National Policy on Education (NPE, 1986) and the Programme of Action (PoA, 1992) spelt out strategic plans for the policies, advocated the establishment of an independent National accreditation agency. Consequently, the National Assessment and Accreditation Council (NAAC) was established in 1994 as an autonomous institution of the University Grants Commission (UGC) with its Head Quarter in Bengaluru. The mandate of NAAC as reflected in its vision statement is in making quality assurance an integral part of the functioning of Higher Education Institutions (HEIs).<br><br><br>
            The NAAC functions through its General Council (GC) and Executive Committee (EC) comprising educational administrators, policy makers and senior academicians from a cross-section of Indian higher education system. The Chairperson of the UGC is the President of the GC of the NAAC, the Chairperson of the EC is an eminent academician nominated by the President of GC (NAAC). The Director is the academic and administrative head of NAAC and is the member-secretary of both the GC and the EC. In addition to the statutory bodies that steer its policies and core staff to support its activities NAAC is advised by the advisory and consultative committees constituted from time to time.</p>
    </div>
</div>
<style>
#left{
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
</style>