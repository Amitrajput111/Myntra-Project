import {createSlice} from "@redux/toolkit";

const itemsSlice = createSlice ({ 
name :'items',
inetealState:[],
reducers: {
  addInitialItems: (store,action) =>{
    return store
  }
  }
});

export const itemsActions = itemsSlice.actions;

export default itemSlice;