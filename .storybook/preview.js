import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';

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
			<Story />
		</ThemeProvider>
	),
];

export default preview;
