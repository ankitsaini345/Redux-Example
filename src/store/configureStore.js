import { configureStore } from '@reduxjs/toolkit';
// import { devToolsEnhancer } from 'redux-devtools-extension';
// import reducer from './bugs';
import reducer from './reducer';

// const store = createStore(reducer, devToolsEnhancer({trace: true}));

const store = configureStore({reducer})

export default store;