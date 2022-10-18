import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import promiseMiddleware from 'redux-promise-middleware';
import logger from 'redux-logger';

// Reducers
import programReducer from './reducers/programReducer';
import fundraiserReducer from './reducers/fundraiserReducer';
import donationReducer from "./reducers/donationReducer";


export const store = configureStore({
    reducer: {
        programList: programReducer,
        fundraiserList: fundraiserReducer,
        donationList: donationReducer,
    },
    middleware: [
        thunk,
        promiseMiddleware,
        promise,
        logger,
    ]
})