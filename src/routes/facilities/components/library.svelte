<script>
	let items = [
		{
  name: "Timings",
  value: "8AM TO 8PM",
  
},
{
  name: "Reading Section Capacity",
  value: "150",
  
},
{
  name: "Number of Volumes",
  value: "22141",
  
},
{
  name: "Number of Ttiles ",
  value: "3601",
  
},
{
  name: "E-Journals",
  value: "DELNET,J-GATE,NDLI",
  
},
{
  name: "E-Books",
  value: "EBSCO",
  
},
{
  name: "NPTEL Videos",
  value: "Available",
  
},
{
  name: "Digital Library Computers",
  value: "15",
  
},

		
	
	]
</script>


<section class=" bg-slate-200 3xs:p-4  md:p-10 rounded-lg">
    <div class="flex  flex-col-reverse justify-center items-center  mx-auto   ">
        <div id="text" class=" lg:w-[90%] 3xs:mb-3 lg:px-10">
            <div class="text-red1 3xs:text-center lg:text-center xs:text-[20px] sm:text-[25px] font-bold 3xs:pb-1 md:pb-6 pt-7">
                <h2>Knowledge Resource Center</h2>
            </div>
            <div>
                <p class="text-justify md:text-[15px]  3xs:tracking-normal lg:text-[20px] xs:tracking-widest mt-4  md:font-normal lg:leading-6 my-1 3xs:font-light xs:text-sm  tracking-wide py-1">
                    The Knowledge Resource Centre uses E-CAP software Package, which is an integrated multi-user library management system that supports all in-house operations of the Library. The Software consists of modules, Cataloguing, Circulation, OPAC. 
                </p>
            </div>
            <div>
                 <p class="text-justify md:text-[15px] 3xs:tracking-normal lg:text-[20px] xs:tracking-widest mt-4  md:font-normal lg:leading-6 my-1 3xs:font-light xs:text-sm tracking-wide py-1">
                     Retrospective conversion of bibliographic records has been completed and more than 22150 bibliographic records of books available in the Knowledge Resource Centre can now be accessed through the OPAC. 
                </p>
            </div>
            <div>
                 <p class="text-justify md:text-[15px] 3xs:tracking-normal lg:text-[20px] xs:tracking-widest mt-4  md:font-normal lg:leading-6 my-1 3xs:font-light xs:text-sm tracking-wide py-1">
                    The database of books available in the Knowledge Resource Centre is being updated on day to day basis with details of recently acquired books records of all the library patrons have also been created in the Package..                     
                </p>
            </div>
            <div>
                <p class="text-justify md:text-[15px] 3xs:tracking-normal lg:text-[20px] xs:tracking-widest mt-4  md:font-normal lg:leading-6 my-1 3xs:font-light xs:text-sm tracking-wide py-1">
                    To strength our circulation system for accuracy and speeding up of operations Barcode Technology is in place.                    
                 </p>
           </div>
           <div class="text-red1 3xs:text-center lg:text-center xs:text-[20px] sm:text-[25px] font-bold 3xs:pb-1 md:pb-6 pt-7">
            <h2>DIGITAL LIBRARY</h2>
        </div>
        <div>
            <p class="text-justify md:text-[15px] 3xs:tracking-normal lg:text-[20px] xs:tracking-widest mt-4  md:font-normal lg:leading-6 my-1 3xs:font-light xs:text-sm tracking-wide py-1">
                The Knowledge Resource Digital Library is having 25 computers connected on LAN with internet Centre has subscription to J- GATE Journals GATE (Engineering and Technology)and Developing Library Network (DELNET).                     
             </p>
       </div>
       <div>
        <p class="text-justify md:text-[15px] 3xs:tracking-normal lg:text-[20px] xs:tracking-widest mt-4  md:font-normal lg:leading-6 my-1 3xs:font-light xs:text-sm tracking-wide py-1">
            The online journals are access at anywhere and  any time. Digital Library also has 920 general educational CDs, DVDs and NPTEL Videos, 6254 EBSCO E-Books (Covers all Branches) are available.                     
         </p>
   </div>
   <div class="grid xl:grid-cols-4 lg:grid-cols-4 gap-2 md:grid-cols-2 xs:grid-cols-1    mt-10 items-center ">
		
    {#each items as item ,i}
    <div class="card text-center 	h-[200px]  bg-sortwhite flex flex-col items-center m-2 rounded-[5px]">
        
        <div class="p-[10px] capitalize font-bold pt-14">{item.name}</div>
        <div class="capitalize font-semibold">{item.value}</div>
        
    </div>

{/each}
    
</div>

        </div>
        <div id="pic " class="flex flex-col justify-between ">
            <div class="rounded-lg"><img src="./Library-1.webp" class=" 3xs:w-full xs:w-full md:h-[320px] lg:h-[420px] 3xs:p-1  md:p-3">
            </div>
            
            
        </div>
    </div>
</section>
