import { useNavigate } from 'react-router-dom';
import SpecialPanel from './SpecialPanel';
import H2 from '../H2';
import Icon from '../Icon';
import styled from 'styled-components';

const PostContentContainer = ({
	post: { id, title, imageUrl, content, publishedAt },
	className,
}) => {
	const navigate = useNavigate();

	return (
		<div className={className}>
			<img src={imageUrl} alt={title} />
			<H2>{title}</H2>

			<SpecialPanel
				margin="-20px 0 20px"
				id={id}
				publishedAt={publishedAt}
				EditBtn={
					<Icon
						id="fa-pencil"
						size="18px"
						isBtn={true}
						onClick={() => navigate(`/post/${id}/edit`)}
					/>
				}
			/>

			<div className="post-text">{content}</div>
		</div>
	);
};

const PostContent = styled(PostContentContainer)`
	& h2 {
		margin-top: 0;
	}

	& img {
		margin: 0 20px 10px 0;
		float: left;
		border-radius: 1rem;
	}

	& .post-text {
		font-size: 18px;
		white-space: pre-line;
	}
`;

export default PostContent;
