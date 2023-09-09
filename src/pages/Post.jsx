import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { PostContent, Comments } from '../components';
import { useServerRequest } from '../hooks';
import { loadPostAsync } from '../redux/actions';
import { selectPost } from '../redux/selectors';
import styled from 'styled-components';

const PostContainer = ({ className }) => {
	const dispatch = useDispatch();
	const params = useParams();
	const requestServer = useServerRequest();
	const post = useSelector(selectPost);

	useEffect(() => {
		dispatch(loadPostAsync(requestServer, params.id));
	}, [dispatch, params.id, requestServer]);

	return (
		<div className={className}>
			<PostContent post={post}></PostContent>
			<Comments comments={post.comments} postId={post.id}></Comments>
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