import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import githubReducer from './github';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducerGithub = persistReducer(persistConfig, githubReducer);
export const store = configureStore({
  reducer: {
    github: persistedReducerGithub,
  },
  middleware: [thunk],
});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
