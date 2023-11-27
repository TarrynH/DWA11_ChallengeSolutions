import { actionTypes } from "./actions.js"

export const MAX_NUMBER = 10
export const MIN_NUMBER = -5
export const STEP_AMOUNT = 1;

export const reducer = (state = 0, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return Math.min(state + STEP_AMOUNT, MAX_NUMBER);

        case actionTypes.DECREMENT:
            return Math.max(state - STEP_AMOUNT, MIN_NUMBER);
        
        case actionTypes.RESET:
            return 0;
        
        default:
            return state;
    }
}

export default reducer 