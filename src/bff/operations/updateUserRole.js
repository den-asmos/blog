import { setUserRole } from '../api';
import { ROLES } from '../constants';
import { sessions } from '../sessions';

export const updateUserRole = async (userSession, userId, newUserRoleId) => {
	const accessRoles = [ROLES.ADMIN];

	if (!sessions.access(userSession, accessRoles)) {
		return {
			error: 'Доступ запрещён',
			res: null,
		};
	}

	await setUserRole(userId, newUserRoleId);

	return {
		error: null,
		res: true,
	};
};
