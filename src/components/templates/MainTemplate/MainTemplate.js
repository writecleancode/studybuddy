import { Navigation } from 'components/organisms/Navigation/Navigation';
import { Wrapper } from './MainTemplate.styles';
import styled from 'styled-components';

export const SaerchBar = styled.div`
	grid-row: 1 / 2;
	grid-column: 2 / 3;
	border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};
`;

export const News = styled.div`
	grid-row: 1 / 3;
	grid-column: 3 / 4;
	border-left: 1px solid ${({ theme }) => theme.colors.darkPurple};
`;

export const MainTemplate = ({ children }) => {
	return (
		<Wrapper>
			<Navigation />
			<SaerchBar />
			{children}
			<News />
		</Wrapper>
	);
};
