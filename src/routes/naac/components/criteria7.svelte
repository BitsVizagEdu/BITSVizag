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
        "link": ["link1","link2","link3","link4"]

    },
    {
        "name": "7.1.4",
        "items" : [ "7.1.4.1","7.1.4.2","7.1.4.3","7.1.4.4"],
        "link": ["link1","link2","link3","link4"]

    },
    {
        "name": "7.1.5",
        "items" : [ "7.1.5.1","7.1.5.2","7.1.5.3","7.1.5.4","7.1.5.6"],
        "link": ["link1","link2","link3","link4","link5"]

    },
    {
        "name": "7.1.6",
        "items" : [ "7.1.6.1","7.1.6.2","7.1.6.3","7.1.6.4","7.1.6.5","7.1.6.6"],
        "link": ["link1","link2","link3","link4","link5","link6"]

    },
    {
        "name": "7.1.7",
        "items" : [ "7.1.7.1","7.1.7.2","7.1.7.3","7.1.7.4","7.1.7.5"],
        "link": ["link1","link2","link3","link4","link5","link6"]

    },
    {
        "name": "7.1.10",
        "items" : [ "7.1.10.1"],
        "link": ["link1"]

    },
    ]
</script>

<div class="bg-indigo-800 max-w-min rounded-2xl flex flex-col">
    {#each criteria_7 as list,y}
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