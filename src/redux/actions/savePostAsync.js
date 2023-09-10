import { setPostData } from './setPostData';

export const savePostAsync = (requestServer, newPostData) => {
	return (dispatch) => {
		return requestServer('savePost', newPostData).then((updatedPost) => {
			dispatch(setPostData(updatedPost.res));

			return updatedPost.res;
		});
	};
};
