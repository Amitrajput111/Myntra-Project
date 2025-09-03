import {createSlice} from "@redux/toolkit";

const itemsSlice = createSlice ({ 
name :'items',
inetealState:DEFAULTS_ITEMS,
reducers: {
  addInitialItems: (store,action) =>{
    return store;
  }
  }
});

export const itemsActions = itemsSlice.actions;
