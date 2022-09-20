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
        "link": ["link1"]

    },
    {
        "name": "4.1.2",
        "items" : ["4.1.2.1" ],
        "link": ["link1"]

    },
    {
        "name": "4.1.3",
        "items" : ["4.1.3" ],
        "link": ["link1"]

    },
    {
        "name": "4.2.2.1",
        "items" : ["4.2.2.1","4.2.2.2","4.2.2.3","4.2.2.4","4.2.2.5" ],
        "link": ["link1","link2","link3","link4","link5"]

    },
    ]
</script>

<div class="bg-indigo-800 max-w-min rounded-2xl flex flex-col">
    {#each criteria_4 as list,y}
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