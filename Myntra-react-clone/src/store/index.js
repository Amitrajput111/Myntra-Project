import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice.js";
import fetchStatusSlice from "./fetchStatusSlice.js";
import bagSlice from "./bagSlice.js";

const myntraStore = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
    bag: bagSlice.reducer,
  },
});

export default myntraStore;
