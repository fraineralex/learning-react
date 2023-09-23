import { useReducer } from 'react'
import {
  cartReducer,
  CartInitialState,
  CART_ACTIONS_TYPES
} from '../reducers/cart'

export function useCartReducer () {
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
