import {createSlice} from '@reduxjs/toolkit';
import {getDivisions} from "./DivisionAPI";

const initialState = {
  divisions: [],
  loading: false,
};


export const divisionSlice = createSlice({
  name: 'division',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getDivisions.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDivisions.fulfilled, (state, action) => {
        state.loading = false;
        state.divisions = action.payload;
      });
  },
});


export default divisionSlice.reducer;
