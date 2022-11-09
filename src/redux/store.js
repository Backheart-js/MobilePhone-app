import { configureStore } from '@reduxjs/toolkit'

import modalReducer from './reducer/modalSlice';
import productReducer from './reducer/productSlice'
import cartReducer from './reducer/cartSlice'

const store = configureStore({
    reducer: {
        modal: modalReducer,
        product: productReducer,
        cart: cartReducer
    }
})

export default store;
