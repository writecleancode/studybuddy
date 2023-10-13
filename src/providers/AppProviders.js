import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { ErrorProvider } from 'hooks/useError';
import { AuthProvider } from 'hooks/useAuth';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { Provider } from 'react-redux';
import { store } from 'store';

export const AppProviders = ({ children }) => {
	return (
		<Provider store={store}>
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
		</Provider>
	);
};
