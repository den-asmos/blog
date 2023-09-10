import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Icon from './../Icon';

const LargeText = styled.div`
	font-size: 68px;
	font-weight: 700;
	margin: -3px;
`;

const SmallText = styled.div`
	font-size: 25px;
	font-weight: 700;
`;

const LogoConainer = ({ className }) => {
	return (
		<Link to="/" className={className}>
			<Icon id="fa-code" size="90px" isBtn={true} />
			<div>
				<LargeText>Блог</LargeText>
				<SmallText>веб-разработчика</SmallText>
			</div>
		</Link>
	);
};

const Logo = styled(LogoConainer)`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 1rem;
`;

export default Logo;
