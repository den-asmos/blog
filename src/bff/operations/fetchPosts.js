import { getPosts, getComments } from '../api';
import { getCommentsCount } from '../utils/getCommentsCount';

export const fetchPosts = async (page, limit) => {
	const [{ posts, links }, comments] = await Promise.all([
		getPosts(page, limit),
		getComments(),
	]);

	return {
		error: null,
		res: {
			posts: posts.map((post) => ({
				...post,
				commentsCount: getCommentsCount(post.id, comments),
			})),
			links,
		},
	};
};
