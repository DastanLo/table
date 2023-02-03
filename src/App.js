import React, {useEffect} from 'react';
import './App.css';
import {Box, Container} from "@mui/material";
import Division from "./features/Division/Division";
import {useDispatch, useSelector} from "react-redux";
import {getDivisions} from "./features/Division/DivisionAPI";

function App() {
    const [expanded, setExpanded] = React.useState(false);
    const dispatch = useDispatch();
    const divisions = useSelector(state => state.division.divisions);
    const handleChange =
        (id) => (event, isExpanded) => {
            setExpanded(isExpanded ? id : false);
        };
    useEffect(() => {
        dispatch(getDivisions());
    }, [dispatch]);
    return (
        <Container maxWidth="md">
            <Box>
                {
                    divisions.map((division) => {
                        return <Division handleChange={handleChange} id={division.id} expanded={expanded === division.id}
                                         key={division.id} title={division.title}/>
                    })
                }
            </Box>
        </Container>
    );
}

export default App;
