import { useAuth } from 'hooks/useAuth';
import { Logo, StyledLink, Wrapper } from './Navigation.styles';

export const Navigation = () => {
	const auth = useAuth();

	return (
		<Wrapper>
			<Logo>
				<p>Study Buddy</p>
			</Logo>
			<StyledLink to='/group'>Dashboard</StyledLink>
			<StyledLink as='a' onClick={auth.signOut}>
				Sign Out
			</StyledLink>
		</Wrapper>
	);
};
