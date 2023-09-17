import { useEffect, useLayoutEffect, useState } from 'react';
import { useMatch, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loadPostAsync, RESET_POST_DATA } from '../redux/actions';
import { selectPost } from '../redux/selectors';
import { useServerRequest } from '../hooks';
import { ROLES } from '../constants';
import { PostContent, Comments, PostForm, Error, PrivateContent } from '../components';
import styled from 'styled-components';

const PostContainer = ({ className }) => {
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const dispatch = useDispatch();
	const params = useParams();
	const isEditing = !!useMatch('/post/:id/edit');
	const isCreating = !!useMatch('/post');
	const requestServer = useServerRequest();
	const post = useSelector(selectPost);

	useLayoutEffect(() => {
		dispatch(RESET_POST_DATA);
	}, [dispatch, isCreating]);

	useEffect(() => {
		if (isCreating) {
			setIsLoading(false);
			return;
		}

		dispatch(loadPostAsync(requestServer, params.id)).then((postData) => {
			setError(postData.error);
			setIsLoading(false);
		});
	}, [dispatch, params.id, requestServer, isCreating]);

	if (isLoading) {
		return null;
	}

	const SpecificPostPage =
		isEditing || isCreating ? (
			<PrivateContent access={[ROLES.ADMIN]} serverError={error}>
				<div className={className}>
					<PostForm post={post} />
				</div>
			</PrivateContent>
		) : (
			<div className={className}>
				<PostContent post={post}></PostContent>
				<Comments comments={post.comments} postId={post.id}></Comments>
			</div>
		);

	return error ? <Error error={error} /> : SpecificPostPage;
};

const Post = styled(PostContainer)`
	margin: 40px 0;
	padding: 0 80px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
`;

export default Post;
