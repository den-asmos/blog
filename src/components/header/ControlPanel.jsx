import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import Icon from '../Icon';

const RightAligned = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	gap: 1rem;
`;

const StyledLink = styled(Link)`
	padding: 0.5rem 1rem;
	border: 1px solid #000;
	border-radius: 0.5rem;
	color: unset;
	text-decoration: none;
`;

const StyledButton = styled.div`
	cursor: pointer;
`;

const ControlPanelContainer = ({ className }) => {
	const navigate = useNavigate();

	return (
		<div className={className}>
			<RightAligned>
				<StyledLink to="/login">Войти</StyledLink>
			</RightAligned>
			<RightAligned>
				<StyledButton onClick={() => navigate(-1)}>
					<Icon id="fa-angle-left" size="30px" />
				</StyledButton>
				<Link to="/post">
					<Icon id="fa-file-o" size="20px" />
				</Link>
				<Link to="/users">
					<Icon id="fa-users" size="20px" />
				</Link>
			</RightAligned>
		</div>
	);
};

const ControlPanel = styled(ControlPanelContainer)`
	display: flex;
	flex-direction: column;
	gap: 0.7rem;
`;

export default ControlPanel;
