import React from 'react';
import ReactDOM from 'react-dom/client';
import 'assets/styles/fonts.css';
import { worker } from 'mocks/browser';
import { AppProviders } from 'providers/AppProviders';
import Root from 'views/Root';

worker
	.start({
		onUnhandledRequest: 'bypass',
	})
	.then(() => {
		const root = ReactDOM.createRoot(document.getElementById('root'));
		root.render(
			<React.StrictMode>
				<AppProviders>
					<Root />
				</AppProviders>
			</React.StrictMode>
		);
	});
