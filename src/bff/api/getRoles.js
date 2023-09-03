export const getRoles = () => {
	return fetch('http://localhost:7070/roles').then((response) => response.json());
};
