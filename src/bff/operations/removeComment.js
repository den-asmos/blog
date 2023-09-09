import { deleteComment, getPost, getComments } from '../api';
import { sessions } from '../sessions';
import { ROLES } from '../constants';

export const removeComment = async (hash, postId, id) => {
	const accessRoles = [ROLES.ADMIN, ROLES.MODERATOR];
	const access = await sessions.access(hash, accessRoles);

	if (!access) {
		return {
			error: 'Доступ запрещён',
			res: null,
		};
	}

	await deleteComment(id);

	const post = await getPost(postId);
	const comments = await getComments(postId);

	return {
		error: null,
		res: { ...post, comments },
	};
};