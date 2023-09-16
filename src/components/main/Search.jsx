import styled from 'styled-components';
import Input from '../Input';
import Icon from '../Icon';

const SearchContainer = ({ className, searchPhrase, onChange }) => {
	return (
		<div className={className}>
			<Input value={searchPhrase} placeholder="Найти..." onChange={onChange} />
			<Icon id="fa-search" size="18px" isBtn={true} />
		</div>
	);
};

const Search = styled(SearchContainer)`
	margin: 2rem 0 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	width: 320px;
	position: relative;

	& i {
		position: absolute;
		top: 25%;
		right: 0.5rem;
	}

	& input {
		padding-right: 2rem;
	}
`;

export default Search;
