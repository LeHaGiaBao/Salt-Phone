import {configureStore} from '@reduxjs/toolkit'
import CartReducer from '../Slice/CartSlice'

const reducer = {
	cart: CartReducer,
}

const store = configureStore({
	reducer,
})

export default store
