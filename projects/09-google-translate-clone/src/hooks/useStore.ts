import { useReducer } from 'react'
import { type State, type Action } from '../types.d'

// create an initialState
const initialState = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false
}

// create a reducer
function reducer(state: State, action: Action) {
  const { type } = action

  if (type === 'INTERCHANGE_LANGUAGES') {
    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage
    }
  }

  if (type === 'SET_FROM_LANGUAGE') {
    return {
      ...state,
      fromLanguage: action.payload
    }
  }

  if (type === 'SET_TO_LANGUAGE') {
    return {
      ...state,
      toLanguage: action.payload
    }
  }

  if (type === 'SET_FROM_TEXT') {
    return {
      ...state,
      loading: true,
      fromText: action.payload,
      result: ''
    }
  }

  if (type === 'SET_RESULT') {
    return {
      ...state,
      loading: true,
      result: action.payload
    }
  }

  return state
}

export function useStore () {
  const [{
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading
  }, dispatch] = useReducer(reducer, initialState)

  const interChangeLanguages = () => dispatch({ type: 'INTERCHANGE_LANGUAGES' })
  const setFromLanguage = (payload) => dispatch({ type: 'SET_FROM_LANGUAGE', payload })
  const setToLanguage = (payload) => dispatch({ type: 'SET_TO_LANGUAGE', payload })
  const setFromText = (payload) => dispatch({ type: 'SET_FROM_TEXT', payload })
  const setResult = (payload) => dispatch({ type: 'SET_RESULT', payload })

  return {
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading,
    interChangeLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult
  }
}