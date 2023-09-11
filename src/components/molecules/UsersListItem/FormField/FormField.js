import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Input } from 'components/atoms/Input/Input';
import { Label } from 'components/atoms/Label/Label';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

export const FormField = ({ label, name, id, type = 'string', value, onChange, ...props }) => {
	return (
		<Wrapper>
			<Label htmlFor={id}>{label}</Label>
			<Input name={name} id={id} type={type} value={value} onChange={onChange} />
		</Wrapper>
	);
};

FormField.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	type: PropTypes.string,
	value: PropTypes.string,
	onChage: PropTypes.func,
};
