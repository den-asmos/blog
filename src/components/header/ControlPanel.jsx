import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
	selectUserRole,
	selectUserLogin,
	selectUserSession,
} from '../../redux/selectors';
import { logout } from '../../redux/actions';
import { checkAccess } from '../../utils';
import { ROLES } from '../../constants';
import Icon from '../Icon';
import Button from '../Button';
import styled from 'styled-components';

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

	const isAdmin = checkAccess([ROLES.ADMIN], roleId);

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

							<Icon id="fa-sign-out" size="25px" isBtn={true} onClick={onLogout} />
						</StyledLogout>
					)}
				</>
			</RightAligned>
			<RightAligned>
				<Icon id="fa-angle-left" size="30px" isBtn={true} onClick={() => navigate(-1)} />
				{isAdmin && (
					<>
						<Link to="/post">
							<Icon id="fa-file-o" size="20px" isBtn={true} />
						</Link>
						<Link to="/users">
							<Icon id="fa-users" size="20px" isBtn={true} />
						</Link>
					</>
				)}
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
