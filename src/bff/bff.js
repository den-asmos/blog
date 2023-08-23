import { findUser } from './findUser';
import { createUser } from './createUser';
import { createSession } from './createSession';

export const server = {
	authorize: async (authLogin, authPassword) => {
		const user = findUser(authLogin);

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
			response: createSession(user.role_id),
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
			response: createSession(user.role_id),
		};
	},
};
