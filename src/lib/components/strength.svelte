<script>
    import {animate} from "motion";
    function scaleUp(element) {
        animate(document.querySelector(element), {scale: 1.2}, {duration: 0.5})
    }

    function scaleDown(element) {
        animate(element, {scale: 1}, {duration: 0.5})
    }
</script>

<section data-aos="zoom-in" class="text-center bg-indigo-800 font-sans text-white">
    <div class="flex items-center 3xs:flex-col lg:flex-row justify-center items-center lg:p-10 md:p-5 ">
        <div class="basis-1/3 border-b-4 lg:border-r-4 md:border-b-4 lg:border-b-0 pt-12 flex flex-col items-center justify-center border-white xs:pb-6 pb-12 md:pr-12 ">
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
        <div class=" basis-2/3 flex xs:mt-6  md:mt-6 3xs:mt-6 justify-center">

            <div class="grid md:grid-cols-4 3xs:grid-cols-2 xs:grid-cols-3 md:gap-10 3xs:gap-5">

                <div class=" w-[100px] flex flex-col items-center m-2 justify-between rounded-[5px] ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                      </svg>
                      
                    <div class="p-[0px] capitalize font-bold">1100</div>
                    <div class="capitalize overflow-hidden text-center">Undergratuate student</div>
                </div>

                <div class="w-[100px] flex flex-col items-center m-2 justify-between rounded-[5px] ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                      </svg>
                    <div class="p-[0px] capitalize font-bold">148</div>
                    <div class="capitalize overflow-hidden text-center">Postgratuate student</div>
                </div>

                <div class="w-[100px] flex flex-col items-center m-2 justify-between rounded-[5px] ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                      </svg>
                      
                    <div class="p-[0px] capitalize font-bold">7389</div>
                    <div class="capitalize overflow-hidden text-center">Alumini</div>
                </div>

                <div class="w-[100px] flex flex-col items-center m-2 justify-between rounded-[5px] ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                      
                    <div class="p-[0px] capitalize font-bold">690</div>
                    <div class="capitalize overflow-hidden text-center">Interns</div>
                </div>

                <div class="w-[100px] flex flex-col items-center m-2 justify-between rounded-[5px] ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                      </svg>
                      
                    <div class="p-[0px] capitalize font-bold">208</div>
                    <div class="capitalize overflow-hidden text-center">Staff</div>
                </div>

                <div class="w-[100px] flex flex-col items-center m-2 justify-between rounded-[5px] ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
                      </svg>
                      
                    <div class="p-[0px] capitalize font-bold">2976</div>
                    <div class="capitalize overflow-hidden text-center">Internal Project</div>
                </div>
                
                <div class="w-[100px] flex flex-col items-center m-2 justify-between rounded-[5px] ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
                      </svg>
                      
                    <div class="p-[0px] capitalize font-bold">1 </div>
                    <div class="capitalize overflow-hidden text-center">Patent</div>
                </div>

                <div class="w-[100px] flex flex-col items-center m-2 justify-between rounded-[5px] ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                      </svg>
                      
                    <div class="p-[0px] capitalize font-bold">490</div>
                    <div class="capitalize overflow-hidden text-center">Placements</div>
                </div>

            </div>
        </div>
    </div>
</section>