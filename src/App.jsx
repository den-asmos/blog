import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components';

const AppColumn = styled.div`
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 1000px;
	min-height: 100vh;
	background: #fff;
`;

const Content = styled.div`
	padding: 120px 0;
`;

const H2 = styled.h2`
	text-align: center;
`;

const App = () => {
	return (
		<AppColumn>
			<Header />
			<Content>
				<H2>Page Content</H2>
				<Routes>
					<Route path="/" element={<div>Main Page</div>} />
					<Route path="/login" element={<div>Auth Page</div>} />
					<Route path="/register" element={<div>Register Page</div>} />
					<Route path="/users" element={<div>Users Page</div>} />
					<Route path="/post/:postId" element={<div>Post Page</div>} />
					<Route path="/post" element={<div>New Post Page</div>} />
					<Route path="*" element={<div>Error Page</div>} />
				</Routes>
			</Content>
			<Footer />
		</AppColumn>
	);
};

export default App;
