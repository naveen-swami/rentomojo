import { defaultState } from "./defaultState";

export default (state = defaultState, action) => {

    switch (action.type) {
        case 'updateName':
            return {
                ...state,
                userState: {
                    ...state.userState,
                    name: action.name
                }
            }
        default:
            return state;
    }
}