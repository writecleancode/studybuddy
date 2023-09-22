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

	const {
		isOpen,
		getToggleButtonProps,
		getLabelProps,
		getMenuProps,
		getInputProps,
		highlightedIndex,
		getItemProps,
		selectedItem,
		selectItem,
	} = useCombobox({
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
				<SearchResults {...getMenuProps()}>
					{isOpen &&
						matchingStudents.map((item, index) => (
							<SearchResultsItem
								$isHighlighted={highlightedIndex === index}
								{...getItemProps({ item, index })}
								key={item.id}>
								{item.name}
							</SearchResultsItem>
						))}
				</SearchResults>
			</SearchWrapper>
		</SearchBarWrapper>
	);
};
