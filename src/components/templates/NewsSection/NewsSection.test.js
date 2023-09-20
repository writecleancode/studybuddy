import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { renderWithProviders } from 'helpers/renderWithProviders';
import { NewsSection } from './NewsSection';
import { screen } from '@testing-library/react';

const mock = new MockAdapter(axios);

const query = `
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
`;

mock.onPost('/', { query }).reply(500);

describe('News Section', () => {
	it('Displays error if articles are not loaded correctly', async () => {
		renderWithProviders(<NewsSection />)
        await screen.findByText(/Sorry/)
	});
});
