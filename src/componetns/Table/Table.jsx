
import React from 'react';
import { ContexTheme } from '../context/store';
import UserItem from '../UserItem/UserItem';
import cl from './table.module.css';

export const Table = ({ deleteUserInData, setEditUser, users, setUsers, editModalIsActive, setEditModalIsActive }) => {
	return (
		<table className={cl.table}>
			<thead>
				<tr>
					<th>Image</th>
					<th>Title</th>
					<th>Age</th>
					<th>Gender</th>
					<th>Phone</th>
				</tr>
			</thead>

			<tbody>
				{
					users.filter(value => value !== null).map((value) => (
						<UserItem
							deleteUserInData={deleteUserInData}
							editModalIsActive={editModalIsActive}
							setEditModalIsActive={setEditModalIsActive}
							setEditUser={setEditUser}
							key={value.id}
							users={users}
							setUsers={setUsers}
							user={value} />
					))
				}
			</tbody>
		</table>
	)
}
