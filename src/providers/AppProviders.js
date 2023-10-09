import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { AuthProvider } from 'hooks/useAuth';
import { GlobalStyle } from 'assets/styles/GlobalStyle';

export const AppProviders = ({ children }) => {
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<AuthProvider>
					<GlobalStyle />
					{children}
				</AuthProvider>
			</ThemeProvider>
		</Router>
	);
};
