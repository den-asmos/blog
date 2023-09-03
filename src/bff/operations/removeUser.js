import { sessions } from '../sessions';
import { ROLES } from '../constants';
import { deleteUser } from '../api';

export const removeUser = async (userSession, userId) => {
	const accessRoles = [ROLES.ADMIN];

	if (!sessions.access(userSession, accessRoles)) {
		return {
			error: 'Доступ запрещён',
			res: null,
		};
	}

	await deleteUser(userId);

	return {
		error: null,
		res: true,
	};
};
