import styled from 'styled-components';
import { DeleteButton } from 'components/atoms/DeleteButton/DeleteButton';
import { StyledTitle } from 'components/atoms/StyledTitle/StyledTitle';

export const NoteWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	margin-bottom: 20px;
	padding: 18px 10px;

	${StyledTitle} {
		margin-left: 32px;
		margin-bottom: 12px;
	}

	p {
		color: ${({ theme }) => theme.colors.darkGrey};
	}
`;

export const StyledDeleteButton = styled(DeleteButton)`
	position: absolute;
	top: 20px;
	left: 10px;
	margin: 0;
`;
