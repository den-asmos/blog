import { setPostData } from './setPostData';

export const removeCommentAsync = (requestServer, postId, id) => {
	return (dispatch) => {
		requestServer('removeComment', postId, id).then((postData) => {
			dispatch(setPostData(postData.res));
		});
	};
};
