import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import './SingleCar.css';
const SingleCar = (props) => {
    const {_id, name, price, image,mpg,transmission } = props.car;
    return (
        <Grid item xs={4} sm={4} md={4}  >
            <Card variant="outlined" sx={{ borderRadius:0, height:440}} data-aos="zoom-in" data-aos-duration="1500" style={{border:"none"}}>
                <CardMedia
                    component="img"
                    sx={{height:250}}
                    image={image}
                    alt="green iguana"
                />
                <CardContent className="card-content" sx={{px:0}}>
                {/* <Typography variant="subtitle" sx={{fontWeight:500}}>
                        {mpg} {transmission}
                    </Typography> */}
                    <Typography  variant="h5" component="div" sx={{fontWeight:500,color:'black'}}>
                        {name}
                    </Typography>
                   {/*  <Typography variant="h6" sx={{fontWeight:600,color:'black'}}>
                        ${price}
                    </Typography> */}
                    <Link to={`/carDetails/${_id}`}  style={{textDecoration:'none'}}>
                <Button  
                    sx={{textAlign:'center',
                    backgroundColor:'transparent',
                    my:1, color:'#dd3d53',
                    boxShadow:'0',
                    border:'1px solid #dd3d53',
                    px:2, py:1,
                    borderRadius:0}} 
                   >Buy NOw</Button>
                </Link>
                </CardContent>
                
            </Card>
        </Grid>
    );
    }


export default SingleCar;