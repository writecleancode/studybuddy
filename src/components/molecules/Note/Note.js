import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeNote } from 'store';
import { StyledTitle } from 'components/atoms/StyledTitle/StyledTitle';
import { NoteWrapper, StyledDeleteButton } from 'components/molecules/Note/Note.styles';

export const Note = ({ id, title = 'Untitled', content = 'No content' }) => {
	const dispatch = useDispatch();

	const handleRemoveNote = () => {
		dispatch(removeNote({ id: id }));
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
	id: PropTypes.string.isRequired,
	title: PropTypes.string,
	content: PropTypes.string,
};
