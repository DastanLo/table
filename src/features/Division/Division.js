import React from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Box, Button, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TableComponent from "../Table/Table";

const Division = ({title, handleChange, expanded, id}) => {
    return (
        <Accordion onChange={handleChange(id)} expanded={expanded}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
            >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    {title}
                </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{
                padding: '0',
            }}>
                {expanded && <TableComponent id={id}/>}
            </AccordionDetails>
        </Accordion>
    );
};

export default Division;
