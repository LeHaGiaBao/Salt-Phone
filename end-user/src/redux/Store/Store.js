import {configureStore} from '@reduxjs/toolkit'
import CartReducer from '../Reducer/CartReducer'

const reducer = {
	cart: CartReducer,
}

const store = configureStore({
	reducer,
})

export default store
