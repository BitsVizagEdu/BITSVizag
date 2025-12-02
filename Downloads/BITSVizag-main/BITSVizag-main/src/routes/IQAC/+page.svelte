<script>
    let activeTab = '2016-17';
   

   let items = ['2016-17','2017-18','2018-19','2019-20','2020-21','2021-22', '2022-23', '2023-24']
   

   import Criteria1 from './components/criteria1.svelte';

   import Criteria2 from "./components/criteria2.svelte";
   
   import Criteria3 from './components/criteria3.svelte';
   
   import Criteria4 from './components/criteria4.svelte';

   import Criteria5 from './components/criteria5.svelte';

   import Criteria6 from './components/criteria6.svelte'

   import Criteria7 from './components/criteria7.svelte'

   import Criteria8 from './components/criteria8.svelte';

   import Footer from '$lib/components/footer.svelte';
   

</script>

<svelte:head>
   <title>IQAC</title>
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
           {#if activeTab === '2016-17'}
               <Criteria1/>
           {/if}
           {#if activeTab === '2017-18'}
               <Criteria2/>
           {/if}
           {#if activeTab === '2018-19'}
               <Criteria3/>
           {/if}
           {#if activeTab === '2019-20'}
               <Criteria4/>
           {/if}
           {#if activeTab === '2020-21'}
               <Criteria5/>
           {/if}
           {#if activeTab === '2021-22'}
               <Criteria6/>
           {/if}
           {#if activeTab === '2022-23'}
               <Criteria7/>
           {/if}
           {#if activeTab === '2023-24'}
               <Criteria8/>
           {/if}
           </div>
   </div>
   
   
