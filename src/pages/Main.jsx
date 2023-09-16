import { useEffect, useState, useMemo } from 'react';
import { useServerRequest } from '../hooks';
import { PostCard, Pagination, Search } from '../components';
import { PAGINATION_LIMIT } from '../bff/constants';
import styled from 'styled-components';
import { getLastPageFromLinks } from '../bff/utils';
import { debounce } from '../utils';

const MainContainer = ({ className }) => {
	const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(1);
	const [lastPage, setLastPage] = useState(1);
	const [shouldSearch, setShouldSearch] = useState(false);
	const [searchPhrase, setSearchPhrase] = useState('');
	const requestServer = useServerRequest();

	useEffect(() => {
		requestServer('fetchPosts', searchPhrase, page, PAGINATION_LIMIT).then(({ res }) => {
			setPosts(res.posts);
			setLastPage(getLastPageFromLinks(res.links));
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [requestServer, page, shouldSearch]);

	const startDelayedSearch = useMemo(() => debounce(setShouldSearch, 2000), []);

	const onSearch = ({ target }) => {
		setSearchPhrase(target.value);
		startDelayedSearch(!shouldSearch);
	};

	return (
		<div className={className}>
			<Search searchPhrase={searchPhrase} onChange={onSearch} />
			{posts.length ? (
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
			) : (
				<div className="no-posts-found">Статьи не найдены</div>
			)}

			{lastPage > 1 && <Pagination page={page} lastPage={lastPage} setPage={setPage} />}
		</div>
	);
};

const Main = styled(MainContainer)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	& .post-list {
		padding: 20px 20px 80px;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 1.5rem;
	}

	& .no-posts-found {
		margin: 1rem 0;
		font-size: 21px;
	}
`;

export default Main;
