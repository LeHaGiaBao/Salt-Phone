import {createSlice} from '@reduxjs/toolkit'

const CartReducer = createSlice({
	name: 'carts',
	initialState: {
		quantity: localStorage.getItem('quantity')
			? JSON.parse(localStorage.getItem('quantity'))
			: 0,
		cartItems: localStorage.getItem('cartItems')
			? JSON.parse(localStorage.getItem('cartItems'))
			: [],
		totalAmount: localStorage.getItem('totalAmount')
			? JSON.parse(localStorage.getItem('totalAmount'))
			: 0,
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
						state.cartItems.push(item)
						return item
					}
				})
			}

			state.quantity++
			state.totalAmount += payload.giadienthoai
			localStorage.setItem('quantity', JSON.stringify(state.quantity))
			localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
			localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount))
		},

		removeFromCart: (state, {payload}) => {
			state.cartItems = state.cartItems.filter((item) => item.id !== payload.id)
			state.quantity -= payload.quantity
			state.totalAmount -= payload.giadienthoai * payload.quantity
			localStorage.setItem('quantity', JSON.stringify(state.quantity))
			localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
			localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount))
		},

		addItemQuantity: (state, {payload}) => {
			state.cartItems = state.cartItems.map((item) => {
				if (item.id === payload.id) {
					return {...item, quantity: item.quantity + 1}
				} else {
					return item
				}
			})
			localStorage.setItem('quantity', JSON.stringify(state.quantity))
			localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
			localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount))
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
			localStorage.setItem('quantity', JSON.stringify(state.quantity))
			localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
			localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount))
		},

		buyProduct: (state, {payload}) => {
			state.cartItems = []
			state.quantity = 0
			state.totalAmount = 0
			localStorage.setItem('quantity', JSON.stringify(state.quantity))
			localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
			localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount))
		},
	},
})

export const {
	addToCart,
	removeFromCart,
	addItemQuantity,
	subtractItemQuantity,
	buyProduct,
} = CartReducer.actions

export default CartReducer.reducer
