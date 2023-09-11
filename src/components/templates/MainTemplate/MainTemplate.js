import { Wrapper } from './MainTemplate.styles';
import { Navigation } from 'components/organisms/Navigation/Navigation';

export const MainTemplate = ({ children }) => {
	return (
		<Wrapper>
			<Navigation />
			{children}
		</Wrapper>
	);
};
