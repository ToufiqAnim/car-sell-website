import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import Rating from 'react-rating';
import Typography from '@mui/material/Typography';
import {  CardActions, Rating } from '@mui/material';

const Review = (props) => {
    const {name,reviewDescription,ratings} = props.review;
    return (
        <Grid item xs={4} sm={4} md={4} >
        <Card sx={{boxShadow:2, height:350 }}>
            
            <CardContent sx={{textAlign:'center'}}>
                <Typography  variant="h5" component="div" sx={{fontWeight:600,p:2}}>
                    {name}
                </Typography>
                <Typography variant="subtitle" sx={{p:2}}>
                    {reviewDescription}
                </Typography> <br />
                <Typography sx={{mt:2}}>
                    <Rating
                    name="read-only"
                    value={ratings}
                    readOnly
                    >     
                    </Rating>
                </Typography>
            </CardContent>
            <CardActions >

        </CardActions>
        </Card>
    </Grid>
    );
};

export default Review;