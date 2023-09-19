import { Navigation } from 'components/organisms/Navigation/Navigation';
import { SearchBar } from 'components/organisms/SearchBar/SearchBar';
import { NewsSection } from '../NewsSection/NewsSection';
import { Wrapper } from './MainTemplate.styles';

export const MainTemplate = ({ children }) => {
	return (
		<Wrapper>
			<Navigation />
			<SearchBar />
			{children}
			<NewsSection />
		</Wrapper>
	);
};
