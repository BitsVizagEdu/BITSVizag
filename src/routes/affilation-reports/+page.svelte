<script>
    let activeTab = 'AICTE Approval';
   

   let items = ['AICTE Approval','JNTU Approval','Academic Regulations']
   

   import Aicte from './components/aicte.svelte';

   import Jntu from "./components/jntu.svelte";

   import Academic from './components/academic.svelte';
   
   import Footer from '$lib/components/footer.svelte';
   

</script>

<svelte:head>
   <title>Academic Regulations</title>
</svelte:head>


   <div class="total flex lg:flex-row 3xs:flex-col  h-[100%] ">
       <aside class="lg:w-[25%] p-5 rounded-lg  " aria-label="Sidebar">
           <div class="overflow-y-auto py-4 px-3 sticky top-2 top-[50px]  bg-blue-900 rounded-lg">
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
           {#if activeTab === 'AICTE Approval'}
               <Aicte/>
           {/if}
           {#if activeTab === 'JNTU Approval'}
               <Jntu/>
           {/if}
           {#if activeTab === 'Academic Regulations'}
               <Academic/>
           {/if}
           </div>
   </div>
   
   
