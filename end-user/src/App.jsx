import React from 'react'
import './App.css'
import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import RecoverPassword from './pages/RecoverPassword'
import RecoverPasswordOTP from './pages/RecoverPasswordOTP'
import NewPassword from './pages/NewPassword'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/SignIn',
		element: <SignIn />,
	},
	{
		path: '/SignUp',
		element: <SignUp />,
	},
	{
		path: '/RecoverPassword',
		element: <RecoverPassword />,
	},
	{
		path: '/RecoverPasswordOTP',
		element: <RecoverPasswordOTP />,
	},
	{
		path: '/NewPassword',
		element: <NewPassword />,
	},
])

function App() {
	return <RouterProvider router={router} />
}

export default App
