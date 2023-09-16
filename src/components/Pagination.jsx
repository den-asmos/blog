import styled from 'styled-components';
import Button from './Button';

const PaginationContainer = ({ className, page, lastPage, setPage }) => {
	return (
		<div className={className}>
			<Button disabled={page === 1} onClick={() => setPage(1)}>
				В начало
			</Button>
			<Button disabled={page === 1} onClick={() => setPage(page - 1)}>
				Предыдущая
			</Button>
			<div className="current-page">{page}</div>
			<Button disabled={page === lastPage} onClick={() => setPage(page + 1)}>
				Следующая
			</Button>
			<Button disabled={page === lastPage} onClick={() => setPage(lastPage)}>
				В конец
			</Button>
		</div>
	);
};

const Pagination = styled(PaginationContainer)`
	margin-top: 2rem;
	display: flex;
	justify-content: center;
	gap: 1rem;
	width: 85%;

	& .current-page {
		padding: 0.5rem 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 1px solid #000;
		border-radius: 0.5rem;
	}
`;

export default Pagination;
