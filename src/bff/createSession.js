import { removeComment } from './session';
import { ROLES } from '../constants';

export const createSession = (roleId) => {
	const session = {
		logout: () => {
			Object.keys(session).forEach((key) => {
				delete session[key];
			});
		},
	};

	switch (roleId) {
		case ROLES.ADMIN: {
			session.removeComment = removeComment;
			break;
		}
		case ROLES.MODERATOR: {
			session.removeComment = removeComment;
			break;
		}
		case ROLES.READER: {
			break;
		}
		default: {
			//do nothing
		}
	}

	return session;
};
