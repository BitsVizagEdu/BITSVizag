<script>
    let activeTab = 'Employees';
   

   let items = ['Employees','Teachers','Students','Alumini']
   

   import Employees from './components/employees.svelte';

   import Teachers from "./components/teachers.svelte";
   
   import Students from './components/students.svelte';
   
   import Alumini from './components/alumini.svelte';
   import { onMount } from "svelte";
   import AOS from 'aos';
   import Footer from '$lib/components/footer.svelte';
   

   let globalVar = false;
  let isLoading = true;

  onMount(async () => {
    AOS.init();

    try {
      // Make sure this URL is correct
      const response = await fetch("https://test-delta-snowy.vercel.app/get-me");
      const data = await response.json();

      if (response.ok) {
        globalVar = data.value;  // Ensure you are getting the expected data
      } else {
        console.error("Error fetching data:", data);
      }
    } catch (error) {
      console.error("Failed to fetch global variable:", error);
    }
    
    
    isLoading = false; 
  });


</script>

<svelte:head>
   <title>Feedback</title>
</svelte:head>


   <div class="total flex lg:flex-row 3xs:flex-col  h-[100%] ">
       <aside class="lg:w-[25%] p-5 rounded-lg  " aria-label="Sidebar">
           <div class="overflow-y-auto py-4 px-3 sticky top-2  bg-blue-900 rounded-lg">
               <ul class="space-y-2">
                   {#each items as item}
                   <li  id="{item}" on:click={() => (activeTab = item)}>
                       <a href="#" class="flex items-center lg:justify-center p-2 text-base font-normal rounded-lg  
                               {(activeTab === item) ? ' bg-white text-black ' : 'text-white'} ">
                               <span class="ml-3 md:text-base 2xl:text-center  3xs:text-xs xs:text-sm">{item}</span>
                           </a>
                       </li>
                   {/each}
               </ul>
           </div>
       </aside>

       <div class=" lg:w-[75%] p-5 rounded-lg ">
           {#if activeTab === 'Employees'}
               <Employees/>
           {/if}
           {#if activeTab === 'Teachers'}
               <Teachers/>
           {/if}
           {#if activeTab === 'Students'}
               <Students/>
           {/if}
           {#if activeTab === 'Alumini'}
               <Alumini/>
           {/if}
           </div>
   </div>
   
   
