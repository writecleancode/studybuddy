import '@testing-library/jest-dom';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';
import { AddUser } from './AddUser';
import { Dashboard } from './Dashboard';

describe('Form Field 2', () => {
	it('Renders the component', () => {
		renderWithProviders(
			<>
				<AddUser />
				<Dashboard />
			</>
		);
		fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Karolina Węgrzyn' } });
		fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '92%' } });
		fireEvent.change(screen.getByTestId('Average'), { target: { value: '4.6' } });
		fireEvent.click(screen.getByText('Add'));
		screen.getByText('Karolina Węgrzyn');
	});
});
