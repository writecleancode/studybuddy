import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { AddUser } from './AddUser';
import { Dashboard } from './Dashboard';
import { MainTemplate } from 'components/templates/MainTemplate/MainTemplate';
import { UsersProvider } from 'providers/UsersProvider';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { Wrapper } from './Root.styles';

const Root = () => {
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<MainTemplate>
					<UsersProvider>
						<Wrapper>
							<Routes>
								<Route path='/' element={<Dashboard />} />
								<Route path='/add-user' element={<AddUser />} />
							</Routes>
						</Wrapper>
					</UsersProvider>
				</MainTemplate>
			</ThemeProvider>
		</Router>
	);
};

export default Root;
