<script>
	import { AccordionItem, Accordion } from 'flowbite-svelte';
  let items = [
        {
            title: "2008-2009",
            
            link: "/EOA/EOA-Report-2008-09.pdf"
        },
        {
            title: "2009-2010",
            
            link: "/EOA/EOA-Report-2009-10.pdf"
        },
        {
            title: "2010-2011",
            
            link: "/EOA/EOA-Report-2010-11.pdf"
        },
        {
            title: "2011-2012",
            
            link: "/EOA/EOA-Report-2011-12.pdf"
        },
        {
            title: "2012-2013",
            
            link: "/EOA/EOA-Report-2012-13.pdf"
        },
        {
            title: "2013-2014",
            
            link: "/EOA/EOA-Report-2013-14.pdf"
        },
        {
            title: "2014-2015",
            
            link: "/EOA/EOA-Report-2014-15.pdf"
        },
        {
            title: "2015-2016",
            
            link: "/EOA/EOA-Report-2015-16.pdf"
        },
        {
            title: "2016-2017",
            
            link: "/EOA/EOA-Report-2016-17.pdf"
        },
        {
            title: "2017-2018",
            
            link: "/EOA/EOA-Report-2017-18.pdf"
        },
        {
            title: "2018-2019",
            
            link: "/EOA/EOA-Report-2018-19.pdf"
        },
        {
            title: "2019-2020",
            
            link: "/EOA/EOA-Report-2019-20.pdf"
        },
        {
            title: "2020-2021",
            
            link: ""
        },
        {
            title: "2021-2022",
            
            link: ""
        },
        {
            title: "2022-2023",
            
            link: "/EOA/EOA-Report-2022-23.pdf"
        },
        
    ]

</script>

<Accordion>
  {#each items as item , i }
    <AccordionItem>
		<span slot="header">{item.title}</span>
		<a href="{item.link}">Visit &nbsp <i class="fa-solid fa-location-arrow" /></a><br />
	</AccordionItem>
  {/each}
	
</Accordion>
