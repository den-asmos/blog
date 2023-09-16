import { Link } from 'react-router-dom';
import Icon from '../Icon';
import styled from 'styled-components';

const PostCardContainer = ({
	className,
	id,
	title,
	imageUrl,
	publishedAt,
	commentsCount,
}) => {
	return (
		<div className={className}>
			<Link to={`/post/${id}`}>
				<img src={imageUrl} alt={title} />
				<div className="post-card-footer">
					<h3>{title}</h3>

					<div className="post-card-info">
						<div className="published-at">
							<Icon id="fa-calendar" size="18px" />
							{publishedAt}
						</div>

						<div className="comments-count">
							<Icon id="fa-comment-o" size="18px" />
							{commentsCount}
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

const PostCard = styled(PostCardContainer)`
	padding: 0.5rem;
	display: flex;
	flex-direction: column;
	width: 280px;
	border: 1px solid #000;
	border-radius: 1rem;

	& img {
		max-width: 100%;
		max-height: 100%;
		border-radius: 1rem;
	}

	& h3 {
		margin: 10px 0;
	}

	& .post-card-info {
		justify-content: space-between;
	}

	& .post-card-info,
	.published-at,
	.comments-count {
		display: flex;
		gap: 0.5rem;
	}
`;

export default PostCard;
