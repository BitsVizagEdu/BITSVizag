<script>
	import { AccordionItem, Accordion } from 'flowbite-svelte';
  let items = [
        {
            title: "Course Structure",
            
            link: "/Academic-Reg/course.pdf"
        },
        {
            title: "Academic Regulations",
            
            link: "/Academic-Reg/aca.pdf"
        },
        {
            title: "Academic Regulation (Civil)",
            
            link: "/Academic-Reg/civil.pdf"
        },
        {
            title: "Academic Regulation (Electronics and Communication Engineering)",
            
            link: "/Academic-Reg/ece.pdf"
        },
        {
            title: "Academic Regulation (Mechanical & Automobile Engineering)",
            
            link: "/Academic-Reg/mech.pdf"
        },
        {
            title: "Academic Regulation (Electrical and Electronics Engineering)",
            
            link: "/Academic-Reg/eee.pdf"
        },
        {
            title: "Academic Regulation (Computer Science and Engineering)",
            
            link: "/Academic-Reg/cse.pdf"
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
