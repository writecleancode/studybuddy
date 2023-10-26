import { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useStudents } from 'hooks/useStudents';
import { useModal } from 'hooks/useModal';
import { useGetGroupsQuery } from 'store';
import { StudentsList } from 'components/organisms/StudentsList/StudentsList';
import { StyledTitle } from 'components/atoms/StyledTitle/StyledTitle';
import { Modal } from 'components/organisms/Modal/Modal';
import { StudentDetails } from 'components/molecules/StudentDetails/StudentDetails';
import { GroupWrapper, TitleWrapper, Wrapper } from './Dashboard.styles';

export const Dashboard = () => {
	const [currentStudent, setCurrentStudent] = useState(null);
	const { getStudentById } = useStudents();
	const { id } = useParams();
	const { isOpen, handleOpenModal, handleCloseModal } = useModal();
	const { data, isLoading } = useGetGroupsQuery();

	const handleOpenStudentDetails = async id => {
		const student = await getStudentById(id);
		setCurrentStudent(student);
		handleOpenModal();
	};

	if (isLoading) {
		return (
			<Wrapper>
				<TitleWrapper>Loading...</TitleWrapper>
			</Wrapper>
		);
	}

	if (!id && data.groups.length > 0) return <Navigate to={`/group/${data.groups[0].id}`} />;

	return (
		<Wrapper>
			<TitleWrapper>
				<StyledTitle as='h2'>Group {id}</StyledTitle>
				<nav>
					{data.groups.map(({ id }) => (
						<Link key={id} to={`/group/${id}`}>
							{id}{' '}
						</Link>
					))}
				</nav>
			</TitleWrapper>
			<GroupWrapper>
				<StudentsList handleOpenStudentDetails={handleOpenStudentDetails} />
				<Modal isOpen={isOpen} handleClose={handleCloseModal}>
					<StudentDetails student={currentStudent} />
				</Modal>
			</GroupWrapper>
		</Wrapper>
	);
};
