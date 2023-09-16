import { transformPost } from '../transformers';

export const getPosts = (page, limit) => {
	return fetch(`http://localhost:7070/posts?_page=${page}&_limit=${limit}`)
		.then((response) => Promise.all([response.json(), response.headers.get('link')]))
		.then(([posts, links]) => ({
			posts: posts && posts.map(transformPost),
			links,
		}));
};
