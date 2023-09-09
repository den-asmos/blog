import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { setUser } from './redux/actions';
import { Header, Footer, Modal } from './components';
import { Auth, Registration, Users, Post } from './pages';
import styled from 'styled-components';

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
	padding: 120px 0 20px;
`;

const App = () => {
	const dispatch = useDispatch();

	useLayoutEffect(() => {
		const currentUserData = JSON.parse(sessionStorage.getItem('userData'));

		if (!currentUserData) {
			return;
		}

		dispatch(setUser({ ...currentUserData, roleId: Number(currentUserData.roleId) }));
	}, [dispatch]);

	return (
		<AppColumn>
			<Header />
			<Page>
				<Routes>
					<Route path="/" element={<div>Main Page</div>} />
					<Route path="/login" element={<Auth />} />
					<Route path="/register" element={<Registration />} />
					<Route path="/users" element={<Users />} />
					<Route path="/post/:id" element={<Post />} />
					<Route path="/post" element={<div>New Post Page</div>} />
					<Route path="*" element={<div>Error Page</div>} />
				</Routes>
			</Page>
			<Footer />

			<Modal />
		</AppColumn>
	);
};

export default App;
