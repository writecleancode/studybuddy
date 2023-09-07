import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';
import { styled } from 'styled-components';

export const StyledButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: 16px;
	border: none;
	border-radius: 100px;
	width: 24px;
	height: 24px;
	background-color: ${({ theme }) => theme.colors.grey};
`;

export const DeleteButton = () => {
	return (
		<StyledButton>
			<DeleteIcon />
		</StyledButton>
	);
};
