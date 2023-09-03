import { sessions } from '../sessions';
import { findUser, createUser } from '../api';

export const register = async (regLogin, regPassword) => {
	const existingUser = await findUser(regLogin);

	if (existingUser) {
		return {
			error: 'Этой логин уже занят',
			response: null,
		};
	}

	const user = await createUser(regLogin, regPassword);

	return {
		error: null,
		response: {
			id: user.id,
			login: user.login,
			roleId: user.role_id,
			session: sessions.create(user),
		},
	};
};
