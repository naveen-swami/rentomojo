import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducer/rootReducer';
import userReducer from './reducer/userReducer';
import studnetReducer from './redux/reducer/studentReducer';
import watcherSaga from './redux/saga/rootSaga';

const reducer = combineReducers({rootReducer, userReducer, studnetReducer});
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const store = createStore(reducer, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);

export default store;

// combine reudcer combine the multiple reducer