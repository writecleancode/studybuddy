import { UsersListItem } from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList, StyledTitle, Wrapper } from './UsersList.styles';

export const UsersList = ({ users, deleteUser }) => {
	return (
		<Wrapper>
			<StyledList>
				<StyledTitle>Student's list</StyledTitle>
				{users.map(userData => {
					return <UsersListItem key={userData.name} userData={userData} deleteUser={deleteUser} />;
				})}
			</StyledList>
		</Wrapper>
	);
};
