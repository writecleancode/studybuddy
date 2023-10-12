import { StyledTitle } from 'components/atoms/StyledTitle/StyledTitle';
import { NoteWrapper, StyledDeleteButton } from 'components/molecules/Note/Note.styles';

export const Note = () => {
	return (
		<NoteWrapper>
			<StyledTitle>Title</StyledTitle>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, magnam?
			</p>
			<StyledDeleteButton />
		</NoteWrapper>
	);
};
