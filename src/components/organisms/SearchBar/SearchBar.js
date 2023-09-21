import { useEffect, useState } from 'react';
import debounce from 'lodash.debounce';
import { useStudents } from 'hooks/useStudents';
import { Input } from 'components/atoms/Input/Input';
import { SearchBarWrapper, SearchResults, SearchWrapper, StatusInfo } from './SearchBar.styles';

export const SearchBar = () => {
	const [searchPhrase, setSearchPhrase] = useState('');
	const [matchingStudents, setMatchingStudents] = useState('');
	const { findStudents } = useStudents();

	const getMatchingStudents = debounce(async e => {
		const { students } = await findStudents(searchPhrase);
		setMatchingStudents(students);
	}, 500);

	useEffect(() => {
		if (!searchPhrase) return;
		getMatchingStudents(searchPhrase);
	}, [searchPhrase, getMatchingStudents]);

	return (
		<SearchBarWrapper>
			<StatusInfo>
				<p>Logged as:</p>
				<h6>Teacher</h6>
			</StatusInfo>
			<SearchWrapper>
				<Input
					placeholder='find student'
					onChange={e => setSearchPhrase(e.target.value)}
					value={searchPhrase}
					name='Search'
					id='Search'
				/>
				{searchPhrase && matchingStudents.length ? (
					<SearchResults>
						{matchingStudents.map(student => (
							<li key={student.id}>{student.name}</li>
						))}
					</SearchResults>
				) : null}
			</SearchWrapper>
		</SearchBarWrapper>
	);
};
