import PropTypes from 'prop-types';
import { StyledTitle } from 'components/atoms/StyledTitle/StyledTitle';
import { FormField } from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';

export const AddUser = ({ handleAddUser, formValues, handleInputChange }) => {
	return (
		<ViewWrapper as='form' onSubmit={handleAddUser}>
			<StyledTitle>Add new student</StyledTitle>
			<FormField label='Name' id='name' name='name' value={formValues.name} onChange={handleInputChange} />
			<FormField
				label='Attendance'
				id='attendance'
				name='attendance'
				value={formValues.attendance}
				onChange={handleInputChange}
			/>
			<FormField label='Average' id='average' name='average' value={formValues.average} onChange={handleInputChange} />
			<Button type='submit'>Add</Button>
		</ViewWrapper>
	);
};

AddUser.propTypes = {
	handleAddUser: PropTypes.func.isRequired,
	formValues: PropTypes.shape({
		name: PropTypes.string.isRequired,
		attendance: PropTypes.string,
		average: PropTypes.string.isRequired,
	}),
	handleInputChange: PropTypes.func.isRequired,
};
