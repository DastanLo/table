import {createSlice} from '@reduxjs/toolkit';
import {getTableData} from "./TableAPI";

const initialState = {
  games: [],
  loading: false,
};


export const tableSlice = createSlice({
  name: 'table',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getTableData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTableData.fulfilled, (state, action) => {
        state.loading = false;
        state.games = action.payload;
      });
  },
});


export default tableSlice.reducer;
