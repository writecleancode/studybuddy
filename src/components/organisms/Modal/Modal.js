import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Button } from 'components/atoms/Button/Button';
import { ModalWrapper } from './Modal.styles';

const modalContainer = document.getElementById('modal-container');

export const Modal = ({ handleClose, children }) => {
	const modalNode = document.createElement('div');

	useEffect(() => {
		modalContainer.append(modalNode);

		return () => {
			modalContainer.removeChild(modalNode);
		};
	}, [modalNode]);

	return createPortal(
		<ModalWrapper>
			{children}
			<Button onClick={handleClose}>Close modal</Button>
		</ModalWrapper>,
		modalNode
	);
};
