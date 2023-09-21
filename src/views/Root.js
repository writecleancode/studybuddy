import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { AddUser } from './AddUser';
import { Dashboard } from './Dashboard';
import { MainTemplate } from 'components/templates/MainTemplate/MainTemplate';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { Wrapper } from './Root.styles';

const Root = () => {
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<MainTemplate>
					<Wrapper>
						<Routes>
							<Route path='/' element={<Navigate to='/group' />} />
							{/* <Route path='/group/:id' element={<Dashboard />} /> */}
							<Route path='/group/' element={<Dashboard />}>
								<Route path=':id?' element={<Dashboard />} />
							</Route>
							<Route path='/add-user' element={<AddUser />} />
						</Routes>
					</Wrapper>
				</MainTemplate>
			</ThemeProvider>
		</Router>
	);
};

export default Root;
