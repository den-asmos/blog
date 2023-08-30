import { findUser } from './findUser';
import { createUser } from './createUser';
import { sessions } from './sessions';

export const server = {
	logout: async (session) => {
		sessions.remove(session);
	},
	authorize: async (authLogin, authPassword) => {
		const user = await findUser(authLogin);

		if (!user) {
			return {
				error: 'Пользователь не найден',
				response: null,
			};
		}

		if (user.password !== authPassword) {
			return {
				error: 'Неверный пароль',
				response: null,
			};
		}

		return {
			error: null,
			response: {
				id: user.id,
				login: user.login,
				roleId: user.role_id,
				session: sessions.create(user),
			},
		};
	},
	register: async (regLogin, regPassword) => {
		const user = findUser(regLogin);

		if (user) {
			return {
				error: 'Этой логин уже занят',
				response: null,
			};
		}

		await createUser(regLogin, regPassword);

		return {
			error: null,
			response: {
				id: user.id,
				login: user.login,
				roleId: user.role_id,
				session: sessions.create(user),
			},
		};
	},
};
