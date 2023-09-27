import { Link, Navigate, useParams } from 'react-router-dom';
import { StudentsList } from 'components/organisms/StudentsList/StudentsList';
import { useStudents } from 'hooks/useStudents';
import { GroupWrapper, TitleWrapper, Wrapper } from './Dashboard.styles';
import { StyledTitle } from 'components/atoms/StyledTitle/StyledTitle';
import { useEffect, useState } from 'react';
import { useModal } from 'hooks/useModal';

export const Dashboard = () => {
	const [groups, setGroups] = useState([]);
	const { getGroups } = useStudents();
	const { id } = useParams();
	const { Modal, isOpen, handleOpenModal, handleCloseModal } = useModal();

	useEffect(() => {
		(async () => {
			const groups = await getGroups();
			setGroups(groups);
		})();
	}, [getGroups]);

	const handleOpenStudentDetails = id => {
		console.log(id);
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
				{isOpen ? <Modal /> : null}
			</GroupWrapper>
		</Wrapper>
	);
};
