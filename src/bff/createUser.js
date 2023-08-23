import { generateDate } from './generateDate';

export const createUser = (login, password) => {
	return fetch('http://localhost:7070/users', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			login,
			password,
			registered_at: generateDate(),
			role_id: 2,
		}),
	});
};
