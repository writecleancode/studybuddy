import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { ErrorProvider } from 'hooks/useError';
import { AuthProvider } from 'hooks/useAuth';
import { GlobalStyle } from 'assets/styles/GlobalStyle';

export const AppProviders = ({ children }) => {
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<ErrorProvider>
					<AuthProvider>
						<GlobalStyle />
						{children}
					</AuthProvider>
				</ErrorProvider>
			</ThemeProvider>
		</Router>
	);
};
