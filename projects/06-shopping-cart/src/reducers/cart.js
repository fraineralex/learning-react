export const CartInitialState =
  JSON.parse(window.localStorage.getItem('cart')) || []

export const CART_ACTIONS_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
}

// Update localStorage when the cart changes
export const updateLocalStorage = state => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action
  switch (actionType) {
    case CART_ACTIONS_TYPES.ADD_TO_CART: {
      // Check if the product is already in the cart
      const { id } = actionPayload
      const productInCartIndex = state.findIndex(item => item.id === id)

      // If the product is already in the cart
      if (productInCartIndex >= 0) {
        // Using structured cloning algorithm to clone the cart
        const newState = structuredClone(state)
        newState[productInCartIndex].quantity++
        updateLocalStorage(newState)
        return newState
      }

      // If the product is not in the cart
      const newState = [
        ...state,
        {
          ...actionPayload,
          quantity: 1
        }
      ]

      updateLocalStorage(newState)
      return newState
    }

    case CART_ACTIONS_TYPES.REMOVE_FROM_CART: {
      const { id } = actionPayload
      const newState = state.filter(item => item.id !== id)
      updateLocalStorage(newState)
      return newState
    }

    case CART_ACTIONS_TYPES.CLEAR_CART: {
      updateLocalStorage([])
      return []
    }
  }
}
