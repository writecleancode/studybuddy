import { render } from 'test-utils';
import { screen } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { NewsSection, query } from './NewsSection';

const mock = new MockAdapter(axios);

describe('News Section', () => {
	afterEach(() => {
		mock.reset();
	});

	it('Displays error if articles are not loaded correctly', async () => {
		mock
			.onPost('https://graphql.datocms.com/', {
				query: query,
			})
			.reply(500);
		render(<NewsSection />);
		await screen.findByText(/Sorry/);
	});

	it('Displays the articles', async () => {
		mock
			.onPost('https://graphql.datocms.com/', {
				query: query,
			})
			.reply(200, { data: { allArticles: [{ id: 1, title: 'Test', category: 'test', content: 'test' }] } });
		render(<NewsSection />);
		await screen.findAllByText(/Test/);
	});
});
