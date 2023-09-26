import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useStudents } from 'hooks/useStudents';
import { StudentsListItem } from 'components/molecules/StudentsListItem/StudentsListItem';
import { StyledList, StyledTitle } from './StudentsList.styles';

export const StudentsList = () => {
	const [students, setStudents] = useState([]);
	const { getStudents } = useStudents();
	const { id } = useParams();

	useEffect(() => {
		(async () => {
			const students = await getStudents(id);
			setStudents(students);
		})();
	}, [getStudents, id]);

	return (
		<>
			<StyledTitle>Student's list</StyledTitle>
			<StyledList>
				{students.map(userData => {
					return <StudentsListItem key={userData.name} userData={userData} />;
				})}
			</StyledList>
		</>
	);
};
