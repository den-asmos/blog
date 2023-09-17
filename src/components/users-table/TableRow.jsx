import PropTypes from 'prop-types';
import styled from 'styled-components';

const TableRowContainer = ({ children, className }) => {
	return <div className={className}>{children}</div>;
};

const TableRow = styled(TableRowContainer)`
	display: flex;
	text-align: center;
	${({ border }) => border && 'border: 1px solid black; border-radius: 1rem;'}

	& .login-column {
		width: 175px;
	}

	& .registered-at-column {
		width: 215px;
	}

	& .role-column {
		width: 160px;
	}

	& > div {
		padding: 0.5rem 1rem;
		display: flex;
		align-items: center;
	}
`;

TableRow.propTypes = {
	children: PropTypes.node.isRequired,
};

export default TableRow;
