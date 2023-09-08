import { users } from 'data/users';
import { UsersListItem } from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList, Wrapper } from './UsersList.styles';

export const UsersList = () => {
	return (
		<Wrapper>
			<StyledList>
				{users.map((userData, index) => {
					return <UsersListItem key={userData.name} userData={userData} index={index} />;
				})}
			</StyledList>
		</Wrapper>
	);
};
