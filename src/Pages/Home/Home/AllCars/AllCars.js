import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleCar from '../SingleCar/SingleCar';

const AllCars = () => {
    const [cars, setCars] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/cars')
        .then(res => res.json())
        .then(data => setCars(data.slice(0,6)))
    })
    return (
        <Box sx={{ flexGrow: 1, backgroundColor:'#eee' ,pb:5}}>
            <Container>
                <Typography sx={{ fontWeight: 600, color: '#10cfe5' ,textAlign:'center', py:5}} variant="h4" component="div">
                    CARS
                </Typography>
                
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        cars.map(car => <SingleCar
                            key={car.key}
                            car={car}
                        ></SingleCar>)
                    }
                </Grid>

                <Link  style={{textAlign:'right', textDecoration:'none'}} to="/inventory">
                <Button variant="outlined" sx={{my:2,px:4,fontWeight:600}}>See More</Button>
                 </Link>
            </Container>
            
        </Box>
    )
};

export default AllCars;