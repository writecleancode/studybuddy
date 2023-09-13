import { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { users as usersData } from 'data/users';
import { AddUser } from './AddUser';
import { Dashboard } from './Dashboard';
import { MainTemplate } from 'components/templates/MainTemplate/MainTemplate';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { Wrapper } from './Root.styles';

export const UsersContext = createContext({
	users: [],
	deleteUser: () => {},
	handleAddUser: () => {},
});

const Root = () => {
	const [users, setUsers] = useState(usersData);

	const deleteUser = name => {
		const filteredUsers = users.filter(user => user.name !== name);
		setUsers(filteredUsers);
	};

	const handleAddUser = values => {
		const newUser = {
			name: values.name,
			attendance: values.attendance,
			average: values.average,
		};

		setUsers([newUser, ...users]);
	};

	return (
		<Router>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<MainTemplate>
					<UsersContext.Provider
						value={{
							users,
							deleteUser,
							handleAddUser,
						}}>
						<Wrapper>
							<Routes>
								<Route path='/' element={<Dashboard deleteUser={deleteUser} />} />
								<Route path='/add-user' element={<AddUser />} />
							</Routes>
						</Wrapper>
					</UsersContext.Provider>
				</MainTemplate>
			</ThemeProvider>
		</Router>
	);
};

export default Root;
