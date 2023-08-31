import styled from 'styled-components';

const FormErrorContainer = ({ children, className }) => {
	return <div className={className}>{children}</div>;
};

const FormError = styled(FormErrorContainer)`
	color: red;
`;

export default FormError;
