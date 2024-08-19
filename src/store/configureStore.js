import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import api from '../middlewares/api';
import logger from '../middlewares/logger';
// import { devToolsEnhancer } from 'redux-devtools-extension';
// import reducer from './bugs';
import reducer from './reducer';

// const store = createStore(reducer, devToolsEnhancer({trace: true}));

const store = configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(),
        logger,
        api
    ]
})

export default store;