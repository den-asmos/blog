import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import { Auth, Registration, Users } from './pages';

const AppColumn = styled.div`
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 1000px;
	min-height: 100vh;
	background: #fff;
`;

const Page = styled.div`
	padding: 120px 0;
`;

const App = () => {
	return (
		<AppColumn>
			<Header />
			<Page>
				<Routes>
					<Route path="/" element={<div>Main Page</div>} />
					<Route path="/login" element={<Auth />} />
					<Route path="/register" element={<Registration />} />
					<Route path="/users" element={<Users />} />
					<Route path="/post/:postId" element={<div>Post Page</div>} />
					<Route path="/post" element={<div>New Post Page</div>} />
					<Route path="*" element={<div>Error Page</div>} />
				</Routes>
			</Page>
			<Footer />
		</AppColumn>
	);
};

export default App;
