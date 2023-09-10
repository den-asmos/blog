import { useEffect, useLayoutEffect } from 'react';
import { useMatch, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { PostContent, Comments, PostForm } from '../components';
import { useServerRequest } from '../hooks';
import { loadPostAsync, RESET_POST_DATA } from '../redux/actions';
import { selectPost } from '../redux/selectors';
import styled from 'styled-components';

const PostContainer = ({ className }) => {
	const dispatch = useDispatch();
	const params = useParams();
	const isEditing = useMatch('/post/:id/edit');
	const isCreating = useMatch('/post');
	const requestServer = useServerRequest();
	const post = useSelector(selectPost);

	useLayoutEffect(() => {
		dispatch(RESET_POST_DATA);
	}, [dispatch, isCreating]);

	useEffect(() => {
		if (isCreating) {
			return;
		}

		dispatch(loadPostAsync(requestServer, params.id));
	}, [dispatch, params.id, requestServer, isCreating]);

	return (
		<div className={className}>
			{isEditing || isCreating ? (
				<PostForm post={post} />
			) : (
				<>
					<PostContent post={post}></PostContent>
					<Comments comments={post.comments} postId={post.id}></Comments>
				</>
			)}
		</div>
	);
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
