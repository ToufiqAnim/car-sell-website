import { Button, Container, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import TextareaAutosize from '@mui/material/TextareaAutosize';

import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer>
           <Box sx={{backgroundColor:'#031533', color:'white'}} px={{xs:3, sm:10}} py={{xs:5, sm:5}}>
               <Container maxWidth="lg" sx={{mt:3}}>
                   <Grid container spacing={5}>
                       <Grid item xs={12} sm={4}>
                           <Box sx={{fontSize:'1.2em', mb:2}}>Contact</Box>
                           
                               
                           <Box sx={{mb:1}}>
                               <Link to='/login' style={{color:'white', textDecoration:'none'}}>Login</Link>
                           </Box>
                           <Box sx={{mb:1}}>
                               <Link to='/register' style={{color:'white', textDecoration:'none'}}>Register</Link>
                           </Box>
                           <Box sx={{mb:1}}>
                               <Link to='/dashboard' style={{color:'white', textDecoration:'none'}}>Dashboard</Link>
                           </Box>
                       </Grid>
                       <Grid item xs={12} sm={4}>
                           <Box sx={{fontSize:'1.2em', mb:2}}>HomePage</Box>
                           <Box sx={{mb:1}}>
                               <Link to='/login' style={{color:'white', textDecoration:'none'}}>Home</Link>
                           </Box>
                           <Box sx={{mb:1}}>
                               <Link to='/register' style={{color:'white', textDecoration:'none'}}>Inventory</Link>
                           </Box>
                           <Box sx={{mb:1}}>
                               <Link to='/bashboard' style={{color:'white', textDecoration:'none'}}>Cars</Link>
                           </Box>
                       </Grid>
                       <Grid item xs={12} sm={4}>
                           <Box sx={{fontSize:'1.2em', mb:2}}>Services</Box>
                           <Box>
                           <TextField
                           sx={{backgroundColor:'#eeef', borderRadius: 1, mb:2}} 
                           id="outlined-size-small" 
                           label="Email" 
                           size="small" />
                           
                           </Box>
                           <Box>
                               
                           </Box>
                           <Box>
                           <TextareaAutosize
                           
                            aria-label="minimum height"
                            minRows={5}
                            placeholder="type here"
                            style={{ width: "100%",borderRadius:5 }}
                            />
                           </Box>

                           <Button variant="outlined" sx={{color:"#eeef", mt:1}}>Send</Button>
                       </Grid>
                   </Grid>
               </Container>
               </Box> 
        </footer>
    );
};

export default Footer;