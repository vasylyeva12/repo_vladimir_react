import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0
  },
  reducers: {
    increment: state => {
        state.count += 1
    },
    decrement: state => {
        state.count -= 1
    },
    remove: state => {
        state.count = 0
    }
  }
});

export const { increment, decrement, remove } = counterSlice.actions

export default counterSlice.reducer