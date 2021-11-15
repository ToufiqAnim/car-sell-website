import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import Header from '../Shared/Header/Header';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CarBuy from '../CarBuy/CarBuy';


const CarDetails = () => {
    
    const {carId} = useParams();
    const [carDetail, setCarDetail] = useState([]);

    useEffect(() =>{
        fetch(`https://still-thicket-39779.herokuapp.com/cars/${carId}`)
        .then(res => res.json())
        .then(data => setCarDetail(data))
    }, [])
    
    return (
        <div>
            <Header></Header>
            <Container sx={{mt:10}}>
            <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
            <Card sx={{ maxWidth: 600 }}>
                <CardMedia
                    component="img"
                    height= "300"
                    image={carDetail.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:600}}>
                    {carDetail.name} <span style={{fontSize:14}}>{carDetail.mpg}</span>
                    <hr />
                    </Typography>
                    <Typography variant="body2" color="gray">
                    <span style={{fontWeight:600, fontSize:20}}>Details:</span> <br />
                    {carDetail.about}
                    </Typography>
                    <Typography variant="h5" sx={{color:'#197', fontWeight:'600', py:1}}>
                    ${carDetail.price}
                    </Typography>
                </CardContent>
                
                </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <CarBuy
                    carDetail={carDetail}></CarBuy>
                </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default CarDetails;