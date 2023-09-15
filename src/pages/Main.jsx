import { useEffect, useState } from 'react';
import { useServerRequest } from '../hooks';
import { PostCard } from '../components';
import styled from 'styled-components';

const MainContainer = ({ className }) => {
	const [posts, setPosts] = useState([]);
	const requestServer = useServerRequest();

	useEffect(() => {
		requestServer('fetchPosts').then((response) => {
			setPosts(response.res);
		});
	}, [requestServer]);

	return (
		<div className={className}>
			<div className="post-list">
				{posts.map(({ id, title, imageUrl, publishedAt, commentsCount }) => (
					<PostCard
						key={id}
						id={id}
						title={title}
						imageUrl={imageUrl}
						publishedAt={publishedAt}
						commentsCount={commentsCount}
					/>
				))}
			</div>
		</div>
	);
};

const Main = styled(MainContainer)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	& .post-list {
		padding: 20px 40px;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 1.5rem;
	}
`;

export default Main;
