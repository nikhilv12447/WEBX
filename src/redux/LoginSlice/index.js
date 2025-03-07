import { createSlice } from '@reduxjs/toolkit'

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        isLogin: false
    },
    reducers: {
        setLogin: (state, { payload }) => {
            state.isLogin = payload
        }
    }
})

export default loginSlice.reducer
export const loginAct = loginSlice.actions