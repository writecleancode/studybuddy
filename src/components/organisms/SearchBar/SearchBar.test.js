import { render } from 'test-utils';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import 'jest-styled-components';
import '@testing-library/jest-dom';
import { setupServer } from 'msw/node';
import { handlers } from 'mocks/handlers';
import { SearchBar } from './SearchBar';

const server = setupServer(...handlers);

describe('Search Bar', () => {
	beforeAll(() => server.listen());
	afterEach(() => server.resetHandlers());
	afterAll(() => server.close());

	it('Renders the component', () => {
		render(<SearchBar />);
		screen.getByText('Teacher');
		screen.getByPlaceholderText('find student');
	});

	it('Displays users when search phrase is matching', async () => {
		render(<SearchBar />);
		const input = screen.getByPlaceholderText('find student');
		fireEvent.change(input, { target: { value: 'ad' } });
		await screen.findByText('Adam Romański');
	});

	it('Hides the results when input is empty', async () => {
		render(<SearchBar />);
		const input = screen.getByPlaceholderText('find student');
		fireEvent.change(input, { target: { value: 'ad' } });
		await screen.findByText('Adam Romański');

		fireEvent.change(input, { target: { value: '' } });
		await waitFor(() => {
			// expect(screen.getByLabelText('results')).not.toBeVisible();
			expect(screen.getByLabelText('results')).toHaveStyleRule('visibility', 'hidden');
		});
	});
});
