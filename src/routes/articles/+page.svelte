<script>
	import { request, gql, GraphQLClient } from 'graphql-request';

	const cmsClient = new GraphQLClient(
		'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clc0aiadr0qx601teap7oha4h/master',
		{ headers: {} }
	);

	const query = gql`
		query Posts {
			posts {
				title
				content {
					markdown
				}
				author {
					name
				}
			}
		}
	`;
	let posts;
	cmsClient.request(query).then((data) => {
		posts = data.posts;
		console.log(posts);
	});
</script>

<div class="article">
	{#each posts as post}
		{post}
	{/each}
</div>
