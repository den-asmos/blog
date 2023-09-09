export const deleteSession = async (sessionId) => {
	return fetch(`http://localhost:7070/sessions/${sessionId}`, {
		method: 'DELETE',
	});
};
