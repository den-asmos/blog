import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useStore, useSelector } from 'react-redux';
import { setUser } from '../redux/actions';
import { server } from '../bff';
import styled from 'styled-components';
import { Input, Button, H2 } from '../components';
import { selectUserRole } from '../redux/selectors';
import { ROLES } from '../constants';

const authFormSchema = yup.object().shape({
	login: yup
		.string()
		.required('Введите логин')
		.matches(/^\w+$/, 'Неверно заполнено поле. Допускаются только буквы и цифры')
		.min(3, 'Неверно заполнено поле. Минимум 3 символа')
		.max(15, 'Неверно заполнено поле. Максимум 15 символов'),

	password: yup
		.string()
		.required('Введите пароль')
		.matches(/^[\w#%]+$/, 'Неверно заполнено поле. Допускаются буквы, цифры и знаки # %')
		.min(6, 'Неверно заполнено поле. Минимум 6 символов')
		.max(30, 'Неверно заполнено поле. Максимум 30 символов'),
});

const StyledLink = styled(Link)`
	text-decoration: underline;
	color: #2574ba;
	transition: 0.2s ease;

	&:hover {
		opacity: 0.6;
	}
`;

const ErrorMessage = styled.div`
	color: red;
`;

const AuthContainer = ({ className }) => {
	const [serverError, setServerError] = useState(null);
	const dispatch = useDispatch();
	const store = useStore();
	const roleId = useSelector(selectUserRole);

	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
			password: '',
		},
		resolver: yupResolver(authFormSchema),
	});

	useEffect(() => {
		let currentWasLogout = store.getState().app.wasLogout;

		const unsubscribe = store.subscribe(() => {
			let previousWasLogout = currentWasLogout;
			currentWasLogout = store.getState().app.wasLogout;

			if (currentWasLogout !== previousWasLogout) {
				reset();
			}
		});

		return unsubscribe;
	}, [reset, store]);

	const onFormSubmit = ({ login, password }) => {
		server.authorize(login, password).then(({ error, response }) => {
			if (error) {
				setServerError(`Ошибка запроса: ${error}`);
				return;
			}

			dispatch(setUser(response));
		});
	};

	const formError = errors?.login?.message || errors?.password?.message;

	const errorMessage = formError || serverError;

	if (roleId !== ROLES.GUEST) {
		return <Navigate to="/" />;
	}

	return (
		<div className={className}>
			<H2>Авторизация</H2>
			<form onSubmit={handleSubmit(onFormSubmit)}>
				<Input
					type="text"
					placeholder="Your login..."
					{...register('login', { onChange: () => setServerError(null) })}
				/>
				<Input
					type="password"
					placeholder="Your password..."
					{...register('password', { onChange: () => setServerError(null) })}
				/>
				<Button type="submit" disabled={formError} width="50%">
					Войти
				</Button>
				{errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
				<StyledLink to="/register">Регистрация</StyledLink>
			</form>
		</div>
	);
};

const Auth = styled(AuthContainer)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	& > form {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		width: 260px;
	}
`;

export default Auth;
