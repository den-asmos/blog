import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useServerRequest } from '../../hooks';
import { selectUserId } from '../../redux/selectors';
import { addCommentAsync } from '../../redux/actions';
import Icon from '../Icon';
import Comment from './Comment';
import styled from 'styled-components';

const CommentsContainer = ({ comments, className, postId }) => {
	const [newComment, setNewComment] = useState('');
	const userId = useSelector(selectUserId);
	const dispatch = useDispatch();
	const requestServer = useServerRequest();

	const onNewCommentAdd = (userId, postId, content) => {
		dispatch(addCommentAsync(requestServer, userId, postId, content));
		setNewComment('');
	};

	return (
		<div className={className}>
			<div className="new-comment">
				<textarea
					name="comment"
					value={newComment}
					placeholder="Комментарий..."
					onChange={({ target }) => setNewComment(target.value)}
				></textarea>
				<Icon
					id="fa-paper-plane-o"
					size="18px"
					onClick={() => onNewCommentAdd(userId, postId, newComment)}
				/>
			</div>
			<div className="comments">
				{comments.map(({ id, author, content, publishedAt }) => (
					<Comment
						key={id}
						id={id}
						author={author}
						content={content}
						publishedAt={publishedAt}
					/>
				))}
			</div>
		</div>
	);
};

const Comments = styled(CommentsContainer)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 580px;

	& .new-comment {
		margin: 1rem 0;
		display: flex;
		gap: 0.5rem;
		width: 100%;
	}

	& .new-comment textarea {
		padding: 0.5rem 0.8rem;
		width: 100%;
		height: 120px;
		font-size: 18px;
		border-radius: 1rem;
		resize: none;
		outline: none;
	}
`;

export default Comments;
