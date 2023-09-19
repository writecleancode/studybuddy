import { Navigation } from 'components/organisms/Navigation/Navigation';
import { Wrapper } from './MainTemplate.styles';
import { SearchBar } from 'components/organisms/SearchBar/SearchBar';
import styled from 'styled-components';

export const News = styled.div`
	grid-row: 1 / 3;
	grid-column: 3 / 4;
	border-left: 1px solid ${({ theme }) => theme.colors.darkPurple};
`;

export const MainTemplate = ({ children }) => {
	return (
		<Wrapper>
			<Navigation />
			<SearchBar />
			{children}
			<News />
		</Wrapper>
	);
};
