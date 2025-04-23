// store/slices/productSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [], // Will hold up to 24 product objects
  favouriteProducts: [],
  cartProducts: [], // Will hold up to 24 product objects
  cartStatus: false,
  subtotal: 0,
  shippingMethod: "express",
  grandTotal: 0,
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

      // Always add the new product, even if it has the same _id
      state.cartProducts.push(newProduct);
    },
    removeProductFromCart(state, action) {
      const cartIdToRemove = action.payload;

      if (!cartIdToRemove) return;

      if (!Array.isArray(state.cartProducts)) {
        state.cartProducts = [];
      }

      state.cartProducts = state.cartProducts.filter(
        (product) => product.cartId !== cartIdToRemove
      );
    },
    updateCartItems(state, action) {
      const newProduct = action.payload;

      if (!newProduct || !newProduct._id || !newProduct.cartId) return;

      if (!Array.isArray(state.cartProducts)) {
        state.cartProducts = [];
      }

      // Remove the old product with the same cartId
      state.cartProducts = state.cartProducts.filter(
        (product) => product.cartId !== newProduct.cartId
      );

      // Push the updated one
      state.cartProducts.push(newProduct);
    },
    setCartSummary(state, action) {
      const { subtotal, shippingMethod, grandTotal } = action.payload;
      state.subtotal = subtotal;
      state.shippingMethod = shippingMethod;
      state.grandTotal = grandTotal;
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
  updateCartItems,
  setCartSummary,
} = productSlice.actions;
export default productSlice.reducer;
