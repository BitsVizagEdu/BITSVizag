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
        "link": ["link1"]

    },
    {
        "name": "6.2.2",
        "items" : [ "6.2.2.1"],
        "link": ["link1","link2","link3","link4"]

    },
    {
        "name": "6.2.3",
        "items" : ["6.2.3.1","6.2.3.2","6.2.3.3", ],
        "link": ["link1","link2","link3"]

    },
    {
        "name": "6.3.1",
        "items" : ["6.3.1" ],
        "link": ["link1"]

    },
    {
        "name": "6.3.2",
        "items" : ["6.3.2.1","6.3.2.2","6.3.2.3","6.3.2.4","6.3.2.5","6.3.2.6","6.3.2.7"],
        "link": ["link1","link2","link3","link4","link5","link6","link7"]

    },
    {
        "name": "6.3.3",
        "items" : ["6.3.3","6.3.3.1","6.3.3.2","6.3.3.3","6.3.3.4","6.3.3.5"],
        "link": ["link1","link2","link3","link4","link5","link6"]

    },
    {
        "name": "6.3.4",
        "items" : ["6.3.4","6.3.4.1","6.3.4.2","6.3.4.3","6.3.4.4","6.3.4.5"],
        "link": ["link1","link2","link3","link4","link5","link6"]

    },
    {
        "name": "6.4.1",
        "items" : ["6.4.1" ],
        "link": ["link1"]

    },
    {
        "name": "6.5.3",
        "items" : ["6.5.3.1","6.5.3.2","6.5.3.3"],
        "link": ["link1","link2","link3"]

    },
    ]
</script>

<div class="bg-indigo-800 max-w-min rounded-2xl flex flex-col">
    {#each criteria_6 as list,y}
    <div class=" flex p-3">
        <div class="cursor-pointer mx-2 ">
        <button on:click={() => setValue(y)} class=" {(show[y]) ? '  text-white ' : ' bg-white text-black'} inline text-lg p-4 rounded-xl font-bold">{list.name}</button>
        </div>
        <!--{#if show[y]}-->
        <div class="{(show[y]) ? ' hidden ' : 'block '}  w-[133px] rounded-md bg-white ">
        {#each list.items as sublist, i}
        <a id={y} href={list.link[i]} class="{(show[y]) ? ' hidden ' : 'block '} text-black text-center p-4 pl-6 text-xl font-semibold">{sublist}</a>
        {/each}
        </div>
        <!--{/if}-->
    </div>
    {/each}
</div>