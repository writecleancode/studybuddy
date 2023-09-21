import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';
import { AddUser } from './AddUser';
import { Dashboard } from './Dashboard';

describe('Add User', () => {
	it('Adds new user to the list', () => {
		renderWithProviders(
			<>
				<AddUser />
				<Dashboard />
			</>
		);
		fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Karolina Węgrzyn' } });
		fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '92%' } });
		fireEvent.change(screen.getByTestId('Average'), { target: { value: '4.6' } });
		fireEvent.click(screen.getByTestId('Consent'))
		fireEvent.click(screen.getByText('Add'));
		screen.getByText('Karolina Węgrzyn');
	});

	it('Prevents adding new user if the consent is not checked', () => {
		renderWithProviders(
			<>
				<AddUser />
				<Dashboard />
			</>
		);
		fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Golfiarz' } });
		fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '92%' } });
		fireEvent.change(screen.getByTestId('Average'), { target: { value: '4.6' } });
		fireEvent.click(screen.getByText('Add'));
		const newUser = screen.queryByText('Golfiarz');
		expect(newUser).not.toBeInTheDocument()
	});
});
