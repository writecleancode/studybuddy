import { Button } from 'components/atoms/Button/Button';
import { Note } from 'components/molecules/Note/Note';
import { FormWrapper, NotesWrapper, StyledFormField, Wrapper } from 'views/Notes.styles';

export const Notes = () => {
	return (
		<Wrapper>
			<FormWrapper>
				<StyledFormField label='Title' name='title' id='title' />
				<StyledFormField $isTextarea label='Content' name='content' id='content' />
				<Button>Add</Button>
			</FormWrapper>
			<NotesWrapper>
				<Note />
				<Note />
				<Note />
			</NotesWrapper>
		</Wrapper>
	);
};
