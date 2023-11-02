import { Routes, Route, Navigate } from 'react-router-dom';
import { MainTemplate } from 'components/templates/MainTemplate/MainTemplate';
import { Dashboard } from './Dashboard';
import { Wrapper } from './Root.styles';
import { Notes } from './Notes';

export const AuthenticatedApp = () => {
	return (
		<MainTemplate>
			<Wrapper>
				<Routes>
					<Route path='/' element={<Navigate to='/group' />} />
					<Route path='/group/'>
						<Route path=':id?' element={<Dashboard />} />
					</Route>
					<Route path='/notes' element={<Notes />} />
				</Routes>
			</Wrapper>
		</MainTemplate>
	);
};
