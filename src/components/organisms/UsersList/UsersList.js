import { users as usersData } from 'data/users';
import { UsersListItem } from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList, Wrapper } from './UsersList.styles';
import { useEffect, useState } from 'react';

const mockAPI = success => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (usersData) {
				resolve([...usersData]);
			} else {
				reject({ message: 'Error' });
			}
		}, 2000);
	});
};

export const UsersList = () => {
	const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const deleteUser = name => {
		const filteredUsers = users.filter(user => user.name !== name);
		setUsers(filteredUsers);
	};

	useEffect(() => {
		setIsLoading(true);
		mockAPI()
			.then(data => {
				setUsers(data);
				setIsLoading(false);
			})
			.catch(err => console.log(err));
	}, []);

	return (
		<Wrapper>
			<StyledList>
				<h1>{isLoading ? 'Loading...' : "Student's list"}</h1>
				{users.map(userData => {
					return <UsersListItem key={userData.name} userData={userData} deleteUser={deleteUser} />;
				})}
			</StyledList>
		</Wrapper>
	);
};
