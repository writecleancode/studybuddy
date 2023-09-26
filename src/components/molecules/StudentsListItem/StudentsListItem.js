import { useContext } from 'react';
import PropTypes from 'prop-types';
import { UserShape } from 'types';
import { UsersContext } from 'providers/UsersProvider';
import { StyledInfo } from 'components/atoms/StyledInfo/StyledInfo';
import { DeleteButton } from 'components/atoms/DeleteButton/DeleteButton';
import { StyledListItem, StyledAverage } from './StudentsListItem.styles';

export const StudentsListItem = ({ userData: { name, average, attendance = '0%' } }) => {
	const { deleteUser } = useContext(UsersContext);

	return (
		<StyledListItem>
			<StyledAverage $average={average}>{average}</StyledAverage>
			<StyledInfo name={name} attendance={attendance} />
			<DeleteButton onClick={() => deleteUser(name)} />
		</StyledListItem>
	);
};

StudentsListItem.propTypes = {
	userData: PropTypes.shape(UserShape),
};
