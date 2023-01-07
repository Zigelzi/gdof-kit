<script>
    export let data;

    let article = data.post;
    let publishedDate = new Date(article.publishedAt).toLocaleDateString('fi');
</script>

<div class="container">
    <h1 class="text-heading-m">{article.title}</h1>
    <p>{article.author.name} - {publishedDate}</p>
    <div>
        {@html article.content.html}
    </div>
</div>
