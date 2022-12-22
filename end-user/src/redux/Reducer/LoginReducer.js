import {createSlice} from '@reduxjs/toolkit'
import {startTransition} from 'react'

const LoginReducer = createSlice({
	name: 'login',
	initialState: {
		login: localStorage.getItem('login')
			? JSON.parse(localStorage.getItem('login'))
			: 0,
	},

	reducers: {
		setLogin: (state, {payload}) => {
			state.login++
			console.log(state.login)
			localStorage.setItem('login', JSON.stringify(state.login))
		},

		setLogout: (state, {payload}) => {
			state.login--
			localStorage.setItem('login', JSON.stringify(state.login))
		},
	},
})

export const {setLogin, setLogout} = LoginReducer.actions

export default LoginReducer.reducer
