import Icon from '../Icon';
import styled from 'styled-components';

const SpecialPanelContainer = ({ className, publishedAt, EditBtn }) => {
	return (
		<div className={className}>
			<div className="published-at">
				<Icon id="fa-calendar" size="18px" />
				{publishedAt}
			</div>
			<div className="btns">
				{EditBtn}
				<Icon id="fa-trash-o" size="18px" onClick={() => {}} />
			</div>
		</div>
	);
};

const SpecialPanel = styled(SpecialPanelContainer)`
	margin: ${({ margin }) => margin};
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 18px;

	& .published-at {
		display: flex;
		justify-content: start;
		align-items: center;
		gap: 0.5rem;
	}

	& .btns {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		gap: 0.5rem;
	}
`;

export default SpecialPanel;
