import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { savePostAsync } from '../../redux/actions';
import { useServerRequest } from '../../hooks';
import { sanitizeContent } from '../../utils/sanitizeContent';
import SpecialPanel from './SpecialPanel';
import Icon from '../Icon';
import Input from '../Input';
import styled from 'styled-components';

const PostFormContainer = ({
	post: { id, title, imageUrl, content, publishedAt },
	className,
}) => {
	const dispatch = useDispatch();
	const requestServer = useServerRequest();
	const navigate = useNavigate();

	const imageRef = useRef(null);
	const titleRef = useRef(null);
	const contentRef = useRef(null);

	const onSave = () => {
		const newImageUrl = imageRef.current.value;
		const newTitle = titleRef.current.value;
		const newContent = sanitizeContent(contentRef.current.innerHTML);

		dispatch(
			savePostAsync(requestServer, {
				id,
				imageUrl: newImageUrl,
				title: newTitle,
				content: newContent,
			}),
		).then(() => navigate(`/post/${id}`));
	};

	return (
		<div className={className}>
			<Input ref={imageRef} defaultValue={imageUrl} placeholder="Изображение" />
			<Input ref={titleRef} defaultValue={title} placeholder="Заголовок..." />

			<SpecialPanel
				margin="1rem 0"
				publishedAt={publishedAt}
				EditBtn={<Icon id="fa-floppy-o" size="18px" onClick={onSave} />}
			/>

			<div
				ref={contentRef}
				contentEditable={true}
				suppressContentEditableWarning={true}
				className="post-text"
			>
				{content}
			</div>
		</div>
	);
};

const PostForm = styled(PostFormContainer)`
	width: 100%;

	& input {
		margin: 0.5rem 0;
	}

	& .post-text {
		padding: 0.5rem 1rem;
		font-size: 18px;
		white-space: pre-line;
	}

	& .post-text:focus {
		outline: 1px solid #000;
		border-radius: 0.5rem;
	}
`;

export default PostForm;
