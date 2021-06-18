
const defaultState = {
    counter: 0,
    userState: {
        name: "Naveen",
        id: 5
    }
}

// at begging state = defualtSate

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