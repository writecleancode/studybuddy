import { useDispatch, useSelector } from 'react-redux';
import { addNote } from 'store';
import { useForm } from 'react-hook-form';
import { Button } from 'components/atoms/Button/Button';
import { Note } from 'components/molecules/Note/Note';
import { FormWrapper, NotesWrapper, StyledFormField, Wrapper } from 'views/Notes.styles';
import { useGetNotesQuery } from 'store';
import { useEffect } from 'react';

export const Notes = () => {
	const dispatch = useDispatch();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const { data, isLoading } = useGetNotesQuery();

	useEffect(() => {
		console.log(data);
	}, [data]);

	const handleAddNote = ({ title, content }) => {
		dispatch(addNote({ title, content }));
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
