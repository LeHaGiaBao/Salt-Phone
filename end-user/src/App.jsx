import '../src/assets/css/base.css'
import '../src/assets/css/style.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound/PageNotFound'
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'
import Cart from './pages/Cart'
import Phone from './pages/Phone'
import ProductInformation from './components/ProductInformation/ProductInformation'
import Search from './pages/Search'
import UserInfo from './pages/UserInfo'
import UserInformation from './pages/UserInformation/UserInformation'
import History from './pages/History'
import Setting from './pages/Setting'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <PageNotFound />,
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
		path: '/Cart',
		element: <Cart />,
	},
	{
		path: '/Phone',
		element: <Phone />,
	},
	{
		path: '/PhoneInfo/:id',
		element: <ProductInformation />,
	},
	{
		path: '/SearchPhone',
		element: <Search />,
	},
	{
		path: '/UserInfo',
		element: <UserInfo />,
	},
	{
		path: '/UserInformation',
		element: <UserInformation />,
	},
	{
		path: '/History',
		element: <History />,
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
