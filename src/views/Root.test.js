import { fireEvent, render, screen, waitFor } from 'test-utils';
import Root from './Root';

describe('Root component', () => {
	it('Renders the component as unathenticated user', () => {
		render(<Root />);
		screen.getByLabelText('Login');
	});

	it('Displays error message when wrong credentails are passed', async () => {
		render(<Root />);
		const login = screen.getByLabelText('Login');
		const password = screen.getByLabelText('Password');

		fireEvent.change(login, { target: { value: 'wrongLogin' } });
		fireEvent.change(password, { target: { value: 'incorrectPassword' } });

		fireEvent.click(screen.getByText('Sign in'));

		await waitFor(() => screen.getByText('Invalid email or password'));
	});

	it('Displays athenticated application', async () => {
		render(<Root />);
		const login = screen.getByLabelText('Login');
		const password = screen.getByLabelText('Password');

		fireEvent.change(login, { target: { value: 'teacher@studybuddy.com' } });
		fireEvent.change(password, { target: { value: '1234' } });

		fireEvent.click(screen.getByText('Sign in'));

		await waitFor(() => screen.getByText('Dashboard'));
	});
});
