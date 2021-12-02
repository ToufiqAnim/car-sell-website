import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleCar from '../SingleCar/SingleCar';
import './AllCar.css';

const AllCars = () => {
    const [cars, setCars] = useState([]);
    useEffect(()=>{
        fetch('https://still-thicket-39779.herokuapp.com/cars')
        .then(res => res.json())
        .then(data => setCars(data.slice(0,6)))
    })
    return (
        <Box sx={{ flexGrow: 1 ,pb:5}}>
            <Container>
                <Typography sx={{ fontWeight: 500, color: '#112240' ,textAlign:'center', pt:5}} variant="h3" component="div" className='text'>
                    Featured Card Deals
                </Typography>
                <Typography sx={{ fontWeight: 500, color: '#09a0f7' ,textAlign:'center'}} variant="h4" component="div" className='text'>
                    Best Cars
                </Typography> <hr style={{textAlign:'center', width:'25%', marginBottom:'30px'}}/>
                
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
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