import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isShowing: false,
    typeModal: ""
}

export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        open: (state, action) => {
            // return {
            //     isShowing: true,
            //     typeModal: action.payload
            // }
            state.isShowing = true;
            state.typeModal = action.payload;
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