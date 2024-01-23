import * as React from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case 'loading':
      return { status: 'loading', data: null, error: null }
    case 'done':
      return { status: 'done', data: action.payload, error: null }
    case 'fail':
      return { status: 'failure', data: null, error: action.error }
    default:
      throw new Error('Action non supporté')
  }
}
const initialState = {
  data: null,
  error: null,
  status: 'idle',
}
function useFetchData() {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const { data, error, status } = state

  const execute = React.useCallback((promise) => {
    dispatch({ type: 'loading' })
    promise
      .then((data) => dispatch({ type: 'done', payload: data }))
      .catch((error) => dispatch({ type: 'fail', error }))
  }, [])

  const setData = React.useCallback(
    (data) => dispatch({ type: 'done', payload: data }),
    [dispatch],
  )

  return { data, error, status, execute, setData }
}

export { useFetchData }
