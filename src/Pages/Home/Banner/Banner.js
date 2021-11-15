import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'
import tesla from '../../images/model-3.png'

const bannerBg = {
    background: `url(${tesla})`,
    backgroundRepeat:"no-repeat",
    backgroundPosition: 'center',
    backgroundSize:'cover' ,
    width:'100%',
        
}
const verticalCenter ={
    display: 'flex',
    textAlign:'left',
    alignItems:'center',
    minHeight:800
    
   
}

const Banner = () => {
    return (
        <Box style={bannerBg}  sm={12}>
           
                <Grid style={{...verticalCenter}}  xs={6} md={12}>

                <Box sx={{mx:'auto'}}>
                <Typography variant="h2" sx={{fontWeight:'bold', color:'white', fontSize:'4rem'}} className='text'>
                    We Have <br /> Your Dream Car
                </Typography>
                
                <Link to="/appoinment" style={{textDecoration:'none'}}>
                <Button variant="contained" sx={{px:3, fontWeight:600}} style={{backgroundColor:'#10cfe5'}} >See More</Button>
                </Link>
                </Box>
                </Grid>
            
        </Box>
    );
};

export default Banner;