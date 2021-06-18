import { createStore } from 'redux';
import rootReducer from './reducer/rootReducer';

export default () => {
    return createStore(rootReducer);
}