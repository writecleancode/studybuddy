import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useState } from 'react';

const InputWithButton = () => {
	const [inputValue, setInputValue] = useState('');

	const handleInputChange = e => setInputValue(e.target.value);

	return (
		<>
			<input value={inputValue} onChange={handleInputChange} name='Name' id='name' placeholder='Enter your name' />
			<button disabled={!inputValue}>Submit</button>
		</>
	);
};

describe('Input with Button', () => {
	it('Render the component', () => {
		render(<InputWithButton />);
		screen.getByText('Submit');
	});

	it('Properly handles value change', () => {
		render(<InputWithButton />);
		const input = screen.getByPlaceholderText('Enter your name');
		const button = screen.getByText('Submit');
		expect(button).toBeDisabled();
		fireEvent.change(input, { target: { value: 'Karolina' } });
		expect(input).toHaveValue('Karolina');
		expect(button).not.toBeDisabled();
	});
});
