import { sessions } from '../sessions';
import { ROLES } from '../constants';
import { deleteUser } from '../api';

export const removeUser = async (hash, userId) => {
	const accessRoles = [ROLES.ADMIN];
	const access = await sessions.access(hash, accessRoles);

	if (!access) {
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
