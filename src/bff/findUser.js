import { getUsers } from './getUsers';

export const findUser = async (loginToFind) => {
	const users = await getUsers();
	const user = users.find(({ login }) => login === loginToFind);

	return user;
};
