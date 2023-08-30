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
	cursor: pointer;

	&:hover {
		scale: 1.1;
	}
`;

export default Button;
