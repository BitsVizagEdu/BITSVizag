<script>
	export let title;
	export let description;
	export let type = 'website';
	export let url;
	export let imageUrl;
	export let siteName;
	export let structuredData = null;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content={type} />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={imageUrl} />
	<meta property="og:site_name" content={siteName} />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={url} />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:image" content={imageUrl} />

	{#if structuredData}
		<script type="application/ld+json">
			{JSON.stringify(structuredData, null, 2)}
		</script>
	{/if}
</svelte:head>
