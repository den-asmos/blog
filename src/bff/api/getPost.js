import { transformPost } from '../transformers';

export const getPost = async (postId) => {
	return fetch(`http://localhost:7070/posts/${postId}`)
		.then((response) => {
			if (response.ok) {
				return response;
			}

			const error =
				response.status === 404
					? 'Такая страница не существует'
					: 'Что-то пошло не так...';

			return Promise.reject(error);
		})
		.then((response) => response.json())
		.then((post) => post && transformPost(post));
};
