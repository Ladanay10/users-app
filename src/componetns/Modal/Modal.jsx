import { Button } from 'antd';
import React from 'react';
import cl from './Modal.module.css'
const Modal = ({ title, children, status, setIsModalActive, save }) => {
	if (!status) {
		return null;
	}
	return (
		(
			<div className={cl.modal} onClick={() => setIsModalActive(false)}>
				<div className={cl.container} onClick={(e) => e.stopPropagation()}>
					<h2 className={cl.title}>{title}</h2>
					<div className={cl.content}>
						{children}
					</div>
					<div className={cl.btns}>
						<Button onClick={() => setIsModalActive(false)}>CANCEL</Button>
						<Button onClick={save}>SAVE</Button>
					</div>
				</div>
			</div>
		)
	)
}

export default Modal
