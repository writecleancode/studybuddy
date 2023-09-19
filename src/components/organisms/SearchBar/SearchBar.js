import { Input } from 'components/atoms/Input/Input';
import { SearchBarWrapper, StatusInfo } from './SearchBar.styles';

export const SearchBar = () => {
	return (
		<SearchBarWrapper>
			<StatusInfo>
				<p>Logged as:</p>
				<h6>Teacher</h6>
			</StatusInfo>
			<Input placeholder='find student' />
		</SearchBarWrapper>
	);
};
