import logo from './logo.svg'
import './App.css'
import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound/PageNotFound'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <PageNotFound />,
	},
])

function App() {
	return <RouterProvider router={router} />
}

export default App
