import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    fav: [],
  },
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload;
    },
    addToFav: (state, action) => {
      state.fav.push(action.payload);
    },
    removeFromFav: (state, action) => {
      state.fav = state.fav.filter(item=>item.id !== action.payload.id)
    },
  },
});

export const { getProducts, addToFav, removeFromFav } = productSlice.actions;
export default productSlice.reducer;
