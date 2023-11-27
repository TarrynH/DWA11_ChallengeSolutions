import { reducer } from './reducers.js'

export const createStore = (reducer) => {
    let state
    let listeners = []

    const getState = () => state

    const dispatch = (action) => {
        state = reducer(state, action)
        listeners.forEach((listener) => listener())
    }

    const subscribe = (listener) => {
        listeners.push(listener)
        return () => {
            listeners = listeners.filter((l) => l !== listener)
        }
    }

    dispatch({})

    return { getState, dispatch, subscribe}
}

export const store = createStore(reducer)

const logState = () => {
    console.log('New state:', store.getState())
}
logState()
store.subscribe(logState)

export default store 