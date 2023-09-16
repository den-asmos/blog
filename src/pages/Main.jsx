import { useEffect, useState } from 'react';
import { useServerRequest } from '../hooks';
import { PostCard, Pagination } from '../components';
import { PAGINATION_LIMIT } from '../bff/constants';
import styled from 'styled-components';
import { getLastPageFromLinks } from '../bff/utils';

const MainContainer = ({ className }) => {
	const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(1);
	const [lastPage, setLastPage] = useState(1);
	const requestServer = useServerRequest();

	useEffect(() => {
		requestServer('fetchPosts', page, PAGINATION_LIMIT).then((response) => {
			setPosts(response.res.posts);
			setLastPage(getLastPageFromLinks(response.res.links));
		});
	}, [requestServer, page]);

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

			{lastPage !== 1 && <Pagination page={page} lastPage={lastPage} setPage={setPage} />}
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
