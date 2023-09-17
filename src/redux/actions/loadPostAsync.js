import { setPostData } from './setPostData';

export const loadPostAsync = (requestServer, postId) => {
	return (dispatch) => {
		return requestServer('fetchPost', postId).then((postData) => {
			if (postData.res) {
				dispatch(setPostData(postData.res));
			}

			return postData;
		});
	};
};
