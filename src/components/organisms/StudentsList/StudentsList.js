import { useParams } from 'react-router-dom';
import { useStudents } from 'hooks/useStudents';
import { UsersListItem } from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList, StyledTitle } from './StudentsList.styles';

export const StudentsList = ({ users = [] }) => {
	const { id } = useParams();
	const { students } = useStudents({ groupId: id });

	return (
		<>
			<StyledTitle>Student's list</StyledTitle>
			<StyledList>
				{students.map(userData => {
					return <UsersListItem key={userData.name} userData={userData} />;
				})}
			</StyledList>
		</>
	);
};
