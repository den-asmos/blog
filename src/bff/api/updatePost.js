export const updatePost = ({ id, imageUrl, title, content }) => {
	return fetch(`http://localhost:7070/posts/${id}`, {
		method: 'PATCH',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			image_url: imageUrl,
			title,
			content,
		}),
	}).then((post) => post.json());
};
