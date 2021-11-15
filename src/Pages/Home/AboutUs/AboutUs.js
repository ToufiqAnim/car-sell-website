import { Card, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import about from '../../images/about.png'
const AboutUs = () => {
    return (
        <div>
            <img src={about} alt="" style={{marginTop:50,width:'100%'}} />
            <Container sx={{my:8}}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6} sx={{}}>
                        <Card sx={{p:4,boxShadow:0}}>
                        <img src="https://www.cnet.com/a/img/3VRsQNQpQULculDN143YEcQAA0I=/2021/07/23/ed905c92-d37f-4f10-9c7a-c6e1a8968e1a/bugatti-divo-40-1-ogi.jpg" alt="" srcset="" style={{width:'100%'}}/>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Card sx={{p:4,boxShadow:0}}>
                          
                      <Typography variant='h5' sx={{fontWeight:600}}>Welcome To The <span style={{color:'salmon',fontSize:25}}>Highline Motors</span></Typography><hr />
                        <Typography sx={{color:'gray'}} >
                        Before we get ahead of ourselves, we want to welcome you to Loeber Motors. While nothing can replace thing on-the-lot experience.
                        </Typography>
                        <Typography sx={{color:'gray'}}>
                        We appreciate you taking the time today to visit our web site. Our goal is to give you an interactive tour of our new and used inventory, as well as allow you to conveniently get a quote, schedule a service appointment, or apply for financing. The search for a luxury car is filled with high expectations. Undoubtedly, that has a lot to do with the vehicles you are considering, but at Motors, we think you should also have pretty high expectations for your dealership.
                        </Typography>
                      </Card>
                     
                    </Grid>
                   
                    <Grid xs={12} sm={6} sx={{mt:5}}>
                        <Card sx={{p:4,boxShadow:0}}>
                        <Typography variant='h4' sx={{fontWeight:600, color:'salmon'}}>CORE VALUES</Typography>
                        <hr />
                        <Typography sx={{color:'gray'}}>We go through extensive factory training so that we may provide you with the knowledge you need to make an educated decision in choosing the vehicle that is right for your lifestyle.</Typography>
                        <Typography sx={{color:'gray'}}>
                            <ul>
                                <li>Stress-free finance department.</li>
                                <li>Robust selection of popular vehicles.</li>
                                <li>350 offers on site, trusted by a community.</li>
                                <li>Maintain your car to stay safe on the road</li>
                            <li>We know how to handle a wide range of car services.</li>
                            </ul>
                        </Typography>
                        </Card>
                    </Grid>

                    <Grid xs={12} sm={6} sx={{mt:5}}>
                        <Card sx={{p:4,boxShadow:0}}>
                        <img src="https://motors.stylemixthemes.com/wp-content/uploads/2015/10/slide-2-1597x597.jpg" alt="" srcset="" style={{width:"100%",height:300}}/>
                        </Card>
                    </Grid>
                </Grid>
               </Box>
            </Container>
        </div>
    );
};

export default AboutUs;