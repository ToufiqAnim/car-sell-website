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
        <Grid item xs={4} sm={4} md={4}  >
            <Card variant="outlined" sx={{ borderRadius:0, height:440}} data-aos="zoom-in" data-aos-duration="1500" style={{border:"1px solid gray"}}>
                <CardMedia
                    component="img"
                    sx={{height:250}}
                    image={image}
                    alt="green iguana"
                />
                <CardContent>
                <Typography variant="subtitle" sx={{fontWeight:500}}>
                        {mpg} {transmission}
                    </Typography>
                    <Typography  variant="h5" component="div" sx={{fontWeight:600,color:'#09a0f7'}}>
                        {name}
                    </Typography>
                    <Typography variant="h6" sx={{fontWeight:600,color:'black'}}>
                        ${price}
                    </Typography>
                    <Link to={`/carDetails/${_id}`}  style={{textDecoration:'none'}}>
                <Button variant='contained' sx={{textAlign:'center',  backgroundColor:'#09a0f7',my:1}} >Buy NOw</Button>
                </Link>
                </CardContent>
                
            </Card>
        </Grid>
    );
    }


export default SingleCar;