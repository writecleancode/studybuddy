import { Link, Navigate, useParams } from 'react-router-dom';
import { StudentsList } from 'components/organisms/StudentsList/StudentsList';
import { useStudents } from 'hooks/useStudents';
import { GroupWrapper, TitleWrapper, Wrapper } from './Dashboard.styles';
import { StyledTitle } from 'components/atoms/StyledTitle/StyledTitle';
import { useEffect, useState } from 'react';

export const Dashboard = () => {
	const [groups, setGroups] = useState([]);
	const { getGroups } = useStudents();
	const { id } = useParams();

	useEffect(() => {
		(async () => {
			const groups = await getGroups();
			setGroups(groups);
		})();
	}, [getGroups]);

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
				<StudentsList />
			</GroupWrapper>
		</Wrapper>
	);
};
