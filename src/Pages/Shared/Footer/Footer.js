import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import React from 'react';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <footer>
           <Box sx={{backgroundColor:'#232628', color:'white'}} px={{xs:3, sm:10}} py={{xs:3, sm:3}}>
               <Container maxWidth="lg" sx={{mt:3}}>
                   <Grid container spacing={5}>
                       <Grid item xs={12} sm={2}>
                           <Typography sx={{fontSize:'1.2em', mb:2}}>Contact</Typography>
                           
                               
                           <Typography sx={{mb:1}}>
                               <Link to='/login' style={{color:'white', textDecoration:'none'}}>Login</Link>
                           </Typography>
                           <Typography sx={{mb:1}}>
                               <Link to='/register' style={{color:'white', textDecoration:'none'}}>Register</Link>
                           </Typography>
                           <Typography sx={{mb:1}}>
                               <Link to='/dashboard' style={{color:'white', textDecoration:'none'}}>Dashboard</Link>
                           </Typography>
                       </Grid>
                       <Grid item xs={12} sm={2}>
                           <Typography sx={{fontSize:'1.2em', mb:2}}>HomePage</Typography>
                           <Typography sx={{mb:1}}>
                               <Link to='/login' style={{color:'white', textDecoration:'none'}}>Home</Link>
                           </Typography>
                           <Typography sx={{mb:1}}>
                               <Link to='/register' style={{color:'white', textDecoration:'none'}}>Inventory</Link>
                           </Typography>
                           <Typography sx={{mb:1}}>
                               <Link to='/bashboard' style={{color:'white', textDecoration:'none'}}>Cars</Link>
                           </Typography>
                       </Grid>
                     
                       <Grid item xs={12} sm={4}>
                           <Typography sx={{fontSize:'1.2em', mb:2}}>Services</Typography>
                         
                           <TextField
                           sx={{backgroundColor:'#eeef', borderRadius: 1, mb:2, width:350}} 
                           id="outlined-size-small" 
                           label="Email" 
                           size="small" />
                           
                        
                           <TextareaAutosize
                           
                            aria-label="minimum height"
                            minRows={3}
                            placeholder="type here"
                            style={{ width: 310,borderRadius:5 }}
                            />
                          

                           <Button variant="outlined" sx={{color:"#eeef", mt:1}}>Send</Button>
                       </Grid>
                       <Grid item xs={12} sm={4} >
                         <Typography sx={{mb:4}}>SOCIAL NETWORK</Typography>
                         <Box  >
                            <FacebookIcon sx={{background:'#3b3d3f',padding:2,mr:1}}/>
                            <GoogleIcon sx={{background:'#3b3d3f',padding:2,mr:1}}/>
                            <TwitterIcon sx={{background:'#3b3d3f',padding:2,mr:1}}/>
                            <InstagramIcon sx={{background:'#3b3d3f',padding:2}}/>
                         </Box>
                       </Grid>
                   </Grid>
              
               </Container>
               </Box> 
        </footer>
    );
};

export default Footer;