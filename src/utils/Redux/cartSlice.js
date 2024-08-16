import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    restaurants: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
    addRestaurant: (state, action) => {
      state.restaurants = action.payload;
    },
  },
});

export const { addItem, removeItem, clearCart, addRestaurant } =
  cartSlice.actions;

export default cartSlice.reducer;
