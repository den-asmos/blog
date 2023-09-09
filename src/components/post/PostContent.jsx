import H2 from '../H2';
import Icon from '../Icon';
import styled from 'styled-components';

const PostContentContainer = ({
	post: { id, title, imageUrl, content, publishedAt },
	className,
}) => {
	return (
		<div className={className}>
			<img src={imageUrl} alt={title} />
			<H2>{title}</H2>

			<div className="special-panel">
				<div className="published-at">
					<Icon id="fa-calendar" size="18px" />
					{publishedAt}
				</div>
				<div className="btns">
					<Icon id="fa-pencil" size="18px" onClick={() => {}} />
					<Icon id="fa-trash-o" size="18px" onClick={() => {}} />
				</div>
			</div>

			<div className="post-text">{content}</div>
		</div>
	);
};

const PostContent = styled(PostContentContainer)`
	& img {
		margin: 0 20px 10px 0;
		float: left;
	}

	& .special-panel {
		margin: -20px 0 20px;
		display: flex;
		justify-content: space-between;
		font-size: 18px;
	}

	& .published-at {
		display: flex;
		justify-content: start;
		align-items: end;
		gap: 0.8rem;
	}

	& .btns {
		display: flex;
		justify-content: center;
		align-items: end;
		gap: 0.5rem;
	}

	& .post-text {
		font-size: 18px;
	}
`;

export default PostContent;
