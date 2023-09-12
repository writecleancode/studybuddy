import PropTypes from 'prop-types';
import { StyledListItem, StyledAverage } from './UsersListItem.styles';
import { StyledInfo } from 'components/atoms/StyledInfo/StyledInfo';
import { DeleteButton } from 'components/atoms/DeleteButton/DeleteButton';
import { UserShape } from 'types';

export const UsersListItem = ({ deleteUser, userData: { name, average, attendance = '0%' } }) => {
	return (
		<StyledListItem>
			<StyledAverage $average={average}>{average}</StyledAverage>
			<StyledInfo name={name} attendance={attendance} />
			<DeleteButton onClick={() => deleteUser(name)} />
		</StyledListItem>
	);
};

UsersListItem.propTypes = {
	userData: PropTypes.shape(UserShape),
	deleteUser: PropTypes.func,
};
