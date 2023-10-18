import { useForm } from 'react-hook-form';
import { useGetNotesQuery, useAddNoteMutation } from 'store';
import { Button } from 'components/atoms/Button/Button';
import { Note } from 'components/molecules/Note/Note';
import { FormWrapper, NotesWrapper, StyledFormField, Wrapper } from 'views/Notes.styles';

export const Notes = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const { data, isLoading } = useGetNotesQuery();
	const [addNote] = useAddNoteMutation();

	const handleAddNote = ({ title, content }) => {
		addNote({ title, content });
	};

	return (
		<Wrapper>
			<FormWrapper as='form' onSubmit={handleSubmit(handleAddNote)}>
				<StyledFormField {...register('title', { required: true })} label='Title' name='title' id='title' />
				<StyledFormField
					{...register('content', { required: true })}
					$isTextarea
					label='Content'
					name='content'
					id='content'
				/>
				{errors.title && <span>Title is required</span>}
				{errors.content && <span>Content is required</span>}
				<Button type='submit'>Add</Button>
			</FormWrapper>
			{isLoading ? (
				<h2>Loading...</h2>
			) : (
				<NotesWrapper>
					{data.notes.length ? (
						data.notes.map(({ title, content, id }) => <Note key={id} id={id} title={title} content={content} />)
					) : (
						<p>Create your first note</p>
					)}
				</NotesWrapper>
			)}
		</Wrapper>
	);
};
