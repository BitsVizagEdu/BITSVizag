<script>
    let activeTab = 'AICTE Approval';
   

   let items = ['AICTE Approval','University Affilation Letter','Accredation & Ranking']
   

   import Aecte from './components/aicte.svelte';
   import Univesirty from './components/univesirty.svelte';
   import Acceredation from './components/acceredation.svelte';
   
   

</script>

<svelte:head>
   <title>Mandatory Disclosure</title>
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
           {#if activeTab === 'AICTE Approval'}
               <Aecte/>
           {/if}
           {#if activeTab === 'University Affilation Letter'}
               <Univesirty/>
           {/if}
           {#if activeTab === 'Accredation & Ranking'}
               <Acceredation/>
           {/if}
           </div>
   </div>
   
   
