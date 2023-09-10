import styled from 'styled-components';

const IconContainer = ({ className, id, onClick }) => {
	return (
		<div className={className} onClick={onClick}>
			<i className={`fa ${id}`} aria-hidden="true"></i>
		</div>
	);
};

const Icon = styled(IconContainer)`
	font-size: ${({ size = '20px' }) => size};
	color: ${({ disabled }) => (disabled ? '#ccc' : '#000')};
	cursor: ${({ isBtn }) => (isBtn ? 'pointer' : 'default')};
`;

export default Icon;
