import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import { FaRoad } from "react-icons/fa";
import { GiGearStickPattern } from "react-icons/gi";
import './SingleCar.css';
import { Box } from '@mui/system';

const SingleCar = (props) => {
    const {_id, name, price, image,mpg,transmission } = props.car;
   
    return (
        <Grid item xs={4} sm={4} md={4}  className='single-car' >
            <Card variant="outlined" sx={{ borderRadius:0, height:"100%"}} data-aos="zoom-in" data-aos-duration="1500" style={{border:"none"}}>
                <CardMedia
                    component="img"
                    sx={{height:200, width:"100%"}}
                    image={image}
                    alt="green iguana"
                />
                <CardContent className="card-content" sx={{px:2,background:'#303c3f'}}>
                {/*  */}
                    <Grid spacing={2} style={{display:'flex', paddingBottom:30, borderBottom:"1px solid gray", marginBottom:5}}>
                    
                     
                    <Grid item xs={9}>
                    <Link to={`/carDetails/${_id}`}  style={{textDecoration:'none'}}>  
                        <Typography  variant="h5" component="div" sx={{fontWeight:700,color:'white'}}>
                        {name}
                    </Typography>
                     </Link>   
                    </Grid>
                    <Grid item xs={3} className="sale">
                        
                        <Typography sx={{fontWeight:700,color:'white', background:'#6c98e0', padding:'3px 15px'}} style={{textAlignLast:'center', fontSize:14}}>
                        Special
                    </Typography>
                        
                    </Grid>
                    <Grid item xs={3} >
                        
                        <Typography   variant="h6" sx={{fontWeight:500,color:'white', background:'#dd3d53', p:1}} style={{textAlignLast:'center'}}>
                        ${price}
                    </Typography>
                        
                    </Grid>
                    </Grid>
                    <Box className="card-btn" >
                    <Typography sx={{fontWeight:500, pt:0, color:'white', display:'flex',  fontSize:14}}>
                      <span style={{display:'flex', alignItems:'center'}}> <FaRoad style={{paddingRight:5}}/> {mpg} </span><span style={{marginLeft:"35%", display:'flex', alignItems:'center'}}> <GiGearStickPattern style={{fontWeight:900, marginRight:5}}/>{transmission}</span>
                    </Typography> 
                     
                     {/* <Link to={`/carDetails/${_id}`}  style={{textDecoration:'none'}}>
                <Button  
                    sx={{textAlign:'center',
                    fontWeight:'bold',
                    backgroundColor:'transparent',
                    my:1, color:'white',
                    boxShadow:'0',
                    border:'1px solid #dd3d53',
                    px:2, py:1,
                    borderRadius:0}} 
                   >Buy NOw</Button>
                </Link>  */}
                    </Box>
                </CardContent>
                
            </Card>
        </Grid>
    );
    }


export default SingleCar;