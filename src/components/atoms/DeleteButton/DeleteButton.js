import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';
import { StyledButton } from './DeleteButton.styles';

export const DeleteButton = () => {
	return (
		<StyledButton>
			<DeleteIcon />
		</StyledButton>
	);
};
