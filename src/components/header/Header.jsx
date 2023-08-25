import styled from 'styled-components';
import Logo from './Logo';
import ControlPanel from './ControlPanel';

const Description = styled.div``;

const HeaderContainer = ({ className }) => {
	return (
		<header className={className}>
			<Logo />
			<Description>
				Веб-технологии
				<br />
				Написание кода
				<br />
				Разбор ошибок
			</Description>
			<ControlPanel />
		</header>
	);
};

const Header = styled(HeaderContainer)`
	padding: 20px 40px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 1000px;
	height: 120px;
	background: #fff;
	box-shadow: 0 0 15px #000;
	position: fixed;
`;

export default Header;
