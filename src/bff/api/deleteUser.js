export const deleteUser = (userId) => {
	return fetch(`http://localhost:7070/users/${userId}`, {
		method: 'DELETE',
	});
};
