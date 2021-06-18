import { createStore, combineReducers } from 'redux';
import rootReducer from './reducer/rootReducer';
import userReducer from './reducer/userReducer';

export default () => {
    return createStore(
        combineReducers({ rootReducer, userReducer })
    );
}

// combine reudcer combine the multiple reducer