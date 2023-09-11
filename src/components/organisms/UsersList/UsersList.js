import { users as usersData } from 'data/users';
import { UsersListItem } from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList, StyledTitle, Wrapper } from './UsersList.styles';
import { useState } from 'react';
import { FormField } from 'components/molecules/UsersListItem/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';

export const UsersList = () => {
	const [users, setUsers] = useState(usersData);
	const [formValues, setFormValues] = useState({
		name: '',
		attendance: '',
		average: '',
	});

	const deleteUser = name => {
		const filteredUsers = users.filter(user => user.name !== name);
		setUsers(filteredUsers);
	};

	const handleInputChange = e => {
		setFormValues({
			...formValues,
			[e.target.name]: e.target.value,
		});
	};

	const handleAddUser = e => {
		e.preventDefault();
		const newUser = {
			name: formValues.name,
			attendance: formValues.attendance,
			average: formValues.average,
		};

		setUsers([newUser, ...users]);
	};

	return (
		<>
			<Wrapper as='form' onSubmit={handleAddUser}>
				<StyledTitle>Add new student</StyledTitle>
				<FormField label='Name'
					id='name'
					name='name'
					value={formValues.name}
					onChange={handleInputChange}
				/>
				<FormField
					label='Attendance'
					id='attendance'
					name='attendance'
					value={formValues.attendance}
					onChange={handleInputChange}
				/>
				<FormField
					label='Average'
					id='average'
					name='average'
					value={formValues.average}
					onChange={handleInputChange}
				/>
				<Button type='submit'>Add</Button>
			</Wrapper>
			<Wrapper>
				<StyledList>
					<StyledTitle>Student's list</StyledTitle>
					{users.map(userData => {
						return (
							<UsersListItem key={userData.name} userData={userData} deleteUser={deleteUser} />
						);
					})}
				</StyledList>
			</Wrapper>
		</>
	);
};
