import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleCar from '../SingleCar/SingleCar';
import './AllCar.css'

const AllCars = () => {
    const [cars, setCars] = useState([]);
    useEffect(()=>{
        fetch('https://still-thicket-39779.herokuapp.com/cars')
        .then(res => res.json())
        .then(data => setCars(data.slice(0,6)))
    })
    return (
        <Box sx={{ flexGrow: 1 ,pb:5}} className='all-cars'>
            <Container>
                {/* <Typography sx={{ fontWeight: 500, color: '#112240' ,textAlign:'center', pt:5}} variant="h3" component="div" className='text'>
                    Featured Card Deals
                </Typography> */}
                <Typography sx={{ fontWeight:'bold' ,textAlign:'center',textTransform: "uppercase",pt:5, pb:4}} variant="h4" component="div" className='text'>
                    Recent <span style={{color:'#dd3d53'}}>Cars</span> 
                </Typography> 
                
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                    {
                        cars.map(car => <SingleCar
                            key={car.key}
                            car={car}
                        ></SingleCar>)
                    }
                </Grid>

                {/* <Link  style={{textAlign:'center', textDecoration:'none'}} to="/inventory">
                <Button  sx={{my:2,px:3,fontWeight:600, background:'#dd3d53', color:'white', border:'none', py:1}}>See More</Button>
                 </Link> */}
            </Container>
            
        </Box>
    )
};

export default AllCars;