import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

const SingleCar = (props) => {
    const {_id, name, price, image,mpg,transmission } = props.car;
    return (
        <Grid item xs={4} sm={4} md={4} data-aos="fade-right" data-aos-duration="1500" >
            <Card sx={{ borderRadius: 2, height:430  }}>
                <CardMedia
                    component="img"
                    sx={{height:200}}
                    image={image}
                    alt="green iguana"
                />
                <CardContent>
                <Typography variant="subtitle" sx={{fontWeight:500}}>
                        {mpg} {transmission}
                    </Typography>
                    <Typography  variant="h5" component="div" sx={{fontWeight:600,color:'#1976d2',py:1}}>
                        {name}
                    </Typography>
                    <Typography variant="h6" sx={{fontWeight:600,color:'gray'}}>
                        ${price}
                    </Typography>
                </CardContent>
                <CardActions >
                <Link to={`/carDetails/${_id}`}  style={{textDecoration:'none'}}>
                <Button variant='contained' sx={{textAlign:'center', mb:2, backgroundColor:'salmon'}} >Buy NOw</Button>
                </Link>
                
                
            </CardActions>
            </Card>
        </Grid>
    );
    }


export default SingleCar;