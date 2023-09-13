import { useContext } from 'react';
import { UsersContext } from 'views/Root';
import { UsersListItem } from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList, StyledTitle } from './UsersList.styles';

export const UsersList = () => {
	const { users } = useContext(UsersContext);

	return (
		<>
			<StyledList>
				<StyledTitle>Student's list</StyledTitle>
				{users.map(userData => {
					return <UsersListItem key={userData.name} userData={userData} />;
				})}
			</StyledList>
		</>
	);
};
