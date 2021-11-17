import React, { useState } from 'react';
import Header from '../../../Shared/Header/Header';
import { Button, Container, Grid, TextField, Typography, CircularProgress, Alert, InputAdornment  } from '@mui/material';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import login from "../../../images/login1.jpg"
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import GoogleIcon from '@mui/icons-material/Google';
import loginBg from "../../../images/login.jpg"
import useAuth from "../../../../Hooks/useAuth"

const bgLogin = {
    background: `url(${loginBg })`,
    height:600
};

const LogIn = () => {

     const [userLogin, setUserLogin]= useState({});
     const {user, loginUser, signInWithGoogle, isLoading, authError} = useAuth()
    
    const location = useLocation();
    const history = useHistory();
    
    const handleOnChange = e =>{
         const field = e.target.name;
         const value = e.target.value;
         const newLoginData = {...userLogin};
         console.log(newLoginData)
         newLoginData[field] = value;

         setUserLogin(newLoginData)
    }
    const handleLoginSubmit = e =>{
        loginUser(userLogin.email, userLogin.password, location, history);
        e.preventDefault()
    }

    const handleGoogleSignIn = () =>{
         signInWithGoogle(location, history);
    }
    return (
        <>
         <Header></Header>   
         <Container sx={{mt:5}}> 
         <Typography variant="h4" sx={{textAlign:'center', fontWeight:'600',color:'#1976D2'}}>Login</Typography>

        <Grid container>
            <Grid style={bgLogin} item sx={{ mt: 8, boxShadow:2}} xs={12} md={6} data-aos="fade-right" data-aos-duration="1500">
                
                <form onSubmit={handleLoginSubmit} style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',marginTop:'25%'}}>
                   
                    <TextField
                    
                        sx={{ width: '75%', m: 2 }}
                        id="standard-basic"
                        label="Your Email"
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                < EmailIcon sx={{color:'black'}}/>
                              </InputAdornment>
                            ),
                           
                          }}
                        name="email"
                        onBlur={handleOnChange}
                        variant="standard"
                         />
                    <TextField
                        sx={{ width: '75%', m: 2 }}
                        id="standard-basic"
                        label="Your Password"
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                < LockIcon sx={{color:'black'}}/>
                              </InputAdornment>
                            ),
                          }}
                        type="password"
                        name="password"
                        onBlur={handleOnChange}
                        variant="standard" />

                    <Button sx={{ width: '75%', m: 2, py:1,fontWeight:600 }} type="submit" variant="contained">Login</Button>
                    <NavLink
                        style={{ textDecoration: 'none' }}
                        to="/register">
                        <Button variant="text" sx={{color:'#1976D2', fontWeight:600}}>New User? Please Register</Button>
                        <hr />
                    </NavLink>
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">Your Login is Successfull</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                    <Button sx={{my:2, py:1 ,fontWeight:600}} style={{textAlign:'center'}} onClick={handleGoogleSignIn} variant='contained'>Sign In With Google<GoogleIcon sx={{pl:1}}/></Button>
                </form>
               
                
            </Grid>
            <Grid sx={{mt: 8}} item xs={12} md={6} data-aos="fade-left" data-aos-duration="1500">
                <img style={{ width: '100%',height:600}} src={login} alt="" />
            </Grid>
        </Grid>
    </Container>
        </>
    );
};

export default LogIn;