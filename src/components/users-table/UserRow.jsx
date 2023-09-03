import { useState } from 'react';
import { useServerRequest } from '../../hooks';
import Icon from '../Icon';
import TableRow from './TableRow';
import styled from 'styled-components';

const UserRowContainer = ({
	className,
	id,
	login,
	registeredAt,
	roleId,
	roles,
	onUserRemove,
}) => {
	const [initialRoleId, setInitialRoleId] = useState(roleId);
	const [selectedRoleId, setSelectedRoleId] = useState(roleId);
	const requestServer = useServerRequest();

	const onRoleChange = ({ target }) => {
		setSelectedRoleId(Number(target.value));
	};

	const onRoleSave = (userId, newUserRoleId) => {
		requestServer('updateUserRole', userId, newUserRoleId).then(() => {
			setInitialRoleId(newUserRoleId);
		});
	};

	const isSaveBtnDisabled = initialRoleId === selectedRoleId;

	return (
		<div className={className}>
			<TableRow border="true">
				<div className="login-column">{login}</div>
				<div className="registered-at-column">{registeredAt}</div>

				<div className="role-column">
					<select value={selectedRoleId} onChange={onRoleChange}>
						{roles.map(({ id: roleId, name: roleName }) => (
							<option value={roleId} key={roleId}>
								{roleName}
							</option>
						))}
					</select>

					<Icon
						id="fa-floppy-o"
						size="25px"
						onClick={() => onRoleSave(id, selectedRoleId)}
						disabled={isSaveBtnDisabled}
					/>
				</div>
			</TableRow>

			<Icon id="fa-trash-o" size="25px" onClick={onUserRemove} />
		</div>
	);
};

const UserRow = styled(UserRowContainer)`
	margin: 0.5rem;
	display: flex;
	align-items: center;
	gap: 1rem;

	& .role-column {
		gap: 1rem;
	}

	& select {
		font-size: 1rem;
	}
`;

export default UserRow;
