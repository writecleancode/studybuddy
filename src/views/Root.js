import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { users as usersData } from 'data/users';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { Wrapper } from './Root.styles';
import { UsersList } from 'components/organisms/UsersList/UsersList';
import { Form } from 'components/organisms/Form/Form';
import { MainTemplate } from 'components/templates/MainTemplate/MainTemplate';

const initialFormState = {
	name: '',
	attendance: '',
	average: '',
};

const Root = () => {
	const [users, setUsers] = useState(usersData);
	const [formValues, setFormValues] = useState(initialFormState);

	const deleteUser = name => {
		const filteredUsers = users.filter(user => user.name !== name);
		setUsers(filteredUsers);
	};

	const handleInputChange = e => {
		setFormValues({
			...formValues,
			[e.target.name]: e.target.value,
		});
	};

	const handleAddUser = e => {
		e.preventDefault();
		const newUser = {
			name: formValues.name,
			attendance: formValues.attendance,
			average: formValues.average,
		};

		setUsers([newUser, ...users]);
		setFormValues(initialFormState);
	};

	return (
		<Router>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<MainTemplate>
					<Wrapper>
						<Routes>
							<Route path='/' element={<UsersList users={users} deleteUser={deleteUser} />} />
							<Route
								path='/add-user'
								element={
									<Form handleAddUser={handleAddUser} formValues={formValues} handleInputChange={handleInputChange} />
								}
							/>
						</Routes>
					</Wrapper>
				</MainTemplate>
			</ThemeProvider>
		</Router>
	);
};

export default Root;
