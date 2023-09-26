import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { GlobalStyle } from 'assets/styles/GlobalStyle'

/** @type { import('@storybook/react').Preview } */
const preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
};

export const decorators = [
	Story => (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Story />
		</ThemeProvider>
	),
];

export default preview;
