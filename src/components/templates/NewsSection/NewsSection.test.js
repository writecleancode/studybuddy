import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { renderWithProviders } from 'helpers/renderWithProviders';
import { NewsSection } from './NewsSection';
import { screen } from '@testing-library/react';

const mock = new MockAdapter(axios);

describe('News Section', () => {
	afterEach(() => {
		mock.reset();
	});

	it('Displays error if articles are not loaded correctly', async () => {
		mock
			.onPost('https://graphql.datocms.com/', {
				query: `
					{
						allArticles {
							id
							title
							category
							content
							image {
								url
								}
							}
						}
					`,
			})
			.reply(500);
		renderWithProviders(<NewsSection />);
		await screen.findByText(/Sorry/);
	});

	it('Displays the articles', async () => {
		mock
			.onPost('https://graphql.datocms.com/', {
				query: `
					{
						allArticles {
							id
							title
							category
							content
							image {
								url
								}
							}
						}
					`,
			})
			.reply(200, { data: { allArticles: [{ id: 1, title: 'Test', category: 'test', content: 'test' }] } });
		renderWithProviders(<NewsSection />);
		await screen.findAllByText(/Test/);
	});
});
