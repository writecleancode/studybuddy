import '@testing-library/jest-dom';
import { renderWithThemeProvider } from 'helpers/renderWithThemeProvider';
import { FormField } from './FormField';

describe('Form Field', () => {
	it('Render the component', () => {
		renderWithThemeProvider(<FormField label='name' name='name' id='name' />);
	});
});
