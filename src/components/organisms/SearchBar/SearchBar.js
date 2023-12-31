import { useState } from 'react';
import debounce from 'lodash.debounce';
import { useStudents } from 'hooks/useStudents';
import { useCombobox } from 'downshift';
import { Input } from 'components/atoms/Input/Input';
import { SearchBarWrapper, SearchResults, SearchResultsItem, SearchWrapper, StatusInfo } from './SearchBar.styles';

export const SearchBar = () => {
	const [matchingStudents, setMatchingStudents] = useState([]);
	const { findStudents } = useStudents();

	const getMatchingStudents = debounce(async ({ inputValue }) => {
		const { students } = await findStudents(inputValue);
		setMatchingStudents(students);
	}, 500);

	const { isOpen, getMenuProps, getInputProps, highlightedIndex, getItemProps } = useCombobox({
		items: matchingStudents,
		onInputValueChange: getMatchingStudents,
	});

	return (
		<SearchBarWrapper>
			<StatusInfo>
				<p>Logged as:</p>
				<h6>Teacher</h6>
			</StatusInfo>
			<SearchWrapper>
				<Input {...getInputProps()} placeholder='find student' name='Search' id='Search' />
				<SearchResults $isVisible={isOpen && matchingStudents.length} {...getMenuProps()} aria-label='results'>
					{isOpen &&
						matchingStudents.map((student, index) => (
							<SearchResultsItem
								$isHighlighted={highlightedIndex === index}
								{...getItemProps({ item: student, index })}
								key={student.id}>
								{student.name}
							</SearchResultsItem>
						))}
				</SearchResults>
			</SearchWrapper>
		</SearchBarWrapper>
	);
};
