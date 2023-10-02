import { StyledAverage } from '../StudentsListItem/StudentsListItem.styles';
import { BigStyledTitle, StyledBigAverage, StyledDetails, StyledInfo, StyledLabel, StyledSubjectInfo, Wrapper } from './StudentDetails.styles';

export const StudentDetails = ({ student }) => {
	return (
		<Wrapper>
			<StyledBigAverage $average={student.average}>{student.average}</StyledBigAverage>
			<BigStyledTitle>{student.name}</BigStyledTitle>
			<StyledDetails>
				<StyledLabel>Course:</StyledLabel>
				<StyledInfo $isBig>{student.course}</StyledInfo>
				<StyledLabel>Average grades:</StyledLabel>
				{student.grades.map(({ subject, average }) => (
					<StyledSubjectInfo key={subject}>
						<StyledInfo>{subject}</StyledInfo>
						<StyledAverage $average={average}>{average}</StyledAverage>
					</StyledSubjectInfo>
				))}
			</StyledDetails>
		</Wrapper>
	);
};
