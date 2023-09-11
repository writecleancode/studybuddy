import PropTypes from 'prop-types';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { UsersList } from 'components/organisms/UsersList/UsersList';

export const Dashboard = ({ users, deleteUser }) => {
	return (
		<ViewWrapper>
			<UsersList users={users} deleteUser={deleteUser} />
		</ViewWrapper>
	);
};

Dashboard.propTypes = {
	users: PropTypes.arrayOf(PropTypes.shape()),
	deleteUser: PropTypes.func,
};
