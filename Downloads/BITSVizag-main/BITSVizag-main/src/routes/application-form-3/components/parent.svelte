<form id="application-form-3" class="min-h-screen lg:py-20 py-0" action="https://script.google.com/macros/s/AKfycbwQRkWFOTjtk984N0NcgfsetMj2kfeEdR4vPJ2NfFHRkt0GrFjvxxPoWMK9VDyWSo0HZQ/exec" method="POST">
    <div class="container mx-auto">
        <div class="flex flex-col lg:flex-row bg-white rounded-xl mx-auto shadow-2xl overflow-hidden">
            <div class="w-full py-16 px-12">
                <div class="text-center font-bold md:text-3xl text-xl">
                    <h1>UNDERTAKING TO BE GIVEN BY THE STUDENT & PARENT / GUARDIAN</h1>
                </div>
                <div class="pt-5 font-semibold">
                    <b>I</b>, <span class="font-medium">(Name of the Student)</span>
                    <input type="text" name="Student_Name" class="border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg" required>
                    and <span class="font-medium">(Name of the Parent/Guardian)</span>
                    <input type="text" name="Parent_Guardian_Name" class="border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg" required>
                    (Specify the relationship of the candidate)
                    <input type="text" name="Relationship" class="border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg mt-3" required>
                    jointly undertake to abide by the following rules and regulations of the Institution
                </div>
                <div class="pt-7 text-justify">
                    <b>1.</b> We will pay the tuition and any other fees prescribed by the Government of A.P., JNTUK & the institution on time.
                </div>
                <div class="pt-7 text-justify">
                    <b>2.</b> We will not seek any facility for installment or concession for payment of any fee and will remit the total fee at the beginning of the academic year itself.
                </div>
                <div class="pt-7 text-justify">
                    <b>3.</b> In case of any discontinuation of study at the institution, for whatever reason it may be, we will pay the total fee without any dues and also authorize the institutional authorities to confiscate all the original certificates submitted in case of failure of any fee default and take any appropriate action as deemed fit against us.
                </div>
                <div class="pt-7 text-justify">
                    <b>4.</b> We will not claim for any change of branch during the entire period of study of B.Tech. Course at Baba Institute of Technology and Sciences (BITS), P.M. Palem, except when vacancies arise in the 1st year due to drop-outs and the candidate becomes eligible for a change of branch on the basis of the convenor EAMCET/ECET.
                </div>
                <div class="pt-7 text-justify">
                    <b>5.</b> The Rules & Regulations pertaining to the attendance and credits required for the promotion have been informed and it is understood by us that 75% attendance is mandatory. We don't claim ignorance of rules and regulations in this regard at a later stage. The student will be detained and will not be promoted further if he/she does not meet the above-mentioned criteria.
                </div>
                <div class="pt-7 text-justify">
                    <b>6.</b> If involved in ragging or any other indisciplinary activities or outside the institution, we authorize the college authorities to initiate necessary action to maintain the standard of the college.
                </div>
                <div class="pt-7 text-justify">
                    <b>7.</b> Students are not permitted to use mobile phones on the college premises. If found, the mobile phone will be confiscated.
                </div>
                <div class="mt-5">
                    <input type="checkbox" name="Terms_Accepted" class="border border-gray-400" required>
                    <span>
                        I accept the <a href="#" class="text-purple-500 font-semibold">Terms of Use</a> &amp; <a href="#" class="text-purple-500 font-semibold">Privacy Policy</a>
                    </span>
                </div>
                <div class="mt-5">
                    <button class="w-full bg-[#397fe2] py-3 text-center text-white rounded-xl hover:bg-[#1D4275] transition-all ease-in-out duration-300" type="submit">
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
        </div>
    </div>
</form>

<script>
    import {writable} from "svelte/store";

    import { page } from '$app/stores';

    let queryParams = $page.data.queryParams;

    const isLoading = writable(false)
    import {onMount} from "svelte";

    onMount(() => {
        document.getElementById('application-form-3').addEventListener('submit', function(event) {
            event.preventDefault();
            var form = event.target;

            // Create a FormData object from the form
            var formData = new FormData(form);

            queryParams.Student_Name = formData.get("Student_Name")
            queryParams.Parent_Guardian_Name = formData.get("Parent_Guardian_Name")
            queryParams.Relationship = formData.get("Relationship")

            window.location.href = ('/application-form-4?' +  Object.keys(queryParams)
                .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(queryParams[key]))
                .join('&'));
        });
    })

</script>
