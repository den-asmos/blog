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

	const onLogout = () => {
		dispatch(logout(session));
		sessionStorage.removeItem('userData');
	};

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

							<Icon id="fa-sign-out" size="25px" onClick={onLogout} />
						</StyledLogout>
					)}
				</>
			</RightAligned>
			<RightAligned>
				<Icon id="fa-angle-left" size="30px" onClick={() => navigate(-1)} />
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
