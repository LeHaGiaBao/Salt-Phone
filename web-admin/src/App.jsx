import logo from './logo.svg'
import './assets/css/base.css'
import './assets/css/style.css'
import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom'
import SignIn from './pages/SignIn/SignIn'
import RecoverPassword from '../../web-admin/src/pages/RecoverPassword/RecoverPassword'
import RecoverPasswordOTP from '../../web-admin/src/pages/RecoverPasswordOTP/RecoverPasswordOTP'
import NewPassword from './pages/NewPassword/NewPassword'
import PageNotFound from './pages/PageNotFound/PageNotFound'
import Dashboard from './pages/Dashboard'

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
])

function App() {
	return <RouterProvider router={router} />
}

export default App
