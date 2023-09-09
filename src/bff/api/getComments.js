import { transformComment } from '../transformers';

export const getComments = (postId) => {
	return fetch(`http://localhost:7070/comments?post_id=${postId}`)
		.then((response) => response.json())
		.then((comments) => comments.map(transformComment));
};
