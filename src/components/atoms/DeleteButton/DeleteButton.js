import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';
import { StyledButton } from './DeleteButton.styles';

export const DeleteButton = (props) => {
	return (
		<StyledButton {...props} >
			<DeleteIcon />
		</StyledButton>
	);
};
