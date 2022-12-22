import React, { useContext } from 'react';
import cl from './UserItem.module.css';
import { Button as Btn } from 'antd';
import { ContexTheme } from '../context/store';

const UserItem = ({ deleteUserInData, setEditUser, user, setUsers, users, setEditModalIsActive }) => {
	const handleDelete = () => {
		setUsers(users.filter(value => value !== null).filter(value => value.id !== user.id))
		deleteUserInData(user);

	}
	const handleEdit = () => {
		setEditUser(user);
		setEditModalIsActive(true);
	}
	const theme = useContext(ContexTheme);
	return (

		<>
			<tr>
				<td>
					<img src={user.image} alt={user.firstName} />
				</td>
				<td>
					{user.firstName + ' ' + user.lastName}
				</td>
				<td>
					{user.age}
				</td>
				<td className={user.gender === 'male' ? cl.male : cl.female}>
					{user.gender}
				</td>
				<td>
					{user.phone}
				</td>
				<td>
					{<Btn className={theme ? cl.btn_dark : cl.btn} editBtn onClick={handleEdit}>Edit</Btn>}
				</td>
				<td>
					{<Btn className={theme ? cl.btn_dark : cl.btn} deleteBtn danger onClick={handleDelete}>Delete</Btn>}
				</td>
			</tr>
		</>
	)
}

export default UserItem
