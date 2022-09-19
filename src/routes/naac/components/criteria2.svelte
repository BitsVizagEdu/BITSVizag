<script>
	


    let criteria_2 = [

    {
        "name": "2.1.1",
        "items" : [ "2.1.1.1","2.1.1.2","2.1.1.3","2.1.1.4","2.1.1.5","2.1.1.6"],
        "link": ["link1","link2","link3","link4","link5","link6"]

    },
    {
        "name": "2.1.2",
        "items" : [ "2.1.2.1","2.1.2.2","2.1.2.3","2.1.2.4","2.1.2.5","2.1.2.6","2.1.2.7"],
        "link": ["link1","link2","link3","link4","link5","link6","link7"]

    },
    {
        "name": "2.2.2",
        "items" : [ "2.2.2.1","2.2.2.2"],
        "link": ["link1","link2"]

    },
    {
        "name": "2.3.3",
        "items" : [ "2.3.3.1","2.3.3.2","2.3.3.3","2.3.3.4","2.3.3.5",],
        "link": ["link1","link2","link3","link4","link5"]

    },
    {
        "name": "2.4.1",
        "items" : [ "2.4.1.1","2.4.1.2","2.4.1.3","2.4.1.4","2.4.1.5","2.4.1.6"],
        "link": ["link1","link2","link3","link4","link5","link6"]

    },
    {
        "name": "2.4.2",
        "items" : [ "2.4.2.1","2.4.2.2","2.4.2.3","2.4.2.4","2.4.2.5"],
        "link": ["link1","link2","link3","link4","link5"]

    },
    {
        "name": "2.6.3",
        "items" : [ "2.6.3.1","2.6.3.2","2.6.3.3","2.6.3.4","2.6.3.5",],
        "link": ["link1","link2","link3","link4","link5"]

    },


    ]
</script>

<div>
    {#each criteria_2 as list}
    <div>
        <p>{list.name}</p>
        {#each list.items as sublist, i}
        <a href={list.link[i]} class="block">{sublist}</a>
        {/each}

    </div>
    {/each}
</div>