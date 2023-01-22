import { GraphQLClient, gql } from 'graphql-request';

export async function load({ fetch, params }) {
	const hygraph = new GraphQLClient(
		'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clc0aiadr0qx601teap7oha4h/master'
	);
	const query = gql`
		query GetPostBySlug($slug: String!) {
			post(where: { slug: $slug }) {
				id
				title
				author {
					name
				}
				content {
					html
					raw
				}
				publishedAt
			}
		}
	`;

	const variables = {
		slug: params.slug
	};
	const articleResponse = await hygraph.request(query, variables);
	const article = articleResponse.post;
	const res = await fetch(`http://localhost:5000/likes/${article.id}`);
	const item = res.json();
	return { article, item };
}
