import { useDispatch, useSelector } from 'react-redux';
import { removeCommentAsync, openModal, CLOSE_MODAL } from '../../redux/actions';
import { selectUserRole } from '../../redux/selectors';
import { useServerRequest } from '../../hooks';
import { checkAccess } from '../../utils';
import Icon from '../Icon';
import { ROLES } from '../../constants';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CommentContainer = ({ id, postId, author, content, publishedAt, className }) => {
	const dispatch = useDispatch();
	const requestServer = useServerRequest();
	const userRole = useSelector(selectUserRole);

	const onCommentRemove = (id) => {
		dispatch(
			openModal({
				text: 'Удалить комментарий?',
				onConfirm: () => {
					dispatch(removeCommentAsync(requestServer, postId, id));
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};

	const isAdminOrModerator = checkAccess([ROLES.ADMIN, ROLES.MODERATOR], userRole);

	return (
		<div className={className}>
			<div className="comment">
				<div className="info-panel">
					<div className="author">
						<Icon id="fa-user-circle-o" size="18px" />
						{author}
					</div>
					<div className="published-at">
						<Icon id="fa-calendar" size="18px" />
						{publishedAt}
					</div>
				</div>
				<div className="comment-text">{content}</div>
			</div>
			{isAdminOrModerator && (
				<Icon
					id="fa-trash-o"
					size="18px"
					isBtn={true}
					onClick={() => onCommentRemove(id)}
				/>
			)}
		</div>
	);
};

const Comment = styled(CommentContainer)`
	margin-top: 10px;
	display: flex;
	align-items: center;
	gap: 1rem;

	& .comment {
		padding: 0.5rem 1rem;
		width: 100%;
		border: 1px solid #000;
		border-radius: 1rem;
	}

	& .info-panel {
		display: flex;
		justify-content: space-between;
	}

	& .author {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	& .published-at {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 0.5rem;
	}

	& .comment-text {
		margin-top: 10px;
	}
`;

Comment.propTypes = {
	postId: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
	author: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	publishedAt: PropTypes.string.isRequired,
};

export default Comment;
