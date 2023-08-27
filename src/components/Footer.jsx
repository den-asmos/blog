import { useState, useEffect } from 'react';
import styled from 'styled-components';

const FooterContainer = ({ className }) => {
	const [city, setCity] = useState('');
	const [temperature, setTermperature] = useState('');
	const [weather, setWeather] = useState('');

	useEffect(() => {
		fetch(
			'http://api.openweathermap.org/data/2.5/weather?q=Vitebsk&units=metric&lang=ru&appid=850a653f987a829f75081d52cde9dbdc',
		)
			.then((res) => res.json())
			.then(({ name, main, weather }) => {
				setCity(name);
				setTermperature(Math.round(main.temp));
				setWeather(weather[0].description);
			});
	}, []);

	return (
		<div className={className}>
			<div>
				<div>Блог веб-разработчика</div>
				<div>web@developer.ru</div>
			</div>

			<div>
				<div>
					{city}, {new Date().toLocaleString('ru', { day: 'numeric', month: 'long' })}
				</div>
				<div>
					{temperature}&deg;, {weather}
				</div>
			</div>
		</div>
	);
};

const Footer = styled(FooterContainer)`
	padding: 20px 40px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 120px;
	width: 1000px;
	font-weight: bold;
	background: #fff;
	box-shadow: 0 0 15px #000;
`;

export default Footer;
