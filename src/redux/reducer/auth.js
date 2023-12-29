import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        is_logged_in: false,
        user: {}
    },

    reducers: {
        login: (state) => {
            state.is_logged_in = true
        },
        setUser: (state, action) => {
            state.user = action.payload
        },
        logout: (state) => {
            state.is_logged_in = false
        }
    }
})


export const { login, setUser, logout, } = authSlice.actions

export default authSlice.reducer