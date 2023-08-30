import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Icon from '../Icon';
import Button from '../Button';
import { ROLES } from '../../constants';
import {
	selectUserRole,
	selectUserLogin,
	selectUserSession,
} from '../../redux/selectors';
import { logout } from '../../redux/actions';

const RightAligned = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	gap: 1rem;
`;

const StyledIcon = styled.div`
	cursor: pointer;
`;

const StyledLogout = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;
	font-weight: bold;
`;

const ControlPanelContainer = ({ className }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const roleId = useSelector(selectUserRole);
	const login = useSelector(selectUserLogin);
	const session = useSelector(selectUserSession);

	return (
		<div className={className}>
			<RightAligned>
				<>
					{roleId === ROLES.GUEST ? (
						<Button>
							<Link to="/login">Вход</Link>
						</Button>
					) : (
						<StyledLogout>
							<div>{login}</div>
							<StyledIcon onClick={() => dispatch(logout(session))}>
								<Icon id="fa-sign-out" size="25px" />
							</StyledIcon>
						</StyledLogout>
					)}
				</>
			</RightAligned>
			<RightAligned>
				<StyledIcon onClick={() => navigate(-1)}>
					<Icon id="fa-angle-left" size="30px" />
				</StyledIcon>
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
