import { useEffect, useState } from 'react';
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

export const UnauthenticatedApp = ({ handleSignIn, loginError }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	return (
		<form
			onSubmit={handleSubmit(handleSignIn)}
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				minHeight: '100vh',
			}}>
			<FormField
				label='Login'
				name='login'
				id='login'
				{...register('login', { required: true })}
				autoComplete='username'
			/>
			{errors.login && <span>Login is required</span>}
			<FormField
				label='Password'
				name='password'
				id='password'
				type='password'
				{...register('password', { required: true })}
				autoComplete='current-password'
			/>
			{errors.password && <span>Password is required</span>}
			{loginError && <span>{loginError}</span>}
			<Button type='submit'>Sign in</Button>
		</form>
	);
};

const Root = () => {
	const [user, setUser] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (token) {
			(async () => {
				try {
					const response = await axios.get('/me', {
						headers: {
							authorization: `Bearer ${token}`,
						},
					});
					setUser(response.data);
				} catch (err) {
					console.log(err);
				}
			})();
		}
	}, []);

	const handleSignIn = async ({ login, password }) => {
		try {
			const response = await axios.post('/login', {
				login,
				password,
			});
			setUser(response.data);
			localStorage.setItem('token', response.data.token);
		} catch (err) {
			setError('Please provide valid user data');
		}
	};

	return (
		<Router>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				{user ? <AuthenticatedApp /> : <UnauthenticatedApp loginError={error} handleSignIn={handleSignIn} />}
			</ThemeProvider>
		</Router>
	);
};

export default Root;
