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
import History from './pages/History'

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
		path: '/SearchPhone',
		element: <Search />,
	},
	{
		path: '/PhoneInfo/:id',
		element: <ProductInformation />,
	},
	{
		path: '/UserInfo/:id',
		element: <UserInfo />,
	},
	{
		path: '/History/:id',
		element: <History />,
	},
])

function App() {
	return <RouterProvider router={router} />
}

export default App
