import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import {authApi} from './Services/Auth';
import {userApi} from './Services/User';
import user from './Slices/user';
import Toast from 'react-native-toast-message';
import {routeApi} from './Services/Route';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  user,
  [authApi.reducerPath]: authApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [routeApi.reducerPath]: routeApi.reducer,
});
const apiErrorHandler = store => next => action => {
  // console.log('action.payload?.data ===>', action.payload);

  if (
    action.type.endsWith('/rejected') ||
    (action.type.endsWith('/fulfilled') && action.payload?.data?.error)
  ) {
    console.log(
      'action ================>',
      action.type,
      'action.payload ==>',
      action.payload,
    );

    Toast.show({
      text1: 'Error',
      text2: action.payload?.data?.error,
      type: 'error',
    });
  }

  return next(action);
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(authApi.middleware)
      .concat(userApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
