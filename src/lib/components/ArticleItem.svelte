<script>
    import { page } from '$app/stores';
    import Link from './Link.svelte';

	export let article;

    let published = new Date(article.publishedAt).toLocaleDateString('fi');
</script>

<div class="pt-s">
    <p class="article-authored">{article.author.name} wrote on {published}</p>
	<a href="{$page.route.id}/{article.slug}">
		<h2 class="fw-bold fs-heading-m pt-s">{article.title}</h2>
	</a>
    <p class="pt-xs pb-s">{article.excerpt}</p>
    <Link href="{$page.route.id}/{article.slug}" inNewTab={false}>Read more</Link>
</div>
<style>
    a,
    a:visited {
        color: var(--grey-600);
        text-decoration: none;
    }

    .article-authored {
        font-size: var(--fs-400);
        color: var(--grey-400);
    }
</style>
