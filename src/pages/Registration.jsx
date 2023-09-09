import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/actions';
import { server } from '../bff';
import styled from 'styled-components';
import { Input, Button, H2, FormError } from '../components';
import { useResetForm } from '../hooks';
import { selectUserRole } from '../redux/selectors';
import { ROLES } from '../constants';

const registrationFormSchema = yup.object().shape({
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

	passwordCheck: yup
		.string()
		.required('Заполните поле')
		.oneOf([yup.ref('password'), null], 'Пароли не совпадают'),
});

const RegistrationContainer = ({ className }) => {
	const [serverError, setServerError] = useState(null);
	const dispatch = useDispatch();
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
			passwordCheck: '',
		},
		resolver: yupResolver(registrationFormSchema),
	});

	useResetForm(reset);

	const onFormSubmit = ({ login, password }) => {
		server.register(login, password).then(({ error, response }) => {
			if (error) {
				setServerError(`Ошибка запроса: ${error}`);
				return;
			}

			dispatch(setUser(response));
			sessionStorage.setItem('userData', JSON.stringify(response));
		});
	};

	const formError =
		errors?.login?.message || errors?.password?.message || errors?.passwordCheck?.message;

	const errorMessage = formError || serverError;

	if (roleId !== ROLES.GUEST) {
		return <Navigate to="/" />;
	}

	return (
		<div className={className}>
			<H2>Регистрация</H2>
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
				<Input
					type="password"
					placeholder="Repeat your password..."
					{...register('passwordCheck', { onChange: () => setServerError(null) })}
				/>
				<Button type="submit" disabled={formError} width="80%">
					Зарегистрироваться
				</Button>
				{errorMessage && <FormError>{errorMessage}</FormError>}
			</form>
		</div>
	);
};

const Registration = styled(RegistrationContainer)`
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

export default Registration;
