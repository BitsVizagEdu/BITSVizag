<script>
    import { onMount } from "svelte";
    import "../app.css";
    import Nav from "$lib/components/navmenu.svelte";
    import BackToTop from '$lib/components/backtotop.svelte';
    import Hero from "$lib/components/navbar.svelte";
    import AOS from 'aos';
    import Middlenav from "$lib/components/middlenav.svelte";
    import Secondnav from "$lib/components/secondnav.svelte";
    import 'aos/dist/aos.css'; 
    import { showNavBar, toggleNavBar } from '$lib/stores/store.js';
    import Footer from "$lib/components/footer.svelte";
  
    let globalVar = false; // Default value
    let isLoading = true;  // To show a loading state until the fetch completes
  
    onMount(async () => {
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
    });
  
    onMount(() => {
      AOS.init(); // Initialize AOS
    });
  </script>
  
  <style>
    .spinner {
      border: 4px solid #f3f3f3; /* Light grey */
      border-top: 4px solid #3498db; /* Blue */
      border-radius: 50%;
      width: 40px;
      height: 40px;
      animation: spin 1.5s linear infinite; /* Continuous spinning */
      margin: 0 auto;
    }
  
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  
    .loading-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
  </style>
  
  <main>
    {#if isLoading}
      <!-- Display the loading spinner while data is being fetched -->
      <div class="loading-container">
        <div class="spinner"></div>
      </div>
    {:else if globalVar} 
      <!-- If globalVar is true -->
      {#if $showNavBar}
      {:else}
        <Hero showNavBar={showNavBar}/>
        <Middlenav/>
        <Secondnav/>
        <BackToTop/>
        <slot />
        <Footer/>
      {/if}
    {:else}  
      <!-- If globalVar is false -->
      <div class="loading-container">
        <div class="spinner"></div>
      </div>  <!-- Empty page -->
    {/if}
  </main>
  