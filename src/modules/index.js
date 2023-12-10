import { combineReducers } from "redux";
import auth from './auth';
import loading from "./loading";
import {persistReducer} from "redux-persist";
import {configureStore} from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
    auth,
    loading,
});

const persistConfig = {
    storage,
    key: 'root',
    whiteList: ['auth']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck: false}),
})

export default store;
// export default rootReducer;