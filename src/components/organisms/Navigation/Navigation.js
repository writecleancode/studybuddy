import { Logo, StyledLink, Wrapper } from './Navigation.styles';

export const Navigation = params => {
	return (
		<Wrapper>
			<Logo>
				<h1>Study Buddy</h1>
			</Logo>
			<StyledLink to='/'>Home</StyledLink>
			<StyledLink to='/add-user'>Add user</StyledLink>
		</Wrapper>
	);
};
