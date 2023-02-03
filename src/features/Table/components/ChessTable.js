import * as React from 'react';
import {useMemo} from 'react';
import {DataGridPro,} from '@mui/x-data-grid-pro';
import {Box} from "@mui/material";
import {useSelector} from "react-redux";

export const ChessTable = () => {
    const games = useSelector(state => state.table.games);
    const loading = useSelector(state => state.table.loading);
    const names = games.map((game) => {
        const [name] = game;
        return name;
    });
    const [rows, columns, headers] = useMemo(() => {
        const columns = [{field: 'name', headerName: 'Участники', width: 230}];
        const headers = [];
        const rows = games.map((game, index) => {
            const [name] = game;
            columns.push({field: name, headerName: name, width: 130});
            headers.push(name);
            const result = {};
            names.forEach((item, i) => {
                result[item] = game[1][i + 2];
            })
            return {
                ...result,
                id: index,
                name,
            }
        });
        return [rows, columns, headers];
    }, [games]);
    return (
        <Box sx={{
            height: 400,
        }}>
            <DataGridPro
                pinnedColumns={{
                    left: ['name'],
                    top: headers,
                }
                }
                loading={loading}
                rows={rows}
                columns={columns}/>
        </Box>
    );
}

export default ChessTable;