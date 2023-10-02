import styled from 'styled-components';
import { StyledAverage } from '../StudentsListItem/StudentsListItem.styles';
import { StyledTitle } from 'components/organisms/StudentsList/StudentsList.styles';

export const Wrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	padding: 56px;
	width: 100%;
`;

export const StyledBigAverage = styled(StyledAverage)`
	position: absolute;
	left: 40px;
	width: 68px;
	height: 68px;
	font-size: ${({ theme }) => theme.fontSize.xl};
`;

export const BigStyledTitle = styled(StyledTitle)`
	margin-bottom: 0;
	line-height: 68px;
`;

export const StyledDetails = styled.div`
	padding: 40px;
	width: 100%;
`;

export const StyledLabel = styled.h3`
	margin-top: 24px;
	color: ${({ theme }) => theme.colors.darkGrey};
	font-size: ${({ theme }) => theme.fontSize.l};
`;

export const StyledInfo = styled.p`
	line-height: 32px;
	color: ${({ theme }) => theme.colors.darkGrey};
	font-size: ${({ theme, $isBig }) => ($isBig ? theme.fontSize.xl : theme.fontSize.l)};
`;

export const StyledSubjectInfo = styled.div`
	margin: 16px 0px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 250px;
`;
