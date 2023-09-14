import { UsersListItem } from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList, StyledTitle } from './UsersList.styles';

export const UsersList = ({ users }) => {
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
