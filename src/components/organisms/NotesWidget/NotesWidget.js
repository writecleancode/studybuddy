import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Note } from 'components/molecules/Note/Note';
import { NotesWrapper, WidgetHandler, Wrapper } from 'components/organisms/NotesWidget/NotesWidget.styles';

export const NotesWidget = () => {
	const [isOpen, setIsOpen] = useState(false);
	const notes = useSelector(state => state.notes);

	const handleToggleWidget = () => setIsOpen(prevState => !prevState);

	return (
		<Wrapper $isOpen={isOpen}>
			<WidgetHandler onClick={handleToggleWidget}>notes</WidgetHandler>
			<NotesWrapper>
				{notes.length ? (
					notes.map(({ title, content, id }) => <Note key={id} id={id} title={title} content={content} />)
				) : (
					<p>Create your first note</p>
				)}
			</NotesWrapper>
		</Wrapper>
	);
};
