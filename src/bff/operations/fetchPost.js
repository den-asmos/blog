import { getPost } from '../api';
import { getCommentsWithAuthor } from '../utils/getCommentsWithAuthor';

export const fetchPost = async (postId) => {
	let post;
	let error;

	try {
		post = await getPost(postId);
	} catch (postError) {
		error = postError;
	}

	if (error) {
		return {
			error,
			res: null,
		};
	}

	const comments = await getCommentsWithAuthor(postId);

	return {
		error: null,
		res: { ...post, comments },
	};
};
