import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  brand: "",
  condition: "new",
  is_discount: false,
  discount: 0,
  original_price: 0,
  release_date: "",
  image: [],
  color: [],
  properties: {},
  status: true,
  quantity: 250,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    add: (state, action) => {
      return {
        ...action.payload,
      };
    },
    update: (state, action) => {
      return {
        ...state,
        ...action.payload
      }
    }
  },
});

export default productSlice.reducer;
