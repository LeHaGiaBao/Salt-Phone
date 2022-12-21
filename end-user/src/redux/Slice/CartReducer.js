import {createSlice} from '@reduxjs/toolkit'

const CartReducer = createSlice({
	name: 'carts',
	initialState: {
		quantity: 0,
		cartItems: [],
		totalAmount: 0,
	},

	reducers: {
		addToCart: (state, {payload}) => {
			const isItemExist = state.cartItems.find((item) => item.id === payload.id)

			if (!isItemExist) {
				state.cartItems = [...state.cartItems, {...payload, quantity: 1}]
			} else {
				state.cartItems = state.cartItems.map((item) => {
					if (item.id === payload.id) {
						return {...item, quantity: item.quantity + 1}
					} else {
						return item
					}
				})
			}

			state.quantity++
			state.totalAmount += payload.giadienthoai
		},

		removeFromCart: (state, {payload}) => {
			state.cartItems = state.cartItems.filter((item) => item.id !== payload.id)
			state.quantity -= payload.quantity
			state.totalAmount -= payload.giadienthoai * payload.quantity
		},

		addItemQuantity: (state, {payload}) => {
			state.cartItems = state.cartItems.map((item) => {
				if (item.id === payload.id) {
					return {...item, quantity: item.quantity + 1}
				} else {
					return item
				}
			})
		},

		subtractItemQuantity: (state, {payload}) => {
			const subItem = state.cartItems.find((item) => item.id === payload.id)
			if (subItem.quantity === 1) {
				state.cartItems = state.cartItems.filter(
					(item) => item.id !== subItem.id
				)
			} else {
				subItem.quantity -= 1
			}
			state.quantity--
			state.totalAmount -= subItem.giadienthoai
		},
	},
})

export const {addToCart, removeFromCart, addItemQuantity, subtractItemQuantity} =
	CartReducer.actions

export default CartReducer.reducer
