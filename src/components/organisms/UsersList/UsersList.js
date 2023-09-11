import PropTypes from 'prop-types';
import { UsersListItem } from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList, StyledTitle } from './UsersList.styles';

export const UsersList = ({ users, deleteUser }) => {
	return (
		<>
			<StyledList>
				<StyledTitle>Student's list</StyledTitle>
				{users.map(userData => {
					return <UsersListItem key={userData.name} userData={userData} deleteUser={deleteUser} />;
				})}
			</StyledList>
		</>
	);
};

UsersList.propTypes = {
	users: PropTypes.array,
	deleteUser: PropTypes.func,
};
