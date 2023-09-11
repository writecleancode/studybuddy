import { users as usersData } from 'data/users';
import { UsersListItem } from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList, StyledTitle, Wrapper } from './UsersList.styles';
import { useEffect, useState } from 'react';
import { FormField } from 'components/molecules/UsersListItem/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';

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
					<StyledTitle>{isLoading ? 'Loading...' : "Student's list"}</StyledTitle>
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
