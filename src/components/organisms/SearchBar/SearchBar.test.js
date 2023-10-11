import { render } from 'test-utils';
import { fireEvent, screen } from '@testing-library/react';
import 'jest-styled-components';
import { SearchBar } from './SearchBar';

describe('Search Bar', () => {
	it('Renders the component', () => {
		render(<SearchBar />);
		screen.getByText('Teacher');
		screen.getByPlaceholderText('find student');
	});

	it('Displays users when search aphrase is matching', async () => {
		render(<SearchBar />);
		const input = screen.getByPlaceholderText('find student');
		fireEvent.change(input, { target: { value: 'Ko' } });
		await screen.findByText('Tatyana Koch');
	});
});
