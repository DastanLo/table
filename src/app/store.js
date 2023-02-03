import {configureStore} from '@reduxjs/toolkit';
import divisionSlice from "../features/Division/divisionSlice";
import tableSlice from "../features/Table/tableSlice";

export const store = configureStore({
  reducer: {
    division: divisionSlice,
    table: tableSlice,
  },
});
