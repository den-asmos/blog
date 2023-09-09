import Icon from '../Icon';
import styled from 'styled-components';

const CommentContainer = ({ id, author, content, publishedAt, className }) => {
	return (
		<div className={className}>
			<div className="comment">
				<div className="info-panel">
					<div className="author">
						<Icon id="fa-user-circle-o" size="18px" />
						{author}
					</div>
					<div className="published-at">
						<Icon id="fa-calendar" size="18px" />
						{publishedAt}
					</div>
				</div>
				<div className="comment-text">{content}</div>
			</div>
			<Icon id="fa-trash-o" size="18px" />
		</div>
	);
};

const Comment = styled(CommentContainer)`
	margin-top: 10px;
	display: flex;
	align-items: center;
	gap: 1rem;

	& .comment {
		padding: 0.5rem 1rem;
		width: 100%;
		border: 1px solid #000;
		border-radius: 1rem;
	}

	& .info-panel {
		display: flex;
		justify-content: space-between;
	}

	& .author {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	& .published-at {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 0.5rem;
	}

	& .comment-text {
		margin-top: 10px;
	}
`;

export default Comment;
