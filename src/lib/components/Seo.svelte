<script>
	export let title;
	export let description;
	export let type = 'website';
	export let url;
	export let imageUrl = 'https://bitsvizag.edu.in/hero-bits.png';
	export let siteName = 'BITS Vizag';
	/** @type {Record<string, unknown> | null} */
	export let structuredData = null;
	/** @type {Array<{name: string, item: string}> | null} */
	export let breadcrumbs = null;

	$: breadcrumbSchema = breadcrumbs
		? {
				'@context': 'https://schema.org',
				'@type': 'BreadcrumbList',
				itemListElement: breadcrumbs.map((b, i) => ({
					'@type': 'ListItem',
					position: i + 1,
					name: b.name,
					item: b.item
				}))
		  }
		: null;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={url} />

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

	{#if breadcrumbSchema}
		<script type="application/ld+json">
			{JSON.stringify(breadcrumbSchema, null, 2)}
		</script>
	{/if}
</svelte:head>
