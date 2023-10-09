import { BrowserRouter as Routes, Route, Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { MainTemplate } from 'components/templates/MainTemplate/MainTemplate';
import { Dashboard } from './Dashboard';
import { FormField } from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { Wrapper } from './Root.styles';
import { useAuth } from 'hooks/useAuth';

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
	const auth = useAuth()

	return auth.user ? <AuthenticatedApp /> : <UnauthenticatedApp />;
};

export default Root;
