import { useSelector } from 'react-redux';
import {
	selectModalIsOpen,
	selectModalOnCancel,
	selectModalOnConfirm,
	selectModalText,
} from '../redux/selectors';
import Button from './Button';
import styled from 'styled-components';

const ModalContainer = ({ className }) => {
	const isOpen = useSelector(selectModalIsOpen);
	const text = useSelector(selectModalText);
	const onConfirm = useSelector(selectModalOnConfirm);
	const onCancel = useSelector(selectModalOnCancel);

	if (!isOpen) {
		return null;
	}

	return (
		<div className={className}>
			<div className="overlay"></div>
			<div className="box">
				<h3>{text}</h3>
				<div className="btns">
					<Button width="120px" onClick={onConfirm}>
						Да
					</Button>
					<Button width="120px" onClick={onCancel}>
						Отмена
					</Button>
				</div>
			</div>
		</div>
	);
};

const Modal = styled(ModalContainer)`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 20;

	& .overlay {
		position: absolute;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.6);
	}

	& .box {
		margin: auto;
		padding: 0.5rem 1rem 1.5rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;
		top: 50%;
		width: 350px;
		background: #fff;
		border: 1px solid #000;
		border-radius: 1rem;
		transform: translate(0, -100%);
		z-index: 30;
	}

	& .btns {
		display: flex;
		gap: 1rem;
	}
`;

export default Modal;
