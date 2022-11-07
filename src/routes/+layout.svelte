<script>
    import '$lib/assets/app.css';
    import gdofLogo from '$lib/assets/gdof_controller_clean.svg'
    import gdofLogoWithText from '$lib/assets/gdof_controller_text_clean.svg'
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;700&display=swap" rel="stylesheet">
    <link rel="icon" type="image/svg+xml" href="{gdofLogo}" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta property="og:url" content="https://gdof.netlify.app/">
    <meta property="og:title" content="Game Designers of Finland">
    <meta property="og:description" content="Community for game design enthusiasts">
    <meta property="og:image" content="{gdofLogoWithText}">
    <meta property="og:type" content="website">
    <title>Game Designers of Finland</title>
</svelte:head>

<slot />