import PropTypes from 'prop-types';
import { StyledTitle } from 'components/organisms/StudentsList/StudentsList.styles';
import { Wrapper } from './ErrorMessage.styles';

const defaultErrorMessage = 'Something went wrong. Please try again, or contact our support'

export const ErrorMessage = ({ message = defaultErrorMessage }) => {
	return (
		<Wrapper>
			<StyledTitle>Oops!</StyledTitle>
			<p>{message}</p>
		</Wrapper>
	);
};

ErrorMessage.propTypes = {
	message: PropTypes.string,
};
