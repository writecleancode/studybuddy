import styled from 'styled-components';

export const Wrapper = styled.div`
	display: grid;
	grid-template-rows: 92px 1fr;
	grid-template-columns: 150px 1fr 0.75fr;
	min-height: 100vh;
	background-color: ${({ theme }) => theme.colors.lightGrey};
`;
