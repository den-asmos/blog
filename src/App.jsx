import styled from 'styled-components';

const Div = styled.div`
	text-align: center;
	color: blue;
`;

const App = () => {
	return (
		<Div>
			<i className="fa fa-camera-retro"></i>
			<div>Hello</div>
		</Div>
	);
};

export default App;
