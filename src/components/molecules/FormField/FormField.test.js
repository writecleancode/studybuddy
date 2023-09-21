import { renderWithProviders } from 'helpers/renderWithProviders';
import { FormField } from './FormField';

describe('Form Field', () => {
	it('Renders the component', () => {
		renderWithProviders(<FormField label='name' name='name' id='name' onChange={() => {}} />);
	});
});
