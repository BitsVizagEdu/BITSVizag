// src/routes/+layout.js
//export const prerender = true;
export const ssr = true; 

// src/routes/+layout.js



export const load = async ({ fetch }) => {
  let globalVar = false;
  let isLoading = true;

  try {
    const response = await fetch("https://test-delta-snowy.vercel.app/get-me");

    if (response.ok) {
      const data = await response.json();
      globalVar = data?.value ?? false;
    } else {
      console.error("Fetch returned non-OK status:", response.status);
    }
  } catch (error) {
    console.error("Failed to fetch global variable:", error);
    globalVar = false;
  } finally {
    isLoading = false;
  }

  return { globalVar, isLoading };
};
