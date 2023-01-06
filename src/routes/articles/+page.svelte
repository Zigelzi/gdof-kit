<script>
	import { page } from '$app/stores';
	export let data;

	let posts = data.posts;
</script>

<div class="container">
	<div class="pv-l">
		<h1 class="fw-bold fs-heading-l">Articles</h1>
	</div>
	{#each posts as post, id}
		<div class="pv-m">
			<a href="{$page.route.id}/{post.slug}">
				<h2 class="fw-bold fs-heading-m">{post.title}</h2>
				<p>{post.excerpt}</p>
			</a>
		</div>
	{/each}
</div>
