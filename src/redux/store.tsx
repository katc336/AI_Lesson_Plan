import { configureStore } from '@reduxjs/toolkit'
import api from './api';
import authSlice from './authSlice';
import langApi from './langApi';
import { setupListeners } from '@reduxjs/toolkit/query';

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authSlice,
    [langApi.reducerPath]: langApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(api.middleware, langApi.middleware);
  },
 });
 

setupListeners(store.dispatch)

export default store;