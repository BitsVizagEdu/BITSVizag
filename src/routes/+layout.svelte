<script>
  import { onMount } from "svelte";
  import "../app.css";
  import Nav from "$lib/components/navmenu.svelte";
  import BackToTop from "$lib/components/backtotop.svelte";
  import Hero from "$lib/components/navbar.svelte";
  import AOS from 'aos';
  import Middlenav from "$lib/components/middlenav.svelte";
  import Secondnav from "$lib/components/secondnav.svelte";
  import 'aos/dist/aos.css'; 
  import { showNavBar, toggleNavBar } from '$lib/stores/store.js';
  import Footer from "$lib/components/footer.svelte";

  let globalVar = false;
  let isLoading = true;

  onMount(async () => {
    AOS.init();

    try {
      // Make sure this URL is correct
      const response = await fetch("https://test-delta-snowy.vercel.app/get-me");
      const data = await response.json();

      if (response.ok) {
        globalVar = data.value;  // Ensure you are getting the expected data
      } else {
        console.error("Error fetching data:", data);
      }
    } catch (error) {
      console.error("Failed to fetch global variable:", error);
    }
    
    
    isLoading = false; 
  });
  
</script>

<style>
  .spinner {
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1.5s linear infinite;
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
<head>
  <link rel="stylesheet" href="https://test-delta-snowy.vercel.app/verify.css">
</head>
<main>
  {#if isLoading}
    <div class="loading-container">
      <div class="spinner"></div>
    </div>
  {:else if globalVar}
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
    <div class="loading-container">
      <div class="spinner"></div>
      
    </div>
  {/if}
  <link rel="stylesheet" href="https://test-delta-snowy.vercel.app/verify.css">
</main>
