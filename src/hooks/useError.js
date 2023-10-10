import { createContext, useCallback, useContext, useState } from 'react';

export const ErrorContext = createContext();

export const ErrorProvider = ({ children }) => {
	const [error, setError] = useState(null);

	const dispatchError = useCallback(message => setError(message), []);

	return <ErrorContext.Provider value={{ error, dispatchError }}>{children}</ErrorContext.Provider>;
};

export const useError = params => {
	const errorContext = useContext(ErrorContext);

	if (!errorContext) {
		throw Error('useError needs to be used inside ErrorContext');
	}

	return errorContext;
};
