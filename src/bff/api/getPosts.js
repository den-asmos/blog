import { transformPost } from '../transformers';

export const getPosts = () => {
	return fetch('http://localhost:7070/posts')
		.then((response) => response.json())
		.then((posts) => posts && posts.map(transformPost));
};
