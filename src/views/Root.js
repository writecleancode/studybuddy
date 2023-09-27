import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { MainTemplate } from 'components/templates/MainTemplate/MainTemplate';
import { Modal } from 'components/organisms/Modal/Modal';
import { Dashboard } from './Dashboard';
import { Wrapper } from './Root.styles';
import { useState } from 'react';
import { Button } from 'components/atoms/Button/Button';

const Root = () => {
	const [isModalOpen, setModalState] = useState(false);

	return (
		<Router>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<MainTemplate>
					{isModalOpen ? <Modal handleClose={() => setModalState(false)} /> : null}
					<Wrapper>
						<Button onClick={() => setModalState(true)}>Open Modal</Button>
						<Routes>
							<Route path='/' element={<Navigate to='/group' />} />
							<Route path='/group/' element={<Dashboard />}>
								<Route path=':id?' element={<Dashboard />} />
							</Route>
						</Routes>
					</Wrapper>
				</MainTemplate>
			</ThemeProvider>
		</Router>
	);
};

export default Root;
