import { useContext, useReducer } from 'react';
import { UsersContext } from 'providers/UsersProvider';
import { StyledTitle } from 'components/atoms/StyledTitle/StyledTitle';
import { FormField } from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';

const initialFormState = {
	name: '',
	attendance: '',
	average: '',
	consent: false,
	error: '',
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'INPUT CHANGE':
			return {
				...state,
				[action.field]: action.value,
			};
		case 'CLEAR VALUES':
			return initialFormState;
		case 'CONSENT TOGGLE':
			return {
				...state,
				consent: !state.consent,
			};
		case 'THROW ERROR':
			return {
				...state,
				error: action.errorValue,
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
		if (formValues.consent) {
			handleAddUser(formValues);
			dispatch({ type: 'CLEAR VALUES' });
		} else {
			dispatch({ type: 'THROW ERROR', errorValue: 'You need to give consent' });
		}
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
			<FormField
				label='Consent'
				id='consent'
				name='consent'
				type='checkbox'
				value={formValues.consent}
				onChange={() => {
					dispatch({ type: 'CONSENT TOGGLE' });
				}}
			/>
			<Button type='submit'>Add</Button>
			{formValues.error ? <p>{formValues.error}</p> : null}
		</ViewWrapper>
	);
};
