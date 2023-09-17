import { useSelector } from 'react-redux';
import { selectUserRole } from '../redux/selectors';
import { ERROR } from '../bff/constants';
import { checkAccess } from '../utils/checkAccess';
import Error from './Error';
import PropTypes from 'prop-types';
import { PROP_TYPES } from '../constants';

const PrivateContent = ({ children, serverError = null, access }) => {
	const userRole = useSelector(selectUserRole);
	const accessError = checkAccess(access, userRole) ? null : ERROR.ACCESS_DENIED;
	const error = serverError || accessError;

	return error ? <Error error={error} /> : children;
};

PrivateContent.propTypes = {
	children: PropTypes.node.isRequired,
	access: PropTypes.arrayOf(PROP_TYPES.ROLE_ID).isRequired,
	serverError: PROP_TYPES.ERROR,
};

export default PrivateContent;
