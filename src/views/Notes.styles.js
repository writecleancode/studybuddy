import styled from 'styled-components';
import { FormField } from 'components/molecules/FormField/FormField';

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 0.7fr 1.3fr;
	grid-gap: 30px;
	padding: 32px;
	width: 100%;
	height: 100%;
`;

export const FormWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	padding: 40px;
	border-radius: 25px;
	width: 100%;
	height: 80%;
	background: ${({ theme }) => theme.colors.white};
`;

export const StyledFormField = styled(FormField)`
	border-radius: 25px;
	width: 100%;
	min-width: 240px;
	height: ${({ $isTextarea }) => ($isTextarea ? '300px' : 'unset')};
`;

export const NotesWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px 60px;
`;
