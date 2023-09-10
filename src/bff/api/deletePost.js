export const deletePost = (postId) => {
	return fetch(`http://localhost:7070/posts/${postId}`, {
		method: 'DELETE',
	});
};
