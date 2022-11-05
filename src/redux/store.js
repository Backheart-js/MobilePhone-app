import { configureStore } from '@reduxjs/toolkit'

import modalReducer from './reducer/modalSlice';
import productReducer from './reducer/productSlice'

const store = configureStore({
    reducer: {
        modal: modalReducer,
        product: productReducer
    }
})

export default store;
