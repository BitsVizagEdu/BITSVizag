// src/routes/+layout.js
export const prerender = true;
export const ssr = true; // Enable SSR if you want the fetch to happen server-side

export const load = async ({ fetch }) => {
  let globalVar = false;  // Default value
  let isLoading = true;   // To show a loading state until the fetch completes

  try {
    // Fetch the data directly in the component
    const response = await fetch("https://test-delta-snowy.vercel.app/get-me");
    const data = await response.json();

    // Set globalVar with the fetched value
    globalVar = data.value;
  } catch (error) {
    console.error("Failed to fetch global variable:", error);
    globalVar = false; // Default to false in case of error
  } finally {
    isLoading = false;  // End the loading state once fetching is complete
  }

  // Return the fetched value and loading state to the layout
  return { globalVar, isLoading };
};
