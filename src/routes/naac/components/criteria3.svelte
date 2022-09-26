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


    let criteria_3 = [

    {
        "name": "3.1.1",
        "items" : [ "3.1.1.1","3.1.1.2"],
        "link": ["https://drive.google.com/file/d/1y7iscFgiUXaWFUElh35Wvn4d3JE_2ibL/view?usp=sharing","https://drive.google.com/file/d/1viDzwxjtzF3Ig8ckGo8kLlgQ47CzkfMP/view?usp=sharing"]

    },
    {
        "name": "3.2.2",
        "items" : ["3.2.2.1","3.2.2.2","3.2.2.3","3.2.2.4","3.2.2.5" ],
        "link": ["https://drive.google.com/file/d/1viDzwxjtzF3Ig8ckGo8kLlgQ47CzkfMP/view?usp=sharing","https://drive.google.com/file/d/1VviUdxpn7lHvkuMi_uNtTNzyGA8dxAJn/view?usp=sharing","https://drive.google.com/file/d/1hef_ULe8sKzJ96abCqwAWNVzI8mOKMdA/view?usp=sharing","https://drive.google.com/file/d/13uVVomXZUQuwmTerwyr-Fj628HC2bwcA/view?usp=sharing","https://drive.google.com/file/d/1EMh4ch_-P3325yp10vh2Wt0XZEhE33rn/view?usp=sharing"]

    },
    {
        "name": "3.3.2",
        "items" : [ "3.3.2.1","3.3.2.2","3.3.2.3","3.3.2.4","3.3.2.5",],
        "link": ["https://drive.google.com/file/d/1EMh4ch_-P3325yp10vh2Wt0XZEhE33rn/view?usp=sharing","https://drive.google.com/file/d/1IdBKDR-i9Sqk6JY-rt3lksqyb80ceojL/view?usp=sharing","https://drive.google.com/file/d/1gvJD9FHBSQMQnAJoSTbtaOdaR9sZw5sG/view?usp=sharing","https://drive.google.com/file/d/1z33gUVPnqCj5aTsYKQiwvHDwmaszcSuo/view?usp=sharing","https://drive.google.com/file/d/1ZZqtwhlA8zSZBkc1D4Nv988i592FY96W/view?usp=sharing"]

    },
    {
        "name": "3.3.3",
        "items" : [ "3.3.3.1","3.3.3.2","3.3.3.3"],
        "link": ["https://drive.google.com/file/d/1hGCrMufgDixjBXdyNZkUx_Ldc-_WatXW/view?usp=sharing","https://drive.google.com/file/d/11A43VMc54PpxojFRGceEohCA0L6K76hU/view?usp=sharing","https://drive.google.com/file/d/1sRZSMSvaY1kctPTlZKNPYRbPe7ky-4-p/view?usp=sharing"]

    },
    {
        "name": "3.4.1",
        "items" : [ "3.4.1"],
        "link": ["https://drive.google.com/file/d/1cuMAfcnFHKmCfYtDgyokUOMCu7fT6tCa/view?usp=sharing"]

    },
    {
        "name": "3.4.2",
        "items" : [ "3.4.2.1","3.4.2.2","3.4.2.3","3.4.2.4","3.4.2.5",],
        "link": ["https://drive.google.com/file/d/1EZT5EzVbCiJPqt9kO2wIQwu5d753KzT1/view?usp=sharing","https://drive.google.com/file/d/115zi1LWjumZAUXx2eHO7_06SOxber5x7/view?usp=sharing","https://drive.google.com/file/d/1PGFZLMeLnKa5ofICCitN_MP26JCPnXUS/view?usp=sharing","https://drive.google.com/file/d/1PGFZLMeLnKa5ofICCitN_MP26JCPnXUS/view?usp=sharing","https://drive.google.com/file/d/12qXQXsgLItjfMR4ddNX4awo7UkAY2Epi/view?usp=sharing"]

    },
    {
        "name": "3.4.3",
        "items" : [ "3.4.3.1","3.4.3.2","3.4.3.3","3.4.3.4","3.4.3.5",],
        "link": ["https://drive.google.com/file/d/12qXQXsgLItjfMR4ddNX4awo7UkAY2Epi/view?usp=sharing","https://drive.google.com/file/d/12qXQXsgLItjfMR4ddNX4awo7UkAY2Epi/view?usp=sharing","https://drive.google.com/file/d/12qXQXsgLItjfMR4ddNX4awo7UkAY2Epi/view?usp=sharing","https://drive.google.com/file/d/12qXQXsgLItjfMR4ddNX4awo7UkAY2Epi/view?usp=sharing","https://drive.google.com/file/d/12qXQXsgLItjfMR4ddNX4awo7UkAY2Epi/view?usp=sharing"]

    },
    {
        "name": "3.4.4",
        "items" : [ "3.4.4.1","3.4.4.2","3.4.4.3","3.4.4.4","3.4.4.5",],
        "link": ["https://drive.google.com/file/d/12qXQXsgLItjfMR4ddNX4awo7UkAY2Epi/view?usp=sharing","https://drive.google.com/file/d/12qXQXsgLItjfMR4ddNX4awo7UkAY2Epi/view?usp=sharing","https://drive.google.com/file/d/12qXQXsgLItjfMR4ddNX4awo7UkAY2Epi/view?usp=sharing","https://drive.google.com/file/d/12qXQXsgLItjfMR4ddNX4awo7UkAY2Epi/view?usp=sharing","https://drive.google.com/file/d/12qXQXsgLItjfMR4ddNX4awo7UkAY2Epi/view?usp=sharing"]

    },
    {
        "name": "3.5.1",
        "items" : [ "3.5.1.1","3.5.1.2","3.5.1.3","3.5.1.4","3.5.1.5",],
        "link": ["https://drive.google.com/file/d/12qXQXsgLItjfMR4ddNX4awo7UkAY2Epi/view?usp=sharing","https://drive.google.com/file/d/12qXQXsgLItjfMR4ddNX4awo7UkAY2Epi/view?usp=sharing","https://drive.google.com/file/d/12qXQXsgLItjfMR4ddNX4awo7UkAY2Epi/view?usp=sharing","https://drive.google.com/file/d/1FJKYFcN2u_SDKgWF4NEhkA3DC2-9XVWj/view?usp=sharing","https://drive.google.com/file/d/1FJKYFcN2u_SDKgWF4NEhkA3DC2-9XVWj/view?usp=sharing"]

    },
    {
        "name": "3.5.2",
        "items" : [ "3.5.2.1","3.5.2.2","3.5.2.3","3.5.2.4","3.5.2.5",],
        "link": ["https://drive.google.com/file/d/1FJKYFcN2u_SDKgWF4NEhkA3DC2-9XVWj/view?usp=sharing","https://drive.google.com/file/d/1wdv_y17y8cxwHylcMetpC7o1e4Xm5meQ/view?usp=sharing","https://drive.google.com/file/d/1JZQymhRJu85kffUugtRT2dkmSoR2efdw/view?usp=sharing","https://drive.google.com/file/d/1G0RFGvu_Y880OKrn_XXN3yibelurpGk2/view?usp=sharing","https://drive.google.com/file/d/1reWVd45eKNaI5xLHPjP0Acz6PuQs23ET/view?usp=sharing"]

    },

    ]
</script>

<div class="flex flex-row  ">
    <div class="bg-indigo-800 hidden md:flex  rounded-2xl flex w-full flex-col md:w-auto mb-auto" >

        {#each criteria_3 as list,y}
        <div class="flex  max-w-min  rounded-2xl flex-row">
            <div class=" flex  p-3">
                <div class="cursor-pointer ] mx-2 max-h-[84px] ">
                    <button on:focusin={() => setValue(y)} on:focusout={() => setValue(y)}
                            class=" {(show[y]) ? '  text-white ' : ' bg-white text-black '} inline text-lg p-4 rounded-xl font-bold ">{list.name}</button>
                </div>
                <!--{#if show[y]}-->

                <!--{/if}-->
            </div>
            <div id="left" class="{(show[y]) ? ' hidden ' : 'block '} z-10 w-52 max-h-min absolute 3xs:left-[46%]  2xs:left-[37%] xs:left-[33%]  rounded-md bg-sortwhite  ">
                {#each list.items as sublist, i}
                    <a id={y} href={list.link[i]}
                       class="{(show[y]) ? ' hidden ' : 'block '} text-black text-center p-4 pl-6 text-xl  font-semibold">{sublist}</a>
                {/each}
            </div>
        </div>
        {/each}
    </div>
    <div class=" md:hidden mb-auto main flex flex-col bg-indigo-800 max-w-min  max-h-min  rounded-2xl">

        {#each criteria_3 as list,y}
            <div class="flex  max-w-min  rounded-2xl flex-row">
                <div class=" flex  p-3">
                    <div class="cursor-pointer ] mx-2 max-h-[84px] ">
                        <button on:focusin={() => setValue(y)} on:focusout={() => setValue(y)}
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