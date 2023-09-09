export const deleteComment = (commentId) => {
	return fetch(`http://localhost:7070/comments/${commentId}`, {
		method: 'DELETE',
	});
};
