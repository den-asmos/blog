import { useDispatch } from 'react-redux';
import { useServerRequest } from '../../hooks';
import { openModal, removePostAsync, CLOSE_MODAL } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';
import Icon from '../Icon';
import styled from 'styled-components';

const SpecialPanelContainer = ({ className, publishedAt, EditBtn, id }) => {
	const dispatch = useDispatch();
	const requestServer = useServerRequest();
	const navigate = useNavigate();

	const onPostRemove = (id) => {
		dispatch(
			openModal({
				text: 'Удалить статью?',
				onConfirm: () => {
					dispatch(removePostAsync(requestServer, id)).then(() => navigate('/'));
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};

	return (
		<div className={className}>
			<div className="published-at">
				{publishedAt && <Icon id="fa-calendar" size="18px" />}
				{publishedAt}
			</div>
			<div className="btns">
				{EditBtn}
				{publishedAt && (
					<Icon
						id="fa-trash-o"
						size="18px"
						isBtn={true}
						onClick={() => onPostRemove(id)}
					/>
				)}
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
