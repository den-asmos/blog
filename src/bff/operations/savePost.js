import { updatePost, createPost } from '../api';
import { ROLES } from '../constants';
import { sessions } from '../sessions';

export const savePost = async (hash, newPostData) => {
	const accessRoles = [ROLES.ADMIN];
	const access = await sessions.access(hash, accessRoles);

	if (!access) {
		return {
			error: 'Доступ запрещён',
			res: null,
		};
	}

	const savedPost =
		newPostData.id === '' ? await createPost(newPostData) : await updatePost(newPostData);

	return {
		error: null,
		res: savedPost,
	};
};
