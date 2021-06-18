
// at begging state = defualtSate

import { defaultState } from "./defaultState";

export default function rootReducer(state = defaultState, action) {
    switch (action.type) {
        case 'increment':
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'decrement':
            return {
                ...state,
                counter: state.counter - 1
            }
        default:
            return state;
    }
}