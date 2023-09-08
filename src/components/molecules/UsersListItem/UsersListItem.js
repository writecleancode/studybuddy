import PropTypes from 'prop-types';
import { StyledListItem, StyledAverage } from './UsersListItem.styles';
import { StyledInfo } from 'components/atoms/StyledInfo/StyledInfo';
import { DeleteButton } from 'components/atoms/DeleteButton/DeleteButton';

const showIndex = (index) => {
	alert(`This is student #${index + 1}.`)
}

export const UsersListItem = ({ index, userData: { name, average, attendance = '0%' } }) => {
	return (
		<StyledListItem>
			<StyledAverage $average={average}>{average}</StyledAverage>
			<StyledInfo name={name} attendance={attendance} />
			<DeleteButton onClick={() => showIndex(index)} />
		</StyledListItem>
	);
};

UsersListItem.propTypes = {
	userData: PropTypes.shape({
		name: PropTypes.string.isRequired,
		average: PropTypes.string.isRequired,
		attendance: PropTypes.string,
	}),
};
