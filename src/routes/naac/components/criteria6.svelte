<script>
	


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

<div>
    {#each criteria_6 as list}
    <div>
        <p>{list.name}</p>
        {#each list.items as sublist, i}
        <a href={list.link[i]} class="block">{sublist}</a>
        {/each}

    </div>
    {/each}
</div>