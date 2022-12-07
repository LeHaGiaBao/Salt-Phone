import '../src/assets/css/base.css'
import '../src/assets/css/style.css'
import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound/PageNotFound'
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'
import Cart from './pages/Cart'

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
])

function App() {
	return <RouterProvider router={router} />
}

export default App
