import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { MainTemplate } from 'components/templates/MainTemplate/MainTemplate';
import { Dashboard } from './Dashboard';
import { FormField } from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { Wrapper } from './Root.styles';

export const AuthenticatedApp = () => {
	return (
		<MainTemplate>
			<Wrapper>
				<Routes>
					<Route path='/' element={<Navigate to='/group' />} />
					<Route path='/group/' element={<Dashboard />}>
						<Route path=':id?' element={<Dashboard />} />
					</Route>
				</Routes>
			</Wrapper>
		</MainTemplate>
	);
};

export const UnauthenticatedApp = ({ handleSignIn }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = ({ login, password }) => handleSignIn({ login, password });

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				minHeight: '100vh',
			}}>
			<FormField label='Login' name='login' id='login' {...register('login')} />
			<FormField label='Password' name='password' id='password' type='password' {...register('password')} />
			<Button type='submit'>Sign in</Button>
		</form>
	);
};

const Root = () => {
	const [user, setUser] = useState(null);

	const handleSignIn = ({ login, password }) => {
		axios
			.post('/login', {
				login,
				password,
			})
			.then(res => console.log(res))
			.catch(err => console.log(err));
	};

	return (
		<Router>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				{user ? <AuthenticatedApp /> : <UnauthenticatedApp handleSignIn={handleSignIn} />}
			</ThemeProvider>
		</Router>
	);
};

export default Root;
