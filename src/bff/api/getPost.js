import { transformPost } from '../transformers';

export const getPost = async (postId) => {
	const response = await fetch(`http://localhost:7070/posts/${postId}`);
	const post = await response.json();

	return post && transformPost(post);
};
