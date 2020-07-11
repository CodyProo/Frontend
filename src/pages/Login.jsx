import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Axios from 'axios';

const Login = ({ children }) => {
	const [Username, ChangeUsername] = useState('');
	const [Password, ChangePassword] = useState('');
	const [IsLogged, ChangeLogged] = useState('');

	const clickHandler = (event) => {
		event.preventDefault();

		Axios.post('https://mysterious-journey-85780.herokuapp.com/api/login', {
			email: Username,
			password: Password,
		})
			.then(({ data }) => {
				if (data.message === 'Ok') {
					ChangeLogged(true);
				} else {
					alert('Failed');
				}
			})
			.catch((error) => alert('Failed'));
	};

	if (IsLogged) {
		return children;
	} else {
		return (
			<div className='container mt-5 pt-5'>
				<form action=''>
					<div className='my-5'>
						<label>Username</label>
						<input
							onChange={(e) => ChangeUsername(e.target.value)}
							type='text'
							className='form-control'
						/>
					</div>
					<div className='my-5'>
						<label>Password</label>
						<input
							onChange={(e) => ChangePassword(e.target.value)}
							type='text'
							className='form-control'
						/>
					</div>
					<button onClick={clickHandler} className='btn btn-primary px-5'>
						Done
					</button>
				</form>
			</div>
		);
	}
};

export default Login;
