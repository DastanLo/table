import * as React from 'react';
import {Box, Button} from "@mui/material";
import MainTable from "./components/MainTable";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {getTableData} from "./TableAPI";
import ChessTable from "./components/ChessTable";


export const TableComponent = ({id}) =>  {
    const [selectedTable, setSelectedTable] = useState('table');
    const isTableSelected = selectedTable === 'table';
    const handleTableChange = (table) => {
        setSelectedTable(table);
    };
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTableData(id));
    }, [id, dispatch]);
    return (
        <Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
            }}>
                <Button sx={{
                    width: '50%',
                    backgroundColor: isTableSelected ? '#1976d2' : '#fff',
                    color: isTableSelected ? '#fff' : '#000',
                }} onClick={() => handleTableChange('table')} variant="contained">
                    Table
                </Button>
                <Button sx={{
                    width: '50%',
                    backgroundColor: !isTableSelected ? '#1976d2' : '#fff' ,
                    color: !isTableSelected ? '#fff' : '#000',
                }} onClick={() => handleTableChange('chess')} variant="contained">
                    Chesska
                </Button>
            </Box>
            <Box>
                {
                    isTableSelected ? <MainTable/> : <ChessTable/>
                }
            </Box>
        </Box>

    );
}

export default TableComponent;