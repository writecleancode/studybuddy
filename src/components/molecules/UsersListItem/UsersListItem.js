import PropTypes from 'prop-types';

export const UsersListItem = ({ userData: { name, average, attendance = '0%' } }) => {
	return (
		<li>
			<div>{average}</div>
			<div>
				<p>{name}</p>
				<p>attendance: {attendance}</p>
			</div>
			<button>X</button>
		</li>
	);
};

UsersListItem.propTypes = {
	userData: PropTypes.shape({
		name: PropTypes.string.isRequired,
		average: PropTypes.string.isRequired,
		attendance: PropTypes.string,
	}),
};
