export const prerender = true;
export const ssr = false;

// +layout.js// +layout.js
// +layout.js
// +layout.js
export const load = async ({ fetch }) => {
    try {
      // Fetch data from the API
      const response = await fetch("https://test-delta-snowy.vercel.app/get-me");
      const data = await response.json();
  
      console.log('Received data:', data);  // Check what you are receiving from the API
  
      // Return globalVar directly
      return { globalVar: data.value }; // globalVar should be passed directly
    } catch (error) {
      console.error("Failed to fetch global variable:", error);
      return { globalVar: false }; // Default to false if there is an error
    }
  };
  
  
  
  