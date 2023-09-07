import { UsersList } from 'components/organisms/UsersList/UsersList';
import { Wrapper } from './Root.styles';
import { GlobalStyle } from 'assets/styles/GlobalStyle';

const Root = () => {
	return (
		<>
			<GlobalStyle />
			<Wrapper>
				<UsersList />
			</Wrapper>
		</>
	);
};

export default Root;
