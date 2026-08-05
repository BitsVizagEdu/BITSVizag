// vite.config.js
import { sveltekit } from "file:///c:/Users/rangu/BITSVizag/node_modules/@sveltejs/kit/src/exports/vite/index.js";
var vite_config_default = {
  plugins: [sveltekit()],
  server: {
    port: 5173,
    strictPort: true,
    // Windows file-watcher: use polling so HMR doesn't miss saves
    watch: {
      usePolling: true,
      interval: 100
    },
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
      // Show build errors as an overlay in the browser
      overlay: true
    },
    // Avoids spurious "file not found" errors on Windows
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
    // Pre-bundle heavy CJS deps so first-load is instant
    include: [
      "aos",
      "gsap",
      "swiper",
      "lenis",
      "@studio-freight/lenis",
      "@splidejs/splide",
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJjOlxcXFxVc2Vyc1xcXFxyYW5ndVxcXFxCSVRTVml6YWdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcImM6XFxcXFVzZXJzXFxcXHJhbmd1XFxcXEJJVFNWaXphZ1xcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vYzovVXNlcnMvcmFuZ3UvQklUU1ZpemFnL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgc3ZlbHRla2l0IH0gZnJvbSAnQHN2ZWx0ZWpzL2tpdC92aXRlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRwbHVnaW5zOiBbc3ZlbHRla2l0KCldLFxuXHRzZXJ2ZXI6IHtcblx0XHRwb3J0OiA1MTczLFxuXHRcdHN0cmljdFBvcnQ6IHRydWUsXG5cdFx0Ly8gV2luZG93cyBmaWxlLXdhdGNoZXI6IHVzZSBwb2xsaW5nIHNvIEhNUiBkb2Vzbid0IG1pc3Mgc2F2ZXNcblx0XHR3YXRjaDoge1xuXHRcdFx0dXNlUG9sbGluZzogdHJ1ZSxcblx0XHRcdGludGVydmFsOiAxMDBcblx0XHR9LFxuXHRcdHdhcm11cDoge1xuXHRcdFx0Y2xpZW50RmlsZXM6IFtcblx0XHRcdFx0Jy4vc3JjL3JvdXRlcy8rcGFnZS5zdmVsdGUnLFxuXHRcdFx0XHQnLi9zcmMvcm91dGVzLytsYXlvdXQuc3ZlbHRlJyxcblx0XHRcdFx0Jy4vc3JjL2xpYi9jb21wb25lbnRzL25hdmJhci5zdmVsdGUnLFxuXHRcdFx0XHQnLi9zcmMvbGliL2NvbXBvbmVudHMvbWlkZGxlbmF2LnN2ZWx0ZScsXG5cdFx0XHRcdCcuL3NyYy9saWIvY29tcG9uZW50cy9mb290ZXIuc3ZlbHRlJyxcblx0XHRcdFx0Jy4vc3JjL2xpYi9jb21wb25lbnRzL01vYmlsZUhlYWRlci5zdmVsdGUnXG5cdFx0XHRdXG5cdFx0fSxcblx0XHRobXI6IHtcblx0XHRcdC8vIFNob3cgYnVpbGQgZXJyb3JzIGFzIGFuIG92ZXJsYXkgaW4gdGhlIGJyb3dzZXJcblx0XHRcdG92ZXJsYXk6IHRydWVcblx0XHR9LFxuXHRcdC8vIEF2b2lkcyBzcHVyaW91cyBcImZpbGUgbm90IGZvdW5kXCIgZXJyb3JzIG9uIFdpbmRvd3Ncblx0XHRmczoge1xuXHRcdFx0c3RyaWN0OiBmYWxzZVxuXHRcdH1cblx0fSxcblx0YnVpbGQ6IHtcblx0XHRyb2xsdXBPcHRpb25zOiB7XG5cdFx0XHRvdXRwdXQ6IHtcblx0XHRcdFx0bWFudWFsQ2h1bmtzOiAoaWQpID0+IHtcblx0XHRcdFx0XHRpZiAoaWQuaW5jbHVkZXMoJ25vZGVfbW9kdWxlcycpKSB7XG5cdFx0XHRcdFx0XHQvLyBBbmltYXRpb24gbGlicmFyaWVzIGluIGEgc2VwYXJhdGUgbGF6eSBjaHVua1xuXHRcdFx0XHRcdFx0aWYgKGlkLmluY2x1ZGVzKCdnc2FwJykgfHwgaWQuaW5jbHVkZXMoJ2xvY29tb3RpdmUtc2Nyb2xsJykpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuICdhbmltYXRpb24nO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKGlkLmluY2x1ZGVzKCdhb3MnKSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gJ2Fvcyc7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvLyBTY3JvbGwgbGlicmFyeSBpbiBpdHMgb3duIGNodW5rIChsb2FkZWQgYXN5bmMpXG5cdFx0XHRcdFx0XHRpZiAoaWQuaW5jbHVkZXMoJ2xlbmlzJykpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuICdzY3JvbGwnO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Ly8gU3BsaWRlIGNhcm91c2VsXG5cdFx0XHRcdFx0XHRpZiAoaWQuaW5jbHVkZXMoJ3NwbGlkZScpKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiAnY2Fyb3VzZWwnO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Ly8gRmxvd2JpdGUgJiBVSSB1dGlsaXRpZXNcblx0XHRcdFx0XHRcdGlmIChpZC5pbmNsdWRlcygnZmxvd2JpdGUnKSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gJ3VpJztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHJldHVybiAndmVuZG9yJztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdGNzc0NvZGVTcGxpdDogdHJ1ZSxcblx0XHRyZXBvcnRDb21wcmVzc2VkU2l6ZTogZmFsc2UsXG5cdFx0Ly8gTWluaWZ5IGZvciBwcm9kdWN0aW9uXG5cdFx0bWluaWZ5OiAnZXNidWlsZCcsXG5cdFx0dGFyZ2V0OiAnZXMyMDIwJyxcblx0XHRzb3VyY2VtYXA6IGZhbHNlXG5cdH0sXG5cdG9wdGltaXplRGVwczoge1xuXHRcdC8vIFByZS1idW5kbGUgaGVhdnkgQ0pTIGRlcHMgc28gZmlyc3QtbG9hZCBpcyBpbnN0YW50XG5cdFx0aW5jbHVkZTogW1xuXHRcdFx0J2FvcycsXG5cdFx0XHQnZ3NhcCcsXG5cdFx0XHQnc3dpcGVyJyxcblx0XHRcdCdsZW5pcycsXG5cdFx0XHQnQHN0dWRpby1mcmVpZ2h0L2xlbmlzJyxcblx0XHRcdCdAc3BsaWRlanMvc3BsaWRlJyxcblx0XHRcdCd0YWlsd2luZC1tZXJnZScsXG5cdFx0XHQnY29va2llJ1xuXHRcdF0sXG5cdFx0Ly8gRG9uJ3QgcmUtc2NhbiBvbiBldmVyeSBzZXJ2ZXIgcmVzdGFydFxuXHRcdGZvcmNlOiBmYWxzZVxuXHR9LFxuXHQvLyBGYXN0ZXIgQ1NTIHByb2Nlc3NpbmcgaW4gZGV2XG5cdGNzczoge1xuXHRcdGRldlNvdXJjZW1hcDogZmFsc2Vcblx0fVxufTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBa1EsU0FBUyxpQkFBaUI7QUFFNVIsSUFBTyxzQkFBUTtBQUFBLEVBQ2QsU0FBUyxDQUFDLFVBQVUsQ0FBQztBQUFBLEVBQ3JCLFFBQVE7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLFlBQVk7QUFBQTtBQUFBLElBRVosT0FBTztBQUFBLE1BQ04sWUFBWTtBQUFBLE1BQ1osVUFBVTtBQUFBLElBQ1g7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNQLGFBQWE7QUFBQSxRQUNaO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0EsS0FBSztBQUFBO0FBQUEsTUFFSixTQUFTO0FBQUEsSUFDVjtBQUFBO0FBQUEsSUFFQSxJQUFJO0FBQUEsTUFDSCxRQUFRO0FBQUEsSUFDVDtBQUFBLEVBQ0Q7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNOLGVBQWU7QUFBQSxNQUNkLFFBQVE7QUFBQSxRQUNQLGNBQWMsQ0FBQyxPQUFPO0FBQ3JCLGNBQUksR0FBRyxTQUFTLGNBQWMsR0FBRztBQUVoQyxnQkFBSSxHQUFHLFNBQVMsTUFBTSxLQUFLLEdBQUcsU0FBUyxtQkFBbUIsR0FBRztBQUM1RCxxQkFBTztBQUFBLFlBQ1I7QUFDQSxnQkFBSSxHQUFHLFNBQVMsS0FBSyxHQUFHO0FBQ3ZCLHFCQUFPO0FBQUEsWUFDUjtBQUVBLGdCQUFJLEdBQUcsU0FBUyxPQUFPLEdBQUc7QUFDekIscUJBQU87QUFBQSxZQUNSO0FBRUEsZ0JBQUksR0FBRyxTQUFTLFFBQVEsR0FBRztBQUMxQixxQkFBTztBQUFBLFlBQ1I7QUFFQSxnQkFBSSxHQUFHLFNBQVMsVUFBVSxHQUFHO0FBQzVCLHFCQUFPO0FBQUEsWUFDUjtBQUNBLG1CQUFPO0FBQUEsVUFDUjtBQUFBLFFBQ0Q7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0EsY0FBYztBQUFBLElBQ2Qsc0JBQXNCO0FBQUE7QUFBQSxJQUV0QixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixXQUFXO0FBQUEsRUFDWjtBQUFBLEVBQ0EsY0FBYztBQUFBO0FBQUEsSUFFYixTQUFTO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUE7QUFBQSxJQUVBLE9BQU87QUFBQSxFQUNSO0FBQUE7QUFBQSxFQUVBLEtBQUs7QUFBQSxJQUNKLGNBQWM7QUFBQSxFQUNmO0FBQ0Q7IiwKICAibmFtZXMiOiBbXQp9Cg==
