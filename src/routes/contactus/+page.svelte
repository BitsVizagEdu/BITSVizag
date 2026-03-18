<script>
    import Seo from '$lib/components/Seo.svelte';
    import Contactus from './components/contactus.svelte';

    import Footer from '$lib/components/footer.svelte';

    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact BITS Vizag',
        description: 'Get in touch with BITS Vizag. Find our address, phone number, and email.',
        url: 'https://bitsvizag.com/contactus',
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': 'https://bitsvizag.com/contactus'
        }
    };
</script>

<Seo
    title="Contact Us - BITS Vizag"
    description="Contact BITS Vizag for admissions, inquiries, and more. Find our location and contact details."
    url="https://bitsvizag.com/contactus"
    siteName="BITS Vizag"
    {structuredData}
/>

<Contactus />


