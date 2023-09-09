export const addSession = (hash, user) => {
	return fetch('http://localhost:7070/sessions', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			hash,
			user,
		}),
	});
};
