import { users as usersData } from 'data/users';
import { UsersListItem } from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList, Wrapper } from './UsersList.styles';
import { useState } from 'react';

export const UsersList = () => {
	const [users, setUsers] = useState(usersData);

	const deleteUser = name => {
		const filteredUsers = users.filter(user => user.name !== name);
		setUsers(filteredUsers);
	};

	return (
		<Wrapper>
			<StyledList>
				{users.map(userData => {
					return <UsersListItem key={userData.name} userData={userData} deleteUser={deleteUser} />;
				})}
			</StyledList>
		</Wrapper>
	);
};
