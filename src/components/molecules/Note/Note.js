import PropTypes from 'prop-types';
import { useRemoveNoteMutation } from 'store';
import { StyledTitle } from 'components/atoms/StyledTitle/StyledTitle';
import { NoteWrapper, StyledDeleteButton } from 'components/molecules/Note/Note.styles';

export const Note = ({ id, title = 'Untitled', content = 'No content' }) => {
	const [removeNote] = useRemoveNoteMutation();

	const handleRemoveNote = () => {
		removeNote({ id: id });
	};

	return (
		<NoteWrapper>
			<StyledTitle>{title}</StyledTitle>
			<p>{content}</p>
			<StyledDeleteButton onClick={handleRemoveNote} />
		</NoteWrapper>
	);
};

Note.propTypes = {
	id: PropTypes.string,
	title: PropTypes.string,
	content: PropTypes.string,
};
