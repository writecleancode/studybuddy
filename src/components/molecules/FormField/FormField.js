import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Input } from 'components/atoms/Input/Input';
import { Label } from 'components/atoms/Label/Label';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

export const FormField = forwardRef(({ label, name, id, type = 'text', value, onChange, ...props }, ref) => {
	return (
		<Wrapper>
			<Label htmlFor={id}>{label}</Label>
			<Input name={name} id={id} type={type} value={value} onChange={onChange} data-testid={label} ref={ref} {...props} />
		</Wrapper>
	);
});

FormField.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	type: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
	onChange: PropTypes.func,
};
