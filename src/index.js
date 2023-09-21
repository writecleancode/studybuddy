import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from 'views/Root';
import 'assets/styles/fonts.css';
import { worker } from 'mocks/browser';

worker.start().then(() => {
	const root = ReactDOM.createRoot(document.getElementById('root'));
	root.render(
		<React.StrictMode>
			<Root />
		</React.StrictMode>
	);
});
