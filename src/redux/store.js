import {createStore} from 'redux';
import toogleReducer from './reducer';

const store = createStore(toogleReducer);

export default store;