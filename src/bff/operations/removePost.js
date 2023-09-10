import { deletePost, getComments, deleteComment } from '../api';
import { sessions } from '../sessions';
import { ROLES } from '../constants';

export const removePost = async (hash, id) => {
	const accessRoles = [ROLES.ADMIN];
	const access = await sessions.access(hash, accessRoles);

	if (!access) {
		return {
			error: 'Доступ запрещён',
			res: null,
		};
	}

	await deletePost(id);

	const comments = await getComments(id);

	Promise.all(comments.map(({ id: commentId }) => deleteComment(commentId)));

	return {
		error: null,
		res: true,
	};
};
