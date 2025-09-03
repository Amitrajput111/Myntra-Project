import {createSlice} from "@redux/toolkit";

const itemsSlice = createSlice ({ 
name :'fetchStatus'

initialState:{
  fetchDone: 'false',
  currentlyFetching:false,
},
reducers: {
  markFetchDone: (state) =>{
    return state.fetchDone = true;
  },
  markFetchingStarted: (state) =>{
    return state.currentlyFetching = true;
  } markFetchingFinished: (state) =>{
    return state.currintlyFetching = false;
  }
  }
});

export const fetchStatusActiion = fetchStatusSlice.actions;
export default fetchStatusSlice;
