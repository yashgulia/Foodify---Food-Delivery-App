import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: {},
    restaurants: [],
  },
  reducers: {
    addItem: (state, action) => {
      const { id } = action.payload;
      if (state.items[id]) {
        state.items[id].quantity += 1;
      } else {
        state.items[id] = { ...action.payload, quantity: 1 };
      }
    },
    removeItem: (state, action) => {
      const { id } = action.payload;
      if (state.items[id]) {
        if (state.items[id].quantity > 1) {
          state.items[id].quantity -= 1;
        } else {
          delete state.items[id];
        }
      }
    },
    clearCart: (state) => {
      state.items = {};
    },
    addRestaurant: (state, action) => {
      state.restaurants = action.payload;
    },
  },
});

export const { addItem, removeItem, clearCart, addRestaurant } =
  cartSlice.actions;

export default cartSlice.reducer;
