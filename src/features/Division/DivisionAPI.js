import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../config/axios";

export const getDivisions = createAsyncThunk(
    'division/getDivisions',
    async () => {
       const response = await axios.get('/team/division/');
        return response.data;
    }
);