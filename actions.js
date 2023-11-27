export const actionTypes = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    RESET: 'RESET'
}

export const increment = () => ({ type: actionTypes.INCREMENT })
export const decrement = () => ({ type: actionTypes.DECREMENT })
export const resetCount = () => ({ type: actionTypes.RESET })