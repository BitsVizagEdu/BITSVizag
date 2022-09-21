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


    let criteria_2 = [

    {
        "name": "2.1.1",
        "items" : [ "2.1.1.1","2.1.1.2","2.1.1.3","2.1.1.4","2.1.1.5","2.1.1.6"],
        "link": ["https://drive.google.com/file/d/16HyJbCKicKJLi9EF3xN3HSDJLPp1txUa/view?usp=sharing","https://drive.google.com/file/d/1K3FW_Hhh52ikCJf1q4IRl2An780lJALQ/view?usp=sharing","https://drive.google.com/file/d/1K3FW_Hhh52ikCJf1q4IRl2An780lJALQ/view?usp=sharing","https://drive.google.com/file/d/1hL_yPsTe0OkESrWWX-YQDNTlPmLiJz6_/view?usp=sharing","https://drive.google.com/file/d/1hL_yPsTe0OkESrWWX-YQDNTlPmLiJz6_/view?usp=sharing","https://drive.google.com/file/d/1Y0_EX6-mpk74nyl0gJz6PUYKrUEslyMv/view?usp=sharing"]

    },
    {
        "name": "2.1.2",
        "items" : [ "2.1.2.1","2.1.2.2","2.1.2.3","2.1.2.4","2.1.2.5","2.1.2.6","2.1.2.7"],
        "link": ["https://drive.google.com/file/d/1gdqMg5or_fa5EQoLFyk2Mg0P44UivmBQ/view?usp=sharing","https://drive.google.com/file/d/1APFy9K5NWT1OdU62GjcCau6h239zWaBU/view?usp=sharing","https://drive.google.com/file/d/1vC2H93DXChDfxjzoFaADX5HqsXJNWPUS/view?usp=sharing","https://drive.google.com/file/d/1lgjZaf2mdtPT1PHBuA9bb8CeqDX9axuX/view?usp=sharing","https://drive.google.com/file/d/1IF4Kz2dekkQ976FlpJhaOEkuI-28QEyQ/view?usp=sharing","https://drive.google.com/file/d/1HLNZLVj8xK6T_dl-c2S_EOg0WltR8CN1/view?usp=sharing","https://drive.google.com/file/d/1bPVbLvpK-uMfKNY9np1sQxGVjAOk6iFt/view?usp=sharing"]

    },
    {
        "name": "2.2.2",
        "items" : [ "2.2.2.1","2.2.2.2"],
        "link": ["https://drive.google.com/file/d/1AOwnKwPYyLb9n2x0X2NfUi-_X76D1EpD/view?usp=sharing","https://drive.google.com/file/d/13xQ97PO5rfL2WYj0-LdVUkedOQPDwasv/view?usp=sharing"]

    },
    {
        "name": "2.3.3",
        "items" : [ "2.3.3.1","2.3.3.2","2.3.3.3","2.3.3.4","2.3.3.5",],
        "link": ["https://drive.google.com/file/d/1xEV4s3bLlXx5aUhlgexyNxa8IAPiVkxS/view?usp=sharing","https://drive.google.com/file/d/1HXPlnt2QkqoQeSVmgNwStUXZhwLhj7e0/view?usp=sharing","https://drive.google.com/file/d/1t0nKutCMh4XUMyNftuGxahMbqI2hvrXa/view?usp=sharing","https://drive.google.com/file/d/1t0nKutCMh4XUMyNftuGxahMbqI2hvrXa/view?usp=sharing","https://drive.google.com/file/d/1XHbsGEyCl87lZ-sMDs8Y5301a0O-hIBr/view?usp=sharing"]

    },
    {
        "name": "2.4.1",
        "items" : [ "2.4.1.1","2.4.1.2","2.4.1.3","2.4.1.4","2.4.1.5","2.4.1.6"],
        "link": ["https://drive.google.com/file/d/1XHbsGEyCl87lZ-sMDs8Y5301a0O-hIBr/view?usp=sharing","https://drive.google.com/file/d/1XHbsGEyCl87lZ-sMDs8Y5301a0O-hIBr/view?usp=sharing","https://drive.google.com/file/d/1obeYisSsKgzcJQbeIaQQoVvWF_dxKXkh/view?usp=sharing","https://drive.google.com/file/d/1GxPeFK_S92_rhZsv0xP0XfuILMOYQnUR/view?usp=sharing","https://drive.google.com/file/d/17qvj02KC7nplosAI-3ODDUBxz-AG0-3h/view?usp=sharing","https://drive.google.com/file/d/1jKFYfY5P3LxaeHi9nLcsXFCrszxLsv5K/view?usp=sharing"]

    },
    {
        "name": "2.4.2",
        "items" : [ "2.4.2.1","2.4.2.2","2.4.2.3","2.4.2.4","2.4.2.5"],
        "link": ["https://drive.google.com/file/d/114XTKcw1KnBe5lkug2IRcRXNTiOYERjK/view?usp=sharing","https://drive.google.com/file/d/1hq--fnUuGsWIgeq2j1dlFR0hrqQtKljX/view?usp=sharing","https://drive.google.com/file/d/1obeYisSsKgzcJQbeIaQQoVvWF_dxKXkh/view?usp=sharing","https://drive.google.com/file/d/1GxPeFK_S92_rhZsv0xP0XfuILMOYQnUR/view?usp=sharing","https://drive.google.com/file/d/1GxPeFK_S92_rhZsv0xP0XfuILMOYQnUR/view?usp=sharing"]

    },
    {
        "name": "2.6.3",
        "items" : [ "2.6.3.1","2.6.3.2","2.6.3.3","2.6.3.4","2.6.3.5",],
        "link": ["https://drive.google.com/file/d/1oo9OIICR9Hb2riGFFvzrLXPG0gmRDCHX/view?usp=sharing","https://drive.google.com/file/d/1K-5Y5DT6bjjJLDk1NHzkcT2aDNBtgcip/view?usp=sharing","https://drive.google.com/file/d/10ArjDHfgep0yfyT1Di0zVxIliozuNhwh/view?usp=sharing","https://drive.google.com/file/d/1rlhjrWx5yBCCN9fbwUoHoh86ry5XI9hR/view?usp=sharing","https://drive.google.com/file/d/1rlhjrWx5yBCCN9fbwUoHoh86ry5XI9hR/view?usp=sharing"]

    },


    ]
</script>


<div class="flex flex-row w-full">
<div class="bg-indigo-800  rounded-2xl flex w-full flex-col md:w-auto mb-auto">
    {#each criteria_2 as list,y}
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