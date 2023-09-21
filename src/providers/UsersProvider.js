import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const UsersContext = createContext({
	users: [],
	deleteUser: () => {},
	handleAddUser: () => {},
});

export const UsersProvider = ({ children }) => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		axios
			.get('/students')
			.then(({ data }) => setUsers(data.students))
			.catch(err => console.log(err));
	}, []);

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
		<UsersContext.Provider
			value={{
				users,
				deleteUser,
				handleAddUser,
			}}>
			{children}
		</UsersContext.Provider>
	);
};
