import { users } from 'data/users';
import { UsersListItem } from 'components/molecules/UsersListItem/UsersListItem';

export const UsersList = () => {
	return (
		<div>
			<ul>
				{users.map(userData => {
					return <UsersListItem key={userData.name} userData={userData} />;
				})}
			</ul>
		</div>
	);
};
