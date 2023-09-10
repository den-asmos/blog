import { useLayoutEffect, useRef, useState } from 'react';
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
	const [imageUrlValue, setImageUrlValue] = useState(imageUrl);
	const [titleValue, setTitleValue] = useState(title);
	const contentRef = useRef(null);

	useLayoutEffect(() => {
		setImageUrlValue(imageUrl);
		setTitleValue(title);
	}, [imageUrl, title]);

	const dispatch = useDispatch();
	const requestServer = useServerRequest();
	const navigate = useNavigate();

	const onSave = () => {
		const newContent = sanitizeContent(contentRef.current.innerHTML);

		dispatch(
			savePostAsync(requestServer, {
				id,
				imageUrl: imageUrlValue,
				title: titleValue,
				content: newContent,
			}),
		).then(({ id }) => navigate(`/post/${id}`));
	};

	const onImageUrlChange = ({ target }) => {
		setImageUrlValue(target.value);
	};

	const onTitleChange = ({ target }) => {
		setTitleValue(target.value);
	};

	return (
		<div className={className}>
			<Input
				value={imageUrlValue}
				placeholder="Изображение..."
				onChange={onImageUrlChange}
			/>
			<Input value={titleValue} placeholder="Заголовок..." onChange={onTitleChange} />

			<SpecialPanel
				margin="1rem 0"
				id={id}
				publishedAt={publishedAt}
				EditBtn={<Icon id="fa-floppy-o" size="18px" isBtn={true} onClick={onSave} />}
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
		border: 1px solid #000;
		border-radius: 0.5rem;
	}

	& .post-text:focus {
		border: none;
		outline: 1px solid #ddd;
		border-radius: 0.5rem;
	}
`;

export default PostForm;
