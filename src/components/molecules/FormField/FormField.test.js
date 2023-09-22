import { render } from 'test-utils';
import { FormField } from './FormField';

describe('Form Field', () => {
	it('Renders the component', () => {
		render(<FormField label='name' name='name' id='name' onChange={() => {}} />);
	});
});
