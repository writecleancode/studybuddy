import { Link, Navigate, useParams } from 'react-router-dom';
import { StudentsList } from 'components/organisms/StudentsList/StudentsList';
import { useStudents } from 'hooks/useStudents';
import { GroupWrapper, TitleWrapper, Wrapper } from './Dashboard.styles';
import { StyledTitle } from 'components/atoms/StyledTitle/StyledTitle';

export const Dashboard = () => {
	const { groups } = useStudents();
	const { id } = useParams();

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
