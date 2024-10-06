import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import auth from './Slices/auth'

export const store = configureStore({
    reducer: {
        auth,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch