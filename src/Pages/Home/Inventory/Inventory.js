import { Grid, Container } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Header from '../../Shared/Header/Header';
import CarInventory from '../CarInventory/CarInventory';
import inventory from '../../images/inventory.png';
import Footer from '../../Shared/Footer/Footer'
const Inventory = () => {
    const [cars, setCars] = useState([]);

    useEffect(()=>{
        fetch('https://still-thicket-39779.herokuapp.com/cars')
        .then(res => res.json())
        .then(data => setCars(data))
    })
    return (
        <>
        <Box sx={{backgroundColor:'#eee', pb:4, pt:12}}>
            <Header></Header>
            <img style={{width:'100%'}} src={inventory} alt="" srcset="" />
            <Container sx={{mt:5}} >
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    cars.map(car => <CarInventory
                    key={car.key}
                    car = {car}
                    ></CarInventory>)
                }
            </Grid>
            </Container>
        </Box>
        <Footer></Footer>
        </>
    );
};

export default Inventory;