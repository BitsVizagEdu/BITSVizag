
<!-- w-10/12 lg:w-8/12 -->

    <!-- Left Side Form -->

    <div class="min-h-screen lg:py-20 py-0" >
      <div class="container mx-auto" >
        <div class="flex flex-col lg:flex-row  bg-white rounded-xl mx-auto shadow-2xl overflow-hidden">
          <div class="w-full lg:w-1/2 py-16 px-12">
            <h2  class="text-4xl mb-4 font-semibold">Registration Form</h2>
            <p class="mb-4">
                Enhance registration efficiency by filling out the form Online.
            </p>
            <p class="mb-3 font-bold underline">
            Preliminary Section
          </p>
            
            <form action="#">
                <h1 class="pb-2 font-medium">Branch :</h1>
     <div class="flex gap-10">
        <div class="flex items-center">
            <input id="branch-btech" type="radio" value="" name="branch" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required>
            <label for="branch-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">B.TECH</label>
        </div>
        <div class="flex items-center">
            <input id="branch-mba" type="radio" value="" name="branch" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required>
            <label for="branch-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">MBA</label>
        </div>
        <div class="flex items-center">
            <input id="branch-mtech" type="radio" value="" name="branch" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required>
            <label for="branch-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">M.TECH</label>
        </div>
     </div>

     <h1 class="pb-2 pt-4 font-medium">Under Quota :</h1>
     <div class="flex gap-8">
        <div class="flex items-center">
            <input id="default-checkbox" type="radio" value=""  name="quota" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required>
            <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Convener</label>
        </div>
        <div class="flex items-center">
            <input id="checked-checkbox" type="radio" value=""  name="quota" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required>
            <label for="checked-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Management</label>
        </div>
     </div>
     
     <h1 class="pb-2 pt-4 font-medium">Branch Alloted/Interested :</h1>
     
     <div class="flex gap-10">
        <div>
            <select name="ug" id="ug" class="rounded-lg px-5 p-1 text-center bg-[#1b3c6b] text-white font-semibold" required>
                <option value="UG" class="bg-white text-black">UG</option>
                <option value="CSE" class="bg-white text-black">CSE</option>
              <option value="ECE" class="bg-white text-black">ECE</option>
              <option value="MECH" class="bg-white text-black">MECH</option>
              <option value="CIVIL" class="bg-white text-black">CIVIL</option>
              <option value="EEE" class="bg-white text-black">EEE</option>
            </select>
        </div>
        <div>
            <select name="pg" id="pg" class="rounded-lg px-5 p-1 text-center bg-[#1d4275] text-white font-semibold" required>
                <option value="UG" class="bg-white text-black">PG</option>
                <option value="CSE" class="bg-white text-black">CSE</option>
              <option value="ECE" class="bg-white text-black">ECE</option>
              <option value="MECH" class="bg-white text-black">MECH</option>
              <option value="CIVIL" class="bg-white text-black">CIVIL</option>
              <option value="EEE" class="bg-white text-black">EEE</option>
            </select>
        </div>
     </div>
      <div class="grid grid-cols-2 gap-5 pt-4">
                <input type="text" placeholder="Name of the Student (as per SSC)" class="border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg" required>
                <input type="text" placeholder="Name of the Parent" class="border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg" required>
              </div>
              <h1 class="pt-3 font-medium">Phone Numbers :</h1>
              <div class="grid grid-cols-2 gap-5 pt-2">
                <input type="text" placeholder="Mobile" class="border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg" required>
                <input type="text" placeholder="Residence No." class="border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg" required>
              </div>

              <div >
                <h1 class="pt-3 font-medium pb-2">Date of Birth (as per SSC) :</h1>
                
              </div>
              <div class="grid grid-cols-2 pt-2">
              <input type="date" class="input" name="dateofbirth" id="dateofbirth" required>
              
              </div>
              <div class="flex gap-10">
                <h1 class="pt-3 font-medium pb-2">Entrance Exam :</h1>
                <h1 class="pt-3 font-medium pb-2">Category :</h1>
              </div>
              <div class="flex gap-10">
                <div>
                    <select name="pg" id="pg" class="rounded-lg text-center p-2 bg-[#1d4275] text-white font-semibold" required>
                        <option value="UG" class="bg-white text-black">EAMCET</option>
                        <option value="CSE" class="bg-white text-black">ECET</option>
                      <option value="ECE" class="bg-white text-black">ICET</option>
                      <option value="MECH" class="bg-white text-black">PGECET</option>
                    </select>
                </div>
                <div>
                    <select name="pg" id="pg" class="rounded-lg text-center p-2 bg-[#1d4275] text-white font-semibold" required>
                        <option value="UG" class="bg-white text-black">OC</option>
                        <option value="CSE" class="bg-white text-black">BC-A</option>
                      <option value="ECE" class="bg-white text-black">BC-B</option>
                      <option value="MECH" class="bg-white text-black">BC-C</option>
                      <option value="MECH" class="bg-white text-black">BC-D</option>
                      <option value="MECH" class="bg-white text-black">BC-E</option>
                      <option value="MECH" class="bg-white text-black">SC</option>
                      <option value="MECH" class="bg-white text-black">ST</option>
                      <option value="MECH" class="bg-white text-black">PH</option>
                      <option value="MECH" class="bg-white text-black">CAP</option>
                    </select>
                </div>
              </div>

              <div class="grid grid-cols-2 gap-5 pt-4 mt-3">
                <input type="text" placeholder="Aadhar Card Number" class="border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg" required>
                <input type="text" placeholder="Nationality" class="border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg" required>
              </div>
              <div class="grid grid-cols-2 gap-5 pt-4 ">
                <input type="text" placeholder="Religion" class="border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg" required>
                <input type="text" placeholder="Mother Tongue" class="border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg" required>
              </div>

              
              
            </form>
          </div>

          <!-- Right Side Form -->

          <div class="w-full lg:w-1/2 lg:pt-44 pb-10 lg:pb-0 pt-0 px-12">
            <form action="#">
              <div class="flex">
                
                <h1 class="pt-3 font-medium pb-2">Mode of Transport :</h1>
              </div>

              <div class="flex gap-10">
                
                 <div class="flex gap-8">
                    <div class="flex items-center">
                        <input id="default-checkbox" type="radio" name="transport" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required>
                        <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">OWN Transport</label>
                    </div>
                    <div class="flex items-center">
                        <input id="checked-checkbox" type="radio" name="transport" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required>
                        <label for="checked-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">College Bus</label>
                    </div>
                 </div>
              </div>

              <h1 class="mt-4 font-medium pb-2">Address :</h1>

              <div>
                <input type="text" placeholder="Present Address" class=" border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg w-full" required>
              </div>

              <div>
                <input type="text" placeholder="E-mail ID" class="mt-3 border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg w-full" required>
              </div>

              <div>
                <input type="text" placeholder="Pincode" class="mt-3 border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg w-full" required>
              </div>

              <div>
                <input type="text" placeholder="Phone No." class="mt-3 border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg w-full" required>
              </div>

              <h1 class="mt-4 font-medium pb-2">Permanent Address :</h1>

              <div>
                <input type="text" placeholder="Permanent Address" class=" border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg w-full" required>
              </div>

              <div>
                <input type="text" placeholder="E-mail ID" class="mt-3 border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg w-full" required>
              </div>

              <div>
                <input type="text" placeholder="Pincode" class="mt-3 border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg w-full" required>
              </div>

              <div>
                <input type="text" placeholder="Phone No." class="mt-3 border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg w-full" required>
              </div>

              <div class="mt-5">
                <input type="checkbox" class="border border-gray-400" required>
                <span>
                  I accept the <a href="#" class="text-purple-500 font-semibold">Terms of Use</a> &  <a href="#" class="text-purple-500 font-semibold">Privacy Policy</a> 
                </span>
              </div>
              <div class="mt-5">
                <button class="w-full bg-[#397fe2] py-3 text-center text-white rounded-xl hover:bg-[#1D4275] transition-all ease-in-out duration-300" type="submit" on:click={() => (window.location.href = '/application-form-2')}>Next Step <i class="fa-solid fa-arrow-right items-center"></i></button>
              </div> 
            </form>
          </div>
        </div>
      </div>
    </div>
    
<style>
    [type="date"] {
  background:#fff url(https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/calendar_2.png)  97% 50% no-repeat ;
}
[type="date"]::-webkit-inner-spin-button {
  display: none;
}
[type="date"]::-webkit-calendar-picker-indicator {
  opacity: 0;
}

/* custom styles */
body {
  padding: 4em;
  background: #e5e5e5;
  font: 13px/1.4 Geneva, 'Lucida Sans', 'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif;
}
label {
  display: block;
}
.input {
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  background-color: #fff;
  padding: 3px 5px;
  box-shadow: inset 0 3px 6px rgba(0,0,0,0.1);
  width: 190px;
}
</style>