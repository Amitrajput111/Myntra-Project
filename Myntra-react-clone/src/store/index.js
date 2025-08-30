import {createSlice} from "@redux/toolkit";


const myntraStore = configureStore({
  reducer: {
    items:itemsSlice.reducer
  }
});

export default myntraStore;
