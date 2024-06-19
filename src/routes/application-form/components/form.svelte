<!-- Left Side Form -->
<div class="min-h-screen lg:py-20 py-0">
    <div class="container mx-auto">
        <div class="flex flex-col lg:flex-row bg-white rounded-xl mx-auto shadow-2xl overflow-hidden">
            <div class="w-full  py-16 px-12">
                <h2 class="text-4xl mb-4 font-semibold">Registration Form</h2>
                <p class="mb-4">Enhance registration efficiency by filling out the form Online.</p>
                <p class="mb-3 font-bold underline">Preliminary Section</p>

                <form id="application-form-1"
                      action="https://script.google.com/macros/s/AKfycbz_KOuVJrltef7zkMcLsWHouXe42zTkOv-3REhsRirRBdacRC7wHDaOBjhWOKPj60gYTw/exec"
                      method="POST" class="flex md:flex-row flex-col gap-10 ">
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
                                    <option value="CAP" class="bg-white text-black">CAP</option>
                                </select>
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-5 pt-4 mt-3">
                            <input type="text" name="Aadhar Card Number" placeholder="Aadhar Card Number"
                                   class="border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg"
                                   required>
                            <input type="text" name="Nationality" placeholder="Nationality"
                                   class="border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg"
                                   required>
                        </div>

                        <div class="grid grid-cols-2 gap-5 pt-4">
                            <input type="text" name="Religion" placeholder="Religion"
                                   class="border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg"
                                   required>
                            <input type="text" name="Mother Tongue" placeholder="Mother Tongue"
                                   class="border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg"
                                   required>
                        </div>
                    </div>

                    <div class="md:w-1/2">
                        <h1 class="mt-4 font-medium pb-2">Mode of Transport :</h1>
                        <div class="flex gap-10">
                            <div class="flex gap-8">
                                <div class="flex items-center">
                                    <input id="own-transport" type="radio" name="Transport" value="OWN Transport"
                                           class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                           required>
                                    <label for="own-transport"
                                           class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">OWN
                                        Transport</label>
                                </div>
                                <div class="flex items-center">
                                    <input id="college-bus" type="radio" name="Transport" value="College Bus"
                                           class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                           required>
                                    <label for="college-bus"
                                           class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">College
                                        Bus</label>
                                </div>
                            </div>
                        </div>

                        <h1 class="mt-4 font-medium pb-2">Address :</h1>
                        <div>
                            <input type="text" name="Present Address" placeholder="Present Address"
                                   class="border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg w-full"
                                   required>
                        </div>
                        <div>
                            <input type="email" name="Present Email" placeholder="E-mail ID"
                                   class="mt-3 border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg w-full"
                                   required>
                        </div>
                        <div>
                            <input type="text" name="Present Pincode" placeholder="Pincode"
                                   class="mt-3 border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg w-full"
                                   required>
                        </div>
                        <div>
                            <input type="tel" name="Present Phone" placeholder="Phone No."
                                   class="mt-3 border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg w-full"
                                   required>
                        </div>

                        <h1 class="mt-4 font-medium pb-2">Permanent Address :</h1>
                        <div>
                            <input type="text" name="Permanent Address" placeholder="Permanent Address"
                                   class="border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg w-full"
                                   required>
                        </div>
                        <div>
                            <input type="email" name="Permanent Email" placeholder="E-mail ID"
                                   class="mt-3 border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg w-full"
                                   required>
                        </div>
                        <div>
                            <input type="text" name="Permanent Pincode" placeholder="Pincode"
                                   class="mt-3 border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg w-full"
                                   required>
                        </div>
                        <div>
                            <input type="tel" name="Permanent Phone" placeholder="Phone No."
                                   class="mt-3 border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg w-full"
                                   required>
                        </div>

                        <!-- Reference -->
                        <h1 class="mt-4 font-medium pb-2">Reference:</h1>
                        <div class="grid grid-cols-2 gap-5 pt-3">
                            <input type="text" required placeholder="If Yes Mention his/her Name" name="Reference_Name" class="border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg">
                        </div>

                        <div class="mt-5">
                            <input type="checkbox" name="Terms" class="border border-gray-400" required>
                            <span>
              I accept the <a href="#" class="text-purple-500 font-semibold">Terms of Use</a> & <a href="#"
                                                                                                   class="text-purple-500 font-semibold">Privacy Policy</a>
            </span>
                        </div>

                        <div class="mt-5">
                            <button type="submit"
                                    class={` w-full bg-[#397fe2] py-3 text-center text-white rounded-xl hover:bg-[#1D4275] transition-all ease-in-out duration-300`}>
                                {#if $isLoading === true}
                                    <div class="flex flex-row justify-center items-center">
                                        <div class="inline-block pr-4">
                                            <svg
                                                    class={`animate-spin h-5} w-5 text-white`}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                            >
                                                <circle
                                                        class="opacity-25"
                                                        cx="12"
                                                        cy="12"
                                                        r="10"
                                                        stroke="currentColor"
                                                        stroke-width="4"
                                                ></circle>
                                                <path
                                                        class="opacity-75"
                                                        fill="currentColor"
                                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                ></path>
                                            </svg>
                                        </div>
                                        <p>Processing</p>
                                    </div>
                                {:else}
                                    <div class="flex flex-row justify-center items-center">
                                        <p class="pr-4">Next Step</p>
                                        <i class="fa-solid fa-arrow-right items-center"></i>
                                    </div>
                                {/if}
                            </button>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<style>
    [type="date"] {
        background: #fff url(https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/calendar_2.png) 97% 50% no-repeat;
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
        box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.1);
        width: 190px;
    }
</style>

<script>
    import {writable} from "svelte/store";
    import {v4 as uuidv4} from 'uuid';

    const isLoading = writable(false)
    import {onMount} from "svelte";

    onMount(() => {
        document.getElementById('application-form-1').addEventListener('submit', function (event) {
            isLoading.set(true)
            event.preventDefault();
            var form = event.target;

            // Create a FormData object from the form
            var formData = new FormData(form);

            formData.delete("Terms")

            const name = formData.get("Student Name")
            const branchUG = formData.get("Branch Allotted/Interested UG")
            const branchPG = formData.get("Branch Allotted/Interested PG")

            let branch = "";

            if (branchUG !== "UG") {
                branch = branchUG
            } else {
                branch = branchPG
            }

            const mobile = formData.get("Mobile")
            const reference = formData.get("Reference_Name")
            const data = {
                name,
                branch,
                mobile,
                reference,
                id: "BABA-" + uuidv4().substring(0,8),
            }

            formData.set("Application ID", data.id)

            fetch(form.action, {
                method: 'POST',
                body: formData
            }).then(function (response) {
                isLoading.set(false)
                if (response.ok) {
                    window.location.href = '/application-form-2?' + Object.keys(data)
                        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
                        .join('&');
                } else {
                    alert('There was a problem with the submission. Please try again.');
                }
            }).catch(function (error) {
                isLoading.set(false)
                console.error('Error:', error);
                alert('There was a problem with the submission. Please try again.');
            });
        });
    })

</script>
