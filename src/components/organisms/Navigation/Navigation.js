import { Logo, StyledLink, Wrapper } from './Navigation.styles';

export const Navigation = () => {
	return (
		<Wrapper>
			<Logo>
				<p>Study Buddy</p>
			</Logo>
			<StyledLink to='/group'>Dashboard</StyledLink>
			<StyledLink as='a' onClick={() => localStorage.removeItem('token')}>
				Sign Out
			</StyledLink>
		</Wrapper>
	);
};
