import { ACTION_TYPES } from './actionTypes';
import { server } from '../../bff';

export const logout = (session) => {
	server.logout(session);

	return { type: ACTION_TYPES.LOGOUT };
};
