import { createComment, getPost } from '../api';
import { getCommentsWithAuthor } from '../utils/getCommentsWithAuthor';
import { sessions } from '../sessions';
import { ROLES } from '../constants';

export const addComment = async (hash, userId, postId, content) => {
	const accessRoles = [ROLES.ADMIN, ROLES.MODERATOR, ROLES.READER];
	const access = await sessions.access(hash, accessRoles);

	if (!access) {
		return {
			error: 'Доступ запрещён',
			res: null,
		};
	}

	await createComment(userId, postId, content);

	const post = await getPost(postId);
	const comments = await getCommentsWithAuthor(postId);

	return {
		error: null,
		res: { ...post, comments },
	};
};
