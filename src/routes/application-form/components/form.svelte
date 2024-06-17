<!-- Left Side Form -->
<div class="min-h-screen lg:py-20 py-0">
    <div class="container mx-auto">
        <div class="flex flex-col lg:flex-row bg-white rounded-xl mx-auto shadow-2xl overflow-hidden">
            <div class="w-full py-16 px-12">
                <h2 class="text-4xl mb-4 font-semibold">Registration Form</h2>
                <p class="mb-4">Enhance registration efficiency by filling out the form Online.</p>
                <p class="mb-3 font-bold underline">Preliminary Section</p>

                <form id="registration-form"
                      action="https://script.google.com/macros/s/AKfycbz_KOuVJrltef7zkMcLsWHouXe42zTkOv-3REhsRirRBdacRC7wHDaOBjhWOKPj60gYTw/exec"
                      method="POST" class="flex md:flex-row flex-col gap-10">
                    <div class="md:w-1/2">
                        <h1 class="pb-2 font-medium">Branch :</h1>
                        <div class="flex gap-10">
                            <div class="flex items-center">
                                <input id="branch-btech" type="radio" value="B.TECH" name="Branch"
                                       class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                       required>
                                <label for="branch-btech"
                                       class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">B.TECH</label>
                            </div>
                            <div class="flex items-center">
                                <input id="branch-mba" type="radio" value="MBA" name="Branch"
                                       class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                       required>
                                <label for="branch-mba"
                                       class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">MBA</label>
                            </div>
                            <div class="flex items-center">
                                <input id="branch-mtech" type="radio" value="M.TECH" name="Branch"
                                       class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                       required>
                                <label for="branch-mtech"
                                       class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">M.TECH</label>
                            </div>
                        </div>

                        <h1 class="pb-2 pt-4 font-medium">Under Quota :</h1>
                        <div class="flex gap-8">
                            <div class="flex items-center">
                                <input id="quota-convener" type="radio" value="Convener" name="Quota"
                                       class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                       required>
                                <label for="quota-convener"
                                       class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Convener</label>
                            </div>
                            <div class="flex items-center">
                                <input id="quota-management" type="radio" value="Management" name="Quota"
                                       class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                       required>
                                <label for="quota-management"
                                       class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Management</label>
                            </div>
                        </div>

                        <h1 class="pb-2 pt-4 font-medium">Branch Alloted/Interested :</h1>
                        <div class="flex gap-10">
                            <div>
                                <select name="Branch Allotted/Interested UG" id="ug"
                                        class="rounded-lg px-5 p-1 text-center bg-[#1b3c6b] text-white font-semibold"
                                        required>
                                    <option value="UG" class="bg-white text-black">UG</option>
                                    <option value="CSE" class="bg-white text-black">CSE</option>
                                    <option value="ECE" class="bg-white text-black">ECE</option>
                                    <option value="MECH" class="bg-white text-black">MECH</option>
                                    <option value="CIVIL" class="bg-white text-black">CIVIL</option>
                                    <option value="EEE" class="bg-white text-black">EEE</option>
                                </select>
                            </div>
                            <div>
                                <select name="Branch Allotted/Interested PG" id="pg"
                                        class="rounded-lg px-5 p-1 text-center bg-[#1d4275] text-white font-semibold"
                                        required>
                                    <option value="PG" class="bg-white text-black">PG</option>
                                    <option value="CSE" class="bg-white text-black">CSE</option>
                                    <option value="ECE" class="bg-white text-black">ECE</option>
                                    <option value="MECH" class="bg-white text-black">MECH</option>
                                    <option value="CIVIL" class="bg-white text-black">CIVIL</option>
                                    <option value="EEE" class="bg-white text-black">EEE</option>
                                </select>
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-5 pt-4">
                            <input type="text" name="Student Name" placeholder="Name of the Student (as per SSC)"
                                   class="border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg"
                                   required>
                            <input type="text" name="Parent Name" placeholder="Name of the Parent"
                                   class="border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg"
                                   required>
                        </div>

                        <h1 class="pt-3 font-medium">Phone Numbers :</h1>
                        <div class="grid grid-cols-2 gap-5 pt-2">
                            <input type="tel" name="Mobile" placeholder="Mobile"
                                   class="border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg"
                                   required>
                            <input type="tel" name="Residence No" placeholder="Residence No."
                                   class="border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg"
                                   required>
                        </div>

                        <div>
                            <h1 class="pt-3 font-medium pb-2">Date of Birth (as per SSC) :</h1>
                        </div>
                        <div class="grid grid-cols-2 pt-2">
                            <input type="date" name="Date of Birth" class="input" required>
                        </div>

                        <div class="flex gap-10">
                            <h1 class="pt-3 font-medium pb-2">Entrance Exam :</h1>
                            <h1 class="pt-3 font-medium pb-2">Category :</h1>
                        </div>
                        <div class="flex gap-10">
                            <div>
                                <select name="Entrance Exam"
                                        class="rounded-lg text-center p-2 bg-[#1d4275] text-white font-semibold"
                                        required>
                                    <option value="EAMCET" class="bg-white text-black">EAMCET</option>
                                    <option value="ECET" class="bg-white text-black">ECET</option>
                                    <option value="ICET" class="bg-white text-black">ICET</option>
                                    <option value="PGECET" class="bg-white text-black">PGECET</option>
                                </select>
                            </div>
                            <div>
                                <select name="Category"
                                        class="rounded-lg text-center p-2 bg-[#1d4275] text-white font-semibold"
                                        required>
                                    <option value="OC" class="bg-white text-black">OC</option>
                                    <option value="BC-A" class="bg-white text-black">BC-A</option>
                                    <option value="BC-B" class="bg-white text-black">BC-B</option>
                                    <option value="BC-C" class="bg-white text-black">BC-C</option>
                                    <option value="BC-D" class="bg-white text-black">BC-D</option>
                                    <option value="BC-E" class="bg-white text-black">BC-E</option>
                                    <option value="SC" class="bg-white text-black">SC</option>
                                    <option value="ST" class="bg-white text-black">ST</option>
                                    <option value="PH" class="bg-white text-black">PH</option>
                                    <option value="NCC" class="bg-white text-black">NCC</option>
                                    <option value="CAP" class="bg-white text-black">CAP</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="md:w-1/2">
                        <div class="pt-10">
                            <div>
                                <h1 class="font-medium pb-2">Aadhar Number :</h1>
                            </div>
                            <div class="grid grid-cols-1 pt-2">
                                <input type="text" name="Aadhar Number" placeholder="Aadhar Number"
                                       class="border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg"
                                       required>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 pt-4">
                            <h1 class="font-medium pb-2">Parent's Aadhar Number :</h1>
                            <input type="text" name="Parent Aadhar Number" placeholder="Parent Aadhar Number"
                                   class="border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg"
                                   required>
                        </div>
                        <div class="grid grid-cols-1 pt-4">
                            <h1 class="font-medium pb-2">Parent's Mobile Number :</h1>
                            <input type="tel" name="Parent Mobile Number" placeholder="Parent Mobile Number"
                                   class="border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg"
                                   required>
                        </div>
                        <div class="grid grid-cols-1 pt-4">
                            <h1 class="font-medium pb-2">Email ID :</h1>
                            <input type="email" name="Email ID" placeholder="Email ID"
                                   class="border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg"
                                   required>
                        </div>
                        <div class="grid grid-cols-1 pt-4">
                            <h1 class="font-medium pb-2">Address :</h1>
                            <textarea name="Address" rows="4" placeholder="Address"
                                      class="border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg"
                                      required></textarea>
                        </div>
                        <div class="grid grid-cols-1 pt-4">
                            <h1 class="font-medium pb-2">Additional Information :</h1>
                            <textarea name="Additional Information" rows="4" placeholder="Additional Information"
                                      class="border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg"></textarea>
                        </div>
                        <div class="grid grid-cols-1 pt-4">
                            <input type="submit" value="Submit"
                                   class="bg-[#1d4275] hover:bg-[#1b3c6b] text-white py-2 px-4 rounded-lg cursor-pointer font-semibold">
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<script>
    import {onMount} from "svelte";

    onMount(() => {
        document.getElementById('registration-form').addEventListener('submit', function (event) {
            event.preventDefault();
            var form = event.target;

            var formData = new FormData(form);

            fetch(form.action, {
                method: 'POST',
                body: formData
            }).then(function (response) {
                if (response.ok) {
                    alert('Successfully submitted your application')
                    window.location.href = '/';
                } else {
                    alert('There was a problem with the submission. Please try again.');
                }
            }).catch(function (error) {
                console.error('Error:', error);
                alert('There was a problem with the submission. Please try again.');
            });
        });
    })

</script>
