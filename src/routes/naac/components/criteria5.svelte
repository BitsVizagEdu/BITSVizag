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


    let criteria_5 = [

    {
        "name": "5.1.1",
        "items" : [ "5.1.1.1","5.1.1.2","5.1.1.3","5.1.1.4","5.1.1.5","5.1.1.6",],
        "link": ["https://drive.google.com/file/d/11VVRp_CL5vL-3X6j0oL74y0ZDB_KTJSP/view?usp=sharing","https://drive.google.com/file/d/1sIbUCAev-GPillZ6uqn8bTCqj8W6ODGR/view?usp=sharing","https://drive.google.com/file/d/1TOf0OZdKTB7WfkAP2G1oLGTAblfuJCZ4/view?usp=sharing","https://drive.google.com/file/d/1x0upAsic2dNmShYARHVJCzN94OLUssC6/view?usp=sharing","https://drive.google.com/file/d/1IuWT-yECWBh4OV5BvY8DjmQ7NIeN6jon/view?usp=sharing","https://drive.google.com/file/d/1pJQFhPwpGHzMF70QyIvd3d39fUc-mpPo/view?usp=sharing"]

    },
    {
        "name": "5.1.3",
        "items" : [ "5.1.3.1","5.1.3.2","5.1.3.3","5.1.3.4",],
        "link": ["https://drive.google.com/file/d/1GL-X_CNb-dC4BY6Qv78D4rQftRq9MkVY/view?usp=sharing","https://drive.google.com/file/d/1xm6BFaAJh1Du8p2uQD3hxMFq54E4__lV/view?usp=sharing","https://drive.google.com/file/d/1a0hbqAN0DXxZeRvwVNh5inm46d4Iauq9/view?usp=sharing","https://drive.google.com/file/d/1iaqNoCshuj7AvnnoXLd1IhnP8RK7VB_M/view?usp=sharing"]

    },
    {
        "name": "5.1.4",
        "items" : [ "5.1.4.1","5.1.4.2",],
        "link": ["https://drive.google.com/file/d/1iaqNoCshuj7AvnnoXLd1IhnP8RK7VB_M/view?usp=sharing","https://drive.google.com/file/d/1iaqNoCshuj7AvnnoXLd1IhnP8RK7VB_M/view?usp=sharing"]

    },
    {
        "name": "5.1.5",
        "items" : ["5.1.5.1","5.1.5.2","5.1.5.3","5.1.5.4","5.1.5.5","5.1.5.6", ],
        "link": ["https://drive.google.com/file/d/1wvvY99fotOuet3djWMkWvTsxpsAG57x4/view?usp=sharing","https://drive.google.com/file/d/1q0gTzTj1r9EEPpQthajH2dbngIGNsfyH/view?usp=sharing","https://drive.google.com/file/d/1I2YFbr5V42MooKcBTtwS-BU5kI-Ayhi9/view?usp=sharing","https://drive.google.com/file/d/1N7G7TXt9HAhT_BfpwIyuDtdwSYQk6jSl/view?usp=sharing","https://drive.google.com/file/d/1Xqb614C00HMl5HR2t2_ODCUyhRu0j8Ie/view?usp=sharing","https://drive.google.com/file/d/1aAfC4mmau6WZE1XCbBxk9yydcUvHnja-/view?usp=sharing"]

    },
    {
        "name": "5.2.1",
        "items" : ["5.2.1.1","5.2.1.2","5.2.1.3","5.2.1.4","5.2.1.5"],
        "link": ["https://drive.google.com/file/d/1Ft-xVJjm69Ss8FrLyMUPkul_kquKTFu3/view?usp=sharing","https://drive.google.com/file/d/15hBsFwEvG2SvUp0qcL73pQTXDd6bHBFj/view?usp=sharing","https://drive.google.com/file/d/15hBsFwEvG2SvUp0qcL73pQTXDd6bHBFj/view?usp=sharing","https://drive.google.com/file/d/1NB2WyQiB3I1GCgxy0xiGh1NFlP9CHVJv/view?usp=sharing","https://drive.google.com/file/d/1NB2WyQiB3I1GCgxy0xiGh1NFlP9CHVJv/view?usp=sharing"]

    },
    {
        "name": "5.2.2",
        "items" : ["5.2.2"],
        "link": ["https://drive.google.com/file/d/1jqAv406NQUNkEOQLjiIecs0mvfwdJ2kg/view?usp=sharing"]

    },
    {
        "name": "5.2.3",
        "items" : ["5.2.3"],
        "link": ["https://drive.google.com/file/d/1QMQhLNvYwU51lKCNspYElF0WhT8-_shv/view?usp=sharing"]

    },
    {
        "name": "5.3.3",
        "items" : ["5.3.3.1","5.3.3.2","5.3.3.3","5.3.3.4","5.3.3.5","5.3.3.6","5.3.3.7" ],
        "link": ["https://drive.google.com/file/d/1UH0XLnXFd6dw9pn9fvPOqSsIwksyHv3B/view?usp=sharing","https://drive.google.com/file/d/1Qckmm15n2UOR8Zearhv4kIckFKBHQ6Yk/view?usp=sharing","https://drive.google.com/file/d/1vtU-LQbJKY81-Km0F135SyYIViSmHPx9/view?usp=sharing","https://drive.google.com/file/d/1S8uqHcSaW2XB2LZi8G8ULRbv727xbpyO/view?usp=sharing","https://drive.google.com/file/d/1gEFrnQlFcyaftwu0X2Fpg08f33XYdQo6/view?usp=sharing","https://drive.google.com/file/d/1Z-r8Ynr74l9IlGsWeVnv3jcefg8Kj7K_/view?usp=sharing","https://drive.google.com/file/d/1CupzAtp9qZh_jQXSMU1ymLXIxlq0Q-xY/view?usp=sharing"]

    },
    ]
</script>

<div class="flex flex-row w-full">
<div class="bg-indigo-800  rounded-2xl flex w-full flex-col md:w-auto mb-auto">
    {#each criteria_5 as list,y}
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