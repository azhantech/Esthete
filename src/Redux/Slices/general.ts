import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface IGeneralState {
    role: string
}

const initialState: IGeneralState = {
    role: ""
}

export const general = createSlice({
    name: 'general',
    initialState,
    reducers: {
        setRole: (state, action: PayloadAction<string>) => {
            state.role = action.payload
        },
    },
})

export const { setRole } = general.actions

export const selectRole = (state: RootState) => state.general.role

export default general.reducer