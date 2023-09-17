import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { setUser } from './redux/actions';
import { Header, Footer, Modal, Error } from './components';
import { Auth, Registration, Users, Post, Main } from './pages';
import { ERROR } from './bff/constants';
import styled from 'styled-components';

const AppColumn = styled.div`
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 1000px;
	min-height: 100vh;
	background: #fff;
	position: relative;
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
					<Route path="/" element={<Main />} />
					<Route path="/login" element={<Auth />} />
					<Route path="/register" element={<Registration />} />
					<Route path="/users" element={<Users />} />
					<Route path="/post/:id" element={<Post />} />
					<Route path="/post/:id/edit" element={<Post />} />
					<Route path="/post" element={<Post />} />
					<Route path="*" element={<Error error={ERROR.PAGE_DOES_NOT_EXIST} />} />
				</Routes>
			</Page>
			<Footer />

			<Modal />
		</AppColumn>
	);
};

export default App;
