import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import Header from '../Shared/Header/Header';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { FaRoad } from "react-icons/fa";
import { GiGearStickPattern } from "react-icons/gi";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CarBuy from '../CarBuy/CarBuy';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer'

const CarDetails = () => {
    
    const {carId} = useParams();
    const [carDetail, setCarDetail] = useState([]);
    const [carBooking, setCarBooking] = React.useState(false);
    const handleCarBookingOpen = () => setCarBooking(true);
    const handleCarBookingClose = () => setCarBooking(false);

    useEffect(() =>{
        fetch(`https://still-thicket-39779.herokuapp.com/cars/${carId}`)
        .then(res => res.json())
        .then(data => setCarDetail(data))
    }, [])
    
    return (
        <div>
            <Header></Header>
            <Container sx={{pt:20}} maxWidth='xl'>
            <Grid container spacing={4}>
            <Grid item xs={12} md={12}>
            <Grid sx={{ maxWidth: "100%" , display:'flex', boxShadow:0, pb:10}} container spacing={4}>
               <Grid item xs={12} md={8}>
               <CardMedia
                    component="img"
                    height= "550px"
                    image={carDetail.image}
                />
                 <Typography variant="h6" color="gray" sx={{pt:5}}>
                    <span style={{fontWeight:600, fontSize:20}}>Details:</span> <br />
                    {carDetail.about}
                    </Typography>
               </Grid>

              <Grid item xs={12} md={4}>
              <CardContent >
                    <Box sx={{borderBottom:'1px solid #b4b5b5'}}>
                    <Typography gutterBottom variant="h4" component="div" sx={{fontWeight:500}}>
                    {carDetail.name} 
                    </Typography>
                    <Typography sx={{fontWeight:500, pt:0,  display:'flex',pb:2, fontSize:16}}>
                      <span style={{display:'flex', alignItems:'center'}}> <FaRoad /> {carDetail.mpg} </span><span style={{marginLeft:"5%", display:'flex', alignItems:'center'}}> <GiGearStickPattern style={{fontWeight:900}}/>{carDetail.transmission}</span>
                    </Typography> 
                    </Box>
                   
                    <Typography variant="h4" sx={{color:'#dd3d53', fontWeight:'600', py:2}}>
                    ${carDetail.price}
                    </Typography>
                    <Button  onClick={handleCarBookingOpen} variant="contained" sx={{backgroundColor:'#10cfe5', color:'white'}} >BUY NOW</Button>
                </CardContent>
              </Grid>
             
                </Grid>
                </Grid>
               </Grid>
                 
            
                  <CarBuy
                    carDetail={carDetail} 
                    carBooking = {carBooking}
                    handleCarBookingClose = {handleCarBookingClose}
                    >
                  </CarBuy>

            
              
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default CarDetails;