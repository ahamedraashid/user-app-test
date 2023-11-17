import { configureStore } from '@reduxjs/toolkit';
import type { Middleware, PreloadedState } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import global from '@/redux/slice/global';
import { PatientApis } from '@/services/patient/enhancedApi';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const rootReducer = combineReducers({
  global,
  [PatientApis.reducerPath]: PatientApis.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat<Middleware[]>(PatientApis.middleware),
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
  });

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = typeof store.dispatch;

export default store;
