<script>
	


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

<div>
    {#each criteria_4 as list}
    <div>
        <p>{list.name}</p>
        {#each list.items as sublist, i}
        <a href={list.link[i]} class="block">{sublist}</a>
        {/each}

    </div>
    {/each}
</div>