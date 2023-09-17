import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonContainer = ({ children, className, width, ...props }) => {
	return (
		<button className={className} {...props}>
			{children}
		</button>
	);
};

const Button = styled(ButtonContainer)`
	padding: 0.5rem 1rem;
	width: ${({ width = '100%' }) => width};
	border: 1px solid #000;
	border-radius: 0.5rem;
	background: #fff;
	font-size: 1rem;
	outline: none;
	transition: 0.2s ease-in-out;
	cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

	&:hover {
		scale: ${({ disabled }) => (disabled ? '' : '1.1')};
	}
`;

Button.propTypes = {
	children: PropTypes.node.isRequired,
	width: PropTypes.string,
};

export default Button;
