import { useContext, useState } from 'react';
import { UsersContext } from './Root';
import { StyledTitle } from 'components/atoms/StyledTitle/StyledTitle';
import { FormField } from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';

const initialFormState = {
	name: '',
	attendance: '',
	average: '',
};

export const AddUser = () => {
	const [formValues, setFormValues] = useState(initialFormState);
	const context = useContext(UsersContext);

	const handleInputChange = e => {
		setFormValues({
			...formValues,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmitUser = e => {
		e.preventDefault();
		context.handleAddUser(formValues);
		setFormValues(initialFormState);
	};

	return (
		<ViewWrapper as='form' onSubmit={handleSubmitUser}>
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