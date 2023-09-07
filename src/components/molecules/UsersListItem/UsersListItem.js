import PropTypes from 'prop-types';
import { StyledListItem } from './UsersListItem.styles';


export const UsersListItem = ({ userData: { name, average, attendance = '0%' } }) => {
	return (
		<StyledListItem>
			<div>{average}</div>
			<div>
				<p>{name}</p>
				<p>attendance: {attendance}</p>
			</div>
			<button>X</button>
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
