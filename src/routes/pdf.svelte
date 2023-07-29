<!-- src/routes/pdf.svelte -->
<script>
    export async function load() {
      // Redirect to the PDF file URL
      return {
        redirect: 'https://bitsvizag.com/wp-content/uploads/2021/08/Student-Satisfaction-Survey-1.pdf'
      };
    }
  </script>
  