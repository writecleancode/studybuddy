import { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useStudents } from 'hooks/useStudents';
import { useModal } from 'hooks/useModal';
import { StudentsList } from 'components/organisms/StudentsList/StudentsList';
import { StyledTitle } from 'components/atoms/StyledTitle/StyledTitle';
import { Modal } from 'components/organisms/Modal/Modal';
import { StudentDetails } from 'components/molecules/StudentDetails/StudentDetails';
import { GroupWrapper, TitleWrapper, Wrapper } from './Dashboard.styles';

const mockStudent = {
	id: '1',
	name: 'Adam Romański',
	attendance: '39%',
	average: '2.3',
	group: 'A',
	course: 'Business Philosophy',
	grades: [
		{
			subject: 'Business Philosophy',
			average: '3.3',
		},
		{
			subject: 'Marketing',
			average: '4.7',
		},
		{
			subject: 'Modern Economy',
			average: '2.5',
		},
	],
};

export const Dashboard = () => {
	const [groups, setGroups] = useState([]);
	const [currentStudent, setCurrentStudent] = useState([]);
	const { getGroups, getStudentById } = useStudents();
	const { id } = useParams();
	const { isOpen, handleOpenModal, handleCloseModal } = useModal();

	useEffect(() => {
		(async () => {
			const groups = await getGroups();
			setGroups(groups);
		})();
	}, [getGroups]);

	const handleOpenStudentDetails = async id => {
		const student = await getStudentById(id);
		setCurrentStudent(student);
		handleOpenModal();
	};

	if (!id && groups.length > 0) return <Navigate to={`/group/${groups[0]}`} />;

	return (
		<Wrapper>
			<TitleWrapper>
				<StyledTitle as='h2'>Group {id}</StyledTitle>
				<nav>
					{groups.map(group => (
						<Link key={group} to={`/group/${group}`}>
							{group}
						</Link>
					))}
				</nav>
			</TitleWrapper>
			<GroupWrapper>
				<StudentsList handleOpenStudentDetails={handleOpenStudentDetails} />
				<Modal isOpen={isOpen} handleClose={handleCloseModal}>
					<StudentDetails student={mockStudent} />
				</Modal>
			</GroupWrapper>
		</Wrapper>
	);
};
