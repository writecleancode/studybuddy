import { useCallback } from 'react';
import axios from 'axios';

const studentsAPI = axios.create({});

studentsAPI.interceptors.request.use(
	config => {
		const token = localStorage.getItem('token');

		if (token) {
			config.headers.authorization = `Bearer ${token}`;
		}

		return config;
	},
	error => {
		return Promise.reject(error);
	}
);

export const useStudents = () => {
	const getStudentById = useCallback(async studentId => {
		try {
			const result = await studentsAPI.get(`/students/${studentId}`);
			return result.data.students;
		} catch (err) {
			console.log(err);
		}
	}, []);

	const getStudentsByGroup = useCallback(async groupId => {
		try {
			const result = await studentsAPI.get(`/groups/${groupId}`);
			return result.data.students;
		} catch (err) {
			console.log(err);
		}
	}, []);

	const findStudents = async searchPhrase => {
		try {
			const { data } = await studentsAPI.post(`/students/search`, {
				searchPhrase,
			});
			return data;
		} catch (err) {
			console.log(err);
		}
	};

	return {
		getStudentsByGroup,
		findStudents,
		getStudentById,
	};
};
