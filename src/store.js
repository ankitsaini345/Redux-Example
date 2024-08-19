// import { createStore } from 'redux'
import { createStore } from './CustomReduxImplementation/store';
import { reducer } from './reducer';

export const store = createStore(reducer);
