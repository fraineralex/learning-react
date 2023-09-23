import { createContext, useReducer } from 'react'
import {
  cartReducer,
  CartInitialState,
  CART_ACTIONS_TYPES
} from '../reducers/cart'

export const CartContext = createContext()

function useCartReducer () {
  const [state, dispatch] = useReducer(cartReducer, CartInitialState)

  const addToCart = product =>
    dispatch({
      type: CART_ACTIONS_TYPES.ADD_TO_CART,
      payload: product
    })

  const removeFromCart = product =>
    dispatch({
      type: CART_ACTIONS_TYPES.REMOVE_FROM_CART,
      payload: product
    })

  const clearCart = () =>
    dispatch({
      type: CART_ACTIONS_TYPES.CLEAR_CART
    })

  return { state, addToCart, removeFromCart, clearCart }
}

export const CartProvider = ({ children }) => {
  const { state, addToCart, removeFromCart, clearCart } = useCartReducer()

  return (
    <CartContext.Provider
      value={{ cart: state, addToCart, clearCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
