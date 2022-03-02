import { Card, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import about from '../../images/about.png'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import SpeedIcon from '@mui/icons-material/Speed';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
const AboutUs = () => {
    return (
        <>
        <Container sx={{my:8}} >
            
            <Typography variant='h4' sx={{textAlign:'center', py:5, fontWeight:'bold', color:'#dd3d53'}}>WHY CHOOSE US</Typography>
        <Grid container spacing={6}  sx={{textAlign:'center'}}>
        <Grid item xs={4}>
        <ThumbUpOffAltIcon style={{fontSize:"3rem", color:'#dd3d53'}}/>
            <Typography variant='h6' sx={{textTransform:'uppercase', fontWeight:'bold'}}>Outstanding Services</Typography>
            <Typography variant='subtitle1' >Lorem ipsum dolor sit amet, adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas lobortis vestibulum ipsum vitae pellentesque</Typography>
        </Grid>
        <Grid item xs={4}>
        <SupportAgentIcon style={{fontSize:"3rem", color:'#dd3d53'}}/>
            <Typography variant='h6' sx={{textTransform:'uppercase', fontWeight:'bold'}}>24 Hours Support</Typography>
            <Typography variant='subtitle1'>Lorem ipsum dolor sit amet, adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas lobortis vestibulum ipsum vitae pellentesque</Typography>
        </Grid>
        <Grid item xs={4}>
            <MapOutlinedIcon style={{fontSize:"3rem", color:'#dd3d53'}}/>
            <Typography variant='h6' sx={{textTransform:'uppercase', fontWeight:'bold'}}>GPS on Every Vehicle!</Typography>
            <Typography variant='subtitle1'>Lorem ipsum dolor sit amet, adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas lobortis vestibulum ipsum vitae pellentesque</Typography>
        </Grid>
        
        <Grid item xs={4}>
            <SpeedIcon style={{fontSize:"3rem", color:'#dd3d53'}}/>
            <Typography variant='h6' sx={{fontWeight:'bold'}}>WIDE RANGE OF BRANDS</Typography>
            <Typography variant='subtitle1'>With a robust selection of popular vehicles on hand, as well as leading vehicles from BMW and Ford.</Typography>
        </Grid>
        <Grid item xs={4}>
            <ForumOutlinedIcon style={{fontSize:"3rem", color:'#dd3d53'}}/>
            <Typography variant='h6' sx={{fontWeight:'bold'}}>TRUSTED BY THOUSANDS</Typography>
            <Typography variant='subtitle1'>10 new offers every day. 350 offers on site, trusted by a community of thousands of users.</Typography>
        </Grid>
        <Grid item xs={4}>
            <InsertDriveFileOutlinedIcon style={{fontSize:"3rem", color:'#dd3d53'}}/>
            <Typography variant='h6' sx={{fontWeight:'bold'}}>CAR SERVICE & MAINTENANCE</Typography>
            <Typography variant='subtitle1'>Our service department maintain your car to stay safe on the road for many more years.</Typography>
        </Grid>
        
        </Grid> 
        </Container>
        </>
    );
};

export default AboutUs;