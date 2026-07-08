// vite.config.js
import { sveltekit } from "file:///c:/Users/rangu/BITSVizag/node_modules/@sveltejs/kit/src/exports/vite/index.js";
var vite_config_default = {
  plugins: [sveltekit()],
  server: {
    port: 5173,
    strictPort: true,
    // Faster HMR – use polling only as fallback on Windows
    warmup: {
      clientFiles: [
        "./src/routes/+page.svelte",
        "./src/routes/+layout.svelte",
        "./src/lib/components/navbar.svelte",
        "./src/lib/components/middlenav.svelte",
        "./src/lib/components/footer.svelte",
        "./src/lib/components/MobileHeader.svelte"
      ]
    },
    hmr: {
      // Overlay shows errors as an overlay in the browser
      overlay: true
    },
    // Enable fs.strict: false avoids spurious 'file not found' on Windows
    fs: {
      strict: false
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            if (id.includes("gsap") || id.includes("locomotive-scroll")) {
              return "animation";
            }
            if (id.includes("aos")) {
              return "aos";
            }
            if (id.includes("lenis")) {
              return "scroll";
            }
            if (id.includes("splide")) {
              return "carousel";
            }
            if (id.includes("flowbite")) {
              return "ui";
            }
            return "vendor";
          }
        }
      }
    },
    cssCodeSplit: true,
    reportCompressedSize: false,
    // Minify for production
    minify: "esbuild",
    target: "es2020",
    sourcemap: false
  },
  optimizeDeps: {
    // Pre-bundle all heavy deps so first-load is instant
    include: [
      "aos",
      "gsap",
      "swiper",
      "lenis",
      "@splidejs/splide",
      "@splidejs/svelte-splide",
      "flowbite-svelte",
      "motion",
      "tailwind-merge",
      "cookie"
    ],
    // Don't re-scan on every server restart
    force: false
  },
  // Faster CSS processing in dev
  css: {
    devSourcemap: false
  }
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJjOlxcXFxVc2Vyc1xcXFxyYW5ndVxcXFxCSVRTVml6YWdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcImM6XFxcXFVzZXJzXFxcXHJhbmd1XFxcXEJJVFNWaXphZ1xcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vYzovVXNlcnMvcmFuZ3UvQklUU1ZpemFnL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgc3ZlbHRla2l0IH0gZnJvbSAnQHN2ZWx0ZWpzL2tpdC92aXRlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRwbHVnaW5zOiBbc3ZlbHRla2l0KCldLFxuXHRzZXJ2ZXI6IHtcblx0XHRwb3J0OiA1MTczLFxuXHRcdHN0cmljdFBvcnQ6IHRydWUsXG5cdFx0Ly8gRmFzdGVyIEhNUiBcdTIwMTMgdXNlIHBvbGxpbmcgb25seSBhcyBmYWxsYmFjayBvbiBXaW5kb3dzXG5cdFx0d2FybXVwOiB7XG5cdFx0XHRjbGllbnRGaWxlczogW1xuXHRcdFx0XHQnLi9zcmMvcm91dGVzLytwYWdlLnN2ZWx0ZScsXG5cdFx0XHRcdCcuL3NyYy9yb3V0ZXMvK2xheW91dC5zdmVsdGUnLFxuXHRcdFx0XHQnLi9zcmMvbGliL2NvbXBvbmVudHMvbmF2YmFyLnN2ZWx0ZScsXG5cdFx0XHRcdCcuL3NyYy9saWIvY29tcG9uZW50cy9taWRkbGVuYXYuc3ZlbHRlJyxcblx0XHRcdFx0Jy4vc3JjL2xpYi9jb21wb25lbnRzL2Zvb3Rlci5zdmVsdGUnLFxuXHRcdFx0XHQnLi9zcmMvbGliL2NvbXBvbmVudHMvTW9iaWxlSGVhZGVyLnN2ZWx0ZSdcblx0XHRcdF1cblx0XHR9LFxuXHRcdGhtcjoge1xuXHRcdFx0Ly8gT3ZlcmxheSBzaG93cyBlcnJvcnMgYXMgYW4gb3ZlcmxheSBpbiB0aGUgYnJvd3NlclxuXHRcdFx0b3ZlcmxheTogdHJ1ZVxuXHRcdH0sXG5cdFx0Ly8gRW5hYmxlIGZzLnN0cmljdDogZmFsc2UgYXZvaWRzIHNwdXJpb3VzICdmaWxlIG5vdCBmb3VuZCcgb24gV2luZG93c1xuXHRcdGZzOiB7XG5cdFx0XHRzdHJpY3Q6IGZhbHNlXG5cdFx0fVxuXHR9LFxuXHRidWlsZDoge1xuXHRcdHJvbGx1cE9wdGlvbnM6IHtcblx0XHRcdG91dHB1dDoge1xuXHRcdFx0XHRtYW51YWxDaHVua3M6IChpZCkgPT4ge1xuXHRcdFx0XHRcdGlmIChpZC5pbmNsdWRlcygnbm9kZV9tb2R1bGVzJykpIHtcblx0XHRcdFx0XHRcdC8vIEFuaW1hdGlvbiBsaWJyYXJpZXMgaW4gYSBzZXBhcmF0ZSBsYXp5IGNodW5rXG5cdFx0XHRcdFx0XHRpZiAoaWQuaW5jbHVkZXMoJ2dzYXAnKSB8fCBpZC5pbmNsdWRlcygnbG9jb21vdGl2ZS1zY3JvbGwnKSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gJ2FuaW1hdGlvbic7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAoaWQuaW5jbHVkZXMoJ2FvcycpKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiAnYW9zJztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC8vIFNjcm9sbCBsaWJyYXJ5IGluIGl0cyBvd24gY2h1bmsgKGxvYWRlZCBhc3luYylcblx0XHRcdFx0XHRcdGlmIChpZC5pbmNsdWRlcygnbGVuaXMnKSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gJ3Njcm9sbCc7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvLyBTcGxpZGUgY2Fyb3VzZWxcblx0XHRcdFx0XHRcdGlmIChpZC5pbmNsdWRlcygnc3BsaWRlJykpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuICdjYXJvdXNlbCc7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvLyBGbG93Yml0ZSAmIFVJIHV0aWxpdGllc1xuXHRcdFx0XHRcdFx0aWYgKGlkLmluY2x1ZGVzKCdmbG93Yml0ZScpKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiAndWknO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cmV0dXJuICd2ZW5kb3InO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Y3NzQ29kZVNwbGl0OiB0cnVlLFxuXHRcdHJlcG9ydENvbXByZXNzZWRTaXplOiBmYWxzZSxcblx0XHQvLyBNaW5pZnkgZm9yIHByb2R1Y3Rpb25cblx0XHRtaW5pZnk6ICdlc2J1aWxkJyxcblx0XHR0YXJnZXQ6ICdlczIwMjAnLFxuXHRcdHNvdXJjZW1hcDogZmFsc2Vcblx0fSxcblx0b3B0aW1pemVEZXBzOiB7XG5cdFx0Ly8gUHJlLWJ1bmRsZSBhbGwgaGVhdnkgZGVwcyBzbyBmaXJzdC1sb2FkIGlzIGluc3RhbnRcblx0XHRpbmNsdWRlOiBbXG5cdFx0XHQnYW9zJyxcblx0XHRcdCdnc2FwJyxcblx0XHRcdCdzd2lwZXInLFxuXHRcdFx0J2xlbmlzJyxcblx0XHRcdCdAc3BsaWRlanMvc3BsaWRlJyxcblx0XHRcdCdAc3BsaWRlanMvc3ZlbHRlLXNwbGlkZScsXG5cdFx0XHQnZmxvd2JpdGUtc3ZlbHRlJyxcblx0XHRcdCdtb3Rpb24nLFxuXHRcdFx0J3RhaWx3aW5kLW1lcmdlJyxcblx0XHRcdCdjb29raWUnXG5cdFx0XSxcblx0XHQvLyBEb24ndCByZS1zY2FuIG9uIGV2ZXJ5IHNlcnZlciByZXN0YXJ0XG5cdFx0Zm9yY2U6IGZhbHNlXG5cdH0sXG5cdC8vIEZhc3RlciBDU1MgcHJvY2Vzc2luZyBpbiBkZXZcblx0Y3NzOiB7XG5cdFx0ZGV2U291cmNlbWFwOiBmYWxzZVxuXHR9XG59O1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFrUSxTQUFTLGlCQUFpQjtBQUU1UixJQUFPLHNCQUFRO0FBQUEsRUFDZCxTQUFTLENBQUMsVUFBVSxDQUFDO0FBQUEsRUFDckIsUUFBUTtBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sWUFBWTtBQUFBO0FBQUEsSUFFWixRQUFRO0FBQUEsTUFDUCxhQUFhO0FBQUEsUUFDWjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNBLEtBQUs7QUFBQTtBQUFBLE1BRUosU0FBUztBQUFBLElBQ1Y7QUFBQTtBQUFBLElBRUEsSUFBSTtBQUFBLE1BQ0gsUUFBUTtBQUFBLElBQ1Q7QUFBQSxFQUNEO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTixlQUFlO0FBQUEsTUFDZCxRQUFRO0FBQUEsUUFDUCxjQUFjLENBQUMsT0FBTztBQUNyQixjQUFJLEdBQUcsU0FBUyxjQUFjLEdBQUc7QUFFaEMsZ0JBQUksR0FBRyxTQUFTLE1BQU0sS0FBSyxHQUFHLFNBQVMsbUJBQW1CLEdBQUc7QUFDNUQscUJBQU87QUFBQSxZQUNSO0FBQ0EsZ0JBQUksR0FBRyxTQUFTLEtBQUssR0FBRztBQUN2QixxQkFBTztBQUFBLFlBQ1I7QUFFQSxnQkFBSSxHQUFHLFNBQVMsT0FBTyxHQUFHO0FBQ3pCLHFCQUFPO0FBQUEsWUFDUjtBQUVBLGdCQUFJLEdBQUcsU0FBUyxRQUFRLEdBQUc7QUFDMUIscUJBQU87QUFBQSxZQUNSO0FBRUEsZ0JBQUksR0FBRyxTQUFTLFVBQVUsR0FBRztBQUM1QixxQkFBTztBQUFBLFlBQ1I7QUFDQSxtQkFBTztBQUFBLFVBQ1I7QUFBQSxRQUNEO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNBLGNBQWM7QUFBQSxJQUNkLHNCQUFzQjtBQUFBO0FBQUEsSUFFdEIsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsV0FBVztBQUFBLEVBQ1o7QUFBQSxFQUNBLGNBQWM7QUFBQTtBQUFBLElBRWIsU0FBUztBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUE7QUFBQSxJQUVBLE9BQU87QUFBQSxFQUNSO0FBQUE7QUFBQSxFQUVBLEtBQUs7QUFBQSxJQUNKLGNBQWM7QUFBQSxFQUNmO0FBQ0Q7IiwKICAibmFtZXMiOiBbXQp9Cg==
