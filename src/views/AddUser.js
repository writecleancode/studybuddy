import { useContext } from 'react';
import { UsersContext } from 'providers/UsersProvider';
import { StyledTitle } from 'components/atoms/StyledTitle/StyledTitle';
import { FormField } from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { useForm } from 'hooks/useForm';

const initialFormState = {
	name: '',
	attendance: '',
	average: '',
	consent: false,
	error: '',
};

export const AddUser = () => {
	const { handleAddUser } = useContext(UsersContext);
	const { formValues, handleInputChange, handleClearForm, handleThrowError, handleToggleConsent } =
		useForm(initialFormState);

	const handleSubmitUser = e => {
		e.preventDefault();
		if (formValues.consent) {
			handleAddUser(formValues);
			handleClearForm(initialFormState);
		} else {
			handleThrowError('You need to give consent');
		}
	};

	return (
		<ViewWrapper as='form' onSubmit={handleSubmitUser}>
			<StyledTitle>Add new student</StyledTitle>
			<FormField label='Name' id='name' name='name' value={formValues.name} onChange={handleInputChange} />
			<FormField label='Attendance' id='attendance' name='attendance' value={formValues.attendance} onChange={handleInputChange} />
			<FormField label='Average' id='average' name='average' value={formValues.average} onChange={handleInputChange} />
			<FormField label='Consent' id='consent' name='consent' type='checkbox' checked={formValues.consent} onChange={handleToggleConsent}
			/>
			<Button type='submit'>Add</Button>
			{formValues.error ? <p>{formValues.error}</p> : null}
		</ViewWrapper>
	);
};
