import styled from 'styled-components';
import ReactModal from 'react-modal';

export const ModalWrapper = styled(ReactModal)`
	position: absolute;
	top: 50%;
	left: 50%;
	translate: -50% -50%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	min-width: 600px;
	min-height: 700px;
	border-radius: 15px;
	background-color: ${({ theme }) => theme.colors.white};
	box-shadow: 0px -5px 25px -10px rgba(0, 0, 0, 0.3);
`;
