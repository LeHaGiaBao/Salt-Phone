import logo from './logo.svg'
import './assets/css/base.css'
import './assets/css/style.css'
import 'antd/dist/reset.css'
import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom'
import SignIn from './pages/SignIn/SignIn'
import RecoverPassword from '../../web-admin/src/pages/RecoverPassword/RecoverPassword'
import RecoverPasswordOTP from '../../web-admin/src/pages/RecoverPasswordOTP/RecoverPasswordOTP'
import NewPassword from './pages/NewPassword/NewPassword'
import PageNotFound from './pages/PageNotFound/PageNotFound'
import Dashboard from './pages/Dashboard'
import Product from './pages/Product'
import Customer from './pages/Customer'
import Cart from './pages/Cart'
import Statistics from './pages/Statistics'
import Account from './pages/Account'
import Setting from './pages/Setting'

const router = createBrowserRouter([
	{
		path: '/',
		element: <SignIn />,
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
		path: '/Dashboard',
		element: <Dashboard />,
	},
	{
		path: '/Product',
		element: <Product />,
	},
	{
		path: '/Customer',
		element: <Customer />,
	},
	{
		path: '/Cart',
		element: <Cart />,
	},
	{
		path: '/Statistics',
		element: <Statistics />,
	},
	{
		path: '/Account',
		element: <Account />,
	},
	{
		path: '/Setting',
		element: <Setting />,
	},
])

function App() {
	return <RouterProvider router={router} />
}

export default App
