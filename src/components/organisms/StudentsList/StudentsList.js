import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useStudents } from 'hooks/useStudents';
import { StudentsListItem } from 'components/molecules/StudentsListItem/StudentsListItem';
import { StyledList, StyledTitle } from './StudentsList.styles';

export const StudentsList = ({ handleOpenStudentDetails }) => {
	const [students, setStudents] = useState([]);
	const { getStudentsByGroup } = useStudents();
	const { id } = useParams();

	useEffect(() => {
		(async () => {
			const students = await getStudentsByGroup(id);
			setStudents(students);
		})();
	}, [getStudentsByGroup, id]);

	return (
		<>
			<StyledTitle>Student's list</StyledTitle>
			<StyledList>
				{students.map(userData => {
					return <StudentsListItem key={userData.name} userData={userData} onClick={() => {handleOpenStudentDetails(userData.id)}} />;
				})}
			</StyledList>
		</>
	);
};
