import { transformUser } from '../transformers';

export const findUser = async (loginToFind) => {
	const response = await fetch(`http://localhost:7070/users?login=${loginToFind}`);
	const [user] = await response.json();

	return user && transformUser(user);
};
