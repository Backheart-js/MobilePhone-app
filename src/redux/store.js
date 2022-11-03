import { configureStore } from '@reduxjs/toolkit'

import modalReducer from './reducer/modalSlice'

const store = configureStore({
    reducer: {
        modal: modalReducer,
    }
})

export default store;
