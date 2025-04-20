// store/slices/productSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [], // Will hold up to 24 product objects
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload.slice(0, 24); // ensure max 24 items
    },
    clearProducts(state) {
      state.products = [];
    },
  },
});

export const { setProducts, clearProducts } = productSlice.actions;
export default productSlice.reducer;
