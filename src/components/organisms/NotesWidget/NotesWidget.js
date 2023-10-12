import { Note } from 'components/molecules/Note/Note';
import { NotesWrapper, WidgetHandler, Wrapper } from 'components/organisms/NotesWidget/NotesWidget.styles';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const NotesWidget = () => {
	const [isOpen, setIsOpen] = useState(false);
	const notes = useSelector(state => state.notes);

	const handleToggleWidget = () => setIsOpen(prevState => !prevState);

	return (
		<Wrapper isOpen={isOpen}>
			<WidgetHandler onClick={handleToggleWidget}>notes</WidgetHandler>
			<NotesWrapper>
				{notes.length ? (
					notes.map(({ title, content, id }) => (
						<Note id={id} key={id} title={title} content={content} />
					))
				) : (
					<p>Create your first note</p>
				)}
			</NotesWrapper>
		</Wrapper>
	);
};

export default NotesWidget;
