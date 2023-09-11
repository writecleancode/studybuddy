import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.nav`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	padding-top: 32px;
    padding-bottom: 32px;
	border-right: 1px solid ${({ theme }) => theme.colors.darkPurple};
`;

export const Logo = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 48px;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.darkGrey};

	h1 {
		margin-right: 24px;
		margin-left: auto;
		padding-top: 10px;
		padding-bottom: 10px;
		width: min-content;
		color: ${({ theme }) => theme.colors.white};
		font-size: ${({ theme }) => theme.fontSize.l};
		text-align: right;
	}
`;

export const StyledLink = styled(Link)`
	margin: 6px 20px;
    padding: 6px 12px;
	color: ${({ theme }) => theme.colors.darkGrey};
	font-weight: bold;
	text-decoration: none;
`;
