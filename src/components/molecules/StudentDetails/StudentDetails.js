import { StyledTitle } from 'components/atoms/StyledTitle/StyledTitle';
import { StyledAverage } from '../StudentsListItem/StudentsListItem.styles';

export const StudentDetails = ({ student }) => {
	return (
		<div>
			<StyledTitle>
				{student.name} | Group {student.group}
			</StyledTitle>
			<p>{student.name}</p>
			<StyledAverage $average={student.average}>{student.average}</StyledAverage>
			<p>Attendance: {student.attendance}</p>
		</div>
	);
};
