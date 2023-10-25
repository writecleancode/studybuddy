import { useAuth } from 'hooks/useAuth';
import { useError } from 'hooks/useError';
import { ErrorMessage } from 'components/molecules/ErrorMessage/ErrorMessage';
import { AuthenticatedApp } from './AuthenticatedApp';
import { UnauthenticatedApp } from './UnauthenticatedApp';

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
