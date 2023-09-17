import PropTypes from 'prop-types';
import styled from 'styled-components';

const FormErrorContainer = ({ children, className }) => {
	return <div className={className}>{children}</div>;
};

const FormError = styled(FormErrorContainer)`
	color: red;
`;

FormError.propTypes = {
	children: PropTypes.node.isRequired,
};

export default FormError;
