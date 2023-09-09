import { setPostData } from './setPostData';

export const addCommentAsync = (requestServer, userId, postId, content) => {
	return (dispatch) => {
		requestServer('addComment', userId, postId, content).then((postData) => {
			dispatch(setPostData(postData.res));
		});
	};
};
