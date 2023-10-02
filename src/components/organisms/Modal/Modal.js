import { Button } from 'components/atoms/Button/Button';
import { ModalWrapper } from './Modal.styles';

export const Modal = ({ handleClose, isOpen, children }) => {
	return (
		<ModalWrapper appElement={document.querySelector('#root')} isOpen={isOpen} onRequestClose={handleClose}>
			{children}
			<Button onClick={handleClose}>Close</Button>
		</ModalWrapper>
	);
};
