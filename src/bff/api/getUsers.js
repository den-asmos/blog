import { transformUser } from '../transformers';

export const getUsers = () => {
	return fetch('http://localhost:7070/users')
		.then((response) => response.json())
		.then((users) => users && users.map(transformUser));
};
