import { useState } from 'react';
import { Note } from 'components/molecules/Note/Note';
import { NotesWrapper, WidgetHandler, Wrapper } from 'components/organisms/NotesWidget/NotesWidget.styles';

export const NotesWidget = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggleWidget = () => setIsOpen(prevState => !prevState);

	return (
		<Wrapper $isOpen={isOpen}>
			<WidgetHandler onClick={handleToggleWidget}>notes</WidgetHandler>
			<NotesWrapper>
				<Note />
				<Note />
				<Note />
			</NotesWrapper>
		</Wrapper>
	);
};
