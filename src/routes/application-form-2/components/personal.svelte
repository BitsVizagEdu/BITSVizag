<body class="min-h-screen lg:py-20 py-0 bg-gray-100">
  <div class="container mx-auto">
    <div class="flex flex-col lg:flex-row bg-white rounded-xl mx-auto shadow-2xl overflow-hidden">

      <!-- Left Section - Form -->
      <div class="w-full  p-10 px-12">
        <form id="registrationForm" action="https://script.google.com/macros/s/AKfycbyOZOhXjlOazhsjU38pqY0usanIuDjn86GO7TXyRo1uy_1L0J65fA5gqbhZJFIBm_qBdQ/exec" method="POST" class="flex md:flex-row flex-col gap-10 ">
          <div  class="md:w-1/2">
            <h2 class="text-4xl mb-4 font-semibold">Registration Form</h2>
          <p class="mb-4">
            Enhance registration efficiency by filling out the form Online.
          </p>
          <p class="mb-3 font-bold underline">Personal Details</p>

          <!-- SSC Details -->
          <h1 class="mt-4 font-medium pb-2">Academic Details of the Student:</h1>
          <h1 class="mt-4 font-medium pb-2">SSC:</h1>
          <div class="grid grid-cols-2 gap-5 pt-3">
            <input type="text" required placeholder="Year of Passing" name="SSC_Year_of_Passing" class="border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg">
            <input type="text" required placeholder="Institution Name" name="SSC_Institution_Name" class="border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg">
          </div>

          <div class="grid grid-cols-2 gap-5 pt-3">
            <input type="text" required placeholder="Board/University" name="SSC_Board_University" class="border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg">
            <input type="text" required placeholder="Medium of Instruction" name="SSC_Medium_of_Instruction" class="border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg">
          </div>

          <div class="grid grid-cols-2 gap-5 pt-3">
            <input type="text" required placeholder="Marks Obtained" name="SSC_Marks_Obtained" class="border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg">
            <input type="text" required placeholder="% of Marks" name="SSC_Percentage_of_Marks" class="border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg">
          </div>

          <div class="grid grid-cols-2 gap-5 pt-3">
            <input type="text" required placeholder="Grade" name="SSC_Grade" class="border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg">
          </div>

          <!-- Inter/+2/Diploma Details -->
          <h1 class="mt-4 font-medium pb-2">Inter/+2/Diploma:</h1>
          <div class="grid grid-cols-2 gap-5 pt-3">
            <input type="text" required placeholder="Year of Passing" name="Inter_Year_of_Passing" class="border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg">
            <input type="text" required placeholder="Institution Name" name="Inter_Institution_Name" class="border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg">
          </div>

          <div class="grid grid-cols-2 gap-5 pt-3">
            <input type="text" required placeholder="Board/University" name="Inter_Board_University" class="border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg">
            <input type="text" required placeholder="Medium of Instruction" name="Inter_Medium_of_Instruction" class="border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg">
          </div>

          <div class="grid grid-cols-2 gap-5 pt-3">
            <input type="text" required placeholder="Marks Obtained" name="Inter_Marks_Obtained" class="border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg">
            <input type="text" required placeholder="% of Marks" name="Inter_Percentage_of_Marks" class="border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg">
          </div>

          <div class="grid grid-cols-2 gap-5 pt-3">
            <input type="text" required placeholder="Grade" name="Inter_Grade" class="border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg">
          </div>
          </div>

          <div class="md:w-1/2">
            <!-- UG/PG Details -->
          <h1 class="mt-4 font-medium pb-2">UG/PG:</h1>
          <div class="grid grid-cols-2 gap-5 pt-3">
            <input type="text" required placeholder="Year of Passing" name="UGPG_Year_of_Passing" class="border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg">
            <input type="text" required placeholder="Institution Name" name="UGPG_Institution_Name" class="border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg">
          </div>

          <div class="grid grid-cols-2 gap-5 pt-3">
            <input type="text" required placeholder="Board/University" name="UGPG_Board_University" class="border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg">
            <input type="text" required placeholder="Medium of Instruction" name="UGPG_Medium_of_Instruction" class="border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg">
          </div>

          <div class="grid grid-cols-2 gap-5 pt-3">
            <input type="text" required placeholder="Marks Obtained" name="UGPG_Marks_Obtained" class="border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg">
            <input type="text" required placeholder="% of Marks" name="UGPG_Percentage_of_Marks" class="border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg">
          </div>

          <div class="grid grid-cols-2 gap-5 pt-3">
            <input type="text" required placeholder="Grade" name="UGPG_Grade" class="border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg">
          </div>

          <!-- Identification Marks -->
          <h1 class="mt-4 font-medium pb-2">Identification Marks:</h1>
          <div class="grid grid-cols-2 gap-5 pt-3">
            <input type="text" required placeholder="Identification Mark 1" name="Identification_Mark_1" class="border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg">
            <input type="text" required placeholder="Identification Mark 2" name="Identification_Mark_2" class="border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg">
          </div>

          <!-- Guardian Contact -->
          <h1 class="mt-4 font-medium pb-2">Guardian Contact:</h1>
          <div class="grid grid-cols-2 gap-5 pt-3">
            <input type="text" required placeholder="Local Guardian Telephone No." name="Local_Guardian_Telephone_No" class="border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg">
            <input type="text" required placeholder="Land Line" name="Land_Line" class="border border-gray-400 py-1 px-2 placeholder:text-sm placeholder:font-medium rounded-lg">
          </div>

          <!-- Terms and Conditions -->
          <div class="mt-5">
            <input type="checkbox" required class="border border-gray-400" id="termsCheckbox">
            <span>
              I accept the <a href="#" class="text-purple-500 font-semibold">Terms of Use</a> & <a href="#" class="text-purple-500 font-semibold">Privacy Policy</a>
            </span>
          </div>

          <!-- Submit Button -->
          <div class="mt-5">
            <button id="submitButton" class="w-full bg-[#397fe2] py-3 text-center text-white rounded-xl hover:bg-[#1D4275] transition-all ease-in-out duration-300" type="submit">
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

      <!-- Right Section - Placeholder for Future Content -->


    </div>
  </div>

  <!-- FontAwesome CDN for icons -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/js/all.min.js"></script>
</body>

<script>
  import {writable} from "svelte/store";

  const isLoading = writable(false)
  import {onMount} from "svelte";

  import { page } from '$app/stores';

  let queryParams = $page.data.queryParams;

  onMount(() => {
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
      isLoading.set(true)
      event.preventDefault();
      var form = event.target;

      // Create a FormData object from the form
      var formData = new FormData(form);

      formData.set("Application ID", queryParams.id)

      // Send the form data to the Google Apps Script
      fetch(form.action, {
        method: 'POST',
        body: formData
      }).then(function(response) {
        isLoading.set(false)
        if (response.ok) {
          window.location.href = '/application-form-3?' + Object.keys(queryParams)
                  .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(queryParams[key]))
                  .join('&');
        } else {
          alert('There was a problem with the submission. Please try again.');
        }
      }).catch(function(error) {
        isLoading.set(false)
        console.error('Error:', error);
        alert('There was a problem with the submission. Please try again.');
      });
    });
  })

</script>
