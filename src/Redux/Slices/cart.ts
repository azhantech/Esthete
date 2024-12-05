import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import Toast from 'react-native-toast-message'

type TCart = {
    product: object,
    quantity: number
}

interface ICartState {
    cart: TCart[],
}

const initialState: ICartState = {
    cart: []
}

export const cart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {

            let products = [...state.cart]
            let index = products.findIndex(item => item.product?.id === action.payload.product?.id)

            if (index > -1) {
                products[index].quantity = action.payload.quantity
                Toast.show({
                    text1: "Cart",
                    text2: "Product has been updated in cart."
                })
            } else {
                products.push(action.payload)
                Toast.show({
                    text1: "Cart",
                    text2: "Product has been added to cart."
                })
            }

            state.cart = products

            return state

        },
        removeFromCart: (state, action) => {

            let products = [...state.cart]
            let index = products.findIndex(item => item.product?.id === action.payload)
            if (index > -1) {
                products.splice(index, 1);
                state.cart = products
                Toast.show({
                    type: 'error',
                    text1: "Cart",
                    text2: "Product has been removed from cart."
                })
            }

            return state

        },
    },
})

export const { addToCart, removeFromCart } = cart.actions

export const selectCart = (state: RootState) => state.cart.cart

export default cart.reducer