export const GET_STUDENT = 'GET_STUDENT';
export const SET_STUDENT = 'SET_STUDENT';

const initialState = {
    student: undefined,
}

function studnetReducer(state = initialState, action) {
    if(typeof(action) === 'undefined'){
        console.log(" undefined  action ");
        return state;
    }
    switch (action.type) {
        case SET_STUDENT: 
            // const { studnet } = action;
            console.log("inside student reducer: ", action.payload.student);
            return {...state, student: action.payload.student};
        default: 
            return state;
    }
    // return state;
}

export default studnetReducer;