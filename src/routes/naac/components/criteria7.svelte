<script>
	


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

<div>
    {#each criteria_7 as list}
    <div>
        <p>{list.name}</p>
        {#each list.items as sublist, i}
        <a href={list.link[i]} class="block">{sublist}</a>
        {/each}

    </div>
    {/each}
</div>