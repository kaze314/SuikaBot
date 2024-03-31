<script lang="ts">
	import card_img from '../../static/card.png?format=png&imgWidth=1200&enhanced';
	const title = 'Suika World';
	const url = 'https://suika.world';
	const card = url + card_img.img.src;

	const description =
		'The official Suika World, by Ottomated. Play the Suika Game (Watermelon Game) online for free with multiplayer, PvP, and singleplayer mode! Now no longer in alpha!';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="title" content={title} />
	<meta name="description" content={description} />

	<meta property="og:type" content="website" />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={card} />

	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={url} />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:image" content={card} />
</svelte:head>
