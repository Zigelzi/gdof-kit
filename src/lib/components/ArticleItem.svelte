<script>
    import { page } from '$app/stores';

	export let article;
</script>

<div class="pv-m">
	<a href="{$page.route.id}/{article.slug}">
		<h2 class="fw-bold fs-heading-m">{article.title}</h2>
		<p>{article.excerpt}</p>
	</a>
</div>
<style>
    a,
    a:visited {
        color: var(--grey-600);
        text-decoration: none;
    }
</style>
