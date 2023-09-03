import H2 from './H2';
import styled from 'styled-components';

const Div = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Content = ({ children, error }) => {
	return (
		<>
			{error ? (
				<Div>
					<H2>Ошибка</H2>
					<div>{error}</div>
				</Div>
			) : (
				children
			)}
		</>
	);
};

export default Content;
