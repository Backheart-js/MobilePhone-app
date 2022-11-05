import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isShowing: false,
    typeModal: "",
    category: ""
}

export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        open: (state, action) => {
            return {
                isShowing: true,
                ...action.payload,
            }
            // Mutation
        },
        close: (state, action) => {
            return {
                ...state,
                isShowing: false
            }
        }
    } 
})

export default modalSlice.reducer;