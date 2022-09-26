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


    let criteria_6 = [

    {
        "name": "6.2.1",
        "items" : [ "6.2.1.1"],
        "link": ["https://drive.google.com/file/d/1xlalbulV7CBGudKgwINJ8v6bHEEYFTlK/view?usp=sharing"]

    },
    {
        "name": "6.2.2",
        "items" : [ "6.2.2.1"],
        "link": ["https://drive.google.com/file/d/1jaS7NgdWXXfRJ8Ux0LAmQVbmDSCWz6Kj/view?usp=sharing"]

    },
    {
        "name": "6.2.3",
        "items" : ["6.2.3.1","6.2.3.2","6.2.3.3", ],
        "link": ["https://drive.google.com/file/d/1SM5XehcyRlN2FEiyheMa0Jh61zu2Kl1n/view?usp=sharing","https://drive.google.com/file/d/1bf0ljWL6El1jwQn71e-RpRKl2yjlcERe/view?usp=sharing","https://drive.google.com/file/d/1Rxw769J0m2cHHKWOV2DBWnjBxO6IbvdP/view?usp=sharing","https://drive.google.com/file/d/1Rxw769J0m2cHHKWOV2DBWnjBxO6IbvdP/view?usp=sharing"]

    },
    {
        "name": "6.3.1",
        "items" : ["6.3.1" ],
        "link": ["https://drive.google.com/file/d/17dWumCGGB3-8OzB4_fwdEEK4tFm2r4Mj/view?usp=sharing"]

    },
    {
        "name": "6.3.2",
        "items" : ["6.3.2.1","6.3.2.2","6.3.2.3","6.3.2.4","6.3.2.5","6.3.2.6","6.3.2.7"],
        "link": ["https://drive.google.com/file/d/1brdaahBFjgITF8e33KsQqq_ufwK94XDo/view?usp=sharing","https://drive.google.com/file/d/1U8sH3Sx_f-gEHN3PrNhvQd65BKyaOK7I/view?usp=sharing","https://drive.google.com/file/d/1b2bJTemKskX24TzpS0jQGeKhH8ss1r9T/view?usp=sharing","https://drive.google.com/file/d/1hBfs2SXkTGIKViH1mE4WR2mJa1mLHeuL/view?usp=sharing","https://drive.google.com/file/d/1KrcLormfxW81KI76R6BNQFpZc1wBBKB7/view?usp=sharing","https://drive.google.com/file/d/1iHRoH5Lc0jsQ9EiOMdHPZR9PacCGeu5T/view?usp=sharing","https://drive.google.com/file/d/1RqSDblQkw-Wcru47uuyaWMn-JsKR_AWK/view?usp=sharing"]

    },
    {
        "name": "6.3.3",
        "items" : ["6.3.3","6.3.3.1","6.3.3.2","6.3.3.3","6.3.3.4","6.3.3.5"],
        "link": ["https://drive.google.com/file/d/15UWHP4If7xhORn_JxvU2YHD82UyXXZ6w/view?usp=sharing","https://drive.google.com/file/d/1NBAXRNd6pana5IfN_sN5jr8XAA62oLU7/view?usp=sharing","https://drive.google.com/file/d/17GXFes-EvrI5geWbbnzrADSAxeoWYpxK/view?usp=sharing","https://drive.google.com/file/d/1bWs5wqdl59oe9zARHx5ErOSlVuMI9Rxe/view?usp=sharing","https://drive.google.com/file/d/17iU5JqTIu8wbtVEZY_HOf6UHrKW4Mx00/view?usp=sharing"]

    },
    {
        "name": "6.3.4",
        "items" : ["6.3.4","6.3.4.1","6.3.4.2","6.3.4.3","6.3.4.4","6.3.4.5"],
        "link": ["https://drive.google.com/file/d/17iU5JqTIu8wbtVEZY_HOf6UHrKW4Mx00/view?usp=sharing","https://drive.google.com/file/d/17iU5JqTIu8wbtVEZY_HOf6UHrKW4Mx00/view?usp=sharing","https://drive.google.com/file/d/16akR7qbOg5jNmSN4m-jYNzQbiDWRq8p-/view?usp=sharing","https://drive.google.com/file/d/16akR7qbOg5jNmSN4m-jYNzQbiDWRq8p-/view?usp=sharing","https://drive.google.com/file/d/16akR7qbOg5jNmSN4m-jYNzQbiDWRq8p-/view?usp=sharing","https://drive.google.com/file/d/1jCIQqV_G82S0K2gLnSh2597s4JQ7esvN/view?usp=sharing"]

    },
    {
        "name": "6.4.1",
        "items" : ["6.4.1" ],
        "link": ["https://drive.google.com/file/d/1jCIQqV_G82S0K2gLnSh2597s4JQ7esvN/view?usp=sharing"]

    },
    {
        "name": "6.5.3",
        "items" : ["6.5.3.1","6.5.3.2","6.5.3.3"],
        "link": ["https://drive.google.com/file/d/1gf3UYS-9Rg6jd6Q1qqNS04Z5gOXhD4Jw/view?usp=sharing","https://drive.google.com/file/d/1gf3UYS-9Rg6jd6Q1qqNS04Z5gOXhD4Jw/view?usp=sharing","https://drive.google.com/file/d/1GwID9JL6qJ9AyYtbW6vz3TQJcYQ2LgXi/view?usp=sharing"]

    },
    ]
</script>

<div class="flex flex-row  ">
    <div class="bg-indigo-800 hidden md:flex  rounded-2xl flex w-full flex-col md:w-auto mb-auto" >

        {#each criteria_6 as list,y}
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

        {#each criteria_6 as list,y}
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