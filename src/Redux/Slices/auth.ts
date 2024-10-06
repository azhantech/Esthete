import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface IUserState {
    isLoggedIn: boolean,
    user: any,
    token: string | null
}

const initialState: IUserState = {
    isLoggedIn: false,
    token: null,
    user: {}
}

export const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLogin: (state) => {
            state.isLoggedIn = true
        },
        setLogout: (state) => {
            state.isLoggedIn = false
            state.token = null
        },
    }
})

export const { setLogin, setLogout } = auth.actions

export const selectLoggedIn = (state: RootState) => state.auth.isLoggedIn
export const selectUser = (state: RootState) => state.auth.user

export default auth.reducer