import { users } from 'data/users';
import { UsersListItem } from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList, Wrapper } from './UsersList.styles';

export const UsersList = () => {
	return (
		<Wrapper>
			<StyledList>
				{users.map(userData => {
					return <UsersListItem key={userData.name} userData={userData} />;
				})}
			</StyledList>
		</Wrapper>
	);
};
