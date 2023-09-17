import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputContainer = forwardRef(({ className, width = '260px', ...props }, ref) => {
	return <input className={className} {...props} ref={ref} />;
});

const Input = styled(InputContainer)`
	padding: 0.5rem 1rem;
	width: ${({ width = '100%' }) => width};
	border: 1px solid #000;
	border-radius: 0.5rem;
	font-size: 1.2rem;
	outline: none;
`;

Input.propTypes = {
	width: PropTypes.string,
};

export default Input;
