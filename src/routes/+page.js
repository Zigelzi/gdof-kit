import { GraphQLClient, gql } from 'graphql-request';

export async function load() {
	const hygraph = new GraphQLClient(
		'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clc0aiadr0qx601teap7oha4h/master'
	);

	const query = gql`
		query Events {
			events {
				title
				startDate
				endDate
				venue {
					name
					address
					city
				}
				description
				meetupLink
			}
		}
	`;

	const events = await hygraph.request(query);
	return events;
}
