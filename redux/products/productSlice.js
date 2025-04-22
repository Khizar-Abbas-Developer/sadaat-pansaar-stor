// store/slices/productSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [], // Will hold up to 24 product objects
  favouriteProducts: [],
  cartProducts: [], // Will hold up to 24 product objects
  cartStatus: false,
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
    toggleFavouriteProduct(state, action) {
      const newProduct = action.payload;

      // Defensive check: if no payload or no _id, do nothing
      if (!newProduct || !newProduct._id) return;

      if (!Array.isArray(state.favouriteProducts)) {
        state.favouriteProducts = [];
      }

      const index = state.favouriteProducts.findIndex(
        (product) => product._id === newProduct._id
      );

      if (index !== -1) {
        state.favouriteProducts.splice(index, 1); // Remove from favourites
      } else {
        state.favouriteProducts.push(newProduct); // Add to favourites
      }
    },
    removeFavouriteProductById(state, action) {
      const productId = action.payload;

      state.favouriteProducts = state.favouriteProducts.filter(
        (product) => product._id !== productId
      );
    },
    addProductToCart(state, action) {
      const newProduct = action.payload;

      // Defensive check: if no payload or no _id, do nothing
      if (!newProduct || !newProduct._id) return;

      if (!Array.isArray(state.cartProducts)) {
        state.cartProducts = [];
      }

      const index = state.cartProducts.findIndex(
        (product) => product._id === newProduct._id
      );

      // If product doesn't already exist in cart, add it
      if (index === -1) {
        state.cartProducts.push(newProduct);
      }
    },
    removeProductFromCart(state, action) {
      const productToRemove = action.payload;

      // Defensive check
      if (!productToRemove || !productToRemove._id) return;

      if (!Array.isArray(state.cartProducts)) {
        state.cartProducts = [];
      }

      state.cartProducts = state.cartProducts.filter(
        (product) => product._id !== productToRemove._id
      );
    },
    setCartStatus(state, action) {
      state.cartStatus = action.payload;
    },
  },
});

export const {
  setProducts,
  clearProducts,
  toggleFavouriteProduct,
  removeFavouriteProductById,
  addProductToCart,
  removeProductFromCart,
  setCartStatus,
} = productSlice.actions;
export default productSlice.reducer;
