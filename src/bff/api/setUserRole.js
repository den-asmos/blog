export const setUserRole = (userId, roleId) => {
	return fetch(`http://localhost:7070/users/${userId}`, {
		method: 'PATCH',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			role_id: roleId,
		}),
	}).then((response) => response.json());
};
