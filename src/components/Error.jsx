import H2 from './H2';
import styled from 'styled-components';
import { PROP_TYPES } from '../constants';

const ErrorContainer = ({ className, error }) => {
	return (
		error && (
			<div className={className}>
				<H2>Ошибка</H2>
				<div>{error}</div>
			</div>
		)
	);
};

const Error = styled(ErrorContainer)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: 18px;
`;

Error.propTypes = {
	error: PROP_TYPES.ERROR.isRequired,
};

export default Error;
