import React from 'react';
import cl from './addUser.module.css';
const AddUser = ({ setNewUser, newUser }) => {
	const handleChange = (e) => {
		let target = e.target;
		setNewUser({ ...newUser, ...{ [e.target.name]: target.value } });
	}
	return (
		<div className={cl.form}>
			<label htmlFor="firstName"> FirstName </label>
			<input type="text" name="firstName" onChange={handleChange} />

			<label htmlFor="lastName">LastName</label>
			<input type="text" name="lastName" onChange={handleChange} />

			<label htmlFor="age">Age</label>
			<input type="number" name="age" onChange={handleChange} />

			<label htmlFor="gender">Gender</label>
			<select name="gender" onChange={handleChange}>
				<option value="male">male</option>
				<option value="female">female</option>
			</select>

			<label htmlFor="phone">Phone</label>
			<input type="phone" name="phone" onChange={handleChange} />

			<label htmlFor="image">Img</label>
			<input type="text" name="image" onChange={handleChange} />
		</div>
	)
}

export default AddUser
