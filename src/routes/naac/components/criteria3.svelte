<script>
	


    let criteria_3 = [

    {
        "name": "3.1.1",
        "items" : [ "3.1.1.1","3.1.1.2"],
        "link": ["link1","link2"]

    },
    {
        "name": "3.2.2",
        "items" : ["3.2.2.1","3.2.2.2","3.2.2.3","3.2.2.4","3.2.2.5" ],
        "link": ["link1","link2","link3","link4","link5"]

    },
    {
        "name": "3.3.2",
        "items" : [ "3.3.2.1","3.3.2.2","3.3.2.3","3.3.2.4","3.3.2.5",],
        "link": ["link1","link2","link3","link4","link5"]

    },
    {
        "name": "3.3.3",
        "items" : [ "3.3.3.1","3.3.3.2","3.3.3.3"],
        "link": ["link1","link2","link3"]

    },
    {
        "name": "3.4.1",
        "items" : [ "3.4.1"],
        "link": ["link1"]

    },
    {
        "name": "3.4.2",
        "items" : [ "3.4.2.1","3.4.2.2","3.4.2.3","3.4.2.4","3.4.2.5",],
        "link": ["link1","link2","link3","link4","link5"]

    },
    {
        "name": "3.4.3",
        "items" : [ "3.4.3.1","3.4.3.2","3.4.3.3","3.4.3.4","3.4.3.5",],
        "link": ["link1","link2","link3","link4","link5"]

    },
    {
        "name": "3.4.4",
        "items" : [ "3.4.4.1","3.4.4.2","3.4.4.3","3.4.4.4","3.4.4.5",],
        "link": ["link1","link2","link3","link4","link5"]

    },
    {
        "name": "3.5.1",
        "items" : [ "3.5.1.1","3.5.1.2","3.5.1.3","3.5.1.4","3.5.1.5",],
        "link": ["link1","link2","link3","link4","link5"]

    },
    {
        "name": "3.5.2",
        "items" : [ "3.5.2.1","3.5.2.2","3.5.2.3","3.5.2.4","3.5.2.5",],
        "link": ["link1","link2","link3","link4","link5"]

    },

    ]
</script>

<div>
    {#each criteria_3 as list}
    <div>
        <p>{list.name}</p>
        {#each list.items as sublist, i}
        <a href={list.link[i]} class="block">{sublist}</a>
        {/each}

    </div>
    {/each}
</div>