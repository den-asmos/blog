import { getPosts, getComments } from '../api';
import { getCommentsCount } from '../utils/getCommentsCount';

export const fetchPosts = async () => {
	const [posts, comments] = await Promise.all([getPosts(), getComments()]);

	return {
		error: null,
		res: posts.map((post) => ({
			...post,
			commentsCount: getCommentsCount(post.id, comments),
		})),
	};
};
