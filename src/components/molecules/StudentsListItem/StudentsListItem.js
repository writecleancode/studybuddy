import PropTypes from 'prop-types';
import { UserShape } from 'types';
import { StyledInfo } from 'components/atoms/StyledInfo/StyledInfo';
import { StyledListItem, StyledAverage } from './StudentsListItem.styles';

export const StudentsListItem = ({ userData: { name, average, attendance = '0%' }, ...props }) => {

	return (
		<StyledListItem {...props}>
			<StyledAverage $average={average}>{average}</StyledAverage>
			<StyledInfo name={name} attendance={attendance} />
		</StyledListItem>
	);
};

StudentsListItem.propTypes = {
	userData: PropTypes.shape(UserShape),
};
