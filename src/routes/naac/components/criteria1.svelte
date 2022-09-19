<script>
	


    let criteria_1 = [

    {
        "name": "1.1.1",
        "items" : [ "1.1.1"],
        "link": ["link1"]

    },
    {
        "name": "1.1.2",
        "items" : [ "1.1.2.2"],
        "link": ["link1"]

    },
    {
        "name": "1.1.3",
        "items" : [ "1.1.3.2","1.1.3.3","1.1.3.4"],
        "link": ["link1","link2","link3"]

    },
    {
        "name": "1.2.1",
        "items" : [ "1.2.1.1","1.2.1.2",],
        "link": ["link1","link2","link3","link4","link5","link6","link7","link8","link9","link10","link11","link12"]

    },
    {
        "name": "1.2.2",
        "items" : [ "1.2.2.1","1.2.2.2","1.2.2.3","1.2.2.4","1.2.2.5"],
        "link": ["link1","link2","link3","link4","link5"]

    },
    {
        "name": "1.2.3",
        "items" : [ "1.2.3.1","1.2.3.2","1.2.3.3","1.2.3.4","1.2.3.5"],
        "link": ["link1","link2","link3","link4","link5"]

    },
    {
        "name": "1.3.1",
        "items" : [ "1.3.1",],
        "link": ["link1"]

    },
    {
        "name": "1.3.2",
        "items" : [ "1.3.2"],
        "link": ["link1"]

    },
    {
        "name": "1.3.3",
        "items" : [ "1.3.3.1","1.3.3.2","1.3.3.3",],
        "link": ["link1","link2","link3"]

    },
    {
        "name": "1.4.2",
        "items" : [ "1.4.2_CE","1.4.2_CSE","1.4.2_ECE","1.4.2_EEE","1.4.2_ME","1.4.2_MBA"],
        "link": ["link1","link2","link3","link4","link5","link6"]

    },

    ]
</script>

<div>
    {#each criteria_1 as list}
    <div>
        <p>{list.name}</p>
        {#each list.items as sublist, i}
        <a href={list.link[i]} class="block">{sublist}</a>
        {/each}

    </div>
    {/each}
</div>