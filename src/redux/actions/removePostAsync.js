export const removePostAsync = (requestServer, id) => {
	return () => {
		return requestServer('removePost', id);
	};
};
