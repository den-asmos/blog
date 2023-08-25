import styled from 'styled-components';

const IconContainer = ({ className, id }) => {
	return (
		<div className={className}>
			<i className={`fa ${id}`} aria-hidden="true"></i>
		</div>
	);
};

const Icon = styled(IconContainer)`
	font-size: ${({ size = '20px' }) => size};
`;

export default Icon;
