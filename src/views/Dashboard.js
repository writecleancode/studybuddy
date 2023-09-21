import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { UsersList } from 'components/organisms/UsersList/UsersList';

export const Dashboard = () => {
	const [students, setStudents] = useState([]);
	const [groups, setGroups] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		axios
			.get('/groups')
			.then(({ data }) => setGroups(data.groups))
			.catch(err => console.log(err));
	}, []);

	useEffect(() => {
		axios
			.get(`/students/${id}`)
			.then(({ data }) => setStudents(data.students))
			.catch(err => console.log(err));
	}, [id]);

	return (
		<ViewWrapper>
			<nav>
				{groups.map(group => (
					<Link key={group} to={`/group/${group}`}>{group}</Link>
				))}
			</nav>
			<UsersList users={students} />
		</ViewWrapper>
	);
};
