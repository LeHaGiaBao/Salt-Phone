import React from 'react'
import './App.css'
import './assets/css/base.css'
import './assets/css/style.css'
import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'
import RecoverPassword from './pages/RecoverPassword/RecoverPassword'
import RecoverPasswordOTP from './pages/RecoverPasswordOTP/RecoverPasswordOTP'
import NewPassword from './pages/NewPassword/NewPassword'
import PageNotFound from './pages/PageNotFound/PageNotFound'
import ListPhone from './pages/ListPhone'
import Cart from './pages/Cart'
import ProductInformation from './pages/ProductInformation/ProductInformation'

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
	{
		path: '/404',
		element: <PageNotFound />,
	},
	{
		path: '/ProductInfo',
		element: <ProductInformation />,
	},
	{
		path: '/ListPhone',
		element: <ListPhone />,
		errorElement: <PageNotFound />,
	},
	{
		path: '/Cart',
		element: <Cart />,
	},
])

function App() {
	return <RouterProvider router={router} />
}

export default App
