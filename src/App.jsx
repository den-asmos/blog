import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

const Content = styled.div`
	padding: 120px 0;
`;

const H2 = styled.h2`
	text-align: center;
`;

const Header = () => {
	return <div>Header</div>;
};

const Footer = () => {
	return <div>Footer</div>;
};

const App = () => {
	return (
		<>
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
		</>
	);
};

export default App;
