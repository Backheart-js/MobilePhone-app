import { createSlice } from "@reduxjs/toolkit"

const initialState = JSON.parse(localStorage.getItem('cart'));

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action) => {
            let newState = [];
            let id_isExist = 0;
            const dataAddToCart = action.payload;
            const isExists = state.some((item, index) => {
                id_isExist = index;
                return item.id === dataAddToCart.id && item.category === dataAddToCart.category
            })
            if (isExists) {
                state[id_isExist].quantity += dataAddToCart.quantity
            } else {
                state.push(dataAddToCart)
            }
        },
        remove: (state, action) => {
            let newState = [];
            newState = state.splice(action.payload, 1)
        }
    }
})

export default cartSlice.reducer;