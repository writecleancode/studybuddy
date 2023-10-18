import { useState } from 'react';
import { useGetNotesQuery } from 'store';
import { Note } from 'components/molecules/Note/Note';
import { NotesWrapper, WidgetHandler, Wrapper } from 'components/organisms/NotesWidget/NotesWidget.styles';

export const NotesWidget = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { data, isLoading } = useGetNotesQuery();

	const handleToggleWidget = () => setIsOpen(prevState => !prevState);

	return (
		<Wrapper $isOpen={isOpen}>
			<WidgetHandler onClick={handleToggleWidget}>notes</WidgetHandler>
			{isLoading ? (
				<h3>Loading...</h3>
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
