import { useContext, useReducer, useState } from 'react';
import { UsersContext } from 'providers/UsersProvider';
import { StyledTitle } from 'components/atoms/StyledTitle/StyledTitle';
import { FormField } from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';

const initialFormState = {
	name: '',
	attendance: '',
	average: '',
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'INPUT CHANGE':
			return {
				...state,
				[action.field]: action.value,
			};
		default:
			return state;
	}
};

export const AddUser = () => {
	const [formValues, dispatch] = useReducer(reducer, initialFormState);
	const { handleAddUser } = useContext(UsersContext);

	const handleInputChange = e => {
		dispatch({
			type: 'INPUT CHANGE',
			field: e.target.name,
			value: e.target.value,
		});
	};

	const handleSubmitUser = e => {
		e.preventDefault();
		handleAddUser(formValues);
		// setFormValues(initialFormState);
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
