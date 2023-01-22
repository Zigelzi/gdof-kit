<script>
	import { astToHtmlString } from '@graphcms/rich-text-html-renderer';
	export let data;

	const article = data.article;
	const publishedDate = new Date(article.publishedAt).toLocaleDateString('fi');

	const renderers = {
		h2: ({ children }) => `<h2 class="fw-bold fs-heading-m pt-m pb-m">${children}</h2>`,
		a: ({ children, href }) => `<a href=${href} class="text-accent-500 text-link">${children}</a>`,
		p: ({ children }) => `<p class="pb-m">${children}</p>`
	};
	function addContent(article) {
		const content = article.content.raw.children;
		const rendered = astToHtmlString({ content: content, renderers: renderers });
		return { ...article, rendered };
	}

	let postsWithContent = addContent(article);

	async function like() {
		let res = await fetch(`http://localhost:5000/likes/${article.id}`, {
			method: 'POST'
		});

		console.log(res);
	}
</script>

<div class="container">
	<h1 class="text-heading-l pt-l">{postsWithContent.title}</h1>
	<p class="pb-m text-grey-400">{article.author.name} - {publishedDate}</p>
	<button on:click={like}>Like</button>
	<div class="pb-m">
		{@html postsWithContent.rendered}
	</div>
</div>
