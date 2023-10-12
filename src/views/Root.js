import { Routes, Route, Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from 'hooks/useAuth';
import { useError } from 'hooks/useError';
import { MainTemplate } from 'components/templates/MainTemplate/MainTemplate';
import { Dashboard } from './Dashboard';
import { FormField } from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { ErrorMessage } from 'components/molecules/ErrorMessage/ErrorMessage';
import { Wrapper } from './Root.styles';
import { Notes } from './Notes';

export const AuthenticatedApp = () => {
	return (
		<MainTemplate>
			<Wrapper>
				<Routes>
					<Route path='/' element={<Navigate to='/group' />} />
					<Route path='/group/' element={<Dashboard />}>
						<Route path=':id?' element={<Dashboard />} />
					</Route>
					<Route path='/notes' element={<Notes />} />
				</Routes>
			</Wrapper>
		</MainTemplate>
	);
};

export const UnauthenticatedApp = () => {
	const auth = useAuth();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	return (
		<form
			onSubmit={handleSubmit(auth.signIn)}
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
			<Button type='submit'>Sign in</Button>
		</form>
	);
};

const Root = () => {
	const auth = useAuth();
	const { error } = useError();

	return (
		<>
			{error ? <ErrorMessage message={error} /> : null}
			{auth.user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
		</>
	);
};

export default Root;
