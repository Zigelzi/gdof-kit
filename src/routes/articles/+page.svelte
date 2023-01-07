<script>
	import ArticleItem from "$lib/components/ArticleItem.svelte";
	export let data;

	let articles = data.posts;
</script>

<div class="container">
	<div class="pv-l">
		<h1 class="fw-bold fs-heading-l">Articles</h1>
	</div>
	{#each articles as article, id}
		<ArticleItem article={article} />
	{/each}
</div>
