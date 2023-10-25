import { useForm } from 'react-hook-form';
import { useAuth } from 'hooks/useAuth';
import { FormField } from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { FormWrapper } from './Notes.styles';

export const UnauthenticatedApp = () => {
	const auth = useAuth();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	return (
		<FormWrapper onSubmit={handleSubmit(auth.signIn)}>
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
		</FormWrapper>
	);
};
