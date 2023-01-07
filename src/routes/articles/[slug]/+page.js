import { GraphQLClient, gql } from 'graphql-request';

export async function load({ params }) {
	const hygraph = new GraphQLClient(
		'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clc0aiadr0qx601teap7oha4h/master'
	);
	const query = gql`
		query GetPostBySlug($slug: String!) {
			post(where: {slug: $slug}) {
				title,
				author {
					name
				}
				content {
					html,
                    raw
				},
                publishedAt
			}
		}
	`;

    const variables = {
        slug: params.slug
    }
	const post = await hygraph.request(query, variables);
	return post;
}