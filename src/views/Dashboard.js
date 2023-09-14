import { useContext } from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { UsersList } from 'components/organisms/UsersList/UsersList';
import { UsersContext } from 'providers/UsersProvider';

export const Dashboard = () => {
	const { users } = useContext(UsersContext)

	return (
		<ViewWrapper>
			<UsersList users={users} />
		</ViewWrapper>
	);
};
