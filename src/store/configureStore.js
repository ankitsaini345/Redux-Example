import { configureStore } from '@reduxjs/toolkit';
// import { devToolsEnhancer } from 'redux-devtools-extension';
import reducer from './bugs';

// const store = createStore(reducer, devToolsEnhancer({trace: true}));

const store = configureStore({reducer})

export default store;