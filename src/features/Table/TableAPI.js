import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../config/axios";

export const getTableData = createAsyncThunk(
    'table/getTableData',
    async (divizion) => {
        const response = await axios.get('/tables/chess/', {
            params: {
                divizion,
            }
        });
        return response.data;
    }
);