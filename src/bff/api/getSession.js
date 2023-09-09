import { transformSession } from '../transformers';

export const getSession = (hash) => {
	return fetch(`http://localhost:7070/sessions?hash=${hash}`)
		.then((response) => response.json())
		.then(([session]) => session && transformSession(session));
};
