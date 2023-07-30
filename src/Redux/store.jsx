import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./Cartslice";

export default configureStore({
  reducer: {
    products: cartSlice,
  },
});
