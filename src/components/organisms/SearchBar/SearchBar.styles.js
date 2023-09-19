import styled from 'styled-components';
import { Input } from 'components/atoms/Input/Input';

export const SearchBarWrapper = styled.div`
	grid-row: 1 / 2;
	grid-column: 2 / 3;
	display: flex;
	justify-content: center;
	align-items: center;
	border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};

	${Input} {
		margin-bottom: 0;
		margin-left: 48px;
		padding: 8px 16px;
		border-color: ${({ theme }) => theme.colors.lightPurple};
		width: 100%;
		max-width: 480px;
		font-size: ${({ theme }) => theme.fontSize.l};
	}
`;

export const StatusInfo = styled.div`
	color: ${({ theme }) => theme.colors.darkGrey};

	p {
		margin-bottom: 4px;
		font-size: ${({ theme }) => theme.fontSize.m};
	}

	h6 {
		font-size: ${({ theme }) => theme.fontSize.l};
	}
`;
