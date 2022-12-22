import React from 'react';
import cl from './EditUser.module.css';

const EditUser = ({ editUser, setEditUser }) => {
	const handleChange = (e) => {
		let target = e.target;
		setEditUser({ ...editUser, ...{ [e.target.name]: target.value } })
	}
	return (

		<div className={cl.form}>
			<label htmlFor="firstName"> FirstName </label>
			<input type="text" name="firstName" onChange={handleChange} value={editUser.firstName} />

			<label htmlFor="lastName">LastName</label>
			<input type="text" name="lastName" onChange={handleChange} value={editUser.lastName} />

			<label htmlFor="age">Age</label>
			<input type="number" name="age" onChange={handleChange} value={editUser.age} />

			<label htmlFor="gender">Gender</label>
			<select name="gender" onChange={handleChange} value={editUser.gender}>
				<option value="male">male</option>
				<option value="female">female</option>
			</select>

			<label htmlFor="phone">Phone</label>
			<input type="phone" name="phone" onChange={handleChange} value={editUser.phone} />

			<label htmlFor="image">Img</label>
			<input type="text" name="image" onChange={handleChange} value={editUser.image} />

		</div>
	)
}

export default EditUser
