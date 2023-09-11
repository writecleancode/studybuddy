import { users as usersData } from 'data/users';
import { UsersListItem } from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList, StyledTitle, Wrapper } from './UsersList.styles';
import { useState } from 'react';
import { FormField } from 'components/molecules/UsersListItem/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';

export const UsersList = () => {
	const [users, setUsers] = useState(usersData);

	const deleteUser = name => {
		const filteredUsers = users.filter(user => user.name !== name);
		setUsers(filteredUsers);
	};

	return (
		<>
			<Wrapper>
				<StyledTitle>Add new student</StyledTitle>
				<FormField label='Name' id='name' name='name' />
				<FormField label='Attendance' id='attendance' name='attendance' />
				<FormField label='Average' id='average' name='average' />
				<Button>Add</Button>
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
