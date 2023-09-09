import { setPostData } from './setPostData';

export const loadPostAsync = (requestServer, postId) => {
	return (dispatch) => {
		requestServer('fetchPost', postId).then((postData) => {
			dispatch(setPostData(postData.res));
		});
	};
};
