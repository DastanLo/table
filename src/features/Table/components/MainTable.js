import * as React from 'react';

import { DataGrid } from '@mui/x-data-grid';
import {Box} from "@mui/material";
import {useSelector} from "react-redux";
import {useMemo, useState} from "react";

const columns = [
    { field: 'index', headerName: '#', width: 70 },
    { field: 'name', headerName: 'Участники', width: 230 },
    { field: 'games', headerName: 'И', width: 20 },
    {
        field: 'wins',
        headerName: 'В',
        width: 20,
    },
    {
        field: 'draws',
        headerName: 'Н',
        width: 20,
    },
    {
        field: 'psm',
        headerName: 'П',
        width: 20,
    },
    {
        field: 'result',
        headerName: '+/-',
        width: 120,
    },
    {
        field: 'points',
        headerName: 'Очки',
        width: 60,
    },
];

export const TableComponent = () =>  {
    const games = useSelector(state => state.table.games);
    const loading = useSelector(state => state.table.loading);
    const data = useMemo(() => {
       return games.map((game, index) => {
            const [name] = game;
            const gameInfo = game.at(1).at(1);
            return {
                id: index,
                index: index + 1,
                name,
                ...gameInfo,
                result: '0 - 0 = 0',
            }
        });
    }, [games]);
    return (
        <Box sx={{
            height: 400,
            width: '100%',
        }}>
            <DataGrid
                hideFooter={true}
                loading={loading}
                rows={data}
                columns={columns} />
        </Box>    );
}

export default TableComponent;