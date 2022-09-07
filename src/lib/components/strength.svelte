<script>
    import {animate} from "motion";
    function scaleUp(element) {
        animate(document.querySelector(element), {scale: 1.2}, {duration: 0.5})
    }

    function scaleDown(element) {
        animate(element, {scale: 1}, {duration: 0.5})
    }
</script>

<section class="text-center bg-indigo-800 font-sans text-white">
    <div class="flex items-center justify-center items-center p-10 flex-wrap">
        <div class="basis-1/3 border-b-4 md:border-r-4 md:border-b-0 pt-12 flex flex-col items-center justify-center border-white pb-12 md:pr-12 ">
            <div class="flex items-center justify-center p-4">
                <p class="text-4xl font-bold md:mr-0 md:ml-auto">Why BITS Vizag</p>
            </div>
            <div class="text-xl p-4">Grooming leaders who are not only thorough professionals but also good human beings with values.</div>
            <div class="flex items-center flex-col py-4 flex-wrap lg:flex-nowrap ">
                <div class="pr-4 items-center">This is why we are consistently ranked</div>
                <div class="text-4xl font-bold p-4">NO.1</div>
            </div>
            <div class="flex justify-center items-center">
                <button on:mouseenter={() => scaleUp(".button-strength")} on:mouseleave={()=> {scaleDown(".button-strength")}} class="button-strength bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded">Read more about BITS Vizag</button>
            </div>
        </div>
        <div class=" flex basis-2/3 justify-center">

            <div class="flex flex-row flex-wrap w-[75%] justify-center items-center ">
                <div class="h-[100px] w-[100px] flex flex-col items-center m-2 rounded-[5px] ">
                    <div class="p-[10px] capitalize font-bold">1100</div>
                    <div class="capitalize overflow-hidden text-center">Undergratuate student</div>
                </div>
                <div class="h-[100px] w-[100px] flex flex-col items-center m-2 rounded-[5px] ">
                    <div class="p-[10px] capitalize font-bold">148</div>
                    <div class="capitalize overflow-hidden text-center">Postgratuate student</div>
                </div>
                <div class="h-[100px] w-[100px] flex flex-col items-center m-2 rounded-[5px] ">
                    <div class="p-[10px] capitalize font-bold">7389</div>
                    <div class="capitalize overflow-hidden text-center">Alumini</div>
                </div>
                <div class="h-[100px] w-[100px] flex flex-col items-center m-2 rounded-[5px] ">
                    <div class="p-[10px] capitalize font-bold">690</div>
                    <div class="capitalize overflow-hidden text-center">Interns</div>
                </div>
                <div class="h-[100px] w-[100px] flex flex-col items-center m-2 rounded-[5px] ">
                    <div class="p-[10px] capitalize font-bold">208</div>
                    <div class="capitalize overflow-hidden text-center">Staff</div>
                </div>
                <div class="h-[100px] w-[100px] flex flex-col items-center m-2 rounded-[5px] ">
                    <div class="p-[10px] capitalize font-bold">2976</div>
                    <div class="capitalize overflow-hidden text-center">Internal Project</div>
                </div>
                <div class="h-[100px] w-[100px] flex flex-col items-center m-2 rounded-[5px] ">
                    <div class="p-[10px] capitalize font-bold">1 </div>
                    <div class="capitalize overflow-hidden text-center">Patent</div>
                </div>
                <div class="h-[100px] w-[100px] flex flex-col items-center m-2 rounded-[5px] ">
                    <div class="p-[10px] capitalize font-bold">490</div>
                    <div class="capitalize overflow-hidden text-center">Placements</div>
                </div>
            </div>
        </div>
    </div>
</section>