import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Review from '../Home/Review/Review';



const Reviews = () => {
    const [review, setReview] = useState([]);
    useEffect(()=>{
        fetch('https://still-thicket-39779.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setReview(data))
    })
    return (
        <Box sx={{ flexGrow: 1}}>
            <Container>
                <Typography sx={{ fontWeight: 600, color: '#10cfe5' ,textAlign:'center', py:5}} variant="h4" component="div">
                    REVIEWS
                </Typography>
                
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        review.map(review => <Review
                            key={review.rating}
                            review={review}
                        ></Review>)
                    }
                </Grid>

            </Container>
            
        </Box>
    );
};

export default Reviews;