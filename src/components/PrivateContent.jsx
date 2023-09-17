import { useSelector } from 'react-redux';
import { selectUserRole } from '../redux/selectors';
import { ERROR } from '../bff/constants';
import { checkAccess } from '../utils/checkAccess';
import Error from './Error';

const PrivateContent = ({ children, serverError = null, access }) => {
	const userRole = useSelector(selectUserRole);
	const accessError = checkAccess(access, userRole) ? null : ERROR.ACCESS_DENIED;
	const error = serverError || accessError;

	return error ? <Error error={error} /> : children;
};

export default PrivateContent;
