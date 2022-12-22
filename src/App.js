import { Button, Spin, theme } from "antd";
import axios from "axios";
import React, { useContext, useState } from "react";
import AddUser from "./componetns/AddUser/AddUser";
import { ContexTheme } from "./componetns/context/store";
import EditUser from "./componetns/EditUser/EditUser";
import { useGetData } from "./componetns/hooks/useGetData";
import Modal from "./componetns/Modal/Modal";
import { Table } from "./componetns/Table/Table";
function App() {
	const [isModalActive, setIsModalActive] = useState(false);
	const [editModalIsActive, setEditModalIsActive] = useState(false);
	const [newUser, setNewUser] = useState({});
	const [editUser, setEditUser] = useState({});
	const [isLightTheme, setIsLightTheme] = useState(false);
	const { users, setUsers, loading, error } = useGetData('https://users-app-29d79-default-rtdb.firebaseio.com/usersApp/-NJMG12bcRw2TsBWlHPM.json')

	const deleteUserInData = (user) => {
		axios.delete(`https://users-app-29d79-default-rtdb.firebaseio.com/usersApp/-NJMG12bcRw2TsBWlHPM/${user.id}.json`).then(response => console.log(response))
	}
	const addUserInData = (newUser) => {
		axios.post(`https://users-app-29d79-default-rtdb.firebaseio.com/usersApp/-NJMG12bcRw2TsBWlHPM/${newUser.id}.json`).then(response => console.log(response))
	}

	if (error) {
		console.log(error);
	}
	function Save() {
		const newUserObj = [...users, { ...newUser, ...{ id: new Date() } }]
		addUserInData(newUserObj);
		setUsers(newUserObj);
		setIsModalActive(false);
		setNewUser('');
	}
	const edit = () => {
		setUsers(users.map(value => {
			if (value.id === editUser.id) {
				return editUser
			} else {
				return value
			}
		}))
		setEditModalIsActive(false);

	}
	const handleChangeTheme = () => {
		setIsLightTheme(!isLightTheme);
	}
	return (
		<ContexTheme.Provider value={isLightTheme}>
			<div className={isLightTheme ? ' light' : 'App'}>
				{loading ? <Spin /> :
					(
						<>
							<Button onClick={handleChangeTheme}>Change Theme</Button>
							<Table
								deleteUserInData={deleteUserInData}
								users={users}
								setUsers={setUsers}
								setEditUser={setEditUser}
								editModalIsActive={editModalIsActive}
								setEditModalIsActive={setEditModalIsActive}
							/>
							<Modal save={Save} title='ADD USERS' status={isModalActive} setIsModalActive={setIsModalActive}>
								<AddUser users={users} newUser={newUser} setNewUser={setNewUser} />
							</Modal>
							<Modal save={edit} title='EDIT USERS' status={editModalIsActive} setIsModalActive={setEditModalIsActive}>
								<EditUser users={users} editUser={editUser} setEditUser={setEditUser} />
							</Modal>
							<Button className={isLightTheme ? "btn-dark btn" : "btn"} onClick={() => setIsModalActive(true)}>Add user</Button>
						</>
					)}

			</div>
		</ContexTheme.Provider>
	);
}

export default App;
