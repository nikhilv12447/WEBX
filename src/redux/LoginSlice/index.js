import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'login',
    initialState: {
        isLogin: false
    },
    reducers: {
        setLogin: state => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        decremented: state => {
            state.value -= 1
        }
    }
})
