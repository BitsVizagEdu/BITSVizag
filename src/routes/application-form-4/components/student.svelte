<form id="application-form-4" class="min-h-screen lg:py-20 py-0"
      action="https://script.google.com/macros/s/AKfycbwQRkWFOTjtk984N0NcgfsetMj2kfeEdR4vPJ2NfFHRkt0GrFjvxxPoWMK9VDyWSo0HZQ/exec"
      method="POST">
    <div class="container mx-auto">
        <div class="flex flex-col lg:flex-row  bg-white rounded-xl mx-auto shadow-2xl overflow-hidden">
            <div class="w-full py-16 px-12">
                <div class="text-center font-bold lg:text-3xl text-xl">
                    <h1>PAY TO PROCEED APPLICATION</h1>
                </div>
                <div class="flex align-center justify-center items-center">
                    <img src="/qr.png" alt="" class="md:w-[30vw] ">
                </div>
                <div class="pt-2 text-center">

                    <b> Please scan the QR code to make the payment.</b>
                    <br>
                    <b class="font-light md:font-bold text-sm md:text-base"> Enter the UTR (Unique Transaction
                        Reference) ID to complete the application.</b>
                    <br>
                    <br>
                    <input required type="text" placeholder="ENTER UTR" name="UTR_NO"
                           class="border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium placeholder:text-center rounded-lg">

                </div>
                <div class="pt-7 text-center font-bold lg:text-3xl text-xl">
                    <h1>UNDERTAKING TO BE GIVEN BY THE STUDENT</h1>
                </div>

                <div class="pt-7 text-justify">
                    <b>1.</b> I promise that i will conduct myself in an exemplary manner and shall do all necessary
                    things to uphold the prestige and reputation of BITS. I will not involve in any strikes,
                    demonstrations and in any other unlawful activities, both iinside and outside the Campus.
                </div>
                <div class="pt-7 text-justify">
                    I Understand any violation, or my part of the disciplinary measures prescribed by the Institute will
                    attract imposition of fines, suspension and even rustication or any other punishment deemed fit by
                    the authorities, and shall abide by decision that would be taken by the authorities.
                </div>
                <div class="pt-7 text-justify">
                    <b>2.</b> I Understand that ragging is inhuman and punishable offence under law. I promise that I
                    will noot involve in any form of ragging. I clearly understand that any person (may be myself) who
                    so ever is direclty or in any form of ragging. I clearly understand that any person (may be myself)
                    who so ever is direclty or indirectly involved in RAGGING is subject to serve punishment, can be
                    booked in a criminal case, and can be arrested.
                </div>
                <div class="pt-7 text-justify">
                    <b>3.</b> I will strictly abide by all the rules and regulations of the Institution.
                </div>
                <div class="pt-7 text-justify">
                    I ensure that my Son/Daughter will not violate any rule prescribed by Govt., University &
                    Institution. Also I ensure that my Son/Daughter will maintain discipline and will attend regulary to
                    the classes and academic works assigned by the faculty.
                </div>
                <div class="mt-5">
                    <input type="checkbox" name="Terms_Accepted" class="border border-gray-400" required>
                    <span>
                  I accept the <a href="#" class="text-purple-500 font-semibold">Terms of Use</a> &  <a href="#"
                                                                                                        class="text-purple-500 font-semibold">Privacy Policy</a>
                </span>
                </div>
                <div class="mt-5">
                    <button class="w-full bg-[#397fe2] py-3 text-center text-white rounded-xl hover:bg-[#1D4275] transition-all ease-in-out duration-300"
                            type="submit">
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
                                <p class="pr-4">Submit</p>
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
    import {page} from '$app/stores';

    let queryParams = $page.data.queryParams;
    import {onMount} from "svelte";
    import {writable} from "svelte/store";

    var isLoading = writable(false)

    onMount(() => {
        document.getElementById('application-form-4').addEventListener('submit', function (event) {
            isLoading.set(true)
            event.preventDefault();

            var form = event.target;

            var formData = new FormData(form);

            formData.set("Application ID", queryParams.id)
            formData.set("Student_Name", queryParams.Student_Name)
            formData.set("Parent_Guardian_Name", queryParams.Parent_Guardian_Name)
            formData.set("Relationship", queryParams.Relationship)

            fetch(form.action, {
                method: 'POST',
                body: formData
            }).then(async function (response) {
                if (response.ok) {
                    await fetch("/api/storeForm", {
                        method: "POST", body: JSON.stringify({
                            name: queryParams.name, branch: queryParams.branch,
                            mobile: queryParams.mobile,
                            reference: queryParams.reference, id: queryParams.id,
                        }), headers: {"Content-Type": "application/json"}
                    })
                    isLoading.set(false)
                    alert("Successfully submitted form")
                    window.location.href = '/';
                } else {
                    isLoading.set(false)
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
