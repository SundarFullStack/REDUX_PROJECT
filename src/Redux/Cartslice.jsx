import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
  },

  reducers: {
    addNewProducts: (state, action) => {
      if (action.payload) {
        state.items.push(action.payload);
        // console.log(action.payload)
      }
    },
  },
});

export const { addNewProducts } = cartSlice.actions;

export default cartSlice.reducer;
