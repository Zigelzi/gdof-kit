import { GraphQLClient, gql } from 'graphql-request';

export async function load() {
	const hygraph = new GraphQLClient(
		'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clc0aiadr0qx601teap7oha4h/master'
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
				},
				slug,
				excerpt
			}
		}
	`;

	const posts = await hygraph.request(query);
	return posts;
}
