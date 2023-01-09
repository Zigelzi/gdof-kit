<script>
	import ArticleItem from "$lib/components/ArticleItem.svelte";
	export let data;

	let articles = data.posts;
</script>

<div class="container">
	<div class="pt-l pb-m">
		<h1 class="fs-heading-m">Articles</h1>
	</div>
	{#each articles as article, id}
		<ArticleItem article={article} />
	{/each}
</div>
