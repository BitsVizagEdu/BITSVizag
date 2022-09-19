<script>
	


    let criteria_5 = [

    {
        "name": "5.1.1",
        "items" : [ "5.1.1.1","5.1.1.2","5.1.1.3","5.1.1.4","5.1.1.5","5.1.1.6",],
        "link": ["link1","link2","link3","link4","link5","link6"]

    },
    {
        "name": "5.1.3",
        "items" : [ "5.1.3.1","5.1.3.2","5.1.3.3","5.1.3.4",],
        "link": ["link1","link2","link3","link4"]

    },
    {
        "name": "5.1.4",
        "items" : [ "5.1.4.1","5.1.4.2",],
        "link": ["link1","link2"]

    },
    {
        "name": "5.1.5",
        "items" : ["5.1.5.1","5.1.5.2","5.1.5.3","5.1.5.4","5.1.5.5","5.1.5.6", ],
        "link": ["link1","link2","link3","link4","link5","link6"]

    },
    {
        "name": "5.2.1",
        "items" : ["5.2.1.1","5.2.1.2","5.2.1.3","5.2.1.4","5.2.1.5"],
        "link": ["link1","link2","link3","link4","link5"]

    },
    {
        "name": "5.2.2",
        "items" : ["5.2.2"],
        "link": ["link1"]

    },
    {
        "name": "5.2.3",
        "items" : ["5.2.3"],
        "link": ["link1"]

    },
    {
        "name": "5.3.3",
        "items" : ["5.3.3.1","5.3.3.2","5.3.3.3","5.3.3.4","5.3.3.5","5.3.3.6","5.3.3.7" ],
        "link": ["link1","link2","link3","link4","link5","link6","link7"]

    },
    ]
</script>

<div>
    {#each criteria_5 as list}
    <div>
        <p>{list.name}</p>
        {#each list.items as sublist, i}
        <a href={list.link[i]} class="block">{sublist}</a>
        {/each}

    </div>
    {/each}
</div>