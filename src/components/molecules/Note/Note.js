import PropTypes from 'prop-types';
import { StyledTitle } from 'components/atoms/StyledTitle/StyledTitle';
import { NoteWrapper, StyledDeleteButton } from 'components/molecules/Note/Note.styles';

export const Note = ({ title = 'Untitled', content = 'No content' }) => {
	return (
		<NoteWrapper>
			<StyledTitle>{title}</StyledTitle>
			<p>{content}</p>
			<StyledDeleteButton />
		</NoteWrapper>
	);
};

Note.propTypes = {
	title: PropTypes.string,
	content: PropTypes.string,
};
