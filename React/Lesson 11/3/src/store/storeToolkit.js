import { configureStore } from '@reduxjs/toolkit'
import countReducerToolkit from './reducer/countReducerToolkit'

export default configureStore({
  reducer: {
    counter: countReducerToolkit,
  }
})